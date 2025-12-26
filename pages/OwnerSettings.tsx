
import React, { useState } from 'react';
import { 
  User, 
  Store, 
  CreditCard, 
  Bell, 
  Lock, 
  Globe, 
  Save, 
  Shield,
  Smartphone
} from 'lucide-react';

const OwnerSettings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const navItems = [
    { id: 'profile', label: 'الملف الشخصي', icon: <User size={18} /> },
    { id: 'store', label: 'إعدادات المتجر', icon: <Store size={18} /> },
    { id: 'payments', label: 'بوابات الدفع', icon: <CreditCard size={18} /> },
    { id: 'notifications', label: 'الإشعارات', icon: <Bell size={18} /> },
    { id: 'security', label: 'الأمان', icon: <Shield size={18} /> },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-black text-gray-900">الإعدادات</h1>
        <p className="text-gray-500">تحكم في حسابك، متجرك، وتفضيلات الدفع</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${
                activeSection === item.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 font-bold' 
                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-3 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
          {activeSection === 'profile' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center gap-6 pb-8 border-b">
                <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600">
                  <User size={40} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">صورة الحساب</h3>
                  <p className="text-xs text-gray-500 mb-4">ستظهر هذه الصورة في تواصلك مع العملاء</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">تغيير الصورة</button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-xl text-xs font-bold">حذف</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-widest">الاسم الكامل</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold" defaultValue="أحمد محمد" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-widest">البريد الإلكتروني</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold" defaultValue="owner@digitalstore.com" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-widest">رقم الهاتف</label>
                  <div className="relative">
                    <input className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold pl-10" defaultValue="55667788" />
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-widest">المنطقة الزمنية</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold">
                    <option>(GMT+03:00) Riyadh</option>
                    <option>(GMT+04:00) Dubai</option>
                    <option>(GMT+02:00) Cairo</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'payments' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="p-6 bg-indigo-50 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-2xl text-indigo-600 shadow-sm"><CreditCard size={24} /></div>
                    <div>
                      <h4 className="font-black text-indigo-900">Stripe Integration</h4>
                      <p className="text-xs text-indigo-700">استقبل المدفوعات عبر بطاقات الائتمان مباشرة</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-[10px] font-black uppercase">متصل</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="px-4 py-2 bg-white text-indigo-600 rounded-xl text-xs font-bold border border-indigo-100">إدارة حساب Stripe</button>
                  <button className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-bold">فصل الربط</button>
                </div>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-100 rounded-3xl flex items-center justify-between group hover:border-indigo-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-indigo-600 transition-colors"><CreditCard size={24} /></div>
                  <div>
                    <h4 className="font-black text-gray-900">PayPal Checkout</h4>
                    <p className="text-xs text-gray-500">تفعيل الدفع عبر باي بال</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-50">تفعيل الآن</button>
              </div>

              <div className="pt-6 space-y-4">
                <h4 className="text-sm font-black text-gray-900">العملة الافتراضية للمتجر</h4>
                <div className="flex gap-4">
                  {['SAR', 'AED', 'EGP', 'USD'].map(currency => (
                    <button key={currency} className={`flex-1 py-3 rounded-2xl border-2 font-black transition-all ${currency === 'SAR' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-50 text-gray-400 hover:border-gray-100'}`}>
                      {currency}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-widest">كلمة المرور الحالية</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-600 uppercase tracking-widest">كلمة المرور الجديدة</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-600 uppercase tracking-widest">تأكيد كلمة المرور</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-bold" />
                  </div>
                </div>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-black shadow-lg shadow-indigo-100">تحديث كلمة المرور</button>
              </div>

              <div className="pt-8 border-t space-y-4">
                <h4 className="font-black text-gray-900 flex items-center gap-2">
                  <Smartphone size={18} />
                  المصادقة الثنائية (2FA)
                </h4>
                <p className="text-xs text-gray-500">أضف طبقة أمان إضافية لحسابك عبر تلقي رمز التحقق على هاتفك.</p>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm font-bold text-gray-700">تفعيل عبر الرسائل النصية</span>
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t flex justify-end">
             <button className="flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">
               <Save size={20} />
               <span>حفظ جميع التغييرات</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSettings;
