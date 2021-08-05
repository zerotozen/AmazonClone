import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Transition } from "react-transition-group";

import SideNavRow from "../siderow/sidenav-row.component";

import {
  DropdownContainer,
  SidenavDropdown,
  DropdownArrow,
} from "./dropdown.styles";

const DropDown = (props) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const sideNavContainer = useRef(null);

  let arrowDirection = <IoIosArrowDown />;

  if (!openDropDown) {
    arrowDirection = <IoIosArrowDown />;
  } else {
    arrowDirection = <IoIosArrowUp />;
  }

  return (
    <>
      <Transition
        mountOnEnter
        unmountOnExit
        in={openDropDown}
        timeout={{ enter: 300, exit: 200 }}
      >
        {(state) => (
          <DropdownContainer props={state} ref={sideNavContainer}>
            <hr />
            {props.entries.map((entry) => (
              <SideNavRow text={entry.title} />
            ))}
          </DropdownContainer>
        )}
      </Transition>
      <SidenavDropdown
        onClick={() => setOpenDropDown((prevState) => !prevState)}
      >
        <div>See All</div>
        <DropdownArrow>{arrowDirection}</DropdownArrow>
      </SidenavDropdown>
    </>
  );
};

export default DropDown;
