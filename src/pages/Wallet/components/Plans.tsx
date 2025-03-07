
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PlanCard from "@/pages/Wallet/components/PlanCard";
import crypoCardsImg from "@/assets/images/card-type-1f39398b.png";
import cryptoWalletImg from "@/assets/images/wallet-bg-7be46582.png";
import tonWalletImg from "@/assets/images/web3-type-6249bc51.png";
import { Award, Crown, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const plans:Plan[] = [
        {
          id: "basic",
          name: "Basic Plan",
          image: cryptoWalletImg,
          price: 1000,
          icon: <Star className="h-5 w-5" />,
          color: "#4CD964",
          description: "Get started with basic rewards and features",
          features: [
            "Limited tasks per day",
            "Base rate for all tasks (1x multiplier)",
            "Weekly rewards",
            "₦2,000 minimum withdrawal threshold",
          ],
        },
        {
          id: "gold",
          name: "Gold Plan",
          price: 5000,
          image: crypoCardsImg,
          icon: <Award className="h-5 w-5" />,
          color: "#FFD700",
          description: "Unlock premium features and weekly rewards",
          popular: true,
          features: [
            "Up to 25 tasks per day, including premium tasks",
            "1.5x earnings multiplier on all tasks",
            "15% referral bonus on all earnings",
            "₦1,000 minimum withdrawal threshold",
          ],
        },
        {
          id: "diamond",
          name: "Diamond Plan",
          price: 10000,
          image: tonWalletImg,
          icon: <Crown className="h-5 w-5" />,
          color: "#00BFFF",
          description: "Experience VIP treatment and priority support",
          features: [
            "Unlimited tasks per day, including VIP tasks",
            "2x earnings multiplier on all tasks",
            "No fees on withdrawals",
            "No minimum withdrawal threshold",
            "Priority support",
          ],
        },
      ]


export function Plans() {
    const navigate = useNavigate()
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
    
    const handlePlanClick =(planId: string) => {
        console.log(`Plan clicked: ${planId}`);
        navigate(`/plans/${planId}`)
    }

  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {plans.map((plan) => (
            <CarouselItem key={plan.id}>
                <div className="p-1">
                    <PlanCard plan={plan} onClick={() => handlePlanClick(plan.id)} hoveredPlan={hoveredPlan} setHoveredPlan={setHoveredPlan}
                    />
                </div>
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
