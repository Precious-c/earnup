import { Plan } from "./Plans";

interface PlanCardProps {
  plan: Plan;
  hoveredPlan: string | null;
  setHoveredPlan: (planId: string | null) => void;
  onClick: () => void;
}

const PlanCard = ({plan, onClick, hoveredPlan, setHoveredPlan}: PlanCardProps ) => {
  const { id, name, description, image, popular, color, icon, price} = plan;

  return (
    <button
      onClick={onClick}
      key={id}
      className={`w-full bg-[#1C1C1E] border-[1px] border-[#ffffff14] rounded-2xl px-5 py-4 text-left relative overflow-hidden mb-4 flex min-h-[130px] gap-2 flex-col justify-center transition-all duration-300 cursor-pointer transform ${
              hoveredPlan === plan.id ? "scale-[1.02]" : ""
            }`} //bg[#131513]
      style={{boxShadow: hoveredPlan === plan.id ? `0 0 0 2px ${plan.color}` : "none",}}
      onMouseEnter={() => setHoveredPlan(plan.id)}
      onMouseLeave={() => setHoveredPlan(null)}
    >
      <div className="max-w-[70%] mt-2">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{name}</h3> 
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1" 
              style={{  color: color }}
              >
                {icon}
          </div>
        </div>
        <p className="text-secondary text-sm mb-4 w-[90%]">{description}</p>
       
        {popular && (
                <div className="absolute top-0 right-0">
                  <div
                    className="text-xs font-bold px-3 py-[4px] rounded-bl-lg"
                    style={{ backgroundColor: color, color: "#000" }}
                  >
                    POPULAR
                  </div>
                </div>
              )}

              <div className="text-lg font-bold" style={{ color: plan.color }}>
                ₦{price.toLocaleString()}
              </div>
          {/* <span className="inline-block px-3 py-1 bg-accent-green rounded-full text-xs text-white">
            Select Plan
          </span> */}
        
      </div>
      <div
        className="w-[157px] h-[128px] bg-cover bg-center  bg-no-repeat absolute bottom-0 -right-4 "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </button>
  );
};

export default PlanCard;
