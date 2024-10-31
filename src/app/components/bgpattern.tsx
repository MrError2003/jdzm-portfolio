import * as React from "react";
import { SVGProps } from "react";

const Bgpattern = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" {...props}>
    <defs>
      <pattern
        id="a"
        width={45}
        height={51.96}
        patternTransform="scale(2)"
        patternUnits="userSpaceOnUse"
      >
        <rect width="100%" height="100%" fill="#011526" />
        <path
          fill="none"
          stroke="#025959"
          d="M52.48 44.47a15 15 0 0 1-14.96 0 15 15 0 0 0-7.48 12.96M7.48 44.42a15 15 0 0 1-14.96 0M15 57.44c0-5.35-2.9-10.35-7.52-13.02a15 15 0 0 1 7.48-12.97M7.48 18.5a14.97 14.97 0 0 1-14.98-.03m15.02-.03A15 15 0 0 1 15 5.47a15 15 0 0 0-4.4-10.62m23.8.05A15 15 0 0 0 30 5.53a15 15 0 0 1 7.48 12.96 14.9 14.9 0 0 0 15.02-.03m-22.5 13a15.13 15.13 0 0 1 7.52 13.01m-7.56-39a15 15 0 0 1-14.96 0M7.48 18.5a15 15 0 0 1 7.48 12.96 15 15 0 0 0 15.04 0 15 15 0 0 1 7.48-12.96"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#a)" />
  </svg>
);

export default Bgpattern;