import styled from "styled-components";

export const MenuItemContainer = styled.div`
  width: 340px;
  // min-width: 290px;
  // max-width:350px
  // flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 11px 10px 0px;
  background-position: center;
  overflow: hidden;
  background-color: white;
`;

export const MenuItemTitleContainer = styled.div`
  width: 90%;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: start;
`;

export const MenuItemTitle = styled.h2`
  font-size: 21px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 86%;
  height: 300px;

  object-fit: cover;
  object-position: bottom;
`;

export const MenuImageSubtitle = styled.div`
  margin: 10px 15px;
`;
