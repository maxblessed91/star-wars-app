import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import PlanetsAPI from "./PlanetsAPI";

const PlanetsPage = () => {
  return (
    <div>
      <p>Star Wars planets info</p>
      <PlanetsAPI />
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

export default PlanetsPage;
