import styled from 'styled-components'

export const VideoWrapper = styled.div`
	display: block;
`

export const VideoDetails = styled.a`
	text-decoration:	none;
	`

export const Title = styled.h3`
	color: ${({ theme }) => theme.colors.blue.semiDark};
	font-family: ${({ theme }) => theme.typography.secondaryFont};
	font-size: 20px;
	font-weight: bold;
	line-height: 1;
	margin: 1em 0;
`

export const VideoDate = styled.p`
	color: ${({ theme }) => theme.colors.blue.dark};
	font-size: 12px;
	font-weight: 300;
`

export const VideoDescription = styled.p`
	color: ${({ theme }) => theme.colors.blue.dark};
	font-size: 16px;
	font-weight: 300;
	word-break:	break-word;
`
