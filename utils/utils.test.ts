import { cleanPhoneNumber, cleanVideoTitle, isExternalURL, getIpFromHeader } from './'

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



describe('getIpFromHeader()', () => {
	const ipv4 = '203.0.113.195'
	const ipv6 = '2a01:4b00:82e9:b900:443f:37dc:124e:b7c0'
	const port = '8080'

	it('should return the IP address from the header', () => {
		expect(getIpFromHeader(ipv4)).toBe(ipv4)
	})

	it('should return the fist IP address from a list of IPs', () => {
		const ipString = `${ipv4},${ipv6}`
		expect(getIpFromHeader(ipString)).toBe(ipv4)
	})

	it('should return an IPv4 address without the port', () => {
		const ipString = `${ipv4}:${port},${ipv6}`
		expect(getIpFromHeader(ipString)).toBe(ipv4)
	})

	it('should return a normalized IPv6 address without the port', () => {
		const ipString = `${ipv6}:${port},${ipv4}`
		expect(getIpFromHeader(ipString)).toBe(ipv6)
	})
})
