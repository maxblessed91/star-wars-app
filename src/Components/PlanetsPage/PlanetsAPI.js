import React, { Component } from "react";
import { Table } from "antd";

export default class PlanetsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filteredInfo: null,
    };
  }

  handleChange = (pagination, filters) => {
    this.setState({
      filteredInfo: filters,
    });
  };

  componentDidMount() {
    fetch(`https://swapi.dev/api/planets/`)
      .then((result) => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    let { filteredInfo } = this.state;
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Rotation period",
        dataIndex: "rotation_period",
        key: "rotation_period",
        filters: [
          { text: "23", value: 23 },
          { text: "24", value: 24 },
          { text: "Under 23", value: 1 },
        ],
        filteredValue: filteredInfo.rotation_period || null,
        onFilter: (value, record) => record.rotation_period.includes(value),
      },
      {
        title: "Diameter",
        dataIndex: "diameter",
        key: "diameter",
      },
      {
        title: "Climate",
        dataIndex: "climate",
        key: "climate",
      },
      {
        title: "Terrain",
        dataIndex: "terrain",
        key: "terrain",
        filters: [
          { text: "Mountains", value: "mountain" },
          { text: "Jungles", value: "jungle" },
          { text: "Forests", value: "forest" },
          { text: "Swamps", value: "swamp" },
        ],
        filteredValue: filteredInfo.terrain || null,
        onFilter: (value, record) => record.terrain.includes(value),
      },
      {
        title: "Population",
        dataIndex: "population",
        key: "population",
      },
    ];
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          {items.map((item) => console.log(item))}
          <Table
            pagination={false}
            columns={columns}
            dataSource={this.state.items}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
}
