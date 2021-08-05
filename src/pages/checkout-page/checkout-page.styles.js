import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const LeftSide = styled.div`
  width: 90%;
`;
export const RightSide = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;

export const Ad = styled.img`
  width: 97%;
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: white;
  margin-right: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.h2`
  margin-right: 10px;
  padding: 10px;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
`;

export const Price = styled.span`
  font-size: 18px !important;
  line-height: 24px !important;
`;
