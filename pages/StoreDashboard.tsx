
import React from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  DownloadCloud, 
  Users, 
  PlusCircle, 
  ArrowUpRight,
  MoreVertical,
  Activity
} from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'الأحد', sales: 4000 },
  { name: 'الاثنين', sales: 3000 },
  { name: 'الثلاثاء', sales: 5000 },
  { name: 'الأربعاء', sales: 2780 },
  { name: 'الخميس', sales: 1890 },
  { name: 'الجمعة', sales: 2390 },
  { name: 'السبت', sales: 3490 },
];

const recentOrders = [
  { id: '#4521', customer: 'أحمد محمود', email: 'ahmed@test.com', amount: 250, status: 'COMPLETED' },
  { id: '#4522', customer: 'سارة خالد', email: 'sara@test.com', amount: 120, status: 'PENDING' },
  { id: '#4523', customer: 'محمد علي', email: 'm.ali@test.com', amount: 450, status: 'COMPLETED' },
  { id: '#4524', customer: 'ليلى يوسف', email: 'leila@test.com', amount: 85, status: 'CANCELLED' },
];

const StoreDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">نظرة عامة على المتجر</h1>
          <p className="text-gray-500">أهلاً بك، إليك أداء متجرك لهذا الأسبوع</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <span>تحميل التقرير</span>
            <DownloadCloud size={18} />
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2">
            <PlusCircle size={18} />
            <span>إضافة منتج جديد</span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="إجمالي الأرباح" value="45,280 ريال" change="12.5%" isPositive={true} icon={<TrendingUp size={24} />} />
        <MetricCard title="إجمالي الطلبات" value="1,247" change="8.2%" isPositive={true} icon={<ShoppingBag size={24} />} />
        <MetricCard title="إجمالي التحميلات" value="3,892" change="5.1%" isPositive={true} icon={<DownloadCloud size={24} />} />
        <MetricCard title="العملاء الجدد" value="892" change="2.3%" isPositive={false} icon={<Users size={24} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-gray-900">مخطط الأرباح</h3>
            <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-1.5 font-bold text-gray-600 outline-none">
              <option>آخر 7 أيام</option>
              <option>آخر 30 يوم</option>
              <option>آخر سنة</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Store Health */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-6">صحة المتجر</h3>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="54.6" className="text-indigo-600" />
              </svg>
              <span className="absolute text-2xl font-black text-gray-900">85%</span>
            </div>
            <p className="text-sm font-bold text-gray-700">ممتاز!</p>
            <p className="text-xs text-gray-500 text-center mt-2">متجرك يعمل بكفاءة عالية. لديك بعض التحسينات المقترحة في SEO.</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Activity size={18} className="text-indigo-600" />
                <span className="text-sm font-bold text-indigo-700">تحسين صور المنتجات</span>
              </div>
              <button className="text-xs font-bold text-indigo-600 underline">ابدأ</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
              <div className="flex items-center gap-3">
                <PlusCircle size={18} className="text-amber-600" />
                <span className="text-sm font-bold text-amber-700">أضف وصفاً لمتجرك</span>
              </div>
              <button className="text-xs font-bold text-amber-600 underline">تعديل</button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-900">أحدث الطلبات</h3>
          <button className="text-indigo-600 font-bold text-sm hover:underline">عرض الكل</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="px-6 py-4 font-semibold">رقم الطلب</th>
                <th className="px-6 py-4 font-semibold">العميل</th>
                <th className="px-6 py-4 font-semibold">المبلغ</th>
                <th className="px-6 py-4 font-semibold">الحالة</th>
                <th className="px-6 py-4 font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-700">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">{order.customer}</span>
                      <span className="text-xs text-gray-500">{order.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">{order.amount} ريال</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                      order.status === 'PENDING' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status === 'COMPLETED' ? 'مكتمل' : 
                       order.status === 'PENDING' ? 'قيد الانتظار' : 'ملغي'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-200 rounded-lg text-gray-500">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;
