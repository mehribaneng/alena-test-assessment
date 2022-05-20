import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CloseIcon = ({
  width = 24,
  height = 24,
  fill = "#1D1917",
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.937 4.929a1 1 0 0 1 1.414 0L19.08 17.657a1 1 0 1 1-1.414 1.414L4.937 6.343a1 1 0 0 1 0-1.414Z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.937 19.071a1 1 0 0 1 0-1.414L17.665 4.929a1 1 0 1 1 1.414 1.414L6.351 19.071a1 1 0 0 1-1.414 0Z"
      fill={fill}
    />
  </Svg>
);

const MemoClose = React.memo(CloseIcon);

export default MemoClose;
