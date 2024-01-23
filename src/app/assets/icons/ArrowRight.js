import colors from '@/app/utils/colors';
import * as React from 'react';

const ArrowRight = ({ color = colors.white, ...props }) => (
  <svg width="1em" height="1em" fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.5 9 4-4m0 0-4-4m4 4h-12"
    />
  </svg>
);
export default ArrowRight;
