import React, { useState, useContext } from "react";
import { Grow } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { watchList } from "../data/data.js";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import GeneralContext from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart.js";
import { data } from "react-router";

const WatchList = () => {
  const labels = watchList.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchList.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],

        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="search eg:nifty,bse,nse,nify fifty"
            className="search"
          />
          <span className="counts">{watchList.length}/50</span>
        </div>
        <ul className="list">
          {watchList.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
        <DoughnoutChart data={data} />
      </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchListAction(true);
  };

  const handleMouseExit = (e) => {
    setWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <spna className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Chart (C)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartIcon fontSize="small" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <ReadMoreIcon fontSize="small" />
          </button>
        </Tooltip>
      </span>
    </spna>
  );
};
