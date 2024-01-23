import * as React from 'react';

const Facebook = props => (
  <svg width="1em" height="1em" fill="none" {...props}>
    <rect width={27} height={27} x={1} y={0.5} stroke="#002175" rx={13.5} />
    <path
      fill="#002175"
      fillRule="evenodd"
      d="M9.445 12.667c-.782 0-.945.153-.945.889v1.333c0 .735.163.889.945.889h1.891v5.333c0 .735.164.889.946.889h1.89c.783 0 .946-.154.946-.889v-5.333h2.123c.594 0 .747-.109.91-.645l.405-1.333c.279-.919.107-1.133-.91-1.133h-2.528v-2.223c0-.49.423-.888.946-.888h2.69c.783 0 .946-.154.946-.89V6.89c0-.736-.163-.889-.945-.889h-2.691c-2.611 0-4.728 1.99-4.728 4.444v2.223h-1.89Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Facebook;
