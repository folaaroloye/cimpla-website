import * as React from 'react';

const Twitter = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <rect width={27} height={27} x={1} y={0.5} stroke="#002175" rx={13.5} />
    <path
      fill="#002175"
      d="m6.5 22 6.71-6.71L6.5 22Zm16-16-6.71 6.71L22.5 6Zm-6.71 6.71L10.944 6H6.5l6.71 9.29m2.58-2.58L22.5 22h-4.444l-4.846-6.71"
    />
    <path
      stroke="#002175"
      strokeLinecap="square"
      d="m6.5 22 6.71-6.71m0 0L6.5 6h4.444l4.846 6.71m-2.58 2.58L18.056 22H22.5l-6.71-9.29M22.5 6l-6.71 6.71"
    />
  </svg>
);
export default Twitter;
