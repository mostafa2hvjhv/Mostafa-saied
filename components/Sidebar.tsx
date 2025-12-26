
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Settings, 
  Palette, 
  Users, 
  HelpCircle, 
  LogOut,
  CreditCard,
  ShieldAlert
} from 'lucide-react';

interface SidebarProps {
  role: 'OWNER' | 'ADMIN';
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activePage, onNavigate }) => {
  const ownerItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: <LayoutDashboard size={20} /> },
    { id: 'products', label: 'المنتجات', icon: <Package size={20} /> },
    { id: 'orders', label: 'الطلبات', icon: <ShoppingCart size={20} /> },
    { id: 'customization', label: 'تخصيص المتجر', icon: <Palette size={20} /> },
    { id: 'settings', label: 'الإعدادات', icon: <Settings size={20} /> },
  ];

  const adminItems = [
    { id: 'admin-dashboard', label: 'نظرة عامة', icon: <LayoutDashboard size={20} /> },
    { id: 'stores-manage', label: 'إدارة المتاجر', icon: <Users size={20} /> },
    { id: 'plans', label: 'خطط الاشتراك', icon: <CreditCard size={20} /> },
    { id: 'reports', label: 'البلاغات', icon: <ShieldAlert size={20} /> },
    { id: 'support', label: 'الدعم الفني', icon: <HelpCircle size={20} /> },
  ];

  const items = role === 'OWNER' ? ownerItems : adminItems;

  return (
    <aside className="w-64 bg-white border-l h-screen flex flex-col sticky top-0 z-30">
      <div className="p-8 border-b flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-100">D</div>
        <div className="flex flex-col">
          <span className="font-black text-lg text-gray-900 leading-none">ديجيتال</span>
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Digital Store</span>
        </div>
      </div>
      
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
              activePage === item.id 
              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 font-bold translate-x-1' 
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className={activePage === item.id ? 'text-white' : 'text-gray-400'}>
              {item.icon}
            </span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t mt-auto">
        <div className="bg-gray-50 p-4 rounded-2xl mb-4">
          <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">الدعم المباشر</p>
          <button className="w-full flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-indigo-600 transition-colors">
            <HelpCircle size={14} />
            <span>هل تحتاج مساعدة؟</span>
          </button>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3.5 text-red-500 hover:bg-red-50 rounded-2xl transition-all group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
