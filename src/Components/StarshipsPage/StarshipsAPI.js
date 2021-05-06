import React, { Component } from "react";
import { Table } from "antd";

export default class StarshipsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://swapi.dev/api/starships/`)
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
        title: "Starship class",
        dataIndex: "starship_class",
        key: "starship_class",
      },
      {
        title: "Manufacturer",
        dataIndex: "manufacturer",
        key: "manufacturer",
      },
      {
        title: "Max speed",
        dataIndex: "max_atmosphering_speed",
        key: "max_atmosphering_speed",
      },
      {
        title: "Crew",
        dataIndex: "crew",
        key: "crew",
      },
      {
        title: "Passengers",
        dataIndex: "passengers",
        key: "passengers",
      },
      {
        title: "Cost",
        dataIndex: "cost_in_credits",
        key: "cost_in_credits",
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
