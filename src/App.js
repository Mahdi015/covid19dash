import React, { useEffect, useState } from "react";
import "./App.css";
import { Cards, Chart, Footer, Header, DataTable } from "./components";
const App = () => {
  const [data, setdata] = useState([]);
  const [defaultChartData, setdefaultChartData] = useState([]);
  const [allCountryData, setallCountryData] = useState([]);
  const [inputCountry, setinputCountry] = useState("in");

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/all?yesterday")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
    fetch("https://api.covidtracking.com/v1/states/in/daily.json")
      .then((response) => response.json())
      .then((data) => {
        setdefaultChartData(data.reverse());
      });
    fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort=cases")
      .then((response) => response.json())
      .then((data) => {
        setallCountryData(data);
      });
  }, []);

  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = `https://api.covidtracking.com/v1/states/${countryCode}/daily.json`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setinputCountry(countryCode);
        setdefaultChartData(data.reverse());
      });
  };
  return (
    <div>
      <Header />
      <Cards data={data} />
      <Chart
        defaultChartData={defaultChartData}
        handleCountryChange={handleCountryChange}
        setdefaultChartData={setdefaultChartData}
        inputCountry={inputCountry}
      />
      <DataTable allCountryData={allCountryData} />
      <Footer />
    </div>
  );
};

export default App;
