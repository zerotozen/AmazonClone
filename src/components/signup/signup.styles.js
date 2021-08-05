import styled from "styled-components";

export const SignUpContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpSubcontainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

export const SignUpButton = styled.button`
  background: #f3ce72;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;

export const SignUpLink = styled.span`
  margin-left: 6px;
  color: #1866c0;
`;

export const SignUpInput = styled.input`
  border-width: 1px;
  border-radius: 3px;
  padding-left: 8px;
  border-color: black;
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const TagName = styled.h5`
  margin-bottom: 5px;
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;
