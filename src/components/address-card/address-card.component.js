import React from "react";

import { connect } from "react-redux";
import { removeAddress } from "../../redux/address/address.action";

import { ComponentContainer, Row, Span, Button } from "./address-card.styles";

const AddressCard = ({ address, removeAddress, history }) => {
  const {
    address: {
      name,
      phone,
      nameStreet,
      numberStreet,
      city,
      zipCode,
      country,
      state,
    },
  } = address;
  return (
    <ComponentContainer>
      <hr />
      <strong>{name}</strong>
      <Row>
        <Span>{nameStreet}</Span>
        <Span>{numberStreet}</Span>
      </Row>

      <Row >
        <Span>{city}</Span>
        <Span>{state.label}</Span>
        <Span>{zipCode}</Span>
      </Row>

      <Span>{country.label}</Span>
      <Span>{phone}</Span>
      <Button onClick={() => history.push("/payment")}>
        Delivery this address
      </Button>

      <Button onClick={() => removeAddress()}>Remove</Button>
      <hr />
    </ComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  address: state.address,
});

const mapDispatchToProps = (dispatch) => ({
  removeAddress: () => dispatch(removeAddress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressCard);
