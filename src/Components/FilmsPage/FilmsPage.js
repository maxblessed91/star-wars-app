import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import FilmsAPI from "./FilmsAPI";

const FilmsPage = () => {
  return (
    <div>
      <p>Star Wars films info</p>
      <FilmsAPI />
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

export default FilmsPage;
