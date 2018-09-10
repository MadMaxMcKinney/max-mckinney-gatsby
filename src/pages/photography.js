import React from 'react'
import styled from 'styled-components'
import FlickrPhotoGrid from '../components/FlickrPhotoGrid';
import FlipButton from '../components/FlipButton';

import {fadeInDown} from './../animations/m-styled-animations'

const PhotographyPage = () => (
  <React.Fragment>
	<PageGrid>
		<HeaderAction>
			<HeaderTitle>Photography</HeaderTitle>
			<FlipButton link="mailto:contact@maxmckinney.com" content="Hire Me" hoverContent="Available"></FlipButton>
		</HeaderAction>
		<FlickrPhotoGrid></FlickrPhotoGrid>
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

const HeaderAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 170px;
	animation: ${fadeInDown} 1s;
	@media(max-width: 600px) {
		flex-direction: column;
	}
`;

const HeaderTitle = styled.h1`
	font-size: 36px;
	margin-bottom: 24px;
	max-width: 400px;
	color: white;
	font-weight: 600;
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 170px;
	max-width: 350px;
	font-size: 21px;
	color: #c3c3c3;
	font-weight: 400;
	line-height: 34px;
	animation: ${fadeInDown} 1.5s;
	@media(max-width: 425px) {
		margin-bottom: 110px;
	}
`;

export default PhotographyPage