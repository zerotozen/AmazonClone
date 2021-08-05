import styled from "styled-components";

export const SignInContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInSubcontainer = styled.div`
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

export const SignInButton = styled.button`
  background: #f3ce72;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  border-radius: 2px;
  width: 340px;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  border-radius: 5px;
  cursor: pointer;
`;

export const SignInInput = styled.input`
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

export const NewUser = styled.h2`
  width: 35%;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
  line-height: 0.1em;
  margin: 20px 10px 10px 20px;
`;

export const Text = styled.span`
  background: #fff;
  padding: 0 10px;
  font-size: 12px;
`;
