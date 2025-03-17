import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { plansDataArray } from "@/data";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

// const paymentMethods = [
//   {
//     id: "crypto",
//     icon: <Wallet className="w-6 h-6" />,
//     title: "Pay with Crypto",
//     description: "Use your favorite cryptocurrency",
//   },
//   {
//     id: "card",
//     icon: <CreditCard className="w-6 h-6" />,
//     title: "Credit/Debit Card",
//     description: "Instant payment via card",
//   },
//   {
//     id: "bank",
//     icon: <ArrowUpCircle className="w-6 h-6" />,
//     title: "Bank Transfer",
//     description: "Direct bank transfer",
//   },
// ]

const plansPage = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Make sure we always have a valid current plan
  const currentPlan = plansDataArray[currentIndex] || plansDataArray[0];

  useEffect(() => {
    if (!api) return;

    // Set initial index
    setCurrentIndex(api.selectedScrollSnap());

    // Create the select handler
    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      console.log("Carousel changed to index:", selectedIndex);
      setCurrentIndex(selectedIndex);
    };

    // Subscribe to select event
    api.on("select", onSelect);

    // Cleanup function to unsubscribe from the event
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (plansDataArray.length == 0) {
    return null;
  }

  return (
    <div className="min-h-screen text-white pb-48">
      <button
        onClick={() => navigate(-1)}
        className="mt-2 pt-2 mr-3 hover:bg-[#1C1C1E] rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <main className="pt-4 ">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {plansDataArray.map((plan) => {
              return (
                <CarouselItem
                  key={plan.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative w-full mb-36 h-fit sm:h-[300px] -mr-1">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full -z-10 absolute max-w-[433px] max-h-[269px] min-w-[295px]"
                    />
                    <div className="flex flex-col pl-7 pt-4 px-4 py-3 rounded-3xl">
                      <h1 className="text-xl font-semibold mt-2">
                        {plan.name}
                      </h1>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 ">
                    <p className="text-[15px] text-white font-poppins tracking-wide px-2 mt-3 pb-2">
                      {plan.description}
                    </p>
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center rounded-lg p-1 "
                      >
                        <div className="bg-stroke-secondary rounded-lg p-3 mr-4 flex items-center justify-center">
                          <ShieldCheck className="w-7 h-7" strokeWidth={2} />
                        </div>
                        <span className="text-[17px] tracking-wide text-gray-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Payment Methods */}
                  {/* <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className="w-full flex items-center bg-[#1C1C1E] rounded-lg p-4 hover:bg-[#2C2C2E] transition-colors"
                    >
                      <div className="mr-4">{method.icon}</div>
                      <div className="text-left">
                        <div className="font-medium">{method.title}</div>
                        <div className="text-sm text-gray-400">{method.description}</div>
                      </div>
                    </button>
                  ))}
                </div> */}

                  {/* Price and Action */}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bottom-80 right-[450px] w-10 h-10 sticky bg-transparent " />
          <CarouselNext className="bottom-80 left-[450px] w-10 h-10 sticky bg-transparent" />
        </Carousel>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-black p-4 border-t border-gray-800 z-50 w-full mb-[60px]">
        <div className="flex items-center justify-between mb-4 max-w-screen-xl mx-auto">
          <div className="text-gray-400">Total amount</div>
          <div className="text-xl font-bold">₦{currentPlan?.price}</div>
        </div>
        {currentPlan && (
          <button
            className={` w-full max-w-screen-xl mx-auto py-4 rounded-lg font-medium transition-colors text-lg flex items-center justify-center`}
            style={{ backgroundColor: currentPlan.color }}
          >
            Purchase now
          </button>
        )}
      </div>
    </div>
  );
};

export default plansPage;
