/* eslint-disable react/prop-types */
const UnionCardArrow = ({ color, className }) => {
  return (
    <>
      <svg
        width="95"
        height="100"
        viewBox="0 0 95 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.209 92.8477L0.0261406 5.38608L4.36489 0.878348L88.5491 88.3413L88.5494 1.67321L94.6854 1.67324L94.685 96.0351L94.685 99.2226H91.617L0.792859 99.2226L0.792857 92.8477L84.209 92.8477Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default UnionCardArrow;
