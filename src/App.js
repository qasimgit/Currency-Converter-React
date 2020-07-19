import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Container } from "./componenets/container";

function App() {
  const [data, setData] = useState();

  const base_Url =
    "http://data.fixer.io/api/latest?access_key=1d07ce08032e97927c704ebf2d03b0dc";

  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await axios.get(base_Url);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
  });

  console.log(data)
  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
