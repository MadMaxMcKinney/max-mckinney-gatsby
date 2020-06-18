import React from 'react'
import styled from 'styled-components'
import MonitorImg from '../assets/img/apple-xdr.png'
import Img from 'gatsby-image'

export default function Monitor(props) {
    return (
        <MonitorContainer>
            <PreviewImage fluid={props.imageSource} alt="Project Image"/>
        </MonitorContainer>
    )
}

const MonitorContainer = styled.div`
    display: flex;
    height: 100%;
    border: 6px solid black;
    border-radius: 8px;
`;

const PreviewImage = styled(Img)`
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4px;
`;