
import React, { useState, useEffect } from 'react';
import OwnerLogin from './pages/OwnerLogin';
import StoreRegistration from './pages/OwnerRegistration';
import StoreDashboard from './pages/StoreDashboard';
import ProductManagement from './pages/ProductManagement';
import ProductEditor from './pages/ProductEditor';
import StoreCustomization from './pages/StoreCustomization';
import OrdersManagement from './pages/OrdersManagement';
import OwnerSettings from './pages/OwnerSettings';
import AdminDashboard from './pages/AdminDashboard';
import AdminPlans from './pages/AdminPlans';
import AdminStores from './pages/AdminStores';
import CustomerStorefront from './pages/CustomerStorefront';
import CustomerDashboard from './pages/CustomerDashboard';
import CustomerLogin from './pages/CustomerLogin';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './pages/ProductDetail';
import Sidebar from './components/Sidebar';
import NotificationToast from './components/NotificationToast';
import { UserRole } from './types';
import { Bell, Search, User as UserIcon, LogIn, Package } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>('GUEST');
  const [activePage, setActivePage] = useState('home');
  const [isRegistering, setIsRegistering] = useState(false);
  const [notifications, setNotifications] = useState<{ id: number; message: string; type: any }[]>([]);

  const addNotification = (message: string, type: string = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleOwnerLogin = () => {
    setRole('OWNER');
    setActivePage('dashboard');
    addNotification('تم تسجيل دخول التاجر بنجاح', 'success');
  };

  const handleAdminLogin = () => {
    setRole('ADMIN');
    setActivePage('admin-dashboard');
    addNotification('مرحباً بك في لوحة الإدارة الرئيسية', 'info');
  };

  const handleCustomerLogin = () => {
    setRole('CUSTOMER');
    setActivePage('customer-orders');
    addNotification('مرحباً بك مجدداً في حسابك', 'success');
  };

  const handleRegistrationComplete = () => {
    setIsRegistering(false);
    setRole('OWNER');
    setActivePage('dashboard');
    addNotification('تم إنشاء متجرك بنجاح! يمكنك الآن البدء بإضافة المنتجات.', 'success');
  };

  // Global event listener for page switching from child components
  useEffect(() => {
    const handleSetPage = (e: any) => setActivePage(e.detail);
    window.addEventListener('set-page', handleSetPage);
    return () => window.removeEventListener('set-page', handleSetPage);
  }, []);

  // Simulate real-time order notifications for owners
  useEffect(() => {
    if (role === 'OWNER') {
      const interval = setInterval(() => {
        if (Math.random() > 0.8) {
          addNotification('لقد تلقيت طلباً جديداً بقيمة 150 ريال!', 'order');
        }
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [role]);

  // Role Selection Mock (For Prototype Navigation)
  const RoleSwitcher = () => (
    <div className="fixed bottom-4 left-4 z-[100] flex flex-col gap-2 scale-75 md:scale-100 origin-bottom-left">
      <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-2">
        <p className="text-[10px] font-black text-gray-400 text-center mb-1">تغيير الواجهة (تجريبي)</p>
        <button onClick={() => { setRole('GUEST'); setIsRegistering(false); setActivePage('home'); }} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-gray-50 hover:bg-gray-100">واجهة الزوار</button>
        <button onClick={() => { setRole('GUEST'); setIsRegistering(true); }} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-gray-50 hover:bg-gray-100">تسجيل متجر</button>
        <button onClick={handleOwnerLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-indigo-50 text-indigo-600">لوحة التاجر</button>
        <button onClick={handleCustomerLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-green-50 text-green-600">لوحة العميل</button>
        <button onClick={handleAdminLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-amber-50 text-amber-600">لوحة الإدارة</button>
      </div>
    </div>
  );

  // GUEST VIEW (Storefront & Auth)
  if (role === 'GUEST') {
    if (isRegistering) {
      return (
        <>
          <StoreRegistration onComplete={handleRegistrationComplete} />
          <RoleSwitcher />
          {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
        </>
      );
    }
    if (activePage === 'home') {
      return (
        <>
          <CustomerStorefront onLoginClick={() => setActivePage('customer-login')} />
          <RoleSwitcher />
          {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
        </>
      );
    }
    if (activePage === 'customer-login') {
      return (
        <>
          <CustomerLogin onLogin={handleCustomerLogin} onBackToStore={() => setActivePage('home')} />
          <RoleSwitcher />
          {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
        </>
      );
    }
    if (activePage === 'checkout') {
      return (
        <>
          <CheckoutPage onSuccess={handleCustomerLogin} onCancel={() => setActivePage('home')} />
          <RoleSwitcher />
          {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
        </>
      );
    }
    if (activePage === 'product-detail') {
      return (
        <>
          <ProductDetail onBack={() => setActivePage('home')} onAddToCart={() => setActivePage('checkout')} />
          <RoleSwitcher />
          {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
        </>
      );
    }
    return (
      <>
        <OwnerLogin onLogin={handleOwnerLogin} onRegister={() => setIsRegistering(true)} />
        <RoleSwitcher />
        {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
      </>
    );
  }

  // Dashboard Layout for Authenticated Users (Owner / Admin / Customer)
  return (
    <div className="flex bg-gray-50 min-h-screen font-cairo overflow-hidden" dir="rtl">
      {role !== 'CUSTOMER' && (
        <Sidebar role={role as 'OWNER' | 'ADMIN'} activePage={activePage} onNavigate={setActivePage} />
      )}
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
             {role === 'CUSTOMER' && (
                <div className="flex items-center gap-3 ml-8 cursor-pointer" onClick={() => setActivePage('home')}>
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">D</div>
                  <span className="font-black text-lg">حسابي</span>
                </div>
             )}
            <div className="relative max-w-xs w-full hidden md:block">
              <input 
                type="text" 
                placeholder="البحث السريع..." 
                className="w-full bg-gray-50 border-none rounded-xl py-2 px-4 text-sm pr-10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {role === 'CUSTOMER' && (
              <button onClick={() => setRole('GUEST')} className="text-xs font-bold text-indigo-600 hover:underline">العودة للمتجر</button>
            )}
            <div className="relative">
              <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg relative">
                <Bell size={20} />
                {notifications.length > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                )}
              </button>
            </div>
            <div className="h-8 w-px bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-none">
                  {role === 'OWNER' ? 'أحمد محمد' : role === 'ADMIN' ? 'مدير النظام' : 'محمد علي'}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">
                  {role === 'OWNER' ? 'الخطة الاحترافية' : role === 'ADMIN' ? 'المسؤول الرئيسي' : 'عميل مميز'}
                </p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                <UserIcon size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto w-full pb-20">
            {/* OWNER PAGES */}
            {role === 'OWNER' && activePage === 'dashboard' && <StoreDashboard />}
            {role === 'OWNER' && activePage === 'products' && <ProductManagement />}
            {role === 'OWNER' && activePage === 'products-edit' && <ProductEditor onBack={() => setActivePage('products')} />}
            {role === 'OWNER' && activePage === 'customization' && <StoreCustomization />}
            {role === 'OWNER' && activePage === 'orders' && <OrdersManagement />}
            {role === 'OWNER' && activePage === 'settings' && <OwnerSettings />}
            
            {/* ADMIN PAGES */}
            {role === 'ADMIN' && activePage === 'admin-dashboard' && <AdminDashboard />}
            {role === 'ADMIN' && activePage === 'stores-manage' && <AdminStores />}
            {role === 'ADMIN' && activePage === 'plans' && <AdminPlans />}
            
            {/* CUSTOMER PAGES */}
            {role === 'CUSTOMER' && activePage === 'customer-orders' && <CustomerDashboard />}

            {/* Placeholder for unimplemented tabs */}
            {!['dashboard', 'products', 'products-edit', 'customization', 'admin-dashboard', 'customer-orders', 'orders', 'settings', 'stores-manage', 'plans'].includes(activePage) && (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="p-8 bg-indigo-50 rounded-[2.5rem] text-indigo-600 mb-8 animate-pulse">
                  <Package size={64} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">قريباً جداً</h2>
                <p className="text-gray-500 max-w-md text-lg">نحن نعمل بجد حالياً على تطوير صفحة "{activePage}" لتوفير تجربة متكاملة.</p>
                <button 
                  onClick={() => setActivePage(role === 'OWNER' ? 'dashboard' : role === 'ADMIN' ? 'admin-dashboard' : 'customer-orders')} 
                  className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-100"
                >
                  العودة للرئيسية
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <RoleSwitcher />
      {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
    </div>
  );
};

export default App;
