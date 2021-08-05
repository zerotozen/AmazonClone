import React, { useState } from "react";

import { connect } from "react-redux";
import { selectBuyState } from "../../redux/cart/cart.selectors";
import { setBuyState } from "../../redux/cart/cart.action";

import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase";

import {
  SignInContainer,
  SignInSubcontainer,
  Logo,
  Title,
  SignInInput,
  TagName,
  SignInButton,
  RegisterButton,
  Description,
  NewUser,
  Text,
} from "./signin.styles";

const SignIn = ({ buyNow }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (buyNow) {
          history.push("/address");
          setBuyState(false);
        } else {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SignInContainer >
      <Link to="/">
        <Logo
       
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <SignInSubcontainer >
        <Title>Sign-In</Title>
        <form>
          <TagName>E-mail</TagName>
          <SignInInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TagName>Password</TagName>
          <SignInInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton
            type="submit"
            onClick={signIn}
          >
            Sign In
          </SignInButton>
        </form>
        <Description>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </Description>
      </SignInSubcontainer>
      <NewUser >
        <Text>New to Amazon?</Text>
      </NewUser>
      <Link to="/signup">
        <RegisterButton >
          Create your Amazon account
        </RegisterButton>
      </Link>
    </SignInContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    buyNow: selectBuyState,
  });

const mapDispatchToProps = (dispatch) => ({
  setBuyState: (state) => dispatch(setBuyState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
