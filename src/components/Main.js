import React from 'react';

class Main extends React.Component {
  
  apiResults(){
    if(this.props.data){
      console.log('working');
      console.log(this.props.data);
//      for (const key of Object.keys(this.props.data)) {
//        let course = this.props.data[key],
//            courseId = key;
//        
//        console.log(courseId);
//        return (
//          <div>{courseId}</div>
//          )
//      }
        return Object.entries(this.props.data).map(([key, value]) => {
            return (
              <div key={key}>
                  {key}
              </div>
            )
        })
    }
  }
  
  render(){
    return (
          <main className="main">
        <section className="main__intro">
          <h2 className="main__title">Instructors</h2>
          <div className="main__description">Lorem Ipsum</div>
        </section>
        <section className="main__results">
          <h3 className="main__results-title">Results:</h3> 
          {this.apiResults()}
        </section>
      </main>
    )
  }
  
}

export default Main;