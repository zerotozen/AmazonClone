import styled, { css } from "styled-components";

const collectionButtonStyles = css`
  width: 200px;
`;

const getButtonStyles = (props) => {
  if (props.collectionButton) {
    return collectionButtonStyles;
  }
};

export const Button = styled.button`
  background-color: #f0c14b;
  width: 300px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 6px;
  cursor: pointer;
  ${getButtonStyles}
`;
