import React from "react";

import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import Data from "./components/Cards/data";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CardData = Data.map((item, index) => <Card key={index} {...item} />);

export default function App() {
  return (
    <>
      <Header />
      {CardData}
    </>
  );
}
