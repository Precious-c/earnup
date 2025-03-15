import { LucideIcon } from "lucide-react";

export interface Plan {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  color: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface SubTask {
  id: string;
  title: string;
  points: number;
  type: "telegram_follow" | "twitter_retweet" | "telegram_boost" | "other";
  status: "pending" | "completed" | "failed";
  link?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;

  icon: "telegram" | "youtube" | "x" | string;
  link?: string;
  totalPoints: number;
  type: "single" | "multi";
  subTasks?: SubTask[];
  status: "pending" | "completed" | "failed";
  backgroundPattern?: "coins" | "none";
}

export interface TopUpOption {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  address?: string;
  memo?: string;
  minimum?: string;
  confirmations?: number;
  fee?: string;
}

// export interface WithdrawOption {
//   id: string
//   name: string
//   symbol: string
//   icon: string
//   fee: string
//   minAmount: string
//   processingTime: string
//   network?: string
// }

// export interface WithdrawOption {
//   id: string;
//   name: string;
//   icon: string;
//   fee: string;
//   minAmount: string;
//   processingTime: string;
// }

export interface WithdrawForm {
  address?: string;
  amount: string;
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
}

// export interface SavedPaymentMethod {
//   id: string;
//   type: "bank" | "crypto";
//   accountName: string;
//   accountNumber?: string;
//   bankName?: string;
//   address?: string;
// }

export interface PaymentMethod {
  id: string;
  type: "bank" | "crypto";
  accountName: string;
  accountNumber?: string;
  bankName?: string;
  address?: string;
}

export interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  endIcon?: LucideIcon;
  href: string;
  external?: boolean;
}

export interface SavedPaymentMethod {
  id: string;
  type: "crypto" | "bank";
  name: string;
  accountName?: string;
  details: string;
  icon: string;
  isDefault?: boolean;
}

export interface WithdrawOption {
  id: string;
  name: string;
  icon: string;
  fee: string;
  minAmount: string;
  processingTime: string;
}

export interface WithdrawFormData {
  amount: string;
  paymentMethodId: string;
}
