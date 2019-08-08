import React from 'react';

class Main extends React.Component {
  
//  apiResults(){
//    if(this.props.loaded){
//      console.log(this.props.data);
//      return this.props.data.map(item => {
//        return (
//          <div>{item.course_area}</div>
//        )
//      })
//    }
//  }
  
  
  
//            {this.props.data.map(item => (
//            <div>
//              {item}
//            </div>
//          ))}
  
  render(){
    //console.log(this.props.data);
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