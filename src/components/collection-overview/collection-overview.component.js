import React from "react";

import Star from "../../assets/star.png";
import EmptyStar from "../../assets/star-empty.png";

import Header from "../header/header.component";
import CollectionItem from "../collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/products/product.selectors";

import { Dimmer, Loader } from "semantic-ui-react";

import {
  ComponentContainer,
  ComponentSubcontainer,
  LeftSide,
  MiddleSide,
  RightSide,
  CheckboxInput,
  VerticalLine,
  Title,
  CollectionTitle,
  StarIcon,
  CollectionItems,
  LoaderContainer,
} from "./collection-overview.styles";

const CollectionsOverviewContainer = ({ collection, history }) => {

  if (!collection)
    return (
      <LoaderContainer>
        <Dimmer active inverted size="massive">
          <Loader inverted>
            {/* {conexion ? "Loading" : "Please, Check your conexion"} */}
            loading
          </Loader>
        </Dimmer>
      </LoaderContainer>
    );
  const { items, title } = collection;
  return (
    <>
      <Header />
      <ComponentContainer>
        <ComponentSubcontainer>
          <LeftSide>
            <div>
              <Title>Avg. Customer Review</Title>
              <p>
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} /> & Up
              </p>
              <p>
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={EmptyStar} /> & Up
              </p>
              <p>
                <StarIcon  alt="" src={Star} />
                <StarIcon  alt="" src={Star} />
                <StarIcon  alt="" src={Star} />
                <StarIcon  alt="" src={EmptyStar} />
                <StarIcon  alt="" src={EmptyStar} /> & Up
              </p>
              <p>
                <StarIcon  alt="" src={Star} />
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={EmptyStar} />
                <StarIcon alt="" src={EmptyStar} />
                <StarIcon alt="" src={EmptyStar} /> & Up
              </p>
              <p>
                <StarIcon alt="" src={Star} />
                <StarIcon alt="" src={EmptyStar} />
                <StarIcon alt="" src={EmptyStar} />
                <StarIcon alt="" src={EmptyStar} />
                <StarIcon alt="" src={EmptyStar} /> & Up
              </p>
            </div>
            <div >
              <Title >Brand</Title>
              <div>
                <CheckboxInput  type="checkbox" />
                Amazon Basics
              </div>
              <div>
                <CheckboxInput  type="checkbox" />
                HC COLLECTION
              </div>

              <div>
                <CheckboxInput  type="checkbox" />
                Amazon Essentials
              </div>

              <div>
                <CheckboxInput className="checkbox__input" type="checkbox" />
                Cadcah
              </div>

              <div>
                <CheckboxInput type="checkbox" />
                Amazon Basic
              </div>

              <div>
                <CheckboxInput type="checkbox" />
                Addtam
              </div>

              <div>
                <CheckboxInput type="checkbox" />
                Champion
              </div>
            </div>
            <div >
              <Title >Price</Title>
              <p>Under 25€</p>
              <p>25€ to 50€</p>
              <p>50€ to 100€</p>
              <p>100€ to 200€</p>
              <p>200€ to Above</p>
            </div>
          </LeftSide>
          <VerticalLine />
          <MiddleSide>
            <CollectionTitle >
              {title}
            </CollectionTitle>
            <CollectionItems >
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} history={history} />
              ))}
            </CollectionItems>
          </MiddleSide>
          <VerticalLine />
          <RightSide ></RightSide>
        </ComponentSubcontainer>
      </ComponentContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverviewContainer);
