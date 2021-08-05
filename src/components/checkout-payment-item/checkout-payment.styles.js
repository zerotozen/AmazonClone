import styled from "styled-components";

export const ComponentContainer = styled.div`
  border: lightgray 1px solid;
`;

export const Title = styled.div`
  font-weight: 600;
  width: 350px;
`;

export const Price = styled.div`
  margin-top: 5px;
  font-weight: 500;
`;

export const ComponentSubcontainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 120px;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const Arrow = styled.div`
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 36px;
  background-color: #f1c559;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
