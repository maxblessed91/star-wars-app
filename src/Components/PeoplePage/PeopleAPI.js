import React, { Component } from "react";
import { Table } from "antd";
import moment from "moment";

export default class PeopleAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://swapi.dev/api/people/`)
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
    let maleImg =
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/symbol_male.png";
    let femaleImg =
      "https://ru.seaicons.com/wp-content/uploads/2016/05/Female-icon.png";
    let robotImg =
      "https://iconarchive.com/download/i108307/google/noto-emoji-smileys/10103-robot-face.ico";
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Height",
        dataIndex: "height",
        key: "height",
      },
      {
        title: "Mass",
        dataIndex: "mass",
        key: "mass",
      },
      {
        title: "Hair color",
        dataIndex: "hair_color",
        key: "hair_color",
      },
      {
        title: "Skin color",
        dataIndex: "skin_color",
        key: "skin_color",
      },
      {
        title: "Birth Year",
        dataIndex: "birth_year",
        key: "birth_year",
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        render: (text, record) => {
          if (record.gender === "male") {
            return <img src={maleImg} alt={maleImg} width="50%" />;
          } else if (record.gender === "female") {
            return <img src={femaleImg} alt={femaleImg} width="50%" />;
          } else {
            return <img src={robotImg} alt={robotImg} width="50%" />;
          }
        },
      },
      {
        title: "Created",
        dataIndex: "created",
        key: "created",
        render: (text, record) => {
          return moment(record.created).format("MMM Do YY");
        },
      },
      {
        title: "Edited",
        dataIndex: "edited",
        key: "edited",
        render: (text, record) => {
          return moment(record.edited).format("MMM Do YY");
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
