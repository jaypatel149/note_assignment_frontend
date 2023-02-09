import React from "react";
import './Note.css';

const Header = () => {
  return (
    <header className="bg-dark py-2 fixed-top">
      <nav className="container-flued px-5 d-flex justify-content-between">
        <a className="navbar-brand text-white" href="/">My Notes</a>
        <form className="form-inline d-flex searchbar">
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;

