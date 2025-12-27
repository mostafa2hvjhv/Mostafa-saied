
import React from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowLeft, 
  Store, 
  CheckCircle2, 
  Users,
  CreditCard
} from 'lucide-react';

interface PlatformLandingProps {
  onStartStore: () => void;
  onLogin: () => void;
  onBrowseDemo: () => void;
}

const PlatformLanding: React.FC<PlatformLandingProps> = ({ onStartStore, onLogin, onBrowseDemo }) => {
  return (
    <div className="min-h-screen bg-white font-cairo text-right" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">D</div>
            <span className="text-2xl font-black text-gray-900">ديجيتال ستور</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">المميزات</a>
            <a href="#plans" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">الأسعار</a>
            <a href="#demo" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">نماذج</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onLogin} className="text-sm font-bold text-gray-500 hover:text-indigo-600">دخول التجار</button>
            <button onClick={onStartStore} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-black text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">ابدأ متجرك مجاناً</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-xs font-black">
              <Rocket size={16} />
              منصة صناعة المتاجر الرقمية الأولى في العالم العربي
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">بع منتجاتك الرقمية <span className="text-indigo-600 italic">بسهولة</span> واحترافية</h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">أنشئ متجرك الخاص، ارفع ملفاتك، واستلم أرباحك فوراً. كل ما تحتاجه للنجاح في عالم التجارة الرقمية في مكان واحد.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onStartStore} className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-indigo-200 hover:scale-105 transition-transform flex items-center justify-center gap-3">
                ابدأ الآن مجاناً
                <ArrowLeft size={24} />
              </button>
              <button onClick={onBrowseDemo} className="px-10 py-5 bg-white border-2 border-indigo-50 text-indigo-600 rounded-[2rem] font-black text-xl hover:bg-indigo-50 transition-all">شاهد مثال حي</button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-left duration-1000 delay-200">
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 relative z-10">
              <img src="https://picsum.photos/800/600?random=100" className="rounded-[2.5rem] w-full" alt="Dashboard Preview" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-2xl"><CreditCard size={24} /></div>
                <div>
                  <p className="text-xs font-bold text-gray-400">آخر مبيعة</p>
                  <p className="text-lg font-black text-gray-900">+450 ريال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'متجر نشط', val: '10,000+', icon: <Store /> },
            { label: 'منتج رقمي', val: '50,000+', icon: <Zap /> },
            { label: 'عملية بيع', val: '1M+', icon: <ShieldCheck /> },
            { label: 'عميل سعيد', val: '250k+', icon: <Users /> },
          ].map((s, i) => (
            <div key={i} className="text-center space-y-2 p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 flex justify-center mb-2">{s.icon}</div>
              <div className="text-3xl font-black text-gray-900">{s.val}</div>
              <div className="text-sm font-bold text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-black text-gray-900">لماذا تختار ديجيتال ستور؟</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">لقد قمنا بتبسيط كل شيء، لتركز أنت على الإبداع ونحن نتكفل بالتقنية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'نطاق خاص لمتجرك', desc: 'احصل على رابط فريد [store-name].mystore.com لعلامتك التجارية.', icon: <Globe /> },
            { title: 'حماية ملفاتك (DRM)', desc: 'تقنيات متقدمة لمنع السرقة وإعادة التوزيع غير القانوني لمنتجاتك.', icon: <ShieldCheck /> },
            { title: 'دفع فوري ومتعدد', desc: 'ادفع واستلم عبر Stripe, PayPal, وبطاقات مدى بكل سهولة.', icon: <CreditCard /> },
          ].map((f, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-indigo-600 transition-all shadow-sm hover:shadow-2xl hover:shadow-indigo-50">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">{f.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{f.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-black">جاهز لإطلاق مشروعك الرقمي؟</h2>
            <p className="text-indigo-200 text-lg">انضم إلى آلاف التجار الناجحين اليوم.</p>
          </div>
          <button onClick={onStartStore} className="px-12 py-5 bg-white text-indigo-900 rounded-[2rem] font-black text-xl hover:scale-105 transition-transform shadow-2xl">أنشئ متجرك الآن</button>
          <div className="pt-20 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg text-indigo-900 flex items-center justify-center font-black">D</div>
              <span className="text-xl font-black">ديجيتال ستور</span>
            </div>
            <p className="text-indigo-400 text-sm font-bold">جميع الحقوق محفوظة © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformLanding;
