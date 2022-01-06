import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Chart.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { countryList } from "./Countrys";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    color: "white",
  },
});
const Chart = ({ defaultChartData, handleCountryChange, inputCountry }) => {
  const classes = useStyles();

  const [finalDates, setfinalDates] = useState([]);

  const formatDate = (num) => {
    const { date } = num;
    const year = parseInt(date.toString().substr(0, 4), 10);
    const day = parseInt(date.toString().substr(6, 2), 10);
    const month = parseInt(date.toString().substr(4, 2), 10);
    // console.log(date);
    const newDate = year
      .toString()
      .concat("-", month.toString(), "-", day.toString());
    // console.log(newDate);
    return newDate.toString();
  };
  const newArray = () => {
    const newDates = [];
    defaultChartData.map((data) => {
      return newDates.push(formatDate(data));
    });
    setfinalDates(newDates);
  };
  useEffect(() => {
    newArray();
  }, [defaultChartData]);

  return (
    <div className="cov19-chart section_margin section_padding">
      <div className="cov19-dropdown">
        <h1>Covid-19 Cases Statistics On :</h1>
        <Select
          className={classes.root}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputCountry}
          label="Country Code"
          onChange={handleCountryChange}
          defaultValue={"in"}
        >
          <MenuItem defaultChecked={true} value={"in"}>
            India
          </MenuItem>
          {countryList.map((country) => (
            <MenuItem value={country.code.toLowerCase()}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <h1 className="h1note">Api doesn't work for some country</h1>

      {defaultChartData && defaultChartData.length !== 0 && (
        <Line
          data={{
            labels: finalDates,
            datasets: [
              {
                data: defaultChartData.map(({ positive }) =>
                  positive == null ? 0 : positive
                ),
                label: "Positive",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: defaultChartData.map(({ death }) =>
                  death == null ? 0 : death
                ),
                label: "Death",
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.5)",
                fill: true,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
