import faker from "faker";
import _ from "lodash";

export const countryOptions = [
  {
    key: "af",
    value: "af",
    flag: "af",
    label: "Afghanistan",
  },
  {
    key: "ax",
    value: "ax",
    flag: "ax",
    text: "Aland Islands",
    label: "Aland Islands",
  },
  { key: "al", value: "al", flag: "al", text: "Albania", label: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria", label: "Algeria" },
  {
    key: "as",
    value: "as",
    flag: "as",
    text: "American Samoa",
    label: "American Samoa",
  },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra", label: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola", label: "Angola" },
  {
    key: "ai",
    value: "ai",
    flag: "ai",
    text: "Anguilla",
    label: "Anguilla",
  },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua", label: "Antigua" },
  {
    key: "ar",
    value: "ar",
    flag: "ar",
    text: "Argentina",
    label: "Argentina",
  },
  { key: "am", value: "am", flag: "am", text: "Armenia", label: "Afghanistan" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba", label: "Afghanistan" },
  {
    key: "au",
    value: "au",
    flag: "au",
    text: "Australia",
    label: "Australia",
  },
  { key: "at", value: "at", flag: "at", text: "Austria", label: "Austria" },
  {
    key: "az",
    value: "az",
    flag: "az",
    text: "Azerbaijan",
    label: "Afghanistan",
  },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas", label: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain", label: "Bahrain" },
  {
    key: "bd",
    value: "bd",
    flag: "bd",
    text: "Bangladesh",
    label: "Bangladesh",
  },
  {
    key: "bb",
    value: "bb",
    flag: "bb",
    text: "Barbados",
    label: "Barbados",
  },
  { key: "by", value: "by", flag: "by", text: "Belarus", label: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium", label: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize", label: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin", label: "Benin" },
  { key: "lt", value: "lt", flag: "lt", text: "Lietuva", label: "Lietuva" },
];

const addressDefinitions = faker.definitions.address;

export const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
  label: state,
}));
