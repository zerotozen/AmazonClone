import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./pages/homepage/homepage.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
import Footer from "./components/footer/footer.component";
import ProductPage from "./pages/product-page/productpage.component";
import AdressPage from "./pages/address-page/address-page.component";
import PaymentPage from "./pages/payment-page/payment-page.component";
import OrdersPage from "./pages/orders-page/orders-page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import setCurrentUser from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import ScrollToTop from "./scrollToTop/scrollToTop";

import { useDispatch } from "react-redux";

import { selectCollectionsForPreview } from "./redux/products/product.selectors";
import { fetchCollectionsStartAsync } from "./redux/products/product.action";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const promise = loadStripe(
  "pk_test_51JJ2LsFKj0H50yPFJrc5MHgHRuC4HXXT8qfgK3ZM7JAWHOT92GZXo8wKGJcsr2hRQKCaZgJKWkt2I1FU88ywXalt00PC6FiLPJ"
);

const App = ({ fetchCollectionsStartAsync }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((onSnapshot) => {
          dispatch(
            setCurrentUser({
              id: onSnapshot.id,
              ...onSnapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    //BEM
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckoutPage />
            <Footer />
          </Route>

          <Route path="/login">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/address">
            <AdressPage />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <PaymentPage />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <OrdersPage />
            <Footer />
          </Route>

          <Route path="/:collectionId" component={ProductPage} />

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
