
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Store, 
  User, 
  Globe, 
  Activity,
  ShieldAlert,
  ShieldCheck,
  Ban,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

const storeAccounts = [
  { id: 1, name: 'أكاديمية البرمجة', owner: 'فيصل الحربي', email: 'faisal@test.com', plan: 'pro', status: 'ACTIVE', sales: 450, revenue: '45,000', created: '2025-01-10' },
  { id: 2, name: 'متجر المصمم', owner: 'نورة السعيد', email: 'noura@test.com', plan: 'enterprise', status: 'ACTIVE', sales: 1200, revenue: '120,000', created: '2024-12-15' },
  { id: 3, name: 'قوالب ون', owner: 'سعد المنصور', email: 'saad@test.com', plan: 'free', status: 'SUSPENDED', sales: 15, revenue: '1,200', created: '2025-03-01' },
  { id: 4, name: 'كتب غالية', owner: 'غالية خالد', email: 'ghalia@test.com', plan: 'pro', status: 'ACTIVE', sales: 310, revenue: '28,500', created: '2025-02-20' },
  { id: 5, name: 'برمجيات الشرق', owner: 'عمر ياسين', email: 'omar@test.com', plan: 'pro', status: 'ACTIVE', sales: 55, revenue: '12,400', created: '2025-03-05' },
];

const AdminStores: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-black text-gray-900">إدارة حسابات المتاجر</h1>
        <p className="text-gray-500">مراجعة والتحكم في جميع المتاجر المسجلة على المنصة</p>
      </header>

      {/* Advanced Filter Bar */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="البحث باسم المتجر، المالك، أو البريد الإلكتروني..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 pr-10 text-xs outline-none focus:ring-2 focus:ring-indigo-500" 
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="flex gap-2">
          <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-xs font-bold outline-none text-gray-600">
            <option>جميع الخطط</option>
            <option>المجانية</option>
            <option>الاحترافية</option>
            <option>الشركات</option>
          </select>
          <select className="bg-gray-50 border-none rounded-xl px-4 py-3 text-xs font-bold outline-none text-gray-600">
            <option>جميع الحالات</option>
            <option>نشط</option>
            <option>معلق</option>
            <option>محظور</option>
          </select>
          <button className="p-3 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100 transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Stores List Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50">
                <th className="px-6 py-4">المتجر / المالك</th>
                <th className="px-6 py-4">الاشتراك</th>
                <th className="px-6 py-4">الإحصائيات</th>
                <th className="px-6 py-4">تاريخ الانضمام</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {storeAccounts.map(store => (
                <tr key={store.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-lg">
                        {store.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-gray-900 text-sm flex items-center gap-2">
                          {store.name}
                          <ExternalLink size={12} className="text-gray-300" />
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                          <User size={10} /> {store.owner} • {store.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      store.plan === 'pro' ? 'bg-indigo-50 text-indigo-700' :
                      store.plan === 'enterprise' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'
                    }`}>
                      {store.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-gray-900">{store.revenue} ريال</span>
                      <span className="text-[10px] text-gray-400 font-bold">{store.sales} مبيعة</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-500">{store.created}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${store.status === 'ACTIVE' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`}></div>
                      <span className={`text-[10px] font-black ${store.status === 'ACTIVE' ? 'text-green-700' : 'text-red-700'}`}>
                        {store.status === 'ACTIVE' ? 'نشط' : 'معلق'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-xl transition-all" title="إدارة الحساب">
                        <ShieldCheck size={18} />
                      </button>
                      <button className="p-2 hover:bg-amber-50 text-amber-600 rounded-xl transition-all" title="تعليق مؤقت">
                        <Ban size={18} />
                      </button>
                      <button className="p-2 text-gray-300 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="p-6 border-t bg-gray-50/30 flex justify-between items-center">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">عرض 5 من أصل 102 متجر</span>
          <div className="flex gap-2">
            {[1,2,3].map(i => (
              <button key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all ${i === 1 ? 'bg-indigo-600 text-white' : 'bg-white border text-gray-400 hover:bg-gray-50'}`}>
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStores;
