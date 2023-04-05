type PropType = {
  style: string;
};

const Prismic = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="512"
      height="128"
      viewBox="0, 0, 512, 128"
      className={style}
    >
      <g>
        <path d="M120.438,71.341 L130.15,81.071 C130.918,81.843 131.353,82.892 131.353,83.982 L131.353,89.456 C131.353,104.122 129.828,109.443 126.965,114.807 C124.169,120.104 119.845,124.438 114.555,127.247 C109.201,130.11 103.892,131.638 89.255,131.638 L63.552,131.638 C63.22,131.637 62.922,131.436 62.796,131.129 C62.669,130.822 62.74,130.469 62.974,130.234 L62.974,130.238 L72.683,120.508 C73.451,119.736 74.496,119.301 75.586,119.301 L87.466,119.301 C98.444,119.301 102.422,118.156 106.437,116.003 C110.405,113.897 113.649,110.647 115.747,106.675 C117.857,102.719 118.999,98.796 119.037,88.205 L119.038,71.922 C119.039,71.591 119.239,71.293 119.545,71.167 C119.851,71.04 120.203,71.108 120.438,71.341 z M1.4,63.11 L11.116,72.84 C11.884,73.611 12.319,74.661 12.319,75.751 L12.319,87.657 C12.319,98.659 13.46,102.649 15.61,106.671 C17.707,110.643 20.949,113.893 24.916,115.999 C28.931,118.153 32.913,119.297 43.89,119.297 L59.592,119.297 C59.925,119.296 60.226,119.496 60.354,119.804 C60.483,120.111 60.413,120.466 60.177,120.701 L50.461,130.432 C49.694,131.203 48.648,131.638 47.562,131.638 L42.099,131.638 C27.461,131.638 22.155,130.11 16.802,127.243 C11.51,124.435 7.185,120.101 4.388,114.803 C1.565,109.514 0.043,104.266 0.001,90.058 L-0,63.691 C0.002,63.36 0.202,63.062 0.507,62.936 C0.813,62.809 1.165,62.877 1.4,63.11 z M193.509,36.661 C197.337,36.661 200.782,37.371 203.842,38.789 C206.903,40.205 209.51,42.154 211.667,44.622 C213.867,47.173 215.533,50.14 216.567,53.346 C217.682,56.692 218.238,60.294 218.238,64.144 C218.268,67.819 217.668,71.471 216.465,74.942 C215.37,78.134 213.69,81.092 211.51,83.667 C209.396,86.133 206.782,88.121 203.842,89.5 C200.773,90.935 197.42,91.663 194.031,91.628 C191.666,91.628 189.581,91.372 187.771,90.863 C186.097,90.409 184.486,89.75 182.974,88.9 C181.698,88.184 180.508,87.326 179.427,86.34 C178.54,85.53 177.736,84.635 177.024,83.667 C176.852,83.667 176.712,83.806 176.71,83.978 L176.71,110.393 C176.71,113.039 174.565,115.184 171.92,115.184 L168.984,115.184 C166.338,115.184 164.193,113.039 164.193,110.393 L164.193,42.761 C164.193,40.117 166.336,37.97 168.984,37.97 L172.157,37.97 C174.326,37.97 176.085,39.726 176.085,41.898 L176.085,45.613 C176.085,45.73 176.18,45.821 176.293,45.821 C178.103,42.622 180.535,40.3 183.599,38.841 C186.697,37.379 190.084,36.634 193.509,36.661 z M99.917,50.769 L109.629,60.51 C110.397,61.281 110.829,62.327 110.829,63.42 L110.829,94.626 C110.829,103.713 103.479,111.081 94.41,111.081 L84.015,111.081 C83.686,111.079 83.39,110.883 83.262,110.581 C83.133,110.279 83.196,109.929 83.422,109.691 L83.422,109.688 L96.074,96.418 C96.952,95.54 97.588,94.516 97.987,93.419 C98.336,92.49 98.514,91.505 98.513,90.512 L98.513,51.35 C98.513,51.017 98.714,50.718 99.021,50.591 C99.328,50.463 99.682,50.534 99.917,50.769 z M21.914,83.605 L21.91,83.605 L35.155,96.286 C36.029,97.164 37.056,97.8 38.146,98.199 C39.045,98.542 40.025,98.729 41.049,98.729 L80.124,98.729 C80.456,98.731 80.754,98.932 80.88,99.239 C81.007,99.545 80.936,99.898 80.702,100.133 L70.982,109.867 C70.214,110.635 69.169,111.07 68.083,111.07 L36.943,111.07 C32.584,111.065 28.405,109.329 25.326,106.243 C22.247,103.157 20.52,98.974 20.525,94.615 L20.525,84.197 C20.526,83.869 20.723,83.573 21.025,83.445 C21.327,83.316 21.676,83.379 21.914,83.605 z M495.999,36.661 C499.202,36.661 502.416,37.298 505.652,38.57 C506.885,39.056 508.34,39.923 510.015,41.17 C511.117,41.99 511.814,43.244 511.928,44.613 C512.043,45.982 511.565,47.334 510.615,48.326 L508.677,50.348 C506.975,52.127 504.201,52.326 502.263,50.809 C501.831,50.463 501.378,50.146 500.906,49.858 C499.43,48.948 497.733,48.457 495.999,48.439 C493.706,48.439 491.651,48.878 489.845,49.748 C488.079,50.588 486.5,51.774 485.201,53.237 C483.908,54.702 482.915,56.406 482.279,58.254 C481.618,60.146 481.283,62.137 481.288,64.141 C481.288,66.181 481.618,68.141 482.279,70.032 C482.938,71.922 483.914,73.597 485.205,75.049 C486.502,76.512 488.08,77.699 489.845,78.541 C491.651,79.411 493.706,79.85 495.999,79.85 C497.948,79.85 499.758,79.429 501.425,78.595 C501.766,78.424 502.131,78.193 502.522,77.904 C504.516,76.437 507.299,76.73 508.943,78.581 L510.845,80.716 C511.757,81.741 512.16,83.121 511.942,84.475 C511.724,85.829 510.909,87.013 509.722,87.7 C506.708,89.456 503.404,90.658 499.966,91.247 C498.434,91.5 497.114,91.628 495.999,91.628 C492.36,91.649 488.75,90.983 485.358,89.664 C482.121,88.422 479.173,86.529 476.696,84.102 C474.21,81.625 472.242,78.678 470.907,75.432 C469.481,72.05 468.768,68.287 468.768,64.144 C468.768,60.002 469.481,56.239 470.907,52.856 C472.242,49.611 474.21,46.664 476.696,44.187 C479.173,41.76 482.121,39.867 485.358,38.625 C488.75,37.306 492.36,36.64 495.999,36.661 z M319.556,36.661 C322.894,36.661 326.2,37.261 329.469,38.46 C330.654,38.896 331.974,39.7 333.433,40.874 C334.512,41.743 335.162,43.037 335.214,44.422 C335.267,45.807 334.717,47.147 333.707,48.096 L332.149,49.562 C330.465,51.146 327.89,51.301 326.028,49.931 C323.487,48.066 321.223,47.13 319.245,47.13 C317.574,47.13 315.94,47.569 314.338,48.439 C312.74,49.313 311.939,50.728 311.939,52.692 C311.939,54.294 312.597,55.456 313.921,56.184 C315.245,56.908 316.912,57.53 318.931,58.038 C320.949,58.546 323.121,59.073 325.45,59.618 C327.783,60.166 329.955,61 331.974,62.126 C333.992,63.252 335.66,64.795 336.983,66.763 C338.303,68.726 338.965,71.414 338.965,74.833 C338.965,77.959 338.322,80.592 337.035,82.738 C335.795,84.835 334.079,86.61 332.025,87.92 C329.895,89.26 327.548,90.219 325.088,90.754 C322.555,91.331 319.964,91.625 317.366,91.628 C313.471,91.628 309.888,91.043 306.615,89.883 C305.335,89.426 303.8,88.512 302.008,87.137 C300.906,86.292 300.224,85.01 300.141,83.624 C300.057,82.238 300.58,80.883 301.573,79.912 L302.871,78.639 C304.663,76.882 307.507,76.805 309.391,78.464 C310.151,79.133 310.809,79.649 311.365,80.011 C313.208,81.214 315.453,81.813 318.093,81.813 C319,81.813 319.94,81.704 320.913,81.484 C321.889,81.265 322.792,80.903 323.626,80.395 C324.46,79.883 325.14,79.25 325.663,78.486 C326.182,77.722 326.445,76.833 326.445,75.816 C326.445,73.995 325.783,72.65 324.46,71.78 C323.139,70.906 321.468,70.196 319.45,69.651 C317.293,69.074 315.119,68.565 312.93,68.127 C310.66,67.674 308.465,66.902 306.41,65.834 C304.406,64.791 302.686,63.275 301.401,61.417 C300.081,59.526 299.419,56.908 299.419,53.566 C299.419,50.659 299.993,48.132 301.138,45.986 C302.233,43.903 303.786,42.096 305.679,40.698 C307.626,39.283 309.822,38.246 312.151,37.641 C314.566,36.99 317.055,36.661 319.556,36.661 z M450.514,37.97 C453.162,37.97 455.304,40.117 455.304,42.761 L455.304,85.528 C455.304,88.174 453.16,90.319 450.514,90.319 L447.578,90.319 C444.932,90.319 442.788,88.174 442.788,85.528 L442.788,42.761 C442.788,40.117 444.931,37.97 447.578,37.97 L450.514,37.97 z M409.293,36.661 C412.632,36.661 415.447,37.243 417.744,38.406 C419.976,39.514 421.896,41.163 423.327,43.203 C424.753,45.24 425.777,47.62 426.402,50.348 C427.031,53.076 427.342,56.001 427.342,59.124 L427.342,85.525 C427.342,88.17 425.198,90.315 422.552,90.315 L419.612,90.315 C416.967,90.315 414.822,88.17 414.822,85.525 L414.822,60.652 C414.822,59.054 414.683,57.508 414.405,56.019 C414.165,54.631 413.669,53.299 412.942,52.092 C412.253,50.972 411.282,50.052 410.127,49.423 C408.942,48.765 407.414,48.439 405.534,48.439 C403.589,48.439 401.936,48.82 400.579,49.584 C399.244,50.328 398.101,51.373 397.241,52.637 C396.348,53.962 395.711,55.441 395.361,56.999 C394.98,58.626 394.787,60.291 394.787,61.961 L394.787,85.528 C394.787,88.174 392.643,90.319 389.997,90.319 L387.057,90.319 C384.412,90.319 382.267,88.174 382.267,85.528 L382.267,59.128 C382.267,55.855 381.609,53.255 380.285,51.328 C378.961,49.405 376.775,48.439 373.711,48.439 C371.626,48.439 369.867,48.805 368.441,49.529 C367.015,50.26 365.834,51.24 364.894,52.476 C363.939,53.744 363.247,55.19 362.858,56.729 C362.437,58.368 362.228,60.054 362.236,61.746 L362.236,85.528 C362.236,86.799 361.731,88.018 360.832,88.917 C359.933,89.815 358.713,90.32 357.442,90.319 L354.502,90.319 C351.857,90.319 349.712,88.174 349.712,85.528 L349.712,42.761 C349.712,40.117 351.859,37.97 354.502,37.97 L356.817,37.97 C359.461,37.97 361.607,40.117 361.607,42.761 L361.607,46.15 C362.978,43.578 364.881,41.328 367.191,39.55 C369.659,37.623 372.979,36.661 377.155,36.661 C385.017,36.661 390.231,39.897 392.805,46.366 C394.615,43.024 396.875,40.57 399.589,39.005 C402.302,37.444 405.534,36.661 409.293,36.661 z M259.039,36.661 C259.803,36.661 260.553,36.734 261.28,36.881 C262.585,37.139 263.525,38.283 263.526,39.612 L263.526,46.794 C263.526,47.569 263.183,48.304 262.588,48.801 C261.994,49.298 261.209,49.506 260.447,49.368 C259.466,49.188 258.471,49.097 257.474,49.094 C254.549,49.094 252.205,49.657 250.431,50.783 C248.658,51.913 247.301,53.2 246.361,54.659 C245.476,55.986 244.839,57.463 244.482,59.018 C244.167,60.473 244.014,61.563 244.014,62.291 L244.014,85.528 C244.014,88.174 241.869,90.319 239.224,90.319 L236.284,90.319 C233.638,90.319 231.494,88.174 231.494,85.528 L231.494,42.761 C231.494,40.117 233.636,37.97 236.284,37.97 L239.867,37.97 C242.156,37.97 244.014,39.824 244.014,42.113 L244.014,46.052 C244.014,46.165 244.105,46.26 244.222,46.26 C245.612,43.203 247.594,40.841 250.168,39.17 C252.742,37.499 255.7,36.661 259.039,36.661 z M281.586,37.97 C284.229,37.97 286.376,40.117 286.376,42.761 L286.376,85.528 C286.376,88.174 284.231,90.319 281.586,90.319 L278.646,90.319 C276,90.319 273.855,88.174 273.855,85.528 L273.855,42.761 C273.855,40.117 275.998,37.97 278.646,37.97 L281.586,37.97 z M47.339,20.569 C47.667,20.57 47.963,20.767 48.091,21.069 C48.22,21.371 48.157,21.72 47.931,21.958 L35.275,35.232 C34.398,36.109 33.765,37.133 33.367,38.23 C33.016,39.159 32.836,40.144 32.836,41.137 L32.836,80.299 C32.833,80.63 32.633,80.926 32.328,81.052 C32.022,81.178 31.671,81.109 31.436,80.877 L21.724,71.136 C20.955,70.364 20.524,69.318 20.525,68.229 L20.525,37.023 C20.525,27.937 27.874,20.569 36.943,20.569 L47.339,20.569 z M191.007,48.439 C188.711,48.439 186.656,48.878 184.85,49.748 C183.083,50.588 181.504,51.774 180.206,53.237 C178.913,54.702 177.92,56.406 177.284,58.254 C176.624,60.146 176.291,62.137 176.297,64.141 C176.297,66.181 176.626,68.141 177.284,70.032 C177.946,71.922 178.919,73.597 180.209,75.049 C181.508,76.512 183.087,77.7 184.853,78.541 C186.66,79.411 188.711,79.85 191.007,79.85 C193.304,79.85 195.355,79.411 197.161,78.541 C198.928,77.7 200.507,76.512 201.805,75.049 C203.093,73.597 204.065,71.922 204.731,70.032 C205.389,68.141 205.718,66.181 205.718,64.144 C205.718,62.108 205.389,60.144 204.731,58.257 C204.094,56.408 203.1,54.702 201.805,53.237 C200.507,51.774 198.928,50.588 197.161,49.748 C195.355,48.874 193.304,48.439 191.007,48.439 z M114.555,4.395 C119.845,7.204 124.169,11.538 126.965,16.835 C129.789,22.125 131.311,27.372 131.352,41.581 L131.353,67.947 C131.353,68.28 131.152,68.58 130.845,68.707 C130.538,68.834 130.184,68.764 129.949,68.529 L129.949,68.525 L120.241,58.799 C119.47,58.026 119.037,56.979 119.038,55.888 L119.038,43.982 C119.038,32.979 117.893,28.99 115.747,24.967 C113.649,20.995 110.405,17.745 106.437,15.639 C102.426,13.486 98.444,12.341 87.466,12.341 L71.761,12.341 C71.429,12.339 71.131,12.138 71.005,11.831 C70.878,11.525 70.949,11.172 71.183,10.937 L80.892,1.207 C81.66,0.435 82.706,0 83.795,0 L89.255,0 C103.892,0 109.201,1.528 114.555,4.395 z M67.801,0 C68.133,0.002 68.431,0.203 68.558,0.51 C68.684,0.817 68.613,1.169 68.379,1.404 L58.671,11.134 C57.899,11.906 56.857,12.341 55.767,12.341 L43.887,12.341 C32.91,12.341 28.928,13.486 24.913,15.639 C20.944,17.745 17.701,20.995 15.603,24.967 C13.456,28.99 12.312,32.979 12.312,43.982 L12.312,59.72 C12.31,60.051 12.11,60.349 11.805,60.475 C11.499,60.602 11.147,60.534 10.911,60.301 L1.207,50.571 C0.434,49.799 -0,48.752 -0,47.66 L-0,42.186 C-0,27.52 1.525,22.199 4.388,16.835 C7.184,11.538 11.508,7.204 16.799,4.395 C22.077,1.568 27.314,0.043 41.491,0.001 L67.801,0 z M94.41,20.569 C103.479,20.569 110.829,27.937 110.829,37.023 L110.829,47.441 C110.827,47.769 110.63,48.065 110.329,48.194 C110.027,48.323 109.677,48.26 109.439,48.033 L96.202,35.352 C95.325,34.475 94.301,33.838 93.207,33.44 C92.28,33.088 91.296,32.909 90.304,32.91 L51.229,32.91 C50.897,32.909 50.597,32.709 50.47,32.402 C50.343,32.094 50.413,31.741 50.648,31.505 L60.371,21.772 C61.139,21.004 62.181,20.569 63.271,20.569 L94.41,20.569 z M280.01,12.341 C282.306,12.341 284.237,13.087 285.802,14.575 C287.367,16.067 288.149,17.939 288.149,20.192 C288.149,22.448 287.367,24.32 285.802,25.808 C284.237,27.3 282.306,28.046 280.01,28.046 C277.717,28.046 275.819,27.264 274.324,25.702 C272.869,24.24 272.062,22.255 272.082,20.192 C272.082,18.086 272.828,16.25 274.324,14.685 C275.823,13.124 277.717,12.341 280.01,12.341 z M448.942,12.341 C451.238,12.341 453.169,13.087 454.734,14.575 C456.299,16.067 457.082,17.939 457.082,20.192 C457.082,22.448 456.299,24.32 454.734,25.808 C453.169,27.3 451.238,28.046 448.942,28.046 C446.646,28.046 444.751,27.264 443.256,25.702 C441.8,24.24 440.991,22.255 441.011,20.192 C441.011,18.086 441.76,16.25 443.256,14.685 C444.751,13.124 446.646,12.341 448.942,12.341 z" />
      </g>
    </svg>
  );
};

export default Prismic;
