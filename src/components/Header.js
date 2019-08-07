import React from 'react';

class Header extends React.Component {
  
  render(){
    return (
      <header className="header">
        <div className="header__container">
          <a href="https://www.seas.harvard.edu/" className="header__logo">
            <img src="/assets/media/seas-logo.png" alt="Seas Logo"/>
          </a>
        </div>
      </header>
    )
  }
  
}

export default Header;