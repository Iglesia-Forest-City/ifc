import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { ContactFormRequest, ContactFormResponse } from './wix.types';

export const wix = axios.create({
	baseURL: process.env.WIX_ENDPOINT,
})

export const sendContactForm = async (contactFormData: ContactFormRequest) => {
	try {
		const { data } = await wix.post<ContactFormResponse, AxiosResponse<ContactFormResponse>, ContactFormRequest>(process.env.WIX_CONTACT_FORM_PATH!, contactFormData)
		return data
	} catch(err) {
		throw err
	}
}
