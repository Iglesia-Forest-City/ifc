import styled, { css } from 'styled-components'

interface StyledButtonProps {
	readonly secondary?: boolean
	readonly small?: boolean
	readonly uppercase?: boolean
}

const button = css<StyledButtonProps>`
	${({ theme, secondary }) => {
		if (secondary) {
			return css`
				background-color: transparent;
				border: 1px solid ${theme.colors.neutral.light};
				color: ${theme.colors.neutral.light};

				&:hover {
					background-color: ${theme.colors.neutral.light};
					color: ${theme.colors.blue.dark};
				}
			`
		} else {
			return css`
				background-color: ${theme.colors.neutral.light};
				border: 1px solid ${theme.colors.neutral.light};
				color: ${({ theme }) => theme.colors.blue.dark};

				&:hover {
					background-color: transparent;
					color: ${theme.colors.neutral.light}
				}
			`
		}
	}}
	border-radius: 6px;
	cursor: pointer;
	display: inline-block;
	font-size: ${({ small }) => (small ? 12 : 16)}px;
	font-weight: bold;
	padding: 0.8em;
	text-decoration: none;
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
	transition: ${({ theme }) => `background-color ${theme.vars.transitionTime}, border-color ${theme.vars.transitionTime}, color ${theme.vars.transitionTime}`};
`

export const StyledLink = styled.a<StyledButtonProps>`
	${button}
`

export const StyledButton = styled.button<StyledButtonProps>`
	${button}
`
