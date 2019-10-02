import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import IntroPage from "./IntroPage";
import Form from "./Form";
import Table from "./Table";
const App = () => (
  /* <React.Fragment>
    <DataProvider
      endpoint="api/rostering/"
      render={data => <Table data={data} />}
    />
    <Form endpoint="api/rostering/" />
  </React.Fragment> */
   
    <IntroPage/>
      
);


export default App;
