import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

export const LeftSide = styled.div`
  display: flex;
  width: 90%;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 220px;
  height: 220px;
`;

export const Info = styled.div`
  padding-left: 20px;
  width: 60%;
`;

export const Title = styled.p`
  font-size: 18px !important;
  line-height: 24px !important;
  font-weight: 800;
  color: #007185;
`;

export const Price = styled.p`
  font-size: 18px !important;
  line-height: 24px !important;
`;

export const Small = styled.small``;

export const Strong = styled.strong`
  font-size: 18px !important;
  line-height: 24px !important;
  font-weight: 700 !important;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Button = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-left: 20px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
`;
