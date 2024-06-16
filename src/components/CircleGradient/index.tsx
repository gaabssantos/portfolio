import { Svg } from "./styles";

function CircleGradient() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="525"
      height="700"
      fill="none"
      viewBox="0 0 625 700"
    >
      <ellipse
        cx="312.5"
        cy="350"
        fill="url(#paint0_radial_16_8)"
        rx="312.5"
        ry="350"
      ></ellipse>
      <defs>
        <radialGradient
          id="paint0_radial_16_8"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 350 -312.5 0 312.5 350)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#763CAC"></stop>
          <stop offset="1" stopColor="#320F85" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </Svg>
  );
}

export default CircleGradient;
