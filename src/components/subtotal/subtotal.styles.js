import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  padding: 20px;
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;

export const TextContainer = styled.small`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
`;
