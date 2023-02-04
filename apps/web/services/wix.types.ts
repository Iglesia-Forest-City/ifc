export type ContactFormRequest = {
	email: string
	firstName: string
	lastName: string
	message: string
}

export type ContactFormResponse = {
	inserted: ContactFormRequest & {
		submissionTime: string
		_id: string
		_owner: string
		_createdDate: string
		_updatedDate: string
	}
}
