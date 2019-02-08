import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Project extends Component {
  render() {

    const project = this.props.project ? (
      <div className="project">
        <h4>{this.props.project.title}</h4>
        <p>{this.props.project.body}</p>
        <p><a href={this.props.project.link}>Link to Github Repo</a></p>
      </div>
    ) : (
      <div className="center">Loading project...</div>
    );

    return (
      <div className="container">
        {project}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.project_id;
  return {
    project: state.projects.find(project => project.id === id)
  }
}

export default connect(mapStateToProps)(Project)