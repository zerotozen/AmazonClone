import * as React from "react";

import { Li, Button } from "./custom-dots.styles";

const CustomDot = ({ onClick, active }) => {
  return (
    <Li
      style={{ background: active ? "grey" : "initial" }}
    >
      <Button   
        style={{ background: active ? "grey" : "initial" }}
        onClick={() => onClick()}
      />
    </Li>
  );
};

export default CustomDot;
