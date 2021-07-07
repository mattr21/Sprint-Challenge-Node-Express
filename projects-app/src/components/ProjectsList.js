import React from 'react';
import Project from './Project.js';
import styled from 'styled-components';

const H1 = styled.h1`
    width: 300px;
    margin: 10px auto 0 auto;
`;

const ProjectsList = props => {
    return (
        <div>
            <H1>Projects:</H1>
            {props.projects.map(project => {
                return <Project key={project.id} project={project} />
            })}
        </div>
    )
}

export default ProjectsList;