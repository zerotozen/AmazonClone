import styled from "styled-components";

const GetElementHeight = (props) => {
  return props.height - 280;
};

export const ComponentContainer = styled.div`
  width: 100%;
  height: ${GetElementHeight}px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const ComponentSubContainer = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;
  top: -300px;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 0px 0px 0px;
`;

export const SpecialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 0 7.5px 15px;
`;

export const SpecialCardTop = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.div``;

export const SecondRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 0px 0px 0px;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
