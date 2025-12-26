
import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Mail, Lock } from 'lucide-react';

interface OwnerLoginProps {
  onLogin: () => void;
  onRegister: () => void;
}

const OwnerLogin: React.FC<OwnerLoginProps> = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState('owner@digitalstore.com');
  const [password, setPassword] = useState('Store@2025');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-right">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">مرحباً بك مجدداً</h1>
            <p className="text-gray-500">سجل دخولك لإدارة متجرك الرقمي</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 block">البريد الإلكتروني</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none pl-10"
                  placeholder="name@example.com"
                  required
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 block">كلمة المرور</label>
                <a href="#" className="text-xs text-indigo-600 hover:underline">نسيت كلمة المرور؟</a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none pl-10"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>دخول إلى لوحة التحكم</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600">
              ليس لديك متجر بعد؟{' '}
              <button onClick={onRegister} className="text-indigo-600 font-bold hover:underline">سجل متجرك الآن</button>
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 relative overflow-hidden flex-col items-center justify-center p-12 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10 text-center space-y-8 max-w-sm">
          <div className="bg-white/20 w-20 h-20 rounded-3xl mx-auto flex items-center justify-center">
            <ShieldCheck size={48} />
          </div>
          <h2 className="text-4xl font-black leading-tight">المنصة الأسرع لبيع منتجاتك الرقمية</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-2xl">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-xs text-white/70">متجر نشط</div>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl">
              <div className="text-2xl font-bold">$1M+</div>
              <div className="text-xs text-white/70">مبيعات شهرية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
