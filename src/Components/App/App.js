import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import FilmsPage from "../FilmsPage/FilmsPage";
import PeoplePage from "../PeoplePage/PeoplePage";
import PlanetsPage from "../PlanetsPage/PlanetsPage";
import SpeciesPage from "../SpeciesPage/SpeciesPage";
import StarshipsPage from "../StarshipsPage/StarshipsPage";
import VehiclesPage from "../VehiclesPage/VehiclesPage";

import APITable from "../Table/Table";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="title">May the force be with you!</h1>
          <Route
            exact
            path="/"
            component={APITable}
            className="app-header-table"
          />
          <Route path="/films" component={FilmsPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/species" component={SpeciesPage} />
          <Route path="/starships" component={StarshipsPage} />
          <Route path="/vehicles" component={VehiclesPage} />
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
