import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

export const SidenavContentAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-420px);
  }
`;

const enteringStyles = css`
  animation-name: ${SidenavContentAnimation};
  animation-duration: 0.3s;
  animation: reverse backwards;
`;

const enteredStyles = css``;

const existingStyles = css`
  animation-name: ${SidenavContentAnimation};
  animation-duration: 0.3s;
  animation: forwards;
`;

const getSidenavContentStyles = (props) => {
  if (props.state === "entering") return enteringStyles;
  else if (props.state === "entered") return enteredStyles;
  else if (props.state === "exiting") return existingStyles;
};

export const ComponentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  color: black;

  ${getSidenavContentStyles}
`;

export const SidenavContentHeader = styled.div`
  margin-top: 5px;
  padding: 15px 0px 15px 25px;
  font-size: 20px;
  font-weight: bold;
`;

export const SidenavContent = styled.div`
  padding: 15px 0px 15px 25px;
  :hover {
    background-color: #eaeded;
  }
`;
