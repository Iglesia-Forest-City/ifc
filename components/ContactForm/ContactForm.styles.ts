import styled, { css } from 'styled-components'

const inputStyles = css`
	appearance: none;
	border: 1px solid ${({ theme }) => theme.colors.neutral.light}80;
	background: ${({ theme }) => theme.colors.neutral.light}80;
	margin-top: 0.5em;
	padding: 0.5em 0.25em;
	transition: border-color ${({ theme }) => theme.vars.transitionTime};
	width: 100%;

	&:focus {
		border-color: ${({ theme }) => theme.colors.blue.semiDark};
		outline: 1px double ${({ theme }) => theme.colors.blue.semiDark};
	}
`

interface FormOverlayProps {
	readonly $open: boolean
}

export const FormOverlay = styled.div<FormOverlayProps>`
	bottom: 0;
	display: grid;
	left: 0;
  place-items: center;
	opacity: ${({ $open }) => ($open ? '1' : '0')};
	pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
	position: absolute;
	right: 0;
	top: 0;
	transition: opacity ${({ theme }) => theme.vars.transitionTime};
`

export const FormOverlayContent = styled.div`
	padding: 2em;
	text-align: center;

	p {
		margin: 0 0 2em;
	}
`

export const Label = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 1em;
`

export const Input = styled.input`
	${inputStyles}
`

export const TextArea = styled.textarea`
	${inputStyles}
	min-height: 14ch;
	resize: none;
`

interface FormProps {
	readonly $overlayIsOpen: boolean
}

export const Form = styled.form<FormProps>`
	position: relative;

	& > ${Label},
	& > button {
		opacity: ${({ $overlayIsOpen }) => (!$overlayIsOpen ? '1' : '0')};
		pointer-events: ${({ $overlayIsOpen }) => (!$overlayIsOpen ? 'all' : 'none')};
		transition: opacity ${({ theme }) => theme.vars.transitionTime};
	}
`
