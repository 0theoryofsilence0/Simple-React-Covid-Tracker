import React, { Fragment, useState, useEffect } from "react";
import { getAllCountryData, getDataByCountryName } from "../api/index";
import CountryInfo from "./CountryInfo";

const SideNav = props => {
  const {
    setSelectedCountryData,
    setIsSelectedCountry,
    countryListData,
    setCountryListData,
    setIsFetching
  } = props;

  useEffect(() => {
    const cdm = async () => {
      getCountryData();
    };
    cdm();
    return () => {};
  }, []);

  const getCountryData = async () => {
    let { data, error } = await getAllCountryData();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setCountryListData(data);
    }
  };

  const selectedCountry = async country => {
    setIsFetching(true)
    let { data, error } = await getDataByCountryName(country);
    if (error) {
      console.log(error);
    } else {
      setIsSelectedCountry(country);
      setSelectedCountryData(data)
      setIsFetching(false)
      console.log(data);
    }
  };

  return (
    <Fragment>
      <aside className="sideNav">
        <nav>
          <ul className="list-unstyled">
            {countryListData &&
              countryListData.map((c, i) => (
                <li key={i} onClick={() => selectedCountry(c.country)}>
                  <a className="country-list-name">
                    <span>
                      <span>
                        <img
                          src={c.countryInfo.flag}
                          className="country-list-flag"
                        />
                      </span>
                      {c.country}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </aside>
    </Fragment>
  );
};

export default SideNav;
