import React from 'react';

const Projects = ({ project, handleProject }) => {

	return (
		<div onClick={ (e) => handleProject(e) }>
			<h3>{ project.name }</h3>
		</div>
	)
}

export default Projects;