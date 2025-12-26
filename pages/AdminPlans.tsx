
import React from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  CreditCard, 
  CheckCircle,
  Users,
  MoreVertical,
  Activity
} from 'lucide-react';
import { PLANS } from '../constants';

const AdminPlans: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">إدارة خطط الاشتراك</h1>
          <p className="text-gray-500">تخصيص الأسعار، المميزات، والخطط المتاحة للتجار</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100">
          <Plus size={18} />
          <span>إضافة خطة جديدة</span>
        </button>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'إجمالي الإيرادات', value: '$245k', change: '+12%', icon: <Activity className="text-green-600" /> },
          { label: 'المشتركين النشطين', value: '4,210', icon: <Users className="text-indigo-600" /> },
          { label: 'متوسط قيمة الاشتراك', value: '$58.2', icon: <CreditCard className="text-blue-600" /> },
          { label: 'معدل التجديد', value: '88%', icon: <CheckCircle className="text-amber-600" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="p-3 bg-gray-50 rounded-xl w-fit mb-4">{stat.icon}</div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Plans List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PLANS.map(plan => (
          <div key={plan.id} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-indigo-100 transition-all">
            {plan.id === 'pro' && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rotate-45 translate-x-10 translate-y-4 text-[10px] font-black uppercase tracking-widest">Best Seller</div>
            )}
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-gray-900">{plan.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">مثالية لـ {plan.id === 'free' ? 'المبتدئين' : plan.id === 'pro' ? 'المحترفين' : 'الشركات الكبرى'}</p>
                </div>
                <div className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
                  <MoreVertical size={20} />
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-indigo-600">{plan.price}</span>
                <span className="text-sm font-bold text-gray-400">ريال/شهر</span>
              </div>

              <div className="h-px bg-gray-50"></div>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <CheckCircle size={16} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-2xl font-black text-xs hover:bg-gray-100 transition-all">
                  <Edit2 size={14} />
                  تعديل
                </button>
                <button className="p-3 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Plan Placeholder */}
        <button className="bg-white rounded-[2.5rem] p-8 border-4 border-dashed border-gray-50 flex flex-col items-center justify-center text-center gap-4 group hover:border-indigo-100 hover:bg-indigo-50/20 transition-all min-h-[400px]">
          <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all">
            <Plus size={32} />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-1">إضافة خطة جديدة</h3>
            <p className="text-xs text-gray-400 font-medium max-w-[180px]">قم بتوسيع خيارات المنصة بإنشاء عرض اشتراك جديد</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminPlans;
