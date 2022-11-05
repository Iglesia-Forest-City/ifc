import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button, Spinner } from 'components'
import { Form, FormOverlay, FormOverlayContent, Input, Label, TextArea } from './ContactForm.styles'
import axios from 'axios'

export type ContactFormProps = {
	className?: string
}

export const ContactForm = ({ className }: ContactFormProps) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [sending, setSending] = useState(false)
	const [openOverlay, setOpenOverlay] = useState(false)
	const [error, setError] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSending(true)
		setOpenOverlay(true)
		try {
			await axios.post('/api/contact', {
				name,
				lastName,
				email,
				message
			})
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error(err)
			setError(true)
		}
		setSending(false)
	}

	const clearForm = () => {
		setName('')
		setLastName('')
		setEmail('')
		setMessage('')
	}

	const setBack = () => {
		if (!error) {
			clearForm()
		} else {
			setError(false)
		}
		setOpenOverlay(false)
	}

	return (
		<Form className={className} onSubmit={handleSubmit} $overlayIsOpen={openOverlay}>
			<Label htmlFor="name">
				<span>Tu nombre *</span>
				<Input id="name" type="text" value={name} onChange={({ target: { value } }) => setName(value)} required />
			</Label>
			<Label htmlFor="lastName">
				<span>Tu apellido *</span>
				<Input id="lastName" type="text" value={lastName} onChange={({ target: { value } }) => setLastName(value)} required />
			</Label>
			<Label htmlFor="email">
				<span>Tu correo electrónico *</span>
				<Input id="email" type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
			</Label>
			<Label htmlFor="message">
				<span>Tu mensaje *</span>
				<TextArea id="message" value={message} onChange={({ target: { value } }) => setMessage(value)} required />
			</Label>
			<Button type="submit">Enviar</Button>
			<FormOverlay $open={openOverlay}>
				{sending && <Spinner />}
				{!sending && (
					<FormOverlayContent>
						{!error && <p>{`${name}, hemos enviado tu mensaje. Alguien se pondrá en contacto contigo muy pronto.`}</p>}
						{error && <p>Algo ha sucedido y no hemos podido enviar tu mensaje. Por favir inténtalo de nuevo.</p>}
						<Button onClick={setBack}>Regresar</Button>
					</FormOverlayContent>
				)}
			</FormOverlay>
		</Form>
	)
}
