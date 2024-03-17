/* eslint-disable react/prop-types */
const OutLinkArrow = ({
  leftArrow,
  rightArrow,
  size,
  fillColor,
  color,
  className,
  strokeWidth,
}) => {
  return (
    <>
      {rightArrow && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.1402 8.90128L3.75831 56.2832L0.182362 52.7073L47.5766 5.31306L1.15001 5.31288L1.15003 0.255727L53.6688 0.25594L56.1974 0.255945V2.78451L56.1974 55.3031H51.1402L51.1402 8.90128Z"
            fill={color}
            className={fillColor}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}

      {leftArrow && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.44876 5.42771L16.7139 18.6928L18.6938 16.7129L5.42947 3.44862L17.946 3.44857L17.946 0.648569L2.04875 0.648632L0.648758 0.648639L0.648757 2.04863L0.648759 17.9458H3.44876V5.42771Z"
            fill={color}
            className={fillColor}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </>
  );
};

export default OutLinkArrow;
