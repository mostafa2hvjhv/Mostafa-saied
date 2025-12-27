
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
  ChevronLeft,
  PackageSearch
} from 'lucide-react';
import { CATEGORIES } from '../constants';
import { Product } from '../types';

const demoProducts: Product[] = [
  // Add missing description property to mock products
  { id: '1', name: 'دليل العمل الحر 2025', description: 'دليل شامل لاحتراف العمل الحر في عام 2025.', category: 'كتب إلكترونية', price: 150, sales: 850, downloads: 1200, status: 'ACTIVE', image: 'https://picsum.photos/200/200?random=1' },
  { id: '2', name: 'قالب سيرة ذاتية احترافي', description: 'قالب سيرة ذاتية عصري وسهل التخصيص.', category: 'قوالب تصميم', price: 45, sales: 2400, downloads: 3500, status: 'ACTIVE', image: 'https://picsum.photos/200/200?random=2' },
  { id: '3', name: 'دورة التسويق الرقمي', description: 'دورة تدريبية متكاملة في استراتيجيات التسويق الرقمي الحديثة.', category: 'دورات تدريبية', price: 599, sales: 120, downloads: 150, status: 'DRAFT', image: 'https://picsum.photos/200/200?random=3' },
  { id: '4', name: 'أداة تحليل البيانات بالذكاء الاصطناعي', description: 'أداة متقدمة لتحليل البيانات باستخدام تقنيات الذكاء الاصطناعي.', category: 'برمجيات', price: 999, sales: 45, downloads: 50, status: 'ACTIVE', image: 'https://picsum.photos/200/200?random=4' },
  { id: '5', name: 'حزمة الخطوط العربية الحديثة', description: 'مجموعة من الخطوط العربية المختارة لمشاريع التصميم.', category: 'قوالب تصميم', price: 120, sales: 500, downloads: 800, status: 'ARCHIVED', image: 'https://picsum.photos/200/200?random=5' },
];

interface ProductManagementProps {
  products?: Product[];
}

const ProductManagement: React.FC<ProductManagementProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const currentProducts = products || demoProducts;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">إدارة المنتجات</h1>
          <p className="text-gray-500">إجمالي المنتجات المضافة: {currentProducts.length} منتج</p>
        </div>
        <div className="flex gap-3">
          {currentProducts.length > 0 && (
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
              <Download size={18} />
              <span>تصدير CSV</span>
            </button>
          )}
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
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
        {currentProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-12">
            <div className="p-6 bg-indigo-50 text-indigo-400 rounded-full mb-6">
              <PackageSearch size={64} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">لا توجد منتجات حتى الآن</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-8 font-medium">ابدأ برفع ملفاتك الرقمية (كتب، دورات، قوالب) لتبدأ مبيعاتك الأولى.</p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('set-page', { detail: 'products-edit' }))}
              className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:scale-105 transition-transform"
            >
              إضافة منتجك الأول
            </button>
          </div>
        ) : (
          <>
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
                  {currentProducts.map((product) => (
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
                          product.status === 'ACTIVE' ? 'bg-green-100 text-green-700' :
                          product.status === 'DRAFT' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {product.status === 'ACTIVE' ? 'نشط' : product.status === 'DRAFT' ? 'مسودة' : 'مؤرشف'}
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
              <span className="text-xs text-gray-400 font-black tracking-widest uppercase">عرض 1 إلى {currentProducts.length} من {currentProducts.length} منتج</span>
              <div className="flex gap-2">
                <button className="p-2 bg-white border rounded-xl hover:bg-gray-50 text-gray-400 disabled:opacity-50" disabled>
                  <ChevronRight size={20} />
                </button>
                <button className="p-2 bg-white border rounded-xl hover:bg-gray-50 text-gray-700">
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;