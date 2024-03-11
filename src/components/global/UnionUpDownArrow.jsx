/* eslint-disable react/prop-types */
const UnionUpDownArrow = ({
  upArrow,
  downArrow,
  color,
  strokeWidth,
  className,
  size,
}) => {
  return (
    <>
      {upArrow && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 62 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.8028 8.46221L32.8028 60.6918H28.7428L28.7428 8.46935L3.19946 34.0125L0.328613 31.1416L29.3409 2.1295L30.7764 0.694088L32.2118 2.12951L61.2239 31.1416L58.353 34.0125L32.8028 8.46221Z"
            fill={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
      {downArrow && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 62 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.8768 53.2985L28.8768 0.937134H32.8277L32.8277 53.2913L58.4642 27.655L61.2578 30.4487L32.2455 59.4608L30.8487 60.8576L29.4518 59.4608L0.439747 30.4487L3.23339 27.655L28.8768 53.2985Z"
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </>
  );
};

export default UnionUpDownArrow;
