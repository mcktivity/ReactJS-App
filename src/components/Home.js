import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { projects } = this.props
    const projectList = projects.length ? (
      projects.map(project => {
        return (
          <div className="card" key={project.id}>
            <div className="card-content">
              <Link to={'/' + project.id}>
                <span className="card-title red-text">{project.title}</span>
              </Link>
              <p>{project.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No projects to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {projectList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Home)