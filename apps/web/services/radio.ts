import axios from 'axios'
import io from 'socket.io-client'
import type { Socket } from 'socket.io-client'
import type { RadioMetadataResponse, RadioSocketServerEvents } from './radio.types'

export const radio = axios.create({
	baseURL: process.env.RADIO_SERVER,
})

export const getRadioMetadata = () => radio.get<RadioMetadataResponse>('status-json.xsl')

export const connectRadioSocket = async () => {
	console.log('Connecting to socket...')
	let socket: Socket<RadioSocketServerEvents>

	try {
		await fetch('/api/radioMetadata')
	} finally {
		socket = io({
			secure: true,
			reconnection: true,
			transports: ['websocket'],
			rejectUnauthorized: false,
		})

		socket.on('connect', () => {
			console.log('Socket connection established.')
		})

		socket.on('connect_error', (err) => console.error('Something happened trying to connect to the socket:', err))

		socket.on('disconnect', () => console.log('Socked disconnected.'))

		socket.on('pollingError', (err) => console.warn('Something happened trying to polling the metadata:', err))
	}

	return socket
}
