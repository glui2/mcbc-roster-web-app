import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "../components/DataProvider";
import Header from "../components/Header";

const App = () => (
  <Header></Header>
  // <React.Fragment>
  //   <DataProvider
  //     endpoint="api/rostering/"
  //     render={data => <Table data={data} />}
  //   />
  //   <Form endpoint="api/rostering/" />
  // </React.Fragment>
);

export default App;
