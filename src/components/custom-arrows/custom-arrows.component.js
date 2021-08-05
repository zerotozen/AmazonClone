import { LeftArrow, RightArrow } from "./custom-arrows.styles";

const CustomLeftArrow = ({ onClick }) => {
  return <LeftArrow onClick={() => onClick()} />;
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <RightArrow  onClick={() => onClick()} />
  );
};

export { CustomLeftArrow, CustomRightArrow };
