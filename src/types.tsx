export interface Plan { 
  id: string 
  name: string
  price: number
  icon: React.ReactNode
  color: string
  image: string;
  description: string
  features: string[]
  popular?: boolean
}

export interface SubTask {
  id: string
  title: string
  points: number
  type: "telegram_follow" | "twitter_retweet" | "telegram_boost" | "other"
  status: "pending" | "completed" | "failed"
  link?: string
}

export interface Task {
  id: string
  title: string
  description?: string

  icon: "telegram" | "youtube" | "x" | string
  link?: string
  totalPoints: number
  type: "single" | "multi"
  subTasks?: SubTask[]
  status: "pending" | "completed" | "failed"
  backgroundPattern?: "coins" | "none"
}

export interface TopUpOption {
  id: string
  name: string
  symbol: string
  icon: string
  address?: string
  memo?: string
  minimum?: string
  confirmations?: number
  fee?: string
}
  
  