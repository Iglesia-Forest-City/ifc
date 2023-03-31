import styled from 'styled-components';
import { dynamicComponent, Wrapper } from '../DynamicComponent';
import { sectionTitle, sectionWrapper } from 'styles';

export const PodcastSection = styled(dynamicComponent('section', true))`
	${sectionWrapper}
	padding: 4rem 2rem;

	${Wrapper} {
		display: grid;
		gap: 2em;
		place-items: center;

		${({ theme }) => theme.mediaQueries.tabletPortraitUp} {
			grid-template-columns: 1fr 1fr;
			justify-content: space-between;
		}
	}
`;

export const Title = styled.h2`
	${sectionTitle}
	line-height: 1;
	text-align: left;
	width: 100%;
`;

export const Sources = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const Source = styled.a`
	color: inherit;
	font-size: 80px;

	&:hover {
		color: ${({ theme }) => theme.colors.blue.light};
	}
`;
