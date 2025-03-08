import image from "@/assets/images/card-type-1f39398b.png"
import { useNavigate } from "react-router-dom"

const PlansWidget = () => {
    const navigate = useNavigate()

    const handlePlanClick =() => {
        navigate(`/plans`)
    }
    
  return (
    <button className={`w-full bg-[#1C1C1E] border-[1px] border-[#ffffff14] rounded-2xl px-5 py-4 text-left relative overflow-hidden mb-4 flex min-h-[130px] gap-2 flex-col justify-center transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:border-accent-green`} //bg[#131513]
        onClick={handlePlanClick}
    >
      <div className="max-w-[70%] mt-2">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-white">Membership Plans</h3> 
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1">
          </div>
        </div>
        <p className="text-secondary text-sm mb-4 w-[90%]">Upgrade your membership to earn more rewards and unlock premium features</p>
          {/* <span className="inline-block px-3 py-1 bg-accent-green rounded-full text-xs text-white">
            See Plans
          </span> */}
        
      </div>
      <div
        className="w-[157px] h-[128px] bg-cover bg-center  bg-no-repeat absolute bottom-0 -right-4 "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </button>
  )
}

export default PlansWidget
