import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    margin-top: 10px;
    width: 300px;
    margin: 10px auto 0 auto;

    p {
        text-align: left;
        margin: 15px;
    }
`;

const Project = props => {
    return (
        <WrapperDiv>
            <p><strong>Name: </strong>{props.project.name}</p>
            <p><strong>Description: </strong>{props.project.description}</p>
        </WrapperDiv>
    )
}

export default Project;