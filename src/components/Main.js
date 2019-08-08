import React from 'react';

class Main extends React.Component {
  
  apiResults(){
    if(this.props.data){
        return Object.entries(this.props.data).map(([key, course]) => {
            return (
              <article className="course" key={key}>
                <div className="course__title-wrapper">
                  <h4 className="course__title">{course.course_name}</h4>
                </div>
                <div className="course__field">
                  <div className="course__label">Title:</div>
                  <div className="course__property">{course.course_title}</div>
                </div>
                <div className="course__field">
                  <div className="course__label">Area:</div>
                  <div className="course__property">{course.course_area}</div>
                </div>
                <div className="course__field">
                  <div className="course__label">Description:</div>
                  <div className="course__property">{course.course_desc}</div>
                </div>
                <div className="course__field">
                  <div className="course__label">Link:</div>
                  <div className="course__property"><a href={`https://harvard-api.herokuapp.com/courses/${course.course_name}`}>{course.course_name}</a></div>
                </div>
                
              </article>
            )
        })
    }
  }
  
  render(){
    return (
          <main className="main">
        <section className="main__intro">
          <h2 className="main__title">Courses</h2>
          <div className="main__description">Course Search - Search by instructor name</div>
        </section>
        <section className="search"> 
          <form className="search__form">
            <input id="searchInput" className="search__input" placeholder="Enter Instructor Name" />
            <button id="searchButton" className="search__button"><img src="assets/media/search.svg" alt="search" />
            </button>
          </form>
        </section>
        <section className="main__results">
          <h3 className="main__results-title">Results:</h3> 
          <div className="main__results-container">
            {this.apiResults()}
          </div>
        </section>
      </main>
    )
  }
  
}

export default Main;