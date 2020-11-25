import { render } from "@testing-library/react";
import React from 'react' ;

class Navbar extends React.Component {

    render() {
        return (
            <div className="nav">
              <div className="search-container" >
                  <input />
                  <button id="search-btn"> Search</button>
              </div>
            </div>
          );
    }
  
}

export default Navbar;
