import { cleanPhoneNumber, cleanVideoTitle, isExternalURL } from 'utils'

describe('isExternalURL()', () => {
	it('should detect external URLs', () => {
		const url = 'https://google.com'
		expect(isExternalURL(url)).toBeTruthy()
	})

	it('should detect internal URLs', () => {
		const url = '/post/1234'
		expect(isExternalURL(url)).toBeFalsy()
	})
})

describe('cleanVideoTitle()', () => {
	it('should remove a date from the title', () => {
		const cleanTitle = 'This is a title'
		const title = `12/12/2012 ${cleanTitle}`
		expect(cleanVideoTitle(title)).toBe(cleanTitle)
	})
})

describe('cleanPhoneNumber()', () => {
	it('should remove unwanted characters from the phone number', () => {
		const phoneNumber = '+1 (234)-567-8910'
		const cleanNumber = '+12345678910'
		expect(cleanPhoneNumber(phoneNumber)).toBe(cleanNumber)
	})
})
