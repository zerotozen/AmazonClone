import styled, { css } from "styled-components";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 100px;
`;

export const ComponentSubcontainer = styled.div`
  width: 1500px;
  height: 100%;
  margin-top: 20px;
  display: flex;
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  margin-bottom: auto;
`;

export const RightSide = styled.div`
  width: 40%;
`;

export const Title = styled.div`
  font-size: 24px !important;
  line-height: 32px !important;
`;

export const Rating = styled.div`
  display: flex;
`;

export const FullDescriptionContainer = styled.div`
  width: auto;
  margin: 20px;
`;

export const FullDescriptionList = styled.li`
  list-style-type: circle;
  list-style: square;
`;

export const PaymentContainer = styled.div`
  width: 20%;
`;

export const PaymentSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 205px;
  height: 530px;
  border: solid 1px lightgray;
  margin: 20px;
  padding: 18px;
  border-radius: 8px;
`;

export const Price = styled.span`
  color: #b12704 !important;
  font-size: 18px !important;
  line-height: 24px !important;
`;

export const DateContainer = styled.span`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StockTag = styled.span`
  color: #c45500 !important;
  font-size: 18px !important;
  line-height: 24px !important;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const amazonColour = css`
  background-color: #ffd814;
`;

const getColour = (props) => {
  if (props.amazonColor) {
    return amazonColour;
  }
};

export const Button = styled.button`
  width: 170px;
  height: 29px;
  background-color: #ffa41c;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;

  ${getColour}
`;

export const LoaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
