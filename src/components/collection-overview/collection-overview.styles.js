import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const ComponentSubcontainer = styled.div`
  display: flex;
  width: 1500px;
  margin-top: 20px;
  background-color: white;
`;

export const LeftSide = styled.div`
  width: 20%;
  margin-left: 20px;
  padding: 20px;
`;

export const MiddleSide = styled.div`
  width: 70%;
`;

export const RightSide = styled.div`
  width: 10%;
`;

export const VerticalLine = styled.hr`
  height: 80%;
  border: solid 1px lightgray;
`;

export const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CollectionTitle = styled.h2`
  margin-left: 20px;
`;

export const StarIcon = styled.img`
  width: 20px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;

export const CollectionItems = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
