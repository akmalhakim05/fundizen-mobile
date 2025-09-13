import { CURRENCY } from '../config/constants';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-MY', { 
    style: 'currency', 
    currency: CURRENCY 
  }).format(amount);
};

export const calculateProgress = (raised: number, goal: number): number => {
  return Math.min((raised / goal) * 100, 100);
};