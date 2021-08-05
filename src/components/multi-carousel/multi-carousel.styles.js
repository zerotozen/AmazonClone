import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;
  margin-right: 31px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;

export const Title = styled.h3`
  margin-left: 20px;
  margin-bottom: 0px;
  font-weight: 400;
  color: #444 !important;
  font-size: 21px !important;
`;

export const Link = styled.span`
  padding-left: 15px;
  font-size: 14px;
  font-weight: 540;
  color: #007185;
  line-height: 20px;

  &hover: {
    text-decoration: underline;
  }
`;
