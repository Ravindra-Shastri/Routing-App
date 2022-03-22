import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <aside className="aside">
          <nav>
            <ul className="no-style">
              <NavLink className="aside-link" to="/">
                <li className="aside-li"><span className="link-span"><i className="fa-solid fa-house"></i></span>
                  Home
                </li>
              </NavLink>
              <NavLink className="aside-link" to="/articles">
                <li className="aside-li"><span className="link-span"><i className="fa-brands fa-adn"></i></span>
                  Articles
                </li>
              </NavLink>
              <NavLink className="aside-link" to="/people">
                <li className="aside-li"><span className="link-span"><i className="fa-solid fa-user-group"></i></span>
                  People
                </li>
              </NavLink>
              <NavLink className="aside-link" to="/books">
                <li className="aside-li"><span className="link-span"><i className="fa-solid fa-book"></i></span>
                  Books
                </li>
              </NavLink>
              <NavLink className="aside-link" to="/help">
                <li className="aside-li"><span className="link-span"><i className="fa-solid fa-address-card"></i></span>
                  Help
                </li>
              </NavLink>
            </ul>
          </nav>
        </aside>
      </>
    )
  }
}