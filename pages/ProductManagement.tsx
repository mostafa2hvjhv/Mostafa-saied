
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Edit2, 
  Trash2, 
  Copy,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { CATEGORIES } from '../constants';

const products = [
  { id: 1, name: 'دليل العمل الحر 2025', category: 'كتب إلكترونية', price: 150, sales: 850, downloads: 1200, status: 'نشط', image: 'https://picsum.photos/200/200?random=1' },
  { id: 2, name: 'قالب سيرة ذاتية احترافي', category: 'قوالب تصميم', price: 45, sales: 2400, downloads: 3500, status: 'نشط', image: 'https://picsum.photos/200/200?random=2' },
  { id: 3, name: 'دورة التسويق الرقمي', category: 'دورات تدريبية', price: 599, sales: 120, downloads: 150, status: 'مسودة', image: 'https://picsum.photos/200/200?random=3' },
  { id: 4, name: 'أداة تحليل البيانات بالذكاء الاصطناعي', category: 'برمجيات', price: 999, sales: 45, downloads: 50, status: 'نشط', image: 'https://picsum.photos/200/200?random=4' },
  { id: 5, name: 'حزمة الخطوط العربية الحديثة', category: 'قوالب تصميم', price: 120, sales: 500, downloads: 800, status: 'مؤرشف', image: 'https://picsum.photos/200/200?random=5' },
];

const ProductManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Logic to signal navigation would happen here in a real app
  // In our mockup, the App.tsx handles state
  const handleEdit = () => {
    // We rely on the parent component switching pages for this mockup
    // but in a real app we'd use a router
    window.dispatchEvent(new CustomEvent('navigate-to-editor'));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">إدارة المنتجات</h1>
          <p className="text-gray-500">إجمالي المنتجات المضافة: 12 منتج</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Download size={18} />
            <span>تصدير CSV</span>
          </button>
          <button 
             onClick={() => window.dispatchEvent(new CustomEvent('set-page', { detail: 'products-edit' }))}
             className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100"
          >
            <Plus size={18} />
            <span>إضافة منتج</span>
          </button>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="البحث عن منتج..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 outline-none pr-10 text-sm"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-indigo-500 outline-none font-bold text-sm text-gray-600"
          >
            <option>الكل</option>
            {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <button className="px-4 py-2.5 bg-gray-50 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
            <Filter size={18} />
            <span>تصفية</span>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-xs font-black uppercase tracking-wider">
                <th className="px-6 py-4">المنتج</th>
                <th className="px-6 py-4">الفئة</th>
                <th className="px-6 py-4">السعر</th>
                <th className="px-6 py-4 text-center">المبيعات</th>
                <th className="px-6 py-4 text-center">الحالة</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={product.image} alt={product.name} className="w-12 h-12 rounded-2xl object-cover shadow-sm" />
                      <span className="font-black text-gray-900 line-clamp-1 text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 font-black text-indigo-600 text-sm">{product.price} ريال</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-black text-gray-900">{product.sales}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{product.downloads} تحميل</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      product.status === 'نشط' ? 'bg-green-100 text-green-700' :
                      product.status === 'مسودة' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('set-page', { detail: 'products-edit' }))}
                        className="p-2 hover:bg-indigo-50 text-indigo-600 rounded-xl transition-all" title="تعديل"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 text-gray-600 rounded-xl transition-all" title="نسخ">
                        <Copy size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 text-red-600 rounded-xl transition-all" title="حذف">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t flex justify-between items-center bg-gray-50/30">
          <span className="text-xs text-gray-400 font-black tracking-widest uppercase">عرض 1 إلى 5 من 12 منتج</span>
          <div className="flex gap-2">
            <button className="p-2 bg-white border rounded-xl hover:bg-gray-50 text-gray-400 disabled:opacity-50" disabled>
              <ChevronRight size={20} />
            </button>
            <button className="p-2 bg-white border rounded-xl hover:bg-gray-50 text-gray-700">
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
