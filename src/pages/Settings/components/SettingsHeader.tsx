import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  route: string | number;
  title: string;
}

const SettingsHeader = ({ route, title }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-10  bg-opacity-95 backdrop-blur-sm">
      <div className="flex items-center py-3">
        <button
          onClick={() => navigate(`/${route}`)}
          className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium ml-2 mt-1">{title}</h1>
      </div>
    </div>
  );
};

export default SettingsHeader;
