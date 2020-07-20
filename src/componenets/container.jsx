import React, { useState } from "react";
import axios from "axios";

export const Container = ({ fetchedData }) => {
  const [from, setFrom] = useState("");
  console.log("from", from);
  const [to, setTo] = useState("");
  console.log("to", to);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState();
  console.log("result", result);

  const base_Url = `http://data.fixer.io/api/latest?access_key=1d07ce08032e97927c704ebf2d03b0dc`
  const FetchData = async () => {
    try {
      const data = await axios.get(base_Url);
      setResult(data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div>
        <h1>Currency Convertor</h1>
      </div>
      <div>
        <h1>The rates are updated of : {fetchedData && fetchedData.date}</h1>
      </div>
      <div>
        <div>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <select onChange={(e) => setFrom(e.target.value)}>
            {fetchedData &&
              Object.keys(fetchedData.rates).map((countries, idx) => {
                return (
                  <option key={idx} value={countries}>
                    {countries}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <select onChange={(e) => setTo(e.target.value)}>
            {fetchedData &&
              Object.keys(fetchedData.rates).map((countries, idx) => {
                return (
                  <option key={idx} value={countries}>
                    {countries}
                  </option>
                );
              })}
          </select>
          <button onClick={FetchData}>Convert</button>
        </div>
      </div>
    </div>
  );
};
