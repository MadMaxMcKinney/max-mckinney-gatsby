import styled from 'styled-components'
import {fadeInDown} from '../../animations/m-styled-animations'

const HeaderTitle = styled.h1`
	font-size: 36px;
	margin-bottom: 24px;
	max-width: 400px;
	margin-top: 170px;
	color: white;
    font-weight: 600;
    line-height: 50px;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

export default HeaderTitle