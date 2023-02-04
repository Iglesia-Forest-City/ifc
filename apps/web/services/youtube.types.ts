export type YouTubeVideo = {
	kind: string
	etag: string
	id: string
	snippet: YouTubeVideoSnippet
	contentDetails: YouTubeVideoContentDetails
	status: YouTubeVideoStatus
	statistics?: YouTubeVideoStatistics
	player: {
		embedHtml: string
  }
}

export type YouTubeVideoStatistics = {
	viewCount: string
	likeCount: string
	dislikeCount: string
	favoriteCount: string
	commentCount: string
}

export type YouTubeVideoStatus = {
	uploadStatus: string
	privacyStatus: string
	license: string
	embeddable: boolean
	publicStatsViewable: boolean
}

export type YouTubeVideoContentDetails = {
	duration: string
	dimension: string
	definition: string
	caption: string
	licensedContent: boolean
	projection: string
}

export type YouTubeVideoSnippet = {
	publishedAt: string
	channelId: string
	title: string
	description: string
	thumbnails: {
			default: YouTubeThumbnail
			medium: YouTubeThumbnail
			high: YouTubeThumbnail
			standard?: YouTubeThumbnail
			maxres?: YouTubeThumbnail
	},
	channelTitle: string
	tags: string[]
	categoryId: string
	liveBroadcastContent: string
	defaultLanguage: string
	localized: {
			title: string
			description: string
			defaultAudioLanguage: string
	},
	resourceId: {
		kind: string
		videoId: string
	}
}

export type YouTubeThumbnail = {
	url: string
	width: number
	height: number
}

export type YouTubeVideoParams = {
	key?: string
	part?: string
	id?: string
	h1?: string
	maxHeight?: number
	maxResults?: number
	maxWidth?: number
	pageToken?: string
	regionCode?: string
	videoCategoryId?: string
}

export type YouTubeDownloadOptions = {
	quality?: "144p" | "240p" | "270p" | "360p" | "480p" | "720p" | "720p60" | "1080p" | "1080p60" | "1440p" | "1440p60" | "2160p" | "2160p60" | "4320p" | "4320p60"
	format?: "mp4" | "flv" | "3gp" | "webm" | "ts"
}

export type YouTubeDataResponse = {
	kind: string
	etag: string
	nextPageToken: string
	items: YouTubeVideo[]
	pageInfo: {
		totalResults: number
		resultsPerPage: number
	}
}
