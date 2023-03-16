/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { AccessTokenRequest, AccessTokenResponse, CalendarResponse } from './microsoftGraph.types';

const getAccessToken = async () => {
	console.log('Getting access token...')
	try {
		const { data } = await axios.post<AccessTokenResponse, AxiosResponse<AccessTokenResponse>, AccessTokenRequest>(`https://login.microsoftonline.com/${process.env.MICROSOFT_GRAPH_TENANT}/oauth2/v2.0/token`, {
			client_id: process.env.MICROSOFT_GRAPH_CLIENT_ID!,
			scope: 'https://graph.microsoft.com/.default',
			client_secret: process.env.MICROSOFT_GRAPH_CLIENT_SECRET!,
			grant_type: 'client_credentials'
		}, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		const { token_type, access_token } = data
		process.env.MICROSOFT_GRAPH_ACCESS_TOKEN = `${token_type} ${access_token}`
	} catch(err) {
		console.error('Something happend trying to get the access token')
	}
}

const microsoftGraph = axios.create({
	baseURL: 'https://graph.microsoft.com/v1.0/',
})

microsoftGraph.interceptors.request.use(async (config) => {
	if (!process.env.MICROSOFT_GRAPH_ACCESS_TOKEN) {
		await getAccessToken()
	}
	config.headers.Authorization = process.env.MICROSOFT_GRAPH_ACCESS_TOKEN;
	return config;
})

const fetchCalendarEvents = async () => {
	const start = new Date()
	const end = new Date()
	end.setDate(end.getDate() + 7)
	console.log('Fetching events from calendar...')
	const { data } = await microsoftGraph.get<CalendarResponse>(`users/calendario@iglesiafc.com/calendarview?startdatetime=${start.toISOString()}&enddatetime=${end.toISOString()}&$select=subject,body,bodyPreview,organizer,start,end,location`, {
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded',
			'Prefer': 'outlook.timezone="Eastern Standard Time"'
		}	
	})
	return data
}
export const getCalendarEvents = async () => {
	try {
		return await fetchCalendarEvents()
	} catch(err) {
		if (axios.isAxiosError(err)) {
			if (err.response?.data.error.code === 'InvalidAuthenticationToken') {
				console.log(`${err.response.data.error.code}: Requesting new token and refetching data...`)
				await getAccessToken()
				return await fetchCalendarEvents()
			}
			else {
				console.error(err.message)
			}
		}
	}
}
