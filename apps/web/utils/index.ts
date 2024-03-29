export const isExternalURL = (url: string) => /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi.test(url)

export const cleanVideoTitle = (rawTitle: string) => rawTitle.replace(/(\d{1,2}\/){2}\d{4}\s?/, '')

const dateFormatOptions: Intl.DateTimeFormatOptions = {
	day: 'numeric',
	month: 'short',
	weekday: 'short',
}

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
	...dateFormatOptions,
	hour12: true,
	hour: 'numeric',
	minute: '2-digit',
}

export const formatDate = (date: Date, locale = 'es') => date.toLocaleString(locale, dateFormatOptions)

export const formatDateTime = (date: Date, locale = 'es') => date.toLocaleTimeString(locale, dateTimeFormatOptions)

export const destructDateTime = (dateString: string) => {
	const cleanDateString = dateString.replaceAll(/\.\s?|,/g, '')
	const { 0: weekday, 1: day, 2: month, 3: time, 4: timeSegment } = cleanDateString.split(' ')
	return {
		weekday,
		day,
		month,
		time: `${time} ${timeSegment ?? ''}`.replace(/\s+/g, ' ').trim()
	}
}

export const cleanPhoneNumber = (phoneNumber: string) => {
	const cleanPhoneNumber = phoneNumber.replaceAll(/\(|\)|\-|\s/g, '')
	return cleanPhoneNumber
}

export const getIpType = (ip: string) => {
	const isIpv4 = ip.split('.').length === 4;
  const isIpv6 = ip.split(':').length >= 2;
  if (isIpv4) return 'IPv4';
  if (isIpv6) return 'IPv6';
  return 'unknown';
}

export const getIpFromHeader = (ipString: string) => {
	const [ip] = ipString.replaceAll(/\s/g, '').split(',')
	const type = getIpType(ip)
	if (type === 'IPv4') {
		const [ipv4] = ip.split(':')
		return ipv4
	} else if (type === 'IPv6') {
		return ip.substring(0, ip.lastIndexOf(':'))
	}
	return ip
}
