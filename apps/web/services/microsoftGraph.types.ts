export type AccessTokenRequest = {
	client_id: string
	scope: string
	client_secret: string
	grant_type: string
}

export type AccessTokenResponse = {
	token_type: string
	expires_in: number
	ext_expires_in: number
	access_token: string
}

export type CalendarEvent = {
	'@odata.etag': string
	id: string
	subject: string
	bodyPreview?: string
	body?: {
		contentType: string
		content: string
	}
	start: {
		dateTime: string
		timeZone: string
	}
	end?: {
		dateTime: string
		timeZone: string
	}
	location?: {
		displayName: string
		locationType: string
		uniqueIdType: string
		address: unknown
		coordinates: unknown
	}
}

export type CalendarResponse = {
	'@odata.context': string
	value: CalendarEvent[]
}
