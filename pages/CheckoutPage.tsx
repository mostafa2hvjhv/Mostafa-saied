
import React, { useState } from 'react';
import { CreditCard, ShieldCheck, ArrowRight, Lock, Smartphone, CheckCircle2, ShoppingBag } from 'lucide-react';

interface CheckoutPageProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onSuccess, onCancel }) => {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStep('success');
      setIsLoading(false);
    }, 1500);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-xl border border-gray-100 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">تم الشراء بنجاح!</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">تم إرسال رابط التحميل والفاتورة إلى بريدك الإلكتروني. يمكنك الوصول لملفاتك الآن من حسابك.</p>
          <button
            onClick={onSuccess}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg hover:bg-indigo-700 transition-all"
          >
            الانتقال لصفحة التحميلات
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-6">
          <button onClick={onCancel} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 mb-4">
            <ArrowRight size={20} />
            <span>العودة للمتجر</span>
          </button>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-8">إتمام عملية الشراء</h2>
            
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">1</div>
                  معلومات العميل
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="الاسم الكامل" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
                  <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">2</div>
                  طريقة الدفع
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-2xl flex flex-col items-center gap-2">
                    <CreditCard className="text-indigo-600" />
                    <span className="text-sm font-bold">بطاقة ائتمان</span>
                  </button>
                  <button type="button" className="p-4 border-2 border-gray-100 rounded-2xl flex flex-col items-center gap-2 text-gray-400 grayscale">
                    <div className="font-black italic">PayPal</div>
                    <span className="text-sm font-bold">باي بال</span>
                  </button>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="relative">
                    <input placeholder="رقم البطاقة" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM/YY" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <input placeholder="CVC" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Lock size={20} />
                    <span>دفع 150 ريال وتأكيد الطلب</span>
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">تشفير آمن بنسبة 100% (SSL)</span>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-32">
            <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingBag className="text-indigo-600" />
              ملخص الطلب
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/200/200?random=31" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-gray-900 line-clamp-1">دليل العمل الحر الشامل</p>
                  <p className="text-xs text-gray-500">1 x 150 ريال</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t">
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>المجموع الفرعي</span>
                <span>150 ريال</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>الضرائب (15%)</span>
                <span>0.00 ريال</span>
              </div>
              <div className="flex justify-between text-xl font-black text-gray-900 pt-3 border-t">
                <span>الإجمالي</span>
                <span>150 ريال</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-2xl">
              <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest mb-1">تنبيه</p>
              <p className="text-[10px] text-amber-700 leading-relaxed font-bold">هذا المنتج رقمي، ستحصل على روابط التحميل فوراً بعد الدفع. لا توجد مصاريف شحن.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
