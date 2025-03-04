interface QuestCardProps {
  index: number;
  icon: string;
  title: string;
  points: number;
}
const QuestCard = ({ index, icon, title, points }: QuestCardProps) => {
  return (
    <div className="space-y-3 cursor-pointer">
      <div key={index} className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={icon || "/placeholder.svg"} alt="" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="text-white font-medium">{title}</h3>
            <div className="flex items-center bg-main w-fit px-2 rounded-full">
              <span className=" mt-1 mr-2">{points}</span>
              <svg
                viewBox="0 0 14 14"
                className="svg-icon svg-fill icon__up text-[#14d65a]"
                style={{ width: "14px", height: "14px" }}
              >
                <mask
                  id="svgiconid_kolo-logo-color_a_5_Gn4Xm"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="8"
                  y="3"
                  width="5"
                  height="8"
                >
                  <path
                    d="M8.62 8.622v1.4a4.653 4.653 0 0 0 3.893-2.055 5.623 5.623 0 0 0 .082-.962 5.578 5.578 0 0 0-1.59-3.909 3.241 3.241 0 0 1 .907 2.26c0 .872-.34 1.692-.957 2.31a3.245 3.245 0 0 1-2.31.956H8.62Z"
                    fill="#fff"
                  ></path>
                </mask>
                <g mask="url(#svgiconid_kolo-logo-color_a_5_Gn4Xm)">
                  <mask
                    id="svgiconid_kolo-logo-color_b_5_Gn4Xm"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="8"
                    y="2"
                    width="5"
                    height="9"
                  >
                    <path d="M12.742 2.95H8.476v7.218h4.266V2.95Z" fill="#fff"></path>
                  </mask>
                  <g mask="url(#svgiconid_kolo-logo-color_b_5_Gn4Xm)">
                    <path
                      fill="url(#svgiconid_kolo-logo-color_c_5_Gn4Xm)"
                      d="M8.47 2.943h4.284v7.238H8.47z"
                    ></path>
                  </g>
                </g>
                <mask
                  id="svgiconid_kolo-logo-color_d_5_Gn4Xm"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="12"
                  height="7"
                >
                  <path
                    // pid="3"
                    d="M.008 6.64H1.41a5.558 5.558 0 0 1 1.629-3.6 5.573 5.573 0 0 1 2.998-1.558A4.646 4.646 0 0 1 9.754.816c.786.19 1.532.588 2.152 1.192A6.968 6.968 0 0 0 9.829.596 7.002 7.002 0 0 0 .008 6.639Z"
                    fill="#fff"
                  ></path>
                </mask>
                <g mask="url(#svgiconid_kolo-logo-color_d_5_Gn4Xm)">
                  <mask
                    id="svgiconid_kolo-logo-color_e_5_Gn4Xm"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="14"
                    height="8"
                  >
                    <path d="M12.053-.146H-.137v6.931h12.19v-6.93Z" fill="#fff"></path>
                  </mask>
                  <g mask="url(#svgiconid_kolo-logo-color_e_5_Gn4Xm)">
                    <path
                      fill="url(#svgiconid_kolo-logo-color_f_5_Gn4Xm)"
                      d="M-.15-.156h12.208v6.944H-.15z"
                    ></path>
                  </g>
                </g>
                <path
                  d="M.115 8.264a7 7 0 1 0 11.877-6.171l-.042-.043-.043-.042A4.639 4.639 0 0 0 9.755.816a4.679 4.679 0 0 0-3.717.666 4.645 4.645 0 0 0-.688.568 4.667 4.667 0 0 0 3.275 7.967v-1.4A3.24 3.24 0 0 1 6.34 7.66a3.245 3.245 0 0 1-.957-2.31c0-.872.34-1.693.957-2.31a3.246 3.246 0 0 1 2.31-.956 3.24 3.24 0 0 1 2.36 1.007 5.578 5.578 0 0 1 1.578 4.299 5.652 5.652 0 0 1-.193 1.12 5.568 5.568 0 0 1-1.435 2.45A5.563 5.563 0 0 1 7 12.6a5.565 5.565 0 0 1-3.96-1.64 5.56 5.56 0 0 1-1.629-4.32H.01a7.03 7.03 0 0 0 .106 1.624Z"
                  fill="currentColor"
                ></path>
                <defs>
                  <linearGradient
                    id="svgiconid_kolo-logo-color_c_5_Gn4Xm"
                    x1="12.681"
                    y1="3.557"
                    x2="8.882"
                    y2="9.434"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="currentColor"></stop>
                  </linearGradient>
                  <linearGradient
                    id="svgiconid_kolo-logo-color_f_5_Gn4Xm"
                    x1="10.9"
                    y1="1.493"
                    x2=".978"
                    y2="4.414"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="currentColor" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="currentColor"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <svg
          className="w-6 h-6 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
};

export default QuestCard;
