import styled from 'styled-components'

export const Title = styled.h1`
	line-height: 1;
	margin: 0;
`

export const EventWrapper = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.neutral.light};
	display: flex;
`

export const DateInfo = styled.time`
	line-height: 0.9;
	padding: 1rem;
	text-align: center;
	text-transform: capitalize;
`

export const Month = styled.div`
	font-size: 16px;
	font-weight: bold;
`

export const Day = styled.div`
	font-size: 24px;
	font-weight: bold;
`

export const Weekday = styled.div`
	font-size: 12px;
`

export const EventInfo = styled.div`
	border-left: 2px solid ${({ theme }) => theme.colors.blue.light};
	padding: 0 1rem;
`

export const Name = styled.div`
	font-size: 24px;
	font-weight: bold;
`

export const Time = styled.time`
	font-size: 16px;
	font-weight: bold;
`
