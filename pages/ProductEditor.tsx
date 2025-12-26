
import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Eye, 
  ArrowRight, 
  Upload, 
  DollarSign, 
  Settings, 
  FileText, 
  Link as LinkIcon,
  CheckCircle2,
  Trash2,
  Plus
} from 'lucide-react';

const ProductEditor: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setLastSaved(new Date().toLocaleTimeString('ar-SA'));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'details', label: 'تفاصيل المنتج', icon: <FileText size={18} /> },
    { id: 'files', label: 'إدارة الملفات', icon: <Upload size={18} /> },
    { id: 'pricing', label: 'التسعير', icon: <DollarSign size={18} /> },
    { id: 'delivery', label: 'إعدادات التسليم', icon: <Settings size={18} /> },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all">
            <ArrowRight size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-black text-gray-900">محرر المنتجات</h1>
            <p className="text-sm text-gray-500">
              {lastSaved ? `آخر حفظ تلقائي: ${lastSaved}` : 'جاري التحرير...'}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Eye size={18} />
            <span>معاينة</span>
          </button>
          <button 
            onClick={() => { setIsSaving(true); setTimeout(() => setIsSaving(false), 1000); }}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2"
          >
            {isSaving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Save size={18} />}
            <span>حفظ المنتج</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 font-bold' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm min-h-[500px]">
          {activeTab === 'details' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">اسم المنتج</label>
                <input className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold" placeholder="مثال: كتاب أساسيات التصميم" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">الوصف التفصيلي</label>
                <textarea className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none min-h-[200px]" placeholder="أدخل وصفاً شاملاً للمنتج..."></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">الفئة</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>كتب إلكترونية</option>
                    <option>برمجيات</option>
                    <option>دورات</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">الكلمات المفتاحية</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="تصميم، فن، أساسيات" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-4 border-dashed border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center group hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-pointer">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">اسحب الملفات هنا أو اضغط للرفع</h3>
                <p className="text-sm text-gray-500 max-w-xs">يدعم الملفات الرقمية بجميع الصيغ (PDF, ZIP, MP4) بحد أقصى 500MB</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">الملفات المرفوعة</h4>
                <div className="p-4 border rounded-2xl flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-500 shadow-sm">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">book_final_v2.pdf</p>
                      <p className="text-xs text-gray-500">12.5 MB</p>
                    </div>
                  </div>
                  <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 bg-blue-50 text-blue-700 rounded-2xl font-bold text-sm hover:bg-blue-100 transition-all">
                  <LinkIcon size={18} />
                  <span>ربط Google Drive</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-4 bg-sky-50 text-sky-700 rounded-2xl font-bold text-sm hover:bg-sky-100 transition-all">
                  <LinkIcon size={18} />
                  <span>ربط OneDrive</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">السعر الأساسي</label>
                  <div className="relative">
                    <input type="number" className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-black text-lg" placeholder="0.00" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">ريال</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">سعر الخصم (اختياري)</label>
                  <div className="relative">
                    <input type="number" className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-black text-lg" placeholder="0.00" />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">ريال</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                <h4 className="font-black text-amber-800 mb-2 flex items-center gap-2">
                  <Settings size={18} />
                  إعدادات الضرائب والحزم
                </h4>
                <p className="text-sm text-amber-700 mb-4">يمكنك تفعيل الضرائب المضافة تلقائياً بناءً على موقع العميل.</p>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="tax" className="w-5 h-5 rounded-lg border-amber-300 text-amber-600 focus:ring-amber-500" />
                  <label htmlFor="tax" className="text-sm font-bold text-amber-900">تضمين ضريبة القيمة المضافة (15%)</label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">حدود التحميل</h4>
                  <p className="text-xs text-gray-500">حدد عدد المرات التي يمكن للعميل فيها تحميل الملف بعد الشراء.</p>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold">
                    <option>غير محدود</option>
                    <option>مرة واحدة</option>
                    <option>3 مرات</option>
                    <option>5 مرات</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">صلاحية الوصول</h4>
                  <p className="text-xs text-gray-500">المدة التي يبقى فيها رابط التحميل نشطاً.</p>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold">
                    <option>مدى الحياة</option>
                    <option>24 ساعة</option>
                    <option>7 أيام</option>
                    <option>30 يوم</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-indigo-50 rounded-3xl space-y-4">
                <h4 className="font-black text-indigo-900">الأمان وحماية المحتوى (DRM)</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                    <span className="text-sm font-bold text-gray-700">إضافة علامة مائية (Watermark)</span>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full translate-x-6"></div></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                    <span className="text-sm font-bold text-gray-700">تشفير الملفات الحساسة</span>
                    <div className="w-12 h-6 bg-gray-200 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductEditor;
