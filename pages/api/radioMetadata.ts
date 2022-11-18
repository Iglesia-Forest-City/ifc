import type { Socket } from 'net'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ServerOptions } from 'socket.io';
import { Server } from 'socket.io'
import { getRadioMetadata } from 'services';
import type { SimplifiedMetadata , RadioSocketServerEvents } from 'services';
import axios from 'axios';

interface SocketIONextApiResponse extends NextApiResponse {
	socket: Socket & {
		server: ServerOptions & {
			io: Server
		}
	}
}

const ioHandler = (req: NextApiRequest, res: SocketIONextApiResponse) => {
	let io: Server<RadioSocketServerEvents>
	let radioData: SimplifiedMetadata

  if (!res.socket.server.io) {
    console.log('Opening socket	connection...')
    io = new Server<RadioSocketServerEvents>(res.socket.server)
		console.log('Socket opened.')
    res.socket.server.io = io
  } else {
    console.log('Socket already open.')
		io = res.socket.server.io
  }

	const pollMetadata = async () => {
		try {
			const { data: { icestats: { source } } } = await getRadioMetadata()
			const { artist,listeners, title } = source
			const simplifiedMetadata = { artist, listeners, title }
			const metadataHasChanged = JSON.stringify(radioData) !== JSON.stringify(simplifiedMetadata)
			if (metadataHasChanged) {
				radioData = simplifiedMetadata
				io.emit('radioMetadata', radioData)
				console.log('Emitting metadata...')
			}
		} catch (err) {
			console.warn('Polling Error:', err)
			io.emit('pollingError', err)
			if (axios.isAxiosError(err)) {
				console.warn('Base URL:', err.config?.baseURL)
			}
		}
	}

	let pollInterval: NodeJS.Timer

	io.on('connection', (socket) => {
		console.log('New client connection')
		if (!pollInterval && io.engine.clientsCount === 1) {
			console.log('Starting polling...')
			pollInterval = setInterval(pollMetadata, 1000)
			console.log('Polling started.')
		}

		socket.on('disconnect', () => {
			console.log('Disconnecting...')
			if (io.engine.clientsCount <= 1) {
				console.log('Stopping polling...')
				clearInterval(pollInterval)
				console.log('Polling stopped.')
			}
		})
	})

  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default ioHandler
