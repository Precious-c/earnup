import { CommunityIcon } from "@/assets/icons/CommunityIcon";
import CommunityCard from "./CommunityCard";
import okxImage from "@/assets/images/okx-logo-1732644311.png";
import catsImage from "@/assets/images/cats-logo.png";
import koloImage from "@/assets/images/kolocoin.png";

export const Communities = () => {
  return (
    <div className="self-center w-full max-w-[556px] mb-3">
      <div className="flex mb-3">
        <CommunityIcon className="mr-2" />
        <h3 className="">Communities</h3>
      </div>

      <div className="max-w-full flex gap-3 overflow-x-scroll overflow-y-hidden">
        <CommunityCard name="OKX" image={okxImage} communityCount={22500} />
        <CommunityCard name="CATS" image={catsImage} communityCount={1022500} />
        <CommunityCard
          name="MUNA WALLET"
          image={koloImage}
          communityCount={200500}
        />
        <CommunityCard name="OKX" image={okxImage} communityCount={22500} />
        <CommunityCard name="OKX" image={okxImage} communityCount={22500} />
      </div>
    </div>
  );
};
