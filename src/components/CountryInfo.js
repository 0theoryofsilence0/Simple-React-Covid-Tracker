import React, { Fragment } from "react";

const CountryInfo = props => {
  const { selectedCountryData } = props;
  console.log(selectedCountryData);

  return (
    <div class="container">
      {selectedCountryData && (
        <Fragment>
          <h1 class="display-4">
            <span>
              <img src={selectedCountryData.countryInfo.flag} />
            </span>{" "}
            {selectedCountryData.country}
          </h1>
          <div>
            <table>
              <tbody>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Cases:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.cases}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Deaths:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.deaths}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Recovered:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.recovered}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Active Cases:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.active}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Critical Cases:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.critical}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Cases Today:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.todayCases}
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#ececec",
                      border: "1px solid #adadad",
                      padding: "10px"
                    }}
                    scope="row"
                  >
                    Total Deaths Today:
                  </th>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #adadad",
                      width: "180px"
                    }}
                  >
                    {selectedCountryData.todayDeaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CountryInfo;
