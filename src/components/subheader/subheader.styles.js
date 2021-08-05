import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

export const SubheaderAnimation = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const enteringStyles = css`
  animation-name: ${SubheaderAnimation};
  animation-duration: 0.3s;
  animation: forwards;
`;

const enteredStyles = css`
  opacity: 1;
`;

const existingStyles = css`
  animation-name: ${SubheaderAnimation};
  animation-duration: 0.3s;
  animation: backwards reverse;
`;

const getSubheaderStyles = (props) => {
  if (props.state === "entering") return enteringStyles;
  else if (props.state === "entered") return enteredStyles;
  else if (props.state === "exiting") return existingStyles;
};

export const ComponentContainer = styled.div`
  color: white;
  height: 30px;
  background-color: #232f3e;
  padding: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 39px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin: 5px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 150vmax;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.7);

  ${getSubheaderStyles}
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  margin-left: 390px;
  color: white;
  font-size: 50px;
  font-weight: 100;
  cursor: pointer;
  transform: translateY(-5px);
  z-index: 75;
  font-family: none;

  ${getSubheaderStyles}
`;

export const SubheaderUl = styled.ul`
  display: flex;
  width: 80%;
  margin: 5px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin: 5px;

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`;

export const Li = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  list-style: none;
`;
