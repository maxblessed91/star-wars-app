import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import StarshipsAPI from "./StarshipsAPI";

const StarshipsPage = () => {
  return (
    <div>
      <p>Star Wars starhips</p>
      <StarshipsAPI />
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

export default StarshipsPage;
