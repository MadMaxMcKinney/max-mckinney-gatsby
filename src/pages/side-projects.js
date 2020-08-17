import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageHeaderTitle from '../components/PageHeaderTitle'
import HeaderSubtitle from '../components/HeaderSubtitle'

import {fadeInDown} from './../animations/m-styled-animations'


const SideProjectsPage = ({data}) => (
    <PageGrid>


        <Avatar>
            <Img fluid={data.file.childImageSharp.fluid} />
        </Avatar>
        <PageHeaderTitle>Side Projects</PageHeaderTitle>
        <HeaderSubtitle>These are some of my side projects. They are all over the place. <br/> You might find some things you enjoy though!</HeaderSubtitle>

    </PageGrid>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
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
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`