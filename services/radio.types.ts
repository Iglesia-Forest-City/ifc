export type Source = {
	audio_info: string
	bitrate: number
	channels: number
	genre: string
	listener_peak: number
	listeners: number
	listenurl: string
	samplerate: number
	server_description: string
	server_name: string
	server_type: string
	stream_start: string
	stream_start_iso8601: string
	title: string
	artist: string
	album: string
	dummy: unknown
}

export type IceStats = {
	admin: string
	host: string
	location: string
	server_id: string
	server_start: string
	server_start_iso8601: string
	source: Source
}

export type RadioMetadataResponse = {
	icestats: IceStats
}

export type SimplifiedMetadata = Pick<Source, 'listeners' | 'title' | 'artist' | 'album'>

export interface RadioSocketServerEvents {
	radioMetadata: (metadata: SimplifiedMetadata) => void
	pollingError: (err: unknown) => void
}
