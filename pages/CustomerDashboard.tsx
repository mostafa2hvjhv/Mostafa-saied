
import React from 'react';
import { 
  ShoppingBag, 
  Download, 
  Clock, 
  CreditCard, 
  User, 
  Settings, 
  ChevronLeft,
  Star,
  ShieldCheck,
  Search
} from 'lucide-react';

const CustomerDashboard: React.FC = () => {
  const purchases = [
    { id: '#ORD-9821', name: 'دليل العمل الحر الشامل', date: '12 مارس 2025', price: 150, downloads: 2, status: 'مكتمل', image: 'https://picsum.photos/200/200?random=41' },
    { id: '#ORD-7712', name: 'دورة إتقان بايثون', date: '05 مارس 2025', price: 599, downloads: 'غير محدود', status: 'مكتمل', image: 'https://picsum.photos/200/200?random=42' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">حسابي الشخصي</h1>
          <p className="text-gray-500">أهلاً بك مجدداً، إليك نظرة على مشترياتك</p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-white border rounded-xl flex items-center gap-2 text-sm font-bold text-gray-700">
            <ShieldCheck size={18} className="text-green-600" />
            <span>حساب موثق</span>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-100 flex items-center gap-6">
          <div className="p-4 bg-white/10 rounded-2xl"><ShoppingBag size={24} /></div>
          <div>
            <p className="text-indigo-100 text-xs font-bold mb-1">إجمالي المشتريات</p>
            <h3 className="text-2xl font-black">749 ريال</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-gray-50 text-indigo-600 rounded-2xl"><Download size={24} /></div>
          <div>
            <p className="text-gray-400 text-xs font-bold mb-1">التحميلات المتاحة</p>
            <h3 className="text-2xl font-black text-gray-900">12 ملف</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-gray-50 text-indigo-600 rounded-2xl"><Star size={24} /></div>
          <div>
            <p className="text-gray-400 text-xs font-bold mb-1">التقييمات الممنوحة</p>
            <h3 className="text-2xl font-black text-gray-900">3 تقييمات</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Purchase History */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900">تاريخ الطلبات</h2>
            <div className="relative">
              <input type="text" placeholder="بحث في طلباتي..." className="bg-white border rounded-xl py-2 px-4 pr-10 text-xs outline-none" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            </div>
          </div>

          <div className="space-y-4">
            {purchases.map(order => (
              <div key={order.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all group">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                    <img src={order.image} alt={order.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-2 text-center md:text-right">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{order.id}</span>
                      <span className="text-xs text-gray-400 font-bold">{order.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{order.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-sm font-black text-gray-900">{order.price} ريال</span>
                      <div className="h-4 w-px bg-gray-100"></div>
                      <span className="text-xs font-bold text-gray-500">التحميلات المتبقية: {order.downloads}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                      <Download size={18} />
                      تحميل الآن
                    </button>
                    <button className="px-6 py-3 bg-gray-50 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all">
                      عرض الفاتورة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Profile & Security */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full mx-auto flex items-center justify-center">
                <User size={48} />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full border-4 border-white">
                <Settings size={14} />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900">محمد علي</h3>
              <p className="text-sm text-gray-500 font-medium">m.ali@example.com</p>
            </div>
            <div className="pt-6 border-t space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                <div className="flex items-center gap-3">
                  <CreditCard size={18} className="text-gray-400 group-hover:text-indigo-600" />
                  <span className="text-xs font-bold text-gray-700">طرق الدفع</span>
                </div>
                <ChevronLeft size={16} />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-400 group-hover:text-indigo-600" />
                  <span className="text-xs font-bold text-gray-700">تنبيهات التوفر</span>
                </div>
                <ChevronLeft size={16} />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all group">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-gray-400 group-hover:text-red-600" />
                  <span className="text-xs font-bold text-gray-700">سياسة الخصوصية</span>
                </div>
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl text-white space-y-4">
            <h4 className="font-black">مساعدة؟</h4>
            <p className="text-xs text-indigo-100 font-medium opacity-80">إذا واجهت أي مشكلة في تحميل ملفاتك، فريق الدعم متاح على مدار الساعة.</p>
            <button className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-black text-sm hover:bg-white/20 transition-all">محادثة فورية</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
