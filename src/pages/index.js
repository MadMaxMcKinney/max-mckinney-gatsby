import React from 'react'
import { graphql } from "gatsby"
import styled, { keyframes } from 'styled-components'
import ProjectCard from '../components/cards/ProjectCard';

import HeaderPill from '../components/header/HeaderPill'
import HeaderTitle from '../components/header/HeaderTitle'

import {fadeInDown} from './../animations/m-styled-animations'

const getFilterActionButtons = () => {
    return document.querySelectorAll('#FilterContainer span');
}

const getFilterPortfolioItems = () => {
    return document.querySelectorAll('[data-filter]');
}

const clearFilterItemsActive = () => {
    let items = getFilterActionButtons();
    items.forEach(item => {
        item.classList.remove('active');
    })

    let portfolioItems = getFilterPortfolioItems();
    portfolioItems.forEach(item => {
        item.classList.remove('active');
    })
}

/**
 * Filters the design AND dev portfolio items
 *
 */
const filterClickBoth = () => {
    let portfolioItems = document.querySelectorAll('[data-filter]');

    clearFilterItemsActive();
    document.querySelector('#FilterItemAll').classList.add('active');

    setTimeout(() => {
        portfolioItems.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}

/**
 * Filters the design portfolio items, anything that contains "design" using *
 *
 */
const filterClickDesign = () => {
    let portfolioItemsDesign = document.querySelectorAll('[data-filter*="Design"]')

    clearFilterItemsActive();
    document.querySelector('#FilterItemDesign').classList.add('active');

    setTimeout(() => {
        portfolioItemsDesign.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}

/**
 * Filters the dev portfolio items, anything that contains "development" using *
 *
 */
const filterClickDev = () => {
    let portfolioItemsDev = document.querySelectorAll('[data-filter*="Development"]')

    clearFilterItemsActive();
    document.querySelector('#FilterItemDev').classList.add('active');

    setTimeout(() => {
        portfolioItemsDev.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}

const IndexPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>

		<HeaderTitle className="font-bold text-3xl animate-fade-in-fast md:text-4xl">Designing for empathy, <br/> humanizing technology.</HeaderTitle>

        {/* Desktop Text */}
        <div className="hidden md:block">
            <h1 className="hidden mb-36 text-xl text-white leading-relaxed animate-fade-in md:block">I’m <HeaderPill showProfile title="Max McKinney" /> currently a design lead at <HeaderPill type="ibm" title="IBM" /><br/>My background is in <HeaderPill type="uiux" title="UI/UX Design" /> and <HeaderPill type="development" title="Web Development" /><br/>A decade of creating allows me to make <HeaderPill type="experience" title="Seamless Experiences" /></h1>
        </div>

        {/* Mobile Text */}
        <div className="block md:hidden">
            <p className="block text-lg font-semibold text-white leading-relaxed animate-fade-in md:hidden"><span className="opacity-60">I’m</span> Max McKinney, <span className="opacity-60">currently a</span> Design Lead <span className="opacity-60">at</span> IBM.</p>
            <p className="block text-lg font-semibold text-white leading-relaxed animate-fade-in md:hidden"><span className="opacity-60">My background is in</span> UI/UX Design <span className="opacity-60">and</span> Web Development.</p>
            <p className="block text-lg font-semibold text-white leading-relaxed animate-fade-in md:hidden mb-24 "><span className="opacity-60">A decade of creating lets me make</span> Seamless Experiences.</p>
        </div>
        

        <FilterContainer className="grid w-full grid-flow-col gap-3 justify-end items-center mb-8 animate-fade-in text-sm md:gap-6" id="FilterContainer">
            <span className="active" onClick={filterClickBoth} id="FilterItemAll">ALL</span>
            <span onClick={filterClickDesign} id="FilterItemDesign"><i className="far fa-ruler-triangle"></i> DESIGN</span>
            <span onClick={filterClickDev} id="FilterItemDev"><i className="far fa-brackets-curly"></i>  DEVELOPMENT</span>
        </FilterContainer>

        {/* Project Card Grid */}
		<ProjectGrid className="animate-fade-in-slow grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-24">
			{data.allMarkdownRemark.edges.map(({node}) => (
				<ProjectCard data={node} key={node.key}></ProjectCard>
			))}
		</ProjectGrid>

	</PageGrid>
  </React.Fragment>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const appearAnimLeft = keyframes`
    from {
        transform: scale(0.8);
        transform: translateX(10px);
        opacity: 0;
    }
    to {
        transform: scale(1);
        transform: translateX(0px);
        opacity: 1;
    }
`

const appearAnimRight = keyframes`
    from {
        transform: scale(0.8);
        transform: translateX(-10px);
        opacity: 0;
    }
    to {
        transform: scale(1);
        transform: translateX(0px);
        opacity: 1;
    }
`

const ProjectGrid = styled.div`
    min-height: 800px;
`

const FilterContainer = styled.div`
    span {
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        color: #C3C3C3;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }
    
    span.active {
        color: white;
    }
    span.active::before {
        content:'[';
        display: inline-block;
        padding-right: 6px;
        color: #C3C3C3;
        transition: all 0.3s;
        animation: ${appearAnimLeft} 0.3s;
    }
    span.active::after {
        content:']';
        display: inline-block;
        padding-left: 6px;
        color: #C3C3C3;
        transition: all 0.3s;
        animation: ${appearAnimRight} 0.3s;
    }
`;

export default IndexPage

export const query = graphql`
query ProjectQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}, filter: {fileAbsolutePath:{regex: "/work/.*.md$/"}}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  projectShortBrief
			  themeColor
			  accentColor
			  image {
				childImageSharp {
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              thumb {
				childImageSharp {
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              categories
			}
		  }
		}
	  }
  }
`