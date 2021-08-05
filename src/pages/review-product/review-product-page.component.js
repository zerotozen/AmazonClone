import React from "react";
import { connect } from "react-redux";

import { selectProductDeteails } from "../../redux/products/product.selectors";

import Header from "../../components/header/header.component";
import ProductDetails from "../../components/product-details/product-details.component";
import Footer from "../../components/footer/footer.component";

const ReviewProductPage = ({ collection, history }) => {
  return (
    <div>
      <Header />
      <ProductDetails
        key={collection.map((item) => item.id.toString())}
        history={history}
        collection={collection}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectProductDeteails(ownProps.match.url)(state),
  };
};

export default connect(mapStateToProps)(ReviewProductPage);
