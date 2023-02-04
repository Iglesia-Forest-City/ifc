import type { NextApiRequest, NextApiResponse } from 'next'
import { sendContactForm } from 'services'
import type { ContactFormRequest, ContactFormResponse } from 'services';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ContactFormResponse>) {
	if (req.method === 'POST') {
		const data: ContactFormRequest = {
			email: req.body.email,
			firstName: req.body.name,
			lastName: req.body.lastName,
			message: req.body.message
		}
		try {
			const submissionResponse = await sendContactForm(data)
			res.status(200).json(submissionResponse)
		} catch(err) {
			console.error(err)
			throw err
		}
  } else {
    res.status(405).end()
  }
}
