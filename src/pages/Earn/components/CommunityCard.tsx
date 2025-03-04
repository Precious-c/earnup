interface CommunityCardProps {
  name: string;
  communityCount: number;
  image: string;
}

const CommunityCard = ({ name, communityCount, image }: CommunityCardProps) => {
  return (
    <div className="rounded-xl w-[100px] h-[150px] border-[1px] p-[15px] border-stroke-secondary flex flex-col justify-center items-center cursor-pointer">
      <img src={image} alt="" className="w-[70px] h-[70px]" />
      <p className="text-sm font-[550] mt-2 overflow-ellipsis overflow-hidden whitespace-nowrap w-full text-center ">
        {name}
      </p>
      <p className="text-sm font-medium text-[#87868a] flex gap-1 text-center">
        {communityCount}
        <span>
          <svg
            viewBox="0 0 14 15"
            className="svg-icon svg-fill icon__up"
            style={{ width: "14px", height: "14px" }}
          >
            <path
              d="M6.999 9.26c-2.368 0-4.288 1.28-4.288 2.86 0 0 0 1.122 4.288 1.122s4.288-1.123 4.288-1.123c0-1.578-1.92-2.858-4.288-2.858ZM7 7.118A2.859 2.859 0 1 0 7 1.4a2.859 2.859 0 0 0 0 5.718Z"
              stroke="#14D65A"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
      </p>
    </div>
  );
};

export default CommunityCard;
