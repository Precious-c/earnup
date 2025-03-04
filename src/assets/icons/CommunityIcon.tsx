interface CommunityIconProps {
  className?: string;
}
export const CommunityIcon: React.FC<CommunityIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    className={`svg-icon svg-fill icon__up ${className || ""}`}
    style={{ width: "20px", height: "20px" }}
  >
    <rect
      // pid="0"
      x="6.431"
      y="-3.319"
      width="19.5"
      height="19.5"
      rx="9.75"
      transform="rotate(30 6.431 -3.319)"
      fill="url(#svgiconid_top-communities-icon_a_33_oFT0U)"
      stroke="url(#svgiconid_top-communities-icon_b_33_oFT0U)"
      stroke-width=".5"
    ></rect>
    <circle
      // pid="1"
      cx="10"
      cy="10"
      r="5"
      stroke="url(#svgiconid_top-communities-icon_c_33_oFT0U)"
      stroke-width="1.5"
    ></circle>
    <circle
      // pid="2"
      cx="10"
      cy="5"
      r="2"
      fill="#34C5FF"
      stroke="#2C2C2D"
      stroke-width="1.5"
    ></circle>
    <circle
      // pid="3"
      cx="10"
      cy="15"
      r="2"
      fill="#34C5FF"
      stroke="#2C2C2D"
      stroke-width="1.5"
    ></circle>
    <circle
      // pid="4"
      cx="15"
      cy="10"
      r="2"
      fill="#34C5FF"
      stroke="#2C2C2D"
      stroke-width="1.5"
    ></circle>
    <circle
      // pid="5"
      cx="5"
      cy="10"
      r="2"
      fill="#34C5FF"
      stroke="#2C2C2D"
      stroke-width="1.5"
    ></circle>
    <defs>
      <linearGradient
        id="svgiconid_top-communities-icon_a_33_oFT0U"
        x1="16.34"
        y1="-3.66"
        x2="16.34"
        y2="16.34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#34C5FF"></stop>
        <stop offset=".54" stop-color="#7DDAFF"></stop>
        <stop offset="1" stop-color="#2B93BD"></stop>
      </linearGradient>
      <linearGradient
        id="svgiconid_top-communities-icon_b_33_oFT0U"
        x1="5.21"
        y1=".063"
        x2="28.518"
        y2="11.433"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#C4EEFF"></stop>
        <stop offset="1" stop-color="#33C4FF" stop-opacity=".19"></stop>
      </linearGradient>
      <linearGradient
        id="svgiconid_top-communities-icon_c_33_oFT0U"
        x1="5"
        y1="16.25"
        x2="15.417"
        y2="4.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".255" stop-color="#2C2C2E"></stop>
        <stop offset="1" stop-color="#2C2C2E" stop-opacity=".23"></stop>
      </linearGradient>
    </defs>
  </svg>
);
