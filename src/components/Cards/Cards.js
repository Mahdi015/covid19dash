import React from "react";
import "./Cards.css";
import CircularProgress from "@mui/material/CircularProgress";

const Cards = ({ data }) => {
  const percentage = (tot, num) => {
    return ((num / tot) * 100).toFixed(2);
  };

  return (
    <div className="cov19-card-container">
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Confirmed Cases</h1>

        {data && data.cases ? (
          <>
            <p style={{ color: "#dc3354" }} className="cov19-card-content">
              {data.cases.toLocaleString("en")} <br />
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Number of Confirmed casses of COVID-19</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Recovered</h1>
        {data && data.cases ? (
          <>
            <p style={{ color: "#6dbb56" }} className="cov19-card-content">
              {data.recovered.toLocaleString("en")}
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Number of Recovered casses of COVID-19</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Deaths</h1>
        {data && data.cases ? (
          <>
            <p style={{ color: "#85898f" }} className="cov19-card-content">
              {data.deaths.toLocaleString("en")}
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Number of Deaths casses of COVID-19</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Recover Rate</h1>
        {data ? (
          <>
            <p style={{ color: "#6dbb56" }} className="cov19-card-content">
              {percentage(data.cases, data.recovered)}%
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Recover Rate of COVID-19 casses </p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Deaths Rate</h1>
        {data ? (
          <>
            <p style={{ color: "#dc3354" }} className="cov19-card-content">
              {percentage(data.cases, data.deaths)}%
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Death Rate of COVID-19 casses</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="cov19-card shadow-drop-center">
        <h1 className="cov19-card-title">Today casses</h1>
        {data && data.todayCases ? (
          <>
            <p style={{ color: "#b8a232" }} className="cov19-card-content">
              {data.todayCases.toLocaleString("en")}
            </p>
            <p className="p1">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className="p2">Number of Today casses of COVID-19</p>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Cards;
