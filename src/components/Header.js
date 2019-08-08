import React from 'react';

class Header extends React.Component {
  
  render(){
    return (
      <header className="header">
        <section className="header__intro">
          <a href="https://www.seas.harvard.edu/" className="header__logo">
            <img src="/assets/media/seas-logo.svg" alt="Seas Logo"/>
          </a>
        </section>
        <section className="header__main">
          <div className="header__wordmark">
            <img src="/assets/media/seas-wordmark.svg" alt="Seas Wordmark"/>
          </div>
          <h1 className="header__title">
            SEAS COURSE API
          </h1>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-link" href="/">Search</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link  active" href="/">Courses</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="/">Instructors</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    )
  }
  
}

export default Header;