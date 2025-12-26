
import React from 'react';

export const COLORS = {
  primary: '#4F46E5', // Indigo 600
  secondary: '#10B981', // Emerald 500
  accent: '#F59E0B', // Amber 500
  danger: '#EF4444', // Red 500
};

export const CATEGORIES = [
  'كتب إلكترونية',
  'دورات تدريبية',
  'قوالب تصميم',
  'برمجيات',
  'صور فوتوغرافية',
  'أدوات تسويقية'
];

export const PLANS = [
  { id: 'free', name: 'الخطة المجانية', price: 0, features: ['10 منتجات', 'مساحة 1GB', 'دعم أساسي'] },
  { id: 'pro', name: 'الخطة الاحترافية', price: 99, features: ['منتجات غير محدودة', 'مساحة 50GB', 'نطاق مخصص', 'دعم VIP'] },
  { id: 'enterprise', name: 'خطة الشركات', price: 299, features: ['كل مميزات برو', 'تخصيص كامل', 'مدير حساب خاص', 'API مفتوح'] }
];
