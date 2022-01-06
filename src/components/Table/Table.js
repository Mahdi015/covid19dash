import React, { useState, useEffect } from "react";
import { DataGrid, GridFilterListIcon } from "@mui/x-data-grid";
import "./Table.css";
import CircularProgress from "@mui/material/CircularProgress";
const columns = [
  { field: "country", headerName: "Country", width: 130 },
  { field: "totalCases", headerName: "Total Cases", width: 120 },

  { field: "newCases", headerName: "New Cases", width: 130 },
  { field: "todayDeaths", headerName: "New Deaths", width: 130 },
  { field: "totalDeaths", headerName: "Total Deaths", width: 130 },
  { field: "todayRecovered", headerName: "Today Recovered", width: 180 },
  { field: "totalRecovered", headerName: "Total Recovered", width: 130 },
];

export default function DataTable({ allCountryData }) {
  const [allData, setallData] = useState([]);
  const [originalData, setoriginalData] = useState([]);
  useEffect(() => {
    {
      allCountryData && getData();
    }
    console.log(allData);
  }, [allCountryData]);
  const getData = () => {
    const rows = [];
    {
      allCountryData &&
        allCountryData.length != 0 &&
        allCountryData.map((data, id) => {
          let {
            cases,
            country,
            todayCases,
            todayDeaths,
            deaths,
            recovered,
            todayRecovered,
          } = data;
          rows.push({
            id,
            country,
            totalCases: cases,
            newCases: todayCases,
            todayDeaths,
            totalDeaths: deaths,
            todayRecovered,
            totalRecovered: recovered,
          });
        });
    }
    setallData(rows);
    setoriginalData(rows);
  };
  const filterSearch = (searchedVal) => {
    const filteredRows = originalData.filter((row) => {
      return row.country.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setallData(filteredRows);
  };
  return (
    <div
      className="cov19-table section_margin"
      style={{
        width: "70%",
        margin: "auto",
        marginBottom: "4rem",
        marginTop: "2rem",
      }}
    >
      <h1>Covid-19 Reported Cases and Deaths by Country</h1>
      <div className="cov19-filterCountry">
        <h1>Search Based On Country Name</h1>{" "}
        <input
          placeholder="Country Name"
          type="text"
          onChange={(e) => filterSearch(e.target.value)}
        />
      </div>
      {allData && allData.length != 0 ? (
        <>
          {/* {JSON.stringify(allData)} */}
          <DataGrid
            style={{ color: "white", overflow: "hidden" }}
            rows={allData}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            disableColumnSelector
            autoHeight
            disableDensitySelector
          >
            <GridFilterListIcon />
          </DataGrid>
        </>
      ) : (
        <div className="cov19-tablefetching">
          <CircularProgress /> <h1>Fetching Data / Or No Data Found </h1>
        </div>
      )}
    </div>
  );
}
