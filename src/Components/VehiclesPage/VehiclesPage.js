import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import VehiclesAPI from "./VehiclesAPI";

const VehiclesPage = () => {
  return (
    <div>
      <p>VehiclesPage</p>
      <VehiclesAPI />
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

export default VehiclesPage;
