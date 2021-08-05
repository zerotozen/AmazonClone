import styled, { css } from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchIcon from "@material-ui/icons/Search";

export const ComponenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: withe;
`;

export const ComponenSubcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-items: flex-end;
  color: white;
  flex-wrap: wrap;
`;

const setOverlay = css`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 150vmax;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.7);
`;

const overlayStatus = (props) => {
  if (props.overlay) {
    return setOverlay;
  } else {
    return "";
  }
};

export const Overlay = styled.div`
  ${overlayStatus}
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

export const LocationLogoLineOne = styled.span`
  font-size: 12px;
  margin-left: 18px;
`;

export const LocationLogoLineTwo = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const SearchBar = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 2px 5px 5px 2px;

  :focus {
    border: none;
    border-radius: 2pt;
    box-shadow: 0 0 0 2pt #f90;
    outline: none;
  }
`;

export const SearchIconStyle = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
  border-radius: 0 2px 2px 0;
  position: relative;
  right: 3px;
`;

export const FlagContainer = styled.div`
  display: flex;
  justify-items: center;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`;

export const FlagIcon = styled.img`
  height: 30px !important;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const FlagTriangleDown = styled(IoMdArrowDropdown)`
  position: relative;
  right: 10px;
  top: 23px;
`;

export const HeaderOptionContaier = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    box-shadow: 0 0 0 1px white;
  }
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 13px;
  margin-right: 13px;
  color: white;
`;

export const OptionLineOne = styled.span``;

export const OptionLineTwo = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const BasketCount = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 20px;
`;

const addSpace = css`
  right: 30px;
`;

const checkItemCount = (props) => {
  if (props.itemCount > 9) {
    return addSpace;
  }
};

export const ItemCount = styled.span`
  position: absolute;
  right: 34px;
  color: orange;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 3px;
  margin-right: 10px;

  ${checkItemCount}
`;
