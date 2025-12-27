
import React from 'react';

export type UserRole = 'OWNER' | 'CUSTOMER' | 'ADMIN' | 'GUEST';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
  sales: number;
  downloads: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  price: number;
  date: string;
  status: 'COMPLETED' | 'PENDING' | 'CANCELLED';
}

export interface StoreConfig {
  name: string;
  subdomain: string;
  logo: string;
  primaryColor: string;
  templateId: string;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}