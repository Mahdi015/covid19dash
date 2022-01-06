import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="cov19-footer noselect">
      <h1>
        {" "}
        Made With <FavoriteIcon
          fontSize="small"
          style={{ fill: "#ab1515" }}
        />{" "}
        By Mahdi Feriani <br />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "small",
          }}
        >
          This project is a assignment for Front-End position
        </span>
      </h1>
    </div>
  );
};

export default Footer;
