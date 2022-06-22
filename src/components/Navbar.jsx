import React, { Component } from "react";

//we can convert it to stateless functionnal Component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar <span className="bg bg-pill bg-seconday">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};
//shortcut sfc
/*class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar{" "}
              <span className="bg bg-pill bg-seconday">
                {this.props.totalCounters}
              </span>
            </a>
          </div>
        </nav>
      );
    
  }
}*/

export default Navbar;
