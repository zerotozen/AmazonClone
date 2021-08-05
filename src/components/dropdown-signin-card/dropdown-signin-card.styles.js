import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
`;

export const ComponentSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  width: 460px;
  height: 363px;
  border-radius: 5px;
  color: black;
`;

export const TriangleUp = styled.div`
  position: fixed;
  top: 44px;
  right: 212px;
  width: 0px;
  height: 0px;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 7px solid white;
`;

export const Button = styled.button`
  background-color: #f0c14b;
  width: 197px;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 6px;
  cursor: pointer;
`;

export const NewCustomerTag = styled.span`
  font-size: 14px;
`;

export const StartHereTag = styled.span`
  padding-left: 5px;
  color: blue;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 14px;

  border-top: 1px solid #e7e7e7;
  width: 95%;
`;
