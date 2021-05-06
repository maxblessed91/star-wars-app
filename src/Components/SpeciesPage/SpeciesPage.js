import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import SpeciesAPI from './SpeciesAPI';

const SpeciesPage = () => {
  return (
    <div>
      <p>SpeciesPage</p>
      <SpeciesAPI />
      <NavLink to="/">
      <Button
          type="primary"
          style={{
            color: "#f9d71c",
            background: "black",
            borderColor: "#f9d71c",
          }}
        >Go back</Button>
      </NavLink>
    </div>
  );
};

export default SpeciesPage;
