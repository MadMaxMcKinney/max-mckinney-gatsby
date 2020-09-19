import styled from 'styled-components'
import {fadeInDown} from './../animations/m-styled-animations'

const PageHeaderTitle = styled.h1`
	font-size: 36px;
	margin-bottom: 24px;
	max-width: 400px;
	color: white;
    font-weight: 600;
    line-height: 50px;
	animation: ${fadeInDown} 1s;
`;

export default PageHeaderTitle