import { NavLink } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((e) => {
              return (
                <div
                  key={e.alpha3Code}
                  className="list-group-item list-group-item-action"
                >
                  <img
                    style={{ height: '10px' }}
                    src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
                    alt={`mini_flag${e.name.common}`}
                  />
                  <NavLink to={`/${e.alpha3Code}`}> {e.name.common} </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
