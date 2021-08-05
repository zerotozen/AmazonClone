import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

export const SubcontainerAnimations = keyframes`
0% {
  transform: translateX(420px);
}
100% {
  transform: translateX(0px);
}
`;

const enteringStyles = css`
  animation-name: ${SubcontainerAnimations};
  animation-duration: 0.3s;
  animation: forwards;
`;

const enteredStyles = css`
  transform: translateX(0px);
`;

const existingStyles = css`
  animation-name: ${SubcontainerAnimations};
  animation-duration: 0.3s;
  animation: reverse backwards;
`;

const getSubcontainerStyles = (props) => {
  if (props.state === "entering") return enteringStyles;
  else if (props.state === "entered") return enteredStyles;
  else if (props.state === "exiting") return existingStyles;
};

export const ComponentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  transform: translateX(420px);
  color: black;

  ${getSubcontainerStyles}
`;

export const SubcontainerHeader = styled.div`
  margin-top: 5px;
  padding: 15px 0px 15px 25px;
  font-weight: bold;

  :hover {
    background-color: #eaeded;
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const SidenavContentHeader = styled.div``;

export const SubEntryTitle = styled.div`
  margin: 25px;
  font-weight: 700;
  font-size: 16px;
`;
