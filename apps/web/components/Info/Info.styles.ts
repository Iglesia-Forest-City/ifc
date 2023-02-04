import styled from 'styled-components'

export const InfoItem = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.colors.blue.semiDark};
	display: flex;
	gap: 0.5em;
	margin-bottom: 1em;
`

export const InfoLink = styled.a`
	color: inherit;
`

export const InfoText = styled.span``

export const MapFrame = styled.iframe`
	aspect-ratio: 16 / 9;
  width: 100%;
`
