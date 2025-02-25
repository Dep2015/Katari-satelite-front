import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-triangle"></div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">
            <i className="icon">📊</i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/acciones">
            <i className="icon">👥</i>
            Acciones
          </Link>
        </li>
        <li>
          <Link to="/pqrs">
            <i className="icon">📝</i>
            PQRS
          </Link>
        </li>
        <li>
          <Link to="/gestion-social">
            <i className="icon">🔄</i>
            Gestión Social
          </Link>
        </li>
        <li>
          <Link to="/pagos">
            <i className="icon">💰</i>
            Pagos
          </Link>
        </li>
        <li>
          <Link to="/anotaciones">
            <i className="icon">📋</i>
            Anotaciones
          </Link>
        </li>
        <li>
          <Link to="/email">
            <i className="icon">✉️</i>
            Email de respuesta
          </Link>
        </li>
      </ul>
      <div className="nav-right">
        <div className="todo-dropdown">
          <span>Todo</span>
          <i className="dropdown-icon">▼</i>
        </div>
        <div className="user-icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;