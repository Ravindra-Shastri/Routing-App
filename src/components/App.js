import React from 'react';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>
            🚀 Welcome to Homepage!
          </h2>
          <div className="home-link no-style">
        <NavLink to="/articles">
                <li className="home-li">
                  ARTICLES PAGE
                </li>
              </NavLink>
              <NavLink to="/books">
                <li className="home-li">
                  BOOKS PAGE
                </li>
              </NavLink>
              <NavLink to="/people">
                <li className="home-li">
                  PEOPLE PAGE
                </li>
              </NavLink> 
        </div>
        </div>
        
      </>
    )
  }
}

export default App;
