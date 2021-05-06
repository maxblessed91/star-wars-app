import React from "react";

import { Table, Button } from "antd";
import { NavLink } from "react-router-dom";

const columns = [
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Page",
    dataIndex: "page",
    key: "page",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text, record) => (
      <NavLink to={record.address}>
        <Button
          type="primary"
          style={{
            color: "#f9d71c",
            background: "black",
            borderColor: "#f9d71c",
          }}
        >
          {"open the page"}
        </Button>
      </NavLink>
    ),
  },
];

const data = [
  {
    key: "1",
    number: 1,
    name: "Films",
    page: "https://swapi.dev/api/films/",
    address: "/films",
  },
  {
    key: "2",
    number: 2,
    name: "People",
    page: "https://swapi.dev/api/people/",
    address: "/people",
  },
  {
    key: "3",
    number: 3,
    name: "Planets",
    page: "https://swapi.dev/api/planets/",
    address: "/planets",
  },
  {
    key: "4",
    number: 4,
    name: "Species",
    page: "https://swapi.dev/api/species/",
    address: "/species",
  },
  {
    key: "5",
    number: 5,
    name: "Starships",
    page: "https://swapi.dev/api/starships/",
    address: "/starships",
  },
  {
    key: "6",
    number: 6,
    name: "vehicles",
    page: "https://swapi.dev/api/vehicles/",
    address: "/vehicles",
  },
];

const APITable = () => {
  return (
    <div>
      <div>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default APITable;
