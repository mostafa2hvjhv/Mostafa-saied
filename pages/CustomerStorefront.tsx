
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Star, 
  Download, 
  ShoppingCart,
  ArrowLeft,
  Filter,
  Check
} from 'lucide-react';
import { CATEGORIES } from '../constants';

const CustomerStorefront: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProducts = [
    { id: 1, name: 'دليل العمل الحر الشامل 2025', price: 150, rating: 4.9, image: 'https://picsum.photos/600/600?random=31', category: 'كتب إلكترونية' },
    { id: 2, name: 'حزمة قوالب السوشيال ميديا', price: 45, rating: 4.7, image: 'https://picsum.photos/600/600?random=32', category: 'قوالب تصميم' },
    { id: 3, name: 'دورة إتقان بايثون للمبتدئين', price: 599, rating: 5.0, image: 'https://picsum.photos/600/600?random=33', category: 'دورات تدريبية' },
    { id: 4, name: 'تطبيق إدارة المهام الذكي', price: 99, rating: 4.5, image: 'https://picsum.photos/600/600?random=34', category: 'برمجيات' },
    { id: 5, name: 'أيقونات ثلاثية الأبعاد (3D)', price: 120, rating: 4.8, image: 'https://picsum.photos/600/600?random=35', category: 'قوالب تصميم' },
    { id: 6, name: 'أساسيات الأمن السيبراني', price: 250, rating: 4.6, image: 'https://picsum.photos/600/600?random=36', category: 'كتب إلكترونية' },
  ];

  const handleProductClick = () => {
    window.dispatchEvent(new CustomEvent('set-page', { detail: 'product-detail' }));
  };

  const handleCheckout = () => {
    window.dispatchEvent(new CustomEvent('set-page', { detail: 'checkout' }));
  };

  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                  <ShoppingBag size={24} />
                </div>
                <span className="text-xl font-black text-gray-900 tracking-tight">متجري الرقمي</span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">الرئيسية</a>
                <a href="#" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">المنتجات</a>
                <a href="#" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">عن المتجر</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <input type="text" placeholder="ابحث عن منتج..." className="w-48 lg:w-64 bg-gray-50 border-none rounded-xl py-2 px-4 pr-10 text-xs outline-none focus:ring-2 focus:ring-indigo-500" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
              <button onClick={onLoginClick} className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">دخول</button>
              <button 
                onClick={handleCheckout}
                className="relative p-2 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2 group"
              >
                <ShoppingCart size={20} />
                <span className="font-bold text-sm hidden lg:inline">السلة</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="text-center max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-xs font-black">
              <Star size={14} fill="currentColor" />
              أفضل المنتجات الرقمية جودةً في 2025
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">ارتقِ بمهاراتك مع <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">منتجاتنا الحصرية</span></h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">اكتشف مئات الكتب الإلكترونية، الدورات التدريبية، والبرمجيات الجاهزة للاستخدام الفوري بعد التحميل.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-3 group">
                تسوق جميع المنتجات
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-50 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all">
                استعراض الفئات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        {/* Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            <button 
              onClick={() => setActiveCategory('الكل')}
              className={`px-6 py-2.5 rounded-full text-sm font-black transition-all whitespace-nowrap ${activeCategory === 'الكل' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            >
              الكل
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-black transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200">
            <Filter size={18} />
            <span>تصفية النتائج</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-50 mb-6 cursor-pointer" onClick={handleProductClick}>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm">
                  <Star size={14} className="text-amber-500 fill-current" />
                  <span className="text-xs font-black text-gray-900">{product.rating}</span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Search size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col px-4 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors cursor-pointer" onClick={handleProductClick}>{product.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-6">
                  <Download size={14} />
                  <span>تحميل فوري بعد الدفع</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">السعر</span>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">{product.price} <span className="text-sm font-bold text-gray-400">ريال</span></span>
                  </div>
                  <button 
                    onClick={() => {setCartCount(c => c + 1); handleCheckout();}}
                    className="p-4 bg-gray-50 text-gray-900 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <ShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black leading-tight">انضم إلى أكثر من 50,000 عميل راضٍ</h2>
            <p className="text-lg text-indigo-100 font-medium opacity-80">ابدأ رحلة التعلم والتطوير اليوم بضمان استعادة الأموال خلال 30 يوماً.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-black/10">إنشاء حساب مجاني</button>
              <button className="px-10 py-4 bg-indigo-500 text-white border border-white/20 rounded-2xl font-black text-lg hover:bg-indigo-400 transition-all">تواصل مع الدعم</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
            <span className="text-lg font-black text-gray-900 tracking-tight">متجري الرقمي</span>
          </div>
          <p className="text-sm text-gray-500 font-bold max-w-md mx-auto">نحن نؤمن بأن المعرفة يجب أن تكون متاحة للجميع بضغطة زر. متجرنا يوفر لك أفضل الأدوات الرقمية.</p>
          <div className="flex justify-center gap-8 text-xs font-black text-gray-400">
            <a href="#" className="hover:text-indigo-600 transition-colors uppercase tracking-widest">سياسة الخصوصية</a>
            <a href="#" className="hover:text-indigo-600 transition-colors uppercase tracking-widest">الشروط والأحكام</a>
            <a href="#" className="hover:text-indigo-600 transition-colors uppercase tracking-widest">طرق الدفع</a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest">جميع الحقوق محفوظة © 2025 منصة ديجيتال ستور</p>
        </div>
      </footer>
    </div>
  );
};

export default CustomerStorefront;
