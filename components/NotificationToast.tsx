
import React, { useEffect, useState } from 'react';
import { Bell, X, CheckCircle, AlertCircle, ShoppingCart } from 'lucide-react';

interface NotificationToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'order';
  onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ message, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out animation
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="text-green-500" size={20} />,
    error: <AlertCircle className="text-red-500" size={20} />,
    info: <Bell className="text-indigo-500" size={20} />,
    order: <ShoppingCart className="text-blue-500" size={20} />
  };

  const bgColors = {
    success: 'bg-green-50 border-green-100',
    error: 'bg-red-50 border-red-100',
    info: 'bg-indigo-50 border-indigo-100',
    order: 'bg-blue-50 border-blue-100'
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[200] transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`}>
      <div className={`flex items-center gap-4 p-4 rounded-2xl border shadow-2xl min-w-[300px] ${bgColors[type]}`}>
        <div className="p-2 bg-white rounded-xl shadow-sm">
          {icons[type]}
        </div>
        <div className="flex-1 pr-2">
          <p className="text-xs font-black text-gray-900">{message}</p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;
