import React from "react";
import { Link, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Services from './Services';

function Header() {
  return (
    <div className="header-nav">
      <nav>
        <ul className="main-nav">
            <li className="header-nav"><Link className="header-link" to="/about">About</Link></li>
            <li className="header-nav"><Link className="header-link" to="/services offered">Services Offered</Link></li>
            {/* <li className="header-nav"><Link className="header-link" to="/">Home</Link></li> */}
        </ul>
        <main>
            <Route exact path="/" render={() => <Home/>}></Route>
            <Route path="/about" render={() => <About/>}></Route>
            <Route path="/services offered" render={() => <Services/>}></Route>
        </main>
      </nav>
    </div>
  );
}

export default Header;
