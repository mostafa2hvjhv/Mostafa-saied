
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowLeft, Lock } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <ShoppingBag size={20} />
              </div>
              <h2 className="text-xl font-black text-gray-900">سلة التسوق</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Cart Item */}
            <div className="flex gap-4 p-4 bg-gray-50 rounded-[1.5rem] relative group">
              <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shrink-0 border border-gray-100">
                <img src="https://picsum.photos/200/200?random=31" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-black text-gray-900 text-sm line-clamp-1">دليل العمل الحر الشامل 2025</h3>
                <p className="text-xs text-gray-500 font-bold">الكمية: 1</p>
                <p className="text-indigo-600 font-black text-sm">150 ريال</p>
              </div>
              <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50 space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-gray-500">
              <span>المجموع الفرعي</span>
              <span>150 ريال</span>
            </div>
            <div className="flex justify-between items-center text-xl font-black text-gray-900">
              <span>الإجمالي العام</span>
              <span>150 ريال</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
            >
              <Lock size={20} />
              <span>إتمام الطلب</span>
            </button>
            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">جميع المعاملات مشفرة وآمنة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
