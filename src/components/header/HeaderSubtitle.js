import styled from 'styled-components'
import {fadeInDown} from '../../animations/m-styled-animations'

const HeaderSubtitle = styled.h3`
	margin-bottom: 170px;
	font-size: 21px;
	color: #ffffff;
	font-weight: normal;
	line-height: 34px;
	animation: ${fadeInDown} 1.5s;
	@media(max-width: 425px) {
		margin-bottom: 110px;
    }
`;

export default HeaderSubtitle