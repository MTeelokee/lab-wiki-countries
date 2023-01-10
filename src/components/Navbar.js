import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          LAB - WikiCountries
        </NavLink>
      </div>
    </nav>
  );
}
