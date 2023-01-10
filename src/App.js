import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setMyData(response.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      {loading && myData && (
        <div className="container">
          <div className="row">
            <CountriesList countries={myData} />

            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={myData} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
