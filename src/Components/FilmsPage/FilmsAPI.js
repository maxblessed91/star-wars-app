import React, { Component } from "react";
import { Table } from "antd";
import moment from "moment";

export default class FilmsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://swapi.dev/api/films/`)
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
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Episode",
        dataIndex: "episode_id",
        key: "episode_id",
      },
      {
        title: "Director",
        dataIndex: "director",
        key: "director",
      },
      {
        title: "Release Date",
        dataIndex: "release_date",
        key: "release_date",
        render: (text, record) => {
          return moment(record.release_date).format("LL");
        },
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
