import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase/firebase";

import {
  SignUpContainer,
  SignUpSubcontainer,
  Logo,
  Title,
  SignUpInput,
  TagName,
  SignUpButton,
  Description,
  SignUpLink,
} from "./signup.styles";

const SignUp = () => {
  const history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      if (auth) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <SignUpContainer >
      <Link to="/">
        <Logo
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <SignUpSubcontainer >
        <Title>Sign-Up</Title>
        <form>
          <TagName>Your name</TagName>
          <SignUpInput
            type="name"
            value={displayName}
            onChange={(e) => setDisplayName(capitalize(e.target.value))}
          />
          <TagName>Email</TagName>
          <SignUpInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TagName>Password</TagName>
          <SignUpInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
          <TagName>Re-enter password</TagName>
          <SignUpInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <SignUpButton
            type="submit"
            onClick={register}
          >
            Create your Amazon account
          </SignUpButton>
        </form>
        <Description>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </Description>
        <Description>
          Already have an account?
          <Link to="/login">
            <SignUpLink >Sign-In</SignUpLink>
          </Link>
        </Description>
      </SignUpSubcontainer>
    </SignUpContainer>
  );
};

export default SignUp;
