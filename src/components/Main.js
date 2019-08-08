import React from 'react';

class Main extends React.Component {
  
  
  render(){
    return (
      <main className="main">
        <section className="main__intro">
          <h2 className="main__title">Instructors</h2>
          <div className="main__description">Lorem Ipsum</div>
        </section>
        <section className="main__results">
          <h3 className="main__results-title">Results:</h3> 
        </section>
      </main>
    )
  }
  
}

export default Main;