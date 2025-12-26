
import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShoppingCart, 
  Star, 
  Download, 
  ShieldCheck, 
  FileText, 
  Globe, 
  CheckCircle2,
  Clock,
  Share2
} from 'lucide-react';

interface ProductDetailProps {
  onBack: () => void;
  onAddToCart: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onBack, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: '1',
    name: 'دليل العمل الحر الشامل 2025',
    price: 150,
    rating: 4.9,
    reviews: 128,
    category: 'كتب إلكترونية',
    image: 'https://picsum.photos/800/800?random=31',
    description: 'هذا الدليل هو رفيقك الأول في رحلة العمل الحر. يغطي كل شيء من البداية حتى احتراف المنصات العالمية مثل Upwork و Freelancer.',
    features: [
      'أكثر من 200 صفحة من المحتوى التطبيقي',
      'نماذج جاهزة لعروض العمل',
      'كيفية تسعير خدماتك باحترافية',
      'طرق استلام الأرباح في الوطن العربي'
    ],
    technical: [
      'صيغة الملف: PDF',
      'حجم الملف: 12.5 MB',
      'عدد الصفحات: 215 صفحة',
      'اللغة: العربية'
    ]
  };

  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 font-bold hover:text-indigo-600 transition-all mb-8 group"
        >
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          <span>العودة للمتجر</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Media */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 cursor-pointer hover:border-indigo-600 transition-all">
                  <img src={`https://picsum.photos/200/200?random=${i + 50}`} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-wider">{product.category}</span>
                <div className="flex items-center gap-1.5 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-black text-gray-900">{product.rating}</span>
                  <span className="text-xs text-gray-400 font-bold">({product.reviews} مراجعة)</span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">{product.name}</h1>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-indigo-600">{product.price}</span>
                <span className="text-lg font-bold text-gray-400">ريال سعودي</span>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed font-medium text-lg">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onAddToCart}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingCart size={24} />
                <span>شراء وتحميل الآن</span>
              </button>
              <button className="px-6 py-4 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center">
                <Share2 size={24} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-2xl flex items-center gap-3">
                <Download size={20} className="text-green-600" />
                <span className="text-xs font-bold text-green-800">تحميل رقمي فوري</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl flex items-center gap-3">
                <ShieldCheck size={20} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-800">دفع آمن 100%</span>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="pt-8 space-y-6">
              <div className="flex border-b border-gray-100">
                {[
                  { id: 'description', label: 'المميزات' },
                  { id: 'technical', label: 'التفاصيل التقنية' },
                  { id: 'license', label: 'الترخيص' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-6 text-sm font-black transition-all relative ${
                      activeTab === tab.id ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                {activeTab === 'description' && (
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'technical' && (
                  <div className="grid grid-cols-2 gap-4">
                    {product.technical.map((tech, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                        <FileText size={16} className="text-gray-400" />
                        <span className="text-xs font-bold text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'license' && (
                  <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <div className="flex items-center gap-2 text-amber-800 font-black mb-2 text-sm">
                      <Clock size={16} />
                      استخدام شخصي غير محدود
                    </div>
                    <p className="text-xs text-amber-700 leading-relaxed font-bold">
                      بشرائك لهذا المنتج، تحصل على حق استخدامه الشخصي لعدد غير محدود من المرات. يمنع منعاً باتاً إعادة بيع الملف أو توزيعه بشكل مجاني.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
