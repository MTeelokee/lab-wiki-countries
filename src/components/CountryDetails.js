import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  let { countryId } = useParams();
  let countryTarget = countries.find((e) => e.alpha3Code === countryId);

  return (
    <>
      {console.log(countryTarget.name.common)}
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryTarget.alpha2Code.toLowerCase()}.png`}
          alt=""
        />
        <h1>{countryTarget.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryTarget.capital}</td>
            </tr>
            <tr>
              <td>{countryTarget.area}</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryTarget.borders.length > 0 ? (
                    countryTarget.borders.map((e) => {
                      return (
                        <>
                          <NavLink to={`/${e}`}> {e} </NavLink>
                        </>
                      );
                    })
                  ) : (
                    <div>
                      <p>No borders</p>
                    </div>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
