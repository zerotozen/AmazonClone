import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ComponentContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  position: absolute;
  top: 20%;
  left: 32px;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled(IoIosArrowForward)`
  position: absolute;
  top: 20%;
  right: 32px;
  font-size: 3rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const Img = styled.img`
  z-index: -1;
  width: 100%;
  height: 600px;
  margin-bottom: -50px;
  mask-image: linear-gradient(to bottom, rgb(1, 0, 0), rgba(0, 0, 0, 0.623));
  overflow: hidden;
`;
