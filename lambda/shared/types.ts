export enum OrderStatus {
  PENDING = 'PENDING',
  PAYMENT_PROCESSING = 'PAYMENT_PROCESSING',
  PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  INVENTORY_PROCESSING = 'INVENTORY_PROCESSING',
  INVENTORY_SUCCESS = 'INVENTORY_SUCCESS',
  INVENTORY_FAILED = 'INVENTORY_FAILED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

// Order interfaces
export interface Order {
  orderId: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  paymentResult?: PaymentResult;
  inventoryResult?: InventoryResult;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

// Service interfaces
export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  errorMessage?: string;
  processedAt: string;
}

export interface InventoryResult {
  success: boolean;
  reservationId?: string;
  errorMessage?: string;
  processedAt: string;
}

//Event interfaces
export interface OrderCreatedEvent {
  orderId: string;
  customerId: string;
  totalAmount: number;
  timestamp: string;
}

export interface PaymentCompleteEvent {
  orderId: string;
  success: boolean;
  transactionId?: string;
  errorMessage?: string;
  timestamp: string;
}

export interface InventoryCompleteEvent {
  orderId: string;
  success: boolean;
  reservationId?: string;
  errorMessage?: string;
  timestamp: string;
}

// req/res

export interface CreateOrderRequest {
  customerId: string;
  items: OrderItem[];
}

export interface CreateOrderResponse {
  orderId: string;
  status: OrderStatus;
  message: string;
}