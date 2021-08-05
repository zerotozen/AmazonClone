import React from "react";
import { useForm, Controller } from "react-hook-form";

import HeaderImage from "../../assets/address-page-header.png";
import AddressCard from "../../components/address-card/address-card.component";

import { connect } from "react-redux";
import { addAddress } from "../../redux/address/address.action";

import { countryOptions, stateOptions } from "./address-page.data";

import { withRouter } from "react-router-dom";

import {
  ComponentContainer,
  ComponentSubcontainer,
  HeaderContainer,
  Img,
  Title,
  LeftSide,
  RightSide,
  Span,
  InputContainer,
  Input,
  CountryInput,
  StateInput,
  Button,
} from "./address-page.styles";

const AdressPage = ({ address, addAddress, history }) => {
  const { register, control, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    addAddressData(data);
    goPaymentPage(data);
  };

  const onErrors = (errors) => alert("Complete the form");

  const addAddressData = (addressData) => {
    addAddress(addressData);
  };

  const goPaymentPage = (addressData) => {
    if (addressData) {
      history.push("/payment");
    }
  };

  return (
    <ComponentContainer>
      <ComponentSubcontainer>
        <HeaderContainer>
          <Img
            onClick={() => {
              history.push("/");
            }}
            alt=""
            src={HeaderImage}
          ></Img>
        </HeaderContainer>
        <Title>Select a shipping address</Title>
        <hr />
        {address.address ? <AddressCard history={history} /> : null}
        <hr />
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <LeftSide>
            <h3>Add new Address</h3>
            <Span>Country/Region</Span>
            <Controller
              name="country"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => (
                <CountryInput {...field} options={countryOptions} />
              )}
            />
            <Span>Full name (First and Last name</Span>
            <Input
              {...register("name", { required: true })}
              type="text"
              placeholder=""
            ></Input>
            <Span>Phone number</Span>
            <Input
              {...register("phone", { required: true })}
              type="text"
              placeholder=""
            ></Input>
            <Span>Address</Span>
            <Input
              {...register("nameStreet", { required: true })}
              type="text"
              placeholder="Street address or P.O. Box"
            ></Input>
            <Input
              name="numberStreet"
              {...register("numberStreet", { required: true })}
              type="text"
              placeholder="Apt, suite, unit, building, floor, etc."
            ></Input>
          </LeftSide>
          <RightSide>
            <InputContainer>
              <Span>City</Span>
              <Input
                {...register("city", { required: true })}
                cityInput
                type="text"
                placeholder=""
              ></Input>
            </InputContainer>
            <InputContainer>
              <Span>State</Span>
              <Controller
                name="state"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => (
                  <StateInput {...field} options={stateOptions} />
                )}
              />
            </InputContainer>
            <InputContainer>
              <Span>ZIP Code</Span>
              <Input
                {...register("zipCode", { required: true })}
                zipInput
                type="text"
                placeholder=""
              ></Input>
            </InputContainer>
          </RightSide>
          <Button type="submit" value="Submit Form">
            Use this Address
          </Button>
        </form>
        <div></div>
      </ComponentSubcontainer>
    </ComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  address: state.address,
});

const mapDispatchToProps = (dispatch) => ({
  addAddress: (address) => dispatch(addAddress(address)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdressPage)
);
