interface OptionCardProps {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
  onClick?: () => void;
}

const OptionCard = ({ title, description, image, comingSoon, onClick }: OptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${
        comingSoon
          ? "bg-[#252526eb] cursor-default"
          : "bg[#131513] border-[1px] border-[#ffffff14] cursor-pointer"
      } rounded-2xl px-5 py-4 text-left relative overflow-hidden mb-4 flex min-h-[130px] gap-2 flex-col justify-center w-full p-4 `}
    >
      <div className="max-w-[60%]">
        <h3 className="text-xl font-semibold text-white mb-3..">{title}</h3>
        <p className="text-secondary text-sm mb-4">{description}</p>
        {comingSoon && (
          <span className="inline-block px-3 py-1 bg-stroke-secondary rounded-full text-xs text-secondary">
            Coming Soon
          </span>
        )}
      </div>
      <div
        className="w-[157px] h-[128px] bg-cover bg-center  bg-no-repeat absolute bottom-0 right-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </button>
  );
};

export default OptionCard;
