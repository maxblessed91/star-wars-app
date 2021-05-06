import React, { Component } from "react";
import { Table } from "antd";

export default class SpeciesAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://swapi.dev/api/species/`)
      .then((res) => res.json())
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
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Classification",
        dataIndex: "classification",
        key: "classification",
      },
      {
        title: "Average height",
        dataIndex: "average_height",
        key: "average_height",
      },
      {
        title: "Skin color",
        dataIndex: "skin_colors",
        key: "skin_colors",
      },
      {
        title: "Hair color",
        dataIndex: "hair_colors",
        key: "hair_colors",
      },
      {
        title: "Eye color",
        dataIndex: "eye_colors",
        key: "eye_colors",
      },
      {
        title: "Language",
        dataIndex: "language",
        key: "language",
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
          />
        </div>
      );
    }
  }
}
