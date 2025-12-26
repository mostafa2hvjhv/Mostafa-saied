
import React from 'react';
import { 
  BarChart3, 
  Users, 
  Store, 
  ShieldAlert, 
  Search, 
  Filter, 
  ExternalLink,
  ChevronRight,
  MoreVertical,
  Activity,
  CreditCard
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'يناير', stores: 400, revenue: 2400 },
  { name: 'فبراير', stores: 600, revenue: 3600 },
  { name: 'مارس', stores: 800, revenue: 5000 },
  { name: 'أبريل', stores: 1200, revenue: 7500 },
  { name: 'مايو', stores: 1500, revenue: 9000 },
];

const stores = [
  { id: 1, name: 'أكاديمية البرمجة', owner: 'فيصل الحربي', plan: 'الاحترافية', revenue: '45,000', status: 'نشط' },
  { id: 2, name: 'متجر المصمم', owner: 'نورة السعيد', plan: 'الشركات', revenue: '120,000', status: 'نشط' },
  { id: 3, name: 'قوالب ون', owner: 'سعد المنصور', plan: 'المجانية', revenue: '1,200', status: 'معلق' },
  { id: 4, name: 'كتب غالية', owner: 'غالية خالد', plan: 'الاحترافية', revenue: '28,500', status: 'نشط' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">إدارة المنصة</h1>
          <p className="text-gray-500">نظرة شاملة على أداء جميع المتاجر والمستخدمين</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-amber-50 text-amber-700 border border-amber-100 rounded-xl font-bold text-sm hover:bg-amber-100 transition-all flex items-center gap-2">
            <ShieldAlert size={18} />
            <span>بلاغات المخالفات (3)</span>
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'إجمالي المتاجر', value: '10,245', change: '+12%', icon: <Store className="text-blue-600" /> },
          { label: 'المستخدمين النشطين', value: '45.8k', change: '+5%', icon: <Users className="text-indigo-600" /> },
          { label: 'إيرادات المنصة', value: '$850k', change: '+18%', icon: <CreditCard className="text-green-600" /> },
          { label: 'طلبات الدعم', value: '142', change: '-3%', icon: <Activity className="text-amber-600" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="p-3 bg-gray-50 rounded-xl">{stat.icon}</div>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs font-bold text-gray-500">{stat.label}</p>
            <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-gray-900">نمو المنصة (المتاجر)</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg">المتاجر</button>
              <button className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-lg hover:bg-gray-100 transition-all">الإيرادات</button>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip />
                <Area type="monotone" dataKey="stores" stroke="#4F46E5" strokeWidth={3} fill="#4F46E5" fillOpacity={0.05} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subscription Distribution */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-6">توزيع الخطط</h3>
          <div className="space-y-6">
            {[
              { name: 'الاحترافية (Pro)', percent: 45, color: 'bg-indigo-600', count: '4,610' },
              { name: 'المجانية (Free)', percent: 35, color: 'bg-gray-400', count: '3,585' },
              { name: 'الشركات (Enterprise)', percent: 20, color: 'bg-green-500', count: '2,050' },
            ].map((plan, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-700">{plan.name}</span>
                  <span className="text-gray-400">{plan.count}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${plan.color}`} style={{ width: `${plan.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-gray-50 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-100 transition-all">
            إدارة الخطط والأسعار
          </button>
        </div>
      </div>

      {/* Stores Management Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h3 className="font-bold text-lg text-gray-900">المتاجر المسجلة حديثاً</h3>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <input type="text" placeholder="ابحث باسم المتجر..." className="w-full bg-gray-50 border-none rounded-xl py-2 px-4 pr-10 text-sm outline-none" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <button className="p-2 bg-gray-50 text-gray-500 rounded-xl">
              <Filter size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-xs font-black uppercase tracking-wider">
                <th className="px-6 py-4">المتجر</th>
                <th className="px-6 py-4">المالك</th>
                <th className="px-6 py-4">الخطة</th>
                <th className="px-6 py-4">إجمالي المبيعات</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {stores.map(store => (
                <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
                        {store.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{store.name}</p>
                        <p className="text-[10px] text-gray-500 font-medium">created 2 days ago</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-700">{store.owner}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black ${
                      store.plan === 'الاحترافية' ? 'bg-indigo-50 text-indigo-700' :
                      store.plan === 'الشركات' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'
                    }`}>
                      {store.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-indigo-600">{store.revenue} ريال</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${store.status === 'نشط' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                      <span className="text-xs font-bold text-gray-600">{store.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-gray-400">
                        <MoreVertical size={16} />
                      </button>
                    </div>
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

export default AdminDashboard;
