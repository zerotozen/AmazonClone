import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";

import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import SubHeader from "../subheader/subheader.component";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItemCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Flag from "../../assets/lithuania.png";
import DropdownCard from "../dropdown-signin-card/dropdown-signin-card.component";
import LanguageCard from "../dropdown-languages-card/dropdown-languages-card.component";

import {
  ComponenContainer,
  ComponenSubcontainer,
  Overlay,
  HeaderNav,
  Logo,
  LocationLogoLineOne,
  LocationLogoLineTwo,
  SearchBarContainer,
  SearchBar,
  SearchIconStyle,
  FlagContainer,
  FlagIcon,
  FlagTriangleDown,
  HeaderOptionContaier,
  HeaderOption,
  OptionLineTwo,
  BasketCount,
  ItemCount,
} from "./header.styles";

const Header = ({ itemCount, currentUser, history }) => {
  const [overlay, setOverlay] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [signinDropdown, setSigninDropdown] = useState(false);
  const [languagesDropdown, setLanguageDropdown] = useState(false);

  const handleMouseEnter = (event) => {
    if (event === "signin") {
      setSigninDropdown(true);
    }
    if (event === "languages") {
      setLanguageDropdown(true);
    }
    setDelayHandler(
      setTimeout(() => {
        setOverlay(true);
      }, 50)
    );
  };

  const handleMouseLeave = (event) => {
    if (event === "signin") {
      setSigninDropdown(false);
    }
    if (event === "languages") {
      setLanguageDropdown(false);
    }

    clearTimeout(delayHandler);
    setTimeout(() => {
      setOverlay(false);
    }, 50);
  };

  return (
    <ComponenContainer className="header__container">
      <Overlay
        overlay={overlay}
        // className={`${overlay ? "headerContainer__overlay" : ""}`}
      ></Overlay>
      <ComponenSubcontainer className="header">
        <Link to="/">
          <Logo
            alt="header__logo"
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <HeaderOptionContaier className="headerOption__container">
          <HeaderOption className="header__option">
            <LocationLogoLineOne className="header__locationLineOne">
              Deliver to
            </LocationLogoLineOne>
            <LocationLogoLineTwo className="header__locationLineTwo">
              <HiOutlineLocationMarker /> Lithuania
            </LocationLogoLineTwo>
          </HeaderOption>
        </HeaderOptionContaier>

        <SearchBarContainer className="header__search">
          <SearchBar className="header__searchInput" type="text" />
          <SearchIconStyle className="header__searchIcon" />
        </SearchBarContainer>

        <FlagContainer
          onMouseEnter={() => handleMouseEnter("languages")}
          onMouseLeave={() => handleMouseLeave("languages")}
          className="flag__container"
        >
          <FlagIcon alt="" src={Flag} className="header__flag" />
          <FlagTriangleDown className="flag__triangleDown" />
          {languagesDropdown ? <LanguageCard show /> : null}
        </FlagContainer>

        <HeaderNav className="header__nav">
          <Link>
            <div
              onMouseEnter={() => handleMouseEnter("signin")}
              onMouseLeave={() => handleMouseLeave("signin")}
            >
              <HeaderOptionContaier className="headerOption__container">
                <HeaderOption className="header__option">
                  <span className="header__optionLineOne">
                    Hello{" "}
                    {!currentUser
                      ? "Guest"
                      : // : capitalize(currentUser.displayName)}
                        currentUser.displayName}
                  </span>
                  <OptionLineTwo className="header__optionLineTwo">
                    Account & Lists <IoMdArrowDropdown />
                  </OptionLineTwo>
                </HeaderOption>
              </HeaderOptionContaier>
              {signinDropdown ? <DropdownCard show /> : null}
            </div>
          </Link>
          <HeaderOptionContaier className="headerOption__container">
            <HeaderOption
              onClick={() => history.push("/orders")}
              className="header__option"
            >
              <span className="header__optionLineOne">Returns</span>
              <OptionLineTwo className="header__optionLineTwo">
                & Orders
              </OptionLineTwo>
            </HeaderOption>
          </HeaderOptionContaier>
        </HeaderNav>

        <Link to="/checkout">
          <HeaderOptionContaier className="headerOption__container">
            <BasketCount className="header__optionBasket">
              <FiShoppingCart size={45} />
              <ItemCount
                // props={`
                //   ${itemCount > 9 ? itemCount__addSpace : ""
                // } item__count`}

                itemCount={itemCount}
              >
                {itemCount}
              </ItemCount>
            </BasketCount>
          </HeaderOptionContaier>
        </Link>
      </ComponenSubcontainer>
      <SubHeader />
    </ComponenContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header));
