
import React, { useState } from 'react';
import { User, Store, Globe, CreditCard, ChevronLeft, ChevronRight, Check, Image as ImageIcon } from 'lucide-react';
import { PLANS } from '../constants';

const StoreRegistration: React.FC<{ onComplete: (data: any) => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    password: '',
    storeName: '',
    storeType: 'كتب إلكترونية',
    subdomain: '',
    planId: 'free',
    description: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { id: 1, label: 'البيانات الشخصية', icon: <User size={20} /> },
    { id: 2, label: 'معلومات المتجر', icon: <Store size={20} /> },
    { id: 3, label: 'النطاق', icon: <Globe size={20} /> },
    { id: 4, label: 'الخطة', icon: <CreditCard size={20} /> },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 bg-gray-50 px-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  step >= s.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}>
                  {step > s.id ? <Check size={24} /> : s.icon}
                </div>
                <span className={`text-xs font-bold ${step >= s.id ? 'text-indigo-600' : 'text-gray-400'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-12">
            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-left duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-gray-900">أخبرنا عنك</h2>
                  <p className="text-gray-500">لنبدأ بإعداد حساب المالك الخاص بك</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                    <input 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="أحمد محمد" 
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">رقم الهاتف</label>
                    <input 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="5xxxxxxxx" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                    <input 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="owner@test.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">كلمة المرور</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                      placeholder="••••••••" 
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in slide-in-from-left duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-gray-900">معلومات متجرك</h2>
                  <p className="text-gray-500">كيف سيظهر متجرك للعملاء؟</p>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer">
                      <ImageIcon size={32} />
                      <span className="text-[10px] font-bold mt-1">رفع شعار</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">اسم المتجر</label>
                      <input 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                        placeholder="متجري الرقمي" 
                        value={formData.storeName}
                        onChange={(e) => handleInputChange('storeName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">نوع المتجر</label>
                      <select 
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-bold"
                        value={formData.storeType}
                        onChange={(e) => handleInputChange('storeType', e.target.value)}
                      >
                        <option>كتب إلكترونية</option>
                        <option>دورات</option>
                        <option>برمجيات</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">وصف المتجر</label>
                    <textarea 
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none h-32" 
                      placeholder="اكتب وصفاً جذاباً لمتجرك..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-left duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-gray-900">اختر عنوان متجرك</h2>
                  <p className="text-gray-500">هذا هو الرابط الذي سيزوره عملاؤك</p>
                </div>
                <div className="max-w-md mx-auto space-y-4">
                  <div className="flex items-center gap-2 p-1 pr-4 bg-gray-100 border rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                    <input 
                      className="flex-1 bg-transparent py-3 outline-none font-bold text-left" 
                      placeholder="my-store" 
                      dir="ltr" 
                      value={formData.subdomain}
                      onChange={(e) => handleInputChange('subdomain', e.target.value)}
                    />
                    <span className="text-gray-500 font-bold" dir="ltr">.mystore.com</span>
                  </div>
                  {formData.subdomain && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl animate-in fade-in">
                      <Check size={16} />
                      <span className="text-sm font-bold">هذا النطاق متوفر حالياً!</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in slide-in-from-left duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-gray-900">اختر خطة الاشتراك</h2>
                  <p className="text-gray-500">اختر الخطة التي تناسب احتياجات نموك</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {PLANS.map(plan => (
                    <div key={plan.id} className={`p-6 rounded-3xl border-2 transition-all cursor-pointer ${
                      formData.planId === plan.id ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-50' : 'border-gray-100 hover:border-gray-200'
                    }`} onClick={() => setFormData({...formData, planId: plan.id})}>
                      <h3 className="font-black text-lg text-gray-900">{plan.name}</h3>
                      <div className="my-4">
                        <span className="text-3xl font-black text-indigo-600">{plan.price}</span>
                        <span className="text-gray-500 font-bold text-sm"> ريال/شهر</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                            <Check size={14} className="text-green-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-8 border-t bg-gray-50 flex justify-between items-center">
            <button 
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-white border border-transparent hover:border-gray-200 transition-all disabled:opacity-30 flex items-center gap-2"
            >
              <ChevronRight size={20} />
              <span>السابق</span>
            </button>
            <button 
              onClick={step === 4 ? () => onComplete(formData) : nextStep}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center gap-2"
            >
              <span>{step === 4 ? 'تأكيد وإنشاء المتجر' : 'التالي'}</span>
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreRegistration;
