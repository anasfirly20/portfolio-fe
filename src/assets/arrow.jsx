export const ArrowSvg = ({ w, h }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Exclude" filter="url(#filter0_i_232_11)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C11.1476 0 0.654716 10.1027 0.029478 22.8H0V24V25.2H0.029478C0.654716 37.8973 11.1476 48 24 48ZM0.029478 25.2L30.7029 25.2L25.1147 30.7882C24.6461 31.2569 24.6461 32.0167 25.1147 32.4853C25.5833 32.9539 26.3431 32.9539 26.8118 32.4853L34.4485 24.8485C34.9172 24.3799 34.9172 23.6201 34.4485 23.1515L26.8118 15.5147C26.3431 15.0461 25.5833 15.0461 25.1147 15.5147C24.6461 15.9833 24.6461 16.7431 25.1147 17.2118L30.7029 22.8L0.029478 22.8C0.00990282 23.1975 0 23.5976 0 24C0 24.4024 0.00990282 24.8025 0.029478 25.2Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_232_11"
          x="0"
          y="0"
          width="51.2"
          height="51.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3.2" dy="3.2" />
          <feGaussianBlur stdDeviation="1.6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_232_11"
          />
        </filter>
      </defs>
    </svg>
  );
};
