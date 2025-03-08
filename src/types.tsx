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