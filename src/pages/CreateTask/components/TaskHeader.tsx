import { ArrowLeft, MoreVertical, X } from "lucide-react";
// import { useRouter } from "next/navigation";

interface TaskHeaderProps {
  title?: string;
  onClose?: () => void;
  showBackButton?: boolean;
}

export function TaskHeader({
  title = "Muna",
  onClose,
  showBackButton = true,
}: TaskHeaderProps) {
  //   const router = useRouter();

  const handleBack = () => {
    // router.back();
  };

  return (
    <div className="sticky -top-1 z-50 bg-opacity-95 backdrop-blur-sm">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          )}
          <h1 className="text-lg font-medium text-white ml-2 mt-1">{title}</h1>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-[#1C1C1E] rounded-full transition-colors">
            <MoreVertical className="w-6 h-6 text-white" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="sticky top-0 z-10 ">
        <div className="flex items-center py-3">
          <button
            onClick={() => {
              if (step === "select") {
                navigate(-1);
              } else if (step === "payment-method") {
                setStep("select");
              } else if (step === "amount") {
                setStep("payment-method");
              } else {
                setStep("amount");
              }
            }}
            className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium ml-2">
            {step === "select"
              ? "Withdraw"
              : step === "payment-method"
                ? `Select ${selectedOption?.name} Account`
                : step === "amount"
                  ? `Withdraw ${selectedOption?.name}`
                  : "Confirm Withdrawal"}
          </h1>
        </div>
      </div> */
}
