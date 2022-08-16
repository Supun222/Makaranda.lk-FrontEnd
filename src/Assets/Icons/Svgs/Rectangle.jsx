function Rectangle() {
  return (
    <svg
      width="909"
      height="649"
      viewBox="0 0 909 649"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_265_239)">
        <rect x="23" y="19" width="863" height="603" rx="10" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_265_239"
          x="0"
          y="0"
          width="909"
          height="649"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_265_239"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_265_239"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_265_239"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle;
