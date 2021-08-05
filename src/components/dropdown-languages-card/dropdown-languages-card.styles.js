import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  color: black;
`;

export const TriangleUp = styled.div`
  position: fixed;
  top: 44px;
  right: 370px;
  width: 0px;
  height: 0px;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 7px solid white;
`;

export const ComponentSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 300px;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  width: 210px;
  height: 447px;
  border-radius: 5px;
  padding: 20px;
`;

export const Title = styled.span`
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const LanguageTag = styled.span`
  margin-left: 10px;
`;

export const CheckboxInput = styled.input`
  margin-top: 10px;
`;
