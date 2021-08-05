import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

export const SidenavAnimations = keyframes`
0% {
    transform: translateX(-420px);
    z-index: 100;
  }
  100% {
    transform: translateX(-0px);
  }
`;

const enteringStyles = css`
  animation-name: ${SidenavAnimations};
  animation-duration: 0.3s;
  animation: forwards;
`;

const enteredStyles = css`
  transform: translateX(-0px);
`;

const existingStyles = css`
  animation-name: ${SidenavAnimations};
  animation-duration: 0.3s;
  animation: reverse backwards;
`;

const getSidenavStyles = (props) => {
  if (props.state === "entering") return enteringStyles;
  else if (props.state === "entered") return enteredStyles;
  else if (props.state === "exiting") return existingStyles;
};

export const ComponentContainer = styled.div`
  max-width: 380px;
  overflow: hidden;
  width: 85%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: white;
  transform-origin: left center;
  // transform: translateX(-420px);

  ${getSidenavStyles}
`;

export const SidenavHeader = styled.div`
  color: white;
  font-weight: bold;
  background-color: rgb(35, 47, 62);
  padding: 10px 0px 10px 30px;
  font-size: 23px;
`;
