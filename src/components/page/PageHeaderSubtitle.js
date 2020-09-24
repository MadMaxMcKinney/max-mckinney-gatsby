import styled from 'styled-components'
import {fadeInDown} from '../../animations/m-styled-animations'

const PageHeaderSubtitle = styled.h3`
	max-width: 640px;
	font-size: 21px;
	color: #ffffff;
	font-weight: normal;
	line-height: 34px;
	animation: ${fadeInDown} 1.5s;
`;

export default PageHeaderSubtitle