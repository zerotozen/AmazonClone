import styled, { css } from "styled-components";
import Select from "react-select";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
`;

export const ComponentSubcontainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Span = styled.span`
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckTypeOfInput = (props) => {
  if (props.cityInput) return cityInputyStyles;
  else if (props.zipInput) return zipInputStyles;
};

const cityInputyStyles = css`
  width: 160px;
  margin-right: 15px;
`;

const zipInputStyles = css`
  width: 117px;
`;

export const Input = styled.input`
  width: 496px;
  min-width: none;
  max-width: none;
  height: 31px;
  margin-bottom: 8px;
  word-wrap: break-word;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  transform: rotateZ(0);
  min-height: 2.71428571em;
  background: #fff;
  display: inline-block;
  padding: 0.78571429em 2.1em 0.78571429em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  transition: box-shadow 0.1s ease, width 0.1s ease;

  ${CheckTypeOfInput}
`;

export const CountryInput = styled(Select)`
  width: 496px;
  min-width: none;
  max-width: none;
  height: 31px;
  margin-bottom: 8px;
`;

export const StateInput = styled(Select)`
  width: 190px;
  min-width: none;
  max-width: none;
  height: 31px;
  margin-bottom: 8px;
  margin-right: 15px;
`;

export const Button = styled.button`
  width: 140px;
  height: 36px;
  margin-top: 20px;
  padding: auto;

  background-color: #f1c559;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
