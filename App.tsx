
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
import PlatformLanding from './pages/PlatformLanding';
import Sidebar from './components/Sidebar';
import NotificationToast from './components/NotificationToast';
import CartDrawer from './components/CartDrawer';
import { UserRole, Product } from './types';
import { Bell, Search, User as UserIcon, LogIn, Package, ShoppingCart } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>('GUEST');
  const [activePage, setActivePage] = useState('landing');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notifications, setNotifications] = useState<{ id: number; message: string; type: any }[]>([]);
  
  // الحالة الخاصة بالمتجر الجديد
  const [storeData, setStoreData] = useState<any>(null);
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  const [isNewStore, setIsNewStore] = useState(false);

  const addNotification = (message: string, type: string = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleOwnerLogin = () => {
    // محاكاة تسجيل دخول لمتجر قديم ببيانات تجريبية
    setRole('OWNER');
    setActivePage('dashboard');
    setIsNewStore(false);
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

  const handleRegistrationComplete = (newStoreInfo: any) => {
    setIsRegistering(false);
    setStoreData(newStoreInfo);
    setUserProducts([]); // متجر جديد يبدأ بمنتجات فارغة
    setIsNewStore(true);
    setRole('OWNER');
    setActivePage('dashboard');
    addNotification(`مبروك! متجر "${newStoreInfo.storeName}" جاهز الآن.`, 'success');
  };

  useEffect(() => {
    const handleSetPage = (e: any) => {
      setActivePage(e.detail);
      if (e.detail === 'checkout') setIsCartOpen(false);
    };
    window.addEventListener('set-page', handleSetPage);
    return () => window.removeEventListener('set-page', handleSetPage);
  }, []);

  const RoleSwitcher = () => (
    <div className="fixed bottom-4 left-4 z-[300] flex flex-col gap-2 scale-75 md:scale-100 origin-bottom-left">
      <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-2">
        <p className="text-[10px] font-black text-gray-400 text-center mb-1">تغيير الواجهة (تجريبي)</p>
        <button onClick={() => { setRole('GUEST'); setActivePage('landing'); }} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-gray-50 hover:bg-gray-100">المنصة الرئيسية</button>
        <button onClick={() => { setRole('GUEST'); setActivePage('home'); }} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-gray-50 hover:bg-gray-100">واجهة المتجر</button>
        <button onClick={handleOwnerLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-indigo-50 text-indigo-600">لوحة التاجر</button>
        <button onClick={handleCustomerLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-green-50 text-green-600">لوحة العميل</button>
        <button onClick={handleAdminLogin} className="px-3 py-1.5 text-[10px] font-black rounded-lg bg-amber-50 text-amber-600">لوحة الإدارة</button>
      </div>
    </div>
  );

  // PLATFORM LANDING
  if (role === 'GUEST' && activePage === 'landing') {
    return (
      <>
        <PlatformLanding 
          onStartStore={() => setIsRegistering(true)} 
          onLogin={() => setActivePage('owner-login')}
          onBrowseDemo={() => setActivePage('home')}
        />
        {isRegistering && <div className="fixed inset-0 z-[400]"><StoreRegistration onComplete={handleRegistrationComplete} /></div>}
        <RoleSwitcher />
      </>
    );
  }

  // GUEST STORE VIEW
  if (role === 'GUEST') {
    if (activePage === 'home') return (
      <>
        <CustomerStorefront onLoginClick={() => setActivePage('customer-login')} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onCheckout={() => setActivePage('checkout')} />
        <RoleSwitcher />
      </>
    );
    if (activePage === 'customer-login') return <CustomerLogin onLogin={handleCustomerLogin} onBackToStore={() => setActivePage('home')} />;
    if (activePage === 'checkout') return <CheckoutPage onSuccess={handleCustomerLogin} onCancel={() => setActivePage('home')} />;
    if (activePage === 'product-detail') return <ProductDetail onBack={() => setActivePage('home')} onAddToCart={() => setIsCartOpen(true)} />;
    if (activePage === 'owner-login') return <OwnerLogin onLogin={handleOwnerLogin} onRegister={() => setIsRegistering(true)} />;
  }

  // DASHBOARD LAYOUT
  return (
    <div className="flex bg-gray-50 min-h-screen font-cairo overflow-hidden" dir="rtl">
      {role !== 'CUSTOMER' && <Sidebar role={role as 'OWNER' | 'ADMIN'} activePage={activePage} onNavigate={setActivePage} />}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
             {role === 'CUSTOMER' && (
                <div className="flex items-center gap-3 ml-8 cursor-pointer" onClick={() => setActivePage('home')}>
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">D</div>
                  <span className="font-black text-lg">لوحة العميل</span>
                </div>
             )}
             <div className="relative max-w-xs w-full hidden md:block">
                <input type="text" placeholder="البحث..." className="w-full bg-gray-50 border-none rounded-xl py-2 px-4 text-sm pr-10 focus:ring-2 focus:ring-indigo-500 outline-none" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
             </div>
          </div>
          <div className="flex items-center gap-4">
            {role === 'CUSTOMER' && <button onClick={() => setRole('GUEST')} className="text-xs font-bold text-indigo-600 hover:underline">العودة للمتجر</button>}
            <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg relative"><Bell size={20} /></button>
            <div className="h-8 w-px bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-none">
                  {role === 'OWNER' ? (storeData?.ownerName || 'أحمد محمد') : 'مدير النظام'}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">{isNewStore ? 'متجر جديد' : 'نشط الآن'}</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold"><UserIcon size={20} /></div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto w-full pb-20">
            {role === 'OWNER' && (
              <>
                {activePage === 'dashboard' && <StoreDashboard isNewStore={isNewStore} storeName={storeData?.storeName} />}
                {activePage === 'products' && <ProductManagement products={isNewStore ? userProducts : undefined} />}
                {activePage === 'products-edit' && <ProductEditor onBack={() => setActivePage('products')} />}
                {activePage === 'customization' && <StoreCustomization />}
                {activePage === 'orders' && <OrdersManagement isNewStore={isNewStore} />}
                {activePage === 'settings' && <OwnerSettings storeData={storeData} />}
              </>
            )}
            {role === 'ADMIN' && (
              <>
                {activePage === 'admin-dashboard' && <AdminDashboard />}
                {activePage === 'stores-manage' && <AdminStores />}
                {activePage === 'plans' && <AdminPlans />}
              </>
            )}
            {role === 'CUSTOMER' && activePage === 'customer-orders' && <CustomerDashboard />}
          </div>
        </div>
      </main>
      <RoleSwitcher />
      {notifications.map(n => <NotificationToast key={n.id} message={n.message} type={n.type} onClose={() => removeNotification(n.id)} />)}
    </div>
  );
};

export default App;
