import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addItem, toggleBuyState } from "../../redux/cart/cart.action";

import { withRouter } from "react-router-dom";

import ReactImageMagnify from "react-image-magnify";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCollections } from "../../redux/products/product.selectors";

const ProductDetails = ({
  collection2,
  item,
  collection,
  history,
  addItem,
  currentUser,
  toggleBuyState,
}) => {
  const [index, setIndex] = useState(0);
  const [path, setPath] = useState("");
  const fullDateNow = new Date().toDateString();
  const monthNow = fullDateNow.slice(0, 4);
  const dayNow = fullDateNow.slice(7, 10);

  useEffect(() => {
    obtainUrlData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const obtainUrlData = () => {
    setPath(getPath());
    setIndex(getIndex());
  };

  const getPath = () => {
    return history.location.pathname.split("/")[1];
  };

  const getIndex = () => {
    const urlPath = history.location.pathname;
    const ulrCollectionName = history.location.pathname.split("/")[1];
    const urlPathId = Number(urlPath.split("/")[2]);

    for (let i = 0; i < collection2[ulrCollectionName].items.length; i++) {
      if (collection2[ulrCollectionName].items[i].linkUrl === `/${urlPathId}`) {
        return i;
      }
    }
  };

  const getRandomNumber = (dayNow) => {
    return Math.floor(
      Math.random() * (Number(dayNow) + 5 - Number(dayNow)) + Number(dayNow)
    );
  };

  const checkIfLogin = () => {
    if (currentUser) {
      history.push("/address");
    } else {
      toggleBuyState();
      history.push("/login");
    }
  };

  return (
    <div>
      <ProductDetails items={""} />
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    collection2: selectCollections,
  });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleBuyState: () => dispatch(toggleBuyState()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
