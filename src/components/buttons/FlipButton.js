import React, { Component } from 'react'
import styled from 'styled-components'

export default class flipButton extends Component {
	
	state = {
		isHovering: false
	}

	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter = () => {
		this.setState({
			isHovering: true
		});
	}

	handleMouseLeave = () => {
		this.setState({
			isHovering: false
		});
	}

	render() {
		return (
		<FlipButton href={this.props.link} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
			{!this.state.isHovering && this.props.content}
			{this.state.isHovering && this.props.hoverContent}
		</FlipButton>
		)
	}
}

const FlipButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6px 12px;
	color: white;
	border-radius: 2px;
	border: 1px solid;
	border-color: transparent;
	transition: all 0.3s;
	font-weight: bold;
	&:hover {
		border-color: white;
		color: white;
	}
`;
