import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.component";
import ReviewProductPage from "../review-product/review-product-page.component";

const ProductPage = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={ReviewProductPage}
      ></Route>
    </div>
  );
};

export default ProductPage;
