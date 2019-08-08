import React from 'react';
import { Helmet } from 'react-helmet'; 
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  
    constructor(props) {
      super(props);

      this.state = {
        data : null
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        fetch('https://harvard-api.herokuapp.com')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ data : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    }
  
  render(){
//    if(this.state.data){
//       console.log('test');
//       console.log(this.state.data);
//  } else {
//    console.log('not set');
//  }
    
    return (
      <div className="body__wrapper"> 
        <Helmet>
          <title>Harvard - API</title>
          <meta name="description" content="Harvard Course API - UI" />
        </Helmet>    
        <Header />
        <Main data={this.state.data}  />
      </div>
    );
  }
  
}

export default App;