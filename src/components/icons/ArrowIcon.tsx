import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowIcon = ({
  width = 18,
  height = 18,
  fill = "#867D7B",
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.363 17.736a.9.9 0 1 0 1.273-1.272L3.073 9.9H17.1a.9.9 0 1 0 0-1.8H3.071l6.565-6.565A.9.9 0 1 0 8.363.264l-8.1 8.1a.9.9 0 0 0 .02 1.292l8.08 8.08Z"
      fill={fill}
    />
  </Svg>
);

const MemoArrowIcon = React.memo(ArrowIcon);

export default MemoArrowIcon;
