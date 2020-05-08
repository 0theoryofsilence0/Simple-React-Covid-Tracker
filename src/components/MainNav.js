import React, { Fragment, useEffect, useState } from "react";
import { getAllData } from "../api/index";
import moment from "moment";

const MainNav = props => {
  const { worldData, setWorldData } = props;

  const getData = async () => {
    let { data, error } = await getAllData();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setWorldData(data);
    }
  };

  useEffect(() => {
    const cdm = async () => {
      getData();
    };
    cdm();
    return () => {};
  }, []);

  return (
    <div className="align-middle">
      {!worldData ? (
        <h1>Fetching ...</h1>
      ) : (
        <Fragment>
          <h1>Covid Cases World Wide</h1>
          <p>
            updated as of{" "}
            {worldData && moment.utc(worldData.updated).format("MM-DD-YYYY")}
          </p>
          <div>
            <h3>Cases: {worldData && worldData.cases}</h3>
            <h3>Deaths: {worldData && worldData.deaths}</h3>
            <h3>Recovered: {worldData && worldData.recovered}</h3>
            <h3>Active: {worldData && worldData.active}</h3>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MainNav;
