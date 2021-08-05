import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const LeftArrow = styled(IoIosArrowBack)`
  position: absolute;
  outline: 0;
  transition: all 0.5s;
  border-radius: 5px;
  z-index: 1000;
  border: 0;
  background: white;
  min-width: 43px;
  min-height: 43px;
  opacity: 1;
  cursor: pointer;
  height: 100px;
  width: 50px;
  left: calc(1%);
`;

export const RightArrow = styled(IoIosArrowForward)`
  position: absolute;
  outline: 0;
  transition: all 0.5s;
  border-radius: 5px;
  z-index: 1000;
  border: 0;
  background: white;
  min-width: 43px;
  min-height: 43px;
  opacity: 1;
  cursor: pointer;
  height: 100px;
  width: 50px;
  right: calc(1%);
`;
