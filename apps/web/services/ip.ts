import axios from 'axios'

export const ip = axios.create({
	baseURL: 'https://ipapi.co'
})
