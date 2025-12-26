
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Mail, 
  MoreVertical,
  CheckCircle,
  Clock,
  XCircle,
  FileText
} from 'lucide-react';

const orders = [
  { id: '#ORD-4521', customer: 'أحمد محمود', email: 'ahmed@test.com', product: 'دليل العمل الحر', amount: 250, date: '2025-03-15', status: 'COMPLETED' },
  { id: '#ORD-4522', customer: 'سارة خالد', email: 'sara@test.com', product: 'قالب سيرة ذاتية', amount: 120, date: '2025-03-14', status: 'PENDING' },
  { id: '#ORD-4523', customer: 'محمد علي', email: 'm.ali@test.com', product: 'دورة بايثون', amount: 450, date: '2025-03-14', status: 'COMPLETED' },
  { id: '#ORD-4524', customer: 'ليلى يوسف', email: 'leila@test.com', product: 'أيقونات 3D', amount: 85, date: '2025-03-13', status: 'CANCELLED' },
  { id: '#ORD-4525', customer: 'خالد ممدوح', email: 'khaled@test.com', product: 'دليل العمل الحر', amount: 250, date: '2025-03-12', status: 'COMPLETED' },
];

const OrdersManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black"><CheckCircle size={12} /> مكتمل</span>;
      case 'PENDING':
        return <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black"><Clock size={12} /> قيد المعالجة</span>;
      case 'CANCELLED':
        return <span className="flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-black"><XCircle size={12} /> ملغي</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">إدارة الطلبات</h1>
          <p className="text-gray-500">متابعة مبيعات متجرك وتفاصيل فواتير العملاء</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
          <Download size={18} />
          <span>تصدير تقرير المبيعات</span>
        </button>
      </header>

      {/* Stats Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><FileText size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400">طلبات اليوم</p>
            <h3 className="text-xl font-black text-gray-900">12 طلب</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl"><CheckCircle size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400">المبيعات المكتملة</p>
            <h3 className="text-xl font-black text-gray-900">1,120 ريال</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Clock size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400">طلبات معلقة</p>
            <h3 className="text-xl font-black text-gray-900">3 طلبات</h3>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex bg-gray-50 p-1 rounded-2xl w-full md:w-auto overflow-x-auto">
            {['ALL', 'COMPLETED', 'PENDING', 'CANCELLED'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs font-black transition-all ${
                  activeTab === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'ALL' ? 'الكل' : tab === 'COMPLETED' ? 'مكتمل' : tab === 'PENDING' ? 'قيد المعالجة' : 'ملغي'}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input type="text" placeholder="بحث برقم الطلب أو العميل..." className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 pr-10 text-xs outline-none focus:ring-2 focus:ring-indigo-500" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50">
                <th className="px-6 py-4">رقم الطلب</th>
                <th className="px-6 py-4">العميل</th>
                <th className="px-6 py-4">المنتج</th>
                <th className="px-6 py-4">المبلغ</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.filter(o => activeTab === 'ALL' || o.status === activeTab).map(order => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 font-black text-xs text-indigo-600">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-sm">{order.customer}</span>
                      <span className="text-[10px] text-gray-400">{order.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.product}</td>
                  <td className="px-6 py-4 font-black text-gray-900 text-sm">{order.amount} ريال</td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-500">{order.date}</td>
                  <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-xl transition-all" title="عرض التفاصيل">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-xl transition-all" title="إرسال إيميل">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-gray-300 hover:text-gray-600">
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

export default OrdersManagement;
