
import React, { useState } from 'react';
import { Mail, ShieldCheck, ArrowRight, Lock, Smartphone } from 'lucide-react';

interface CustomerLoginProps {
  onLogin: () => void;
  onBackToStore: () => void;
}

const CustomerLogin: React.FC<CustomerLoginProps> = ({ onLogin, onBackToStore }) => {
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStep('otp');
      setIsLoading(false);
    }, 800);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLogin();
      setIsLoading(false);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto focus next
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        <div className="p-10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-2xl font-black text-gray-900">حساب العميل</h1>
            <p className="text-gray-500 mt-2">سجل دخولك للوصول إلى مشترياتك وتحميلاتك</p>
          </div>

          {step === 'email' ? (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="customer@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none pr-10"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>إرسال رمز التحقق</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">أدخل الرمز المرسل إلى <span className="font-bold text-gray-900">{email}</span></p>
                <div className="flex justify-center gap-3" dir="ltr">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-14 h-14 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl text-center text-xl font-black outline-none transition-all"
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading || otp.some(d => !d)}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <span>تأكيد الرمز والدخول</span>
                )}
              </button>
              <div className="text-center">
                <button type="button" onClick={() => setStep('email')} className="text-sm font-bold text-gray-400 hover:text-indigo-600">إعادة إرسال الرمز؟</button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-50 text-center">
            <button onClick={onBackToStore} className="text-indigo-600 font-bold text-sm hover:underline">العودة إلى المتجر</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
