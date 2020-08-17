import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageHeaderTitle from '../components/PageHeaderTitle'
import PageHeaderSubtitle from '../components/PageHeaderSubtitle'

import {fadeInDown} from './../animations/m-styled-animations'


const SideProjectsPage = ({data}) => (
    <PageGrid>


        <Avatar>
            <Img fixed={data.file.childImageSharp.fixed} />
        </Avatar>
        <PageHeaderTitle>Side Projects</PageHeaderTitle>
        <PageHeaderSubtitle>These are some of my side projects. They are all over the place. <br/> You might find some things you enjoy though!</PageHeaderSubtitle>

        <SideProjectGrid>
            <SideProjectCard href="#">
                <h1>Smart Fridge</h1>
                <SideProjectDetails>Smart Fridge is a web based application designed for touch and to collect/organize useful information related to home kitchens.</SideProjectDetails>
                <SideProjectLink>side-project/smart-fridge</SideProjectLink>
            </SideProjectCard>
        </SideProjectGrid>

    </PageGrid>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const SideProjectGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 72px;

    margin-top: 150px;

    animation: ${fadeInDown} 1.7s;
`

const SideProjectCard = styled.a`
    --accent-color: #F8824E;
    
    display: flex;
    flex-direction: column;
    place-items: center;
    position: relative;
    padding: 24px;

    border-radius: 24px;
    border: 2px solid transparent;

    text-align: center;

    background: var(--blueblack-500);
    transition: all 0.3s;
    overflow: hidden;

    &:hover {
        border-color: var(--accent-color);
    }

    & > * {
        z-index: 10;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--accent-color);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1;
    }

    &:hover&::after {
        opacity: 0.15;
    }

`

const SideProjectDetails = styled.p`
    margin-top: 16px;
    margin-bottom: 0px;
    max-width: 350px;
    padding: 0;
`

const SideProjectLink = styled.p`
    color: var(--accent-color);
    margin: 0;
    margin-top: 24px;
    padding: 0;
`

const Avatar = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    place-items: center;

    background: var(--blueblack-300);
    padding: 6px;
    margin-bottom: 16px;
    margin-top: 170px;

    border-radius: 100%;
    border: 1px solid #40476A;

    animation: ${fadeInDown} 0.7s;

    img {
        width: 100%;
        height: auto;
        border-radius: 100%;
    }
`

export default SideProjectsPage

export const query = graphql`
query pageQuery {
	file(relativePath: {eq: "img/maxmckinney-profile.png"}) {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`