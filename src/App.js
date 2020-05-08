import React, { useState } from "react";
import MainNav from "./components/MainNav";
import SideNav from "./components/SideNav";
import CountryInfo from "./components/CountryInfo";
import "./App.css";

const App = () => {
  const [worldData, setWorldData] = useState(null);
  const [countryListData, setCountryListData] = useState(null);
  const [isSelectedCountry, setIsSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetch = () => {
    if (isFetching) {
      return <h1>Fetching...</h1>;
    }
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col-4">
          <SideNav
            setSelectedCountryData={setSelectedCountryData}
            setIsSelectedCountry={setIsSelectedCountry}
            countryListData={countryListData}
            setCountryListData={setCountryListData}
            setIsFetching={setIsFetching}
          />
        </div>
        <div className="col-8 dataholder align-middle">
          {isSelectedCountry == "" ? (
            <MainNav worldData={worldData} setWorldData={setWorldData} />
          ) : isFetching ? (
            fetch()
          ) : (
            <CountryInfo selectedCountryData={selectedCountryData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
