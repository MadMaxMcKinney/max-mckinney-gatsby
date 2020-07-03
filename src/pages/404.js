import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NotFoundPage = () => (
  <ErrorPageGrid>
    <h1>Whoops! This page was not found :(</h1>
	<p>Head back to home and hopefully you can find what you are looking for!</p>
	<p>If you can't find it feel free to contact me at <a href="mailto:hello@maxmckinney.com">hello@maxmckinney.com</a></p>
	<MButton to="/">Back to Home</MButton>
  </ErrorPageGrid>
)

export default NotFoundPage

const ErrorPageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	p {
		color: #a8a8a8;
	}
	h1 {
		padding-top: 120px;
		font-weight: 800;
		font-size: 45px;
		margin-bottom: 24px;
	}
`

const MButton = styled(Link)`
	border: 1px solid white;
	display: flex;
	padding: 12px 24px;
	margin-top: 24px;
	border-radius: 2px;
	width: fit-content;
	&:hover {
		background: white;
		border-color: white;
		color: black;
	}
`;