import React from 'react'
import styled from 'styled-components'
import MonitorImg from '../assets/img/apple-xdr.png'
import Img from 'gatsby-image'

export default function Monitor(props) {
    return (
        <MonitorContainer>
            <MonitorScreen src={MonitorImg} alt="Monitor Screen"/>
            <ImageContainer>
                <PreviewImage fluid={props.imageSource} alt="Project Image"/>
            </ImageContainer>
        </MonitorContainer>
    )
}

const MonitorContainer = styled.div`
    position: absolute;
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    left: 12px;
    bottom: 116px;
`;

const PreviewImage = styled(Img)`
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const MonitorScreen = styled.img`
    margin: 0;
`;