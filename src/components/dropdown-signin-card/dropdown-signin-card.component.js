import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setBuyState } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase";

import {
  ComponentContainer,
  ComponentSubcontainer,
  TriangleUp,
  Button,
  List,
  NewCustomerTag,
  StartHereTag,
} from "./dropdown-signin-card.styles";

const DropdownCard = ({ currentUser, history, setBuyState }) => {
  const handleAuthentication = () => {
    setBuyState(false);
    auth.signOut();
  };

  return (
    <ComponentContainer>
      <ComponentSubcontainer>
        <TriangleUp></TriangleUp>
        {currentUser ? (
          <Button onClick={handleAuthentication}>Sign Out</Button>
        ) : (
          <Button onClick={() => history.push("/login")}>Sign In</Button>
        )}
        {!currentUser ? (
          <NewCustomerTag onClick={() => history.push("/signup")}>
            New customer?
            <StartHereTag>Start here</StartHereTag>
          </NewCustomerTag>
        ) : (
          ""
        )}
        <List>
          <div>
            <h4>Your List</h4>
            <ul>
              <li>Create a List</li>
              <li>Find a List or Registry</li>
              <li>AmazonSmile Charity Lists</li>
            </ul>
          </div>
          <div>
            <h4>Your Account</h4>
            <ul>
              <li>Account</li>
              <li>Orders</li>
              <li>Recommendations</li>
              <li>Browsing History</li>
              <li>Watchlist</li>
              <li>Video Purchases & Rentals</li>
              <li>Kindle Unlimeted</li>
              <li>Content & Devices</li>
              <li>Subscribe & Save Items</li>
              <li>Memberships & Subscriptions</li>
              <li>Music Library</li>
            </ul>
          </div>
        </List>
      </ComponentSubcontainer>
    </ComponentContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setBuyState: (state) => dispatch(setBuyState(state)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DropdownCard)
);
