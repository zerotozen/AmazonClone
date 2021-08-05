import styled from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #232f3e;
  color: white;
  height: 350px;
  padding-top: 50px;
`;

export const ComponentSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  width: 235px;
`;

export const Li = styled.li`
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
  font-size: 14px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 6px 0 10px 0;
  font-weight: 700;
  color: #fff;
`;
