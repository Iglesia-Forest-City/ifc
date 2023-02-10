import type { GAEventType } from './analytics.types';

const getMeasurementID = () => {
	const gaFromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
	if (gaFromEnv === undefined || gaFromEnv === '') {
		console.warn('Please provide GA_MEASUREMENT_ID different than:', gaFromEnv);
		return 'no-id-provided'
	}
	return gaFromEnv
}

export const GA_MEASUREMENT_ID = getMeasurementID()

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
	window.gtag('config', GA_MEASUREMENT_ID, {
		page_path: url,
	})
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEventType) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	})
}
