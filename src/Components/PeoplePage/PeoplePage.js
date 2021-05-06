import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import PeopleAPI from "./PeopleAPI";

const PeoplePage = () => {
  return (
    <div>
      <p>Star Wars Characters</p>
      <PeopleAPI />
      <NavLink to="/">
        <Button
          type="primary"
          style={{
            color: "#f9d71c",
            background: "black",
            borderColor: "#f9d71c",
          }}
        >
          Go back
        </Button>
      </NavLink>
    </div>
  );
};

export default PeoplePage;
