import React from 'react';
import { Helmet } from 'react-helmet'; 
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
    }
  } 
  
  componentDidMount(){
    this.setState({loading: true})
    fetch('https://harvard-api.herokuapp.com') 
      .then(data => data.json())
      .then(data => this.setState({data, loaded: true}))
  }
  
  render(){
    console.log(this.state.data);
    console.log('test');
    return (
      <div className="body__wrapper"> 
        <Helmet>
          <title>Harvard - API</title>
          <meta name="description" content="Harvard Course API - UI" />
        </Helmet>    
        <Header />
        <Main data={this.state.data} loaded={this.state.loaded}  />
      </div>
    );
  }
  
}

export default App;