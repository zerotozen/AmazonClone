import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

export const DropdownAnimations = keyframes`
    0% {
        opacity: 0;
        transform: scaleY(0);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
`;

const enteringStyles = css`
  animation-name: ${DropdownAnimations};
  animation-duration: 0.3s;
  animation-direction: forwards;
`;

const getEntriesLenght = (props) => {
  return 60 * props.children[1].length;
};

const enteredStyles = css`
  transform: scaleY(1);
  opacity: 1;
  height: ${getEntriesLenght}px;
`;

const existingStyles = css`
  animation-name: ${DropdownAnimations};
  animation-duration: 0.3s;
  animation: reverse backwards;
`;

const getDropwdownStyles = (props) => {
  if (props.props === "entering") return enteringStyles;
  else if (props.props === "entered") return enteredStyles;
  else if (props.props === "exiting") return existingStyles;
};

export const DropdownContainer = styled.div`
  height: 0px;
  transition: height 0.3s;
  transform-origin: center top;

  ${getDropwdownStyles}
`;

export const SidenavDropdown = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 25px 15px 25px;
  cursor: pointer;

  :hover {
    background-color: #eaeded;
  }
`;

export const DropdownArrow = styled.div`
  display: flex;
  justify-content: center;
`;
