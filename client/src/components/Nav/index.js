import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        
    <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/books" className="nav-link">books</Link>
        </li>
        <li className="nav-item">
      <Link to="/users" className="nav-link">users</Link>
        </li>
        <li className="nav-item">
      <Link to="/events" className="nav-link">events</Link>
        </li>
        <li className="nav-item">
      <Link to="/admins" className="nav-link">adimins</Link>
        </li>
        <li className="nav-item">
        <form>
          <input />
          <button>Search</button>
        </form>
        </li>
      </ul>

    </div>
  </nav>
  );
}
 