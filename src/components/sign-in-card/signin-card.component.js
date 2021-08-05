import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CustomButton from "../custom-button/custom-button.component";

import {
  SigninCardContainer,
  SigninCardSubcontainer,
} from "./signin-card.styles";

const SigninCard = ({ currentUser }) => {
  return (
    <SigninCardContainer >
      <SigninCardSubcontainer >
        {!currentUser ? (
          <>
            <h3>Sign in for the best experience</h3>
            <div>
              <Link to={!currentUser ? "/login" : ""}>
                <CustomButton>Sign in secure</CustomButton>
              </Link>
            </div>
          </>
        ) : (
          <h3>Welcome to Amazon Clone!</h3>
        )}
      </SigninCardSubcontainer>
    </SigninCardContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });

export default connect(mapStateToProps)(SigninCard);
