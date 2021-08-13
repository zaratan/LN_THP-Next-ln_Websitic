import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">L'agence</Link>
    </li>
    <li>
      <Link to="/works">Projets</Link>
    </li>
  </div>
);

export default Navbar;
