import styled, { keyframes } from 'styled-components';

export const fadeInDown = keyframes`
	0% {
		transform: translateY(-20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;