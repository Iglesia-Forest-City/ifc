import type { GAEventType } from './analytics.types';
export const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
	window.gtag('config', MEASUREMENT_ID as string, {
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
