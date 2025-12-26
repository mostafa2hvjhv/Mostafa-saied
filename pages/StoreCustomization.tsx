
import React, { useState } from 'react';
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Layout, 
  Type, 
  Plus, 
  GripVertical,
  ChevronDown,
  Check,
  Globe,
  Share2
} from 'lucide-react';

const templates = [
  { id: 't1', name: 'الكلاسيكي', color: '#4F46E5', preview: 'https://picsum.photos/200/300?random=11' },
  { id: 't2', name: 'الحديث', color: '#10B981', preview: 'https://picsum.photos/200/300?random=12' },
  { id: 't3', name: 'بسيط (Minimal)', color: '#000000', preview: 'https://picsum.photos/200/300?random=13' },
  { id: 't4', name: 'محتوى فيديو', color: '#EF4444', preview: 'https://picsum.photos/200/300?random=14' },
];

const StoreCustomization: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('t1');

  const sections = [
    { id: 'hero', name: 'قسم البطل (Hero)', active: true },
    { id: 'featured', name: 'المنتجات المميزة', active: true },
    { id: 'categories', name: 'الفئات الرائجة', active: true },
    { id: 'testimonials', name: 'آراء العملاء', active: false },
    { id: 'about', name: 'عن المتجر', active: true },
    { id: 'footer', name: 'تذييل الصفحة', active: true },
  ];

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col gap-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-gray-900">تخصيص الواجهة</h1>
          <p className="text-gray-500">صمم واجهة متجرك التي سيراها عملاؤك</p>
        </div>
        
        <div className="flex bg-white p-1 rounded-xl border border-gray-200">
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-lg transition-all ${device === 'desktop' ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-gray-400'}`}
          >
            <Monitor size={20} />
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={`p-2 rounded-lg transition-all ${device === 'tablet' ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-gray-400'}`}
          >
            <Tablet size={20} />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-lg transition-all ${device === 'mobile' ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-gray-400'}`}
          >
            <Smartphone size={20} />
          </button>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
            نشر التغييرات
          </button>
        </div>
      </header>

      <div className="flex-1 flex gap-8 overflow-hidden">
        {/* Editor Sidebar */}
        <div className="w-80 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('templates')}
              className={`flex-1 py-4 text-xs font-black transition-all border-b-2 ${activeTab === 'templates' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-transparent text-gray-500'}`}
            >
              القوالب
            </button>
            <button 
              onClick={() => setActiveTab('branding')}
              className={`flex-1 py-4 text-xs font-black transition-all border-b-2 ${activeTab === 'branding' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-transparent text-gray-500'}`}
            >
              العلامة التجارية
            </button>
            <button 
              onClick={() => setActiveTab('builder')}
              className={`flex-1 py-4 text-xs font-black transition-all border-b-2 ${activeTab === 'builder' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-transparent text-gray-500'}`}
            >
              البناء
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'templates' && (
              <div className="grid grid-cols-1 gap-4">
                {templates.map(t => (
                  <div 
                    key={t.id} 
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`relative rounded-2xl overflow-hidden border-4 cursor-pointer group transition-all ${selectedTemplate === t.id ? 'border-indigo-600' : 'border-transparent hover:border-gray-100'}`}
                  >
                    <img src={t.preview} alt={t.name} className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <span className="text-white text-xs font-black">{t.name}</span>
                    </div>
                    {selectedTemplate === t.id && (
                      <div className="absolute top-2 right-2 bg-indigo-600 text-white p-1 rounded-full">
                        <Check size={12} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'branding' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-600">الألوان الأساسية</label>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 cursor-pointer border-2 border-white ring-2 ring-indigo-100"></div>
                    <div className="w-10 h-10 rounded-xl bg-green-500 cursor-pointer border-2 border-white ring-2 ring-gray-100"></div>
                    <div className="w-10 h-10 rounded-xl bg-red-500 cursor-pointer border-2 border-white ring-2 ring-gray-100"></div>
                    <button className="w-10 h-10 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-600">الخط العربي</label>
                  <select className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm font-bold">
                    <option>Cairo (الافتراضي)</option>
                    <option>Tajawal</option>
                    <option>Almarai</option>
                  </select>
                </div>
                <div className="pt-6 border-t space-y-4">
                  <h4 className="text-xs font-black text-gray-900">النطاق والربط</h4>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl group">
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-gray-400 group-hover:text-indigo-600" />
                      <span className="text-xs font-bold text-gray-700">النطاق المخصص</span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl group">
                    <div className="flex items-center gap-2">
                      <Share2 size={16} className="text-gray-400 group-hover:text-indigo-600" />
                      <span className="text-xs font-bold text-gray-700">وسائل التواصل</span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'builder' && (
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-gray-400 mb-4">اسحب لإعادة ترتيب أقسام المتجر</p>
                {sections.map(sec => (
                  <div key={sec.id} className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${sec.active ? 'bg-white border-gray-100 shadow-sm' : 'bg-gray-50 border-transparent opacity-50'}`}>
                    <div className="flex items-center gap-3">
                      <GripVertical size={16} className="text-gray-300 cursor-grab" />
                      <span className="text-xs font-black text-gray-700">{sec.name}</span>
                    </div>
                    <input type="checkbox" checked={sec.active} className="w-4 h-4 text-indigo-600 rounded" readOnly />
                  </div>
                ))}
                <button className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 font-bold text-xs flex items-center justify-center gap-2 mt-4 hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <Plus size={16} />
                  <span>إضافة قسم جديد</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Pane */}
        <div className="flex-1 bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center p-8">
          <div className={`bg-white shadow-2xl transition-all duration-500 overflow-y-auto ${
            device === 'desktop' ? 'w-full h-full rounded-xl' : 
            device === 'tablet' ? 'w-[600px] h-[800px] rounded-[40px] border-[12px] border-gray-900' : 
            'w-[340px] h-[600px] rounded-[40px] border-[12px] border-gray-900'
          }`}>
            {/* Mock Storefront Content */}
            <div className="min-h-full flex flex-col">
              <nav className="p-6 border-b flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
                  <span className="font-black text-sm">متجري الرقمي</span>
                </div>
                <div className="flex gap-4 text-[10px] font-bold text-gray-500">
                  <span>الرئيسية</span>
                  <span>المنتجات</span>
                  <span>تواصل معنا</span>
                </div>
              </nav>
              
              <div className="flex-1">
                <div className="p-12 text-center space-y-4 bg-indigo-50/30">
                  <h2 className="text-2xl font-black text-gray-900">أفضل المنتجات الرقمية في مكان واحد</h2>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">دورات تدريبية وكتب إلكترونية بجودة عالية لتطوير مهاراتك.</p>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-black">تسوق الآن</button>
                </div>
                
                <div className="p-8 grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="space-y-2">
                      <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                        <img src={`https://picsum.photos/400/400?random=${i+20}`} alt="prod" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                      <div className="h-2 w-1/3 bg-gray-100 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              <footer className="p-8 border-t bg-gray-50 text-center">
                <span className="text-[10px] text-gray-400 font-bold">جميع الحقوق محفوظة © 2025</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCustomization;
