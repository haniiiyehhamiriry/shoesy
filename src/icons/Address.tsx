import { StyleProps } from "./type";

export const Address: React.FC<StyleProps> = ({ classSvg }) => {
  return (
    <svg
      fill="#333"
      width="28px"
      height="28px"
      className={`${classSvg}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
    </svg>
  );
};
