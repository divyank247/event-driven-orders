import { randomUUID } from 'crypto';

export const generateOrderId = (): string => {
  return `order-${randomUUID()}`;
};

export const generateTransactionId = (): string => {
  return `txn-${randomUUID()}`;
};

export const generateReservationId = (): string => {
  return `res-${randomUUID()}`;
};

export const getCurrentDate = (): string => {
  return new Date().toISOString();
};

export const validateOrderRequest = (body: any): boolean => {
  if (!body.customerId || !body.items || !Array.isArray(body.items)) {
    return false;
  }

  if (body.items.length == 0) {
    return false;
  }

  for (const item of body.items) {
    if (!item.productId || !item.quantity || !item.price) {
      return false;
    }

    if (typeof item.quantity != 'number' || typeof item.price != 'number') {
      return false;
    }

    if (item.quantity <= 0 || item.price <= 0) {
      return false;
    }
  }

  return true;
};

export const calculateTotalAmount = (
  items: Array<{ quantity: number; price: number }>
): number => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
