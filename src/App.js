import React from 'react';
import { Helmet } from 'react-helmet'; 
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  constructor(){
  super();
  this.state={
     hits: [],
     isLoading: false,
     error: null,
   }
}

componentDidMount(){
  this.setState({
     isLoading: true
    })
  fetch('https://harvard-api.herokuapp.com')
  .then(response => {
       if(response.ok){
       return response.json()
      }else{
      throw new Error('Something went wrong...')
    }
 })
  .then(data => this.setState({
    hits: data.hits,
    isLoading: false
  }))
  .catch(error => this.setState({
     error: null, 
     isLoading: false
  }))
 }
  
  render(){
//    console.log(state.courses);
    console.log(this.state.hits);
    return (
      <div className="body__wrapper"> 
        <Helmet>
          <title>Harvard - API</title>
          <meta name="description" content="Harvard Course API - UI" />
        </Helmet>    
        <Header />
        <Main  />
      </div>
    );
  }
  
}

export default App;