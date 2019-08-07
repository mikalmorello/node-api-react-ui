import React from 'react';
import { Helmet } from 'react-helmet'; 
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {

  render(){
    return (
      <div className="body__wrapper"> 
        <Helmet>
          <title>Harvard - API</title>
          <meta name="description" content="Harvard Course API - UI" />
        </Helmet>    
        <Header />
        <Main  />
        <Footer />
      </div>
    );
  }
  
}

export default App;