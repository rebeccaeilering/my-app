import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

	deleteProject(id){
		this.props.onDelete(id);
	}

	render() {
		let projectItems;
		if(this.props.projects) {
			projectItems = this.props.projects.map(project => {
				// console.log(project);
				return (
					<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
				);
		});
	}    
	return (
      <div className="Projects">
      <h4>To Do Items</h4>
      	<ul>
        	{projectItems}
        </ul>
      </div>
    );
  }
}

Projects.propTypes = {
	projects: React.PropTypes.array,
	onDelete: React.PropTypes.func
}

export default Projects;
