import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
`;

export const ComponentSubcontainer = styled.div`
  width: 1200px;
  display: flex;
`;

export const LeftSide = styled.div`
  width: 60%;
  margin-left: 20px;
  margin-top: 20px;
`;

export const RightSide = styled.div`
  width: 40%;
  margin-top: 20px;
`;

export const CartItemsContainer = styled.div`
  height: 50%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
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

  width: 496px;
  height: 31px;
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

export const CheckoutCard = styled.div``;

export const SubtotalContainer = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const CardElementContainer = styled.div`
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  width: 496px;
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;
