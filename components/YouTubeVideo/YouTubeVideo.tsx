// import { useEffect, useRef } from 'react'
import { YTVideo } from './YouTubeVideo.styles'

// const SCRIPT_ID = 'yt-iframe-api'

// const loadIframeAPI = () => {
// 	const isLoaded = !!document.getElementById(SCRIPT_ID)
// 	if (!isLoaded) {
// 		const tag = document.createElement('script')
// 		tag.src = 'https://www.youtube.com/iframe_api'
// 		tag.id = SCRIPT_ID
// 		tag.defer = true
// 		const firstScriptElement = document.querySelector('script')
// 		firstScriptElement?.parentNode?.insertBefore(tag, firstScriptElement)
// 	}
// }

export type YouTubeVideoProps = {
	className?: string
	title: string
	id: string
	// onReady?: () => void
	// onStateChange?: () => void
}

export const YouTubeVideo = ({ className, title, id/*, onReady, onStateChange*/ }: YouTubeVideoProps) => {
	// const player = useRef<YT.Player>()

	// useEffect(() => {
	// 	loadIframeAPI()
	// }, [])

	// useEffect(() => {
	// 	const setPlayer = () => {
	// 		try {
	// 			player.current = new window.YT.Player(id, {
	// 				videoId: id,
	// 				playerVars: {
	// 					origin: window.location.origin,
	// 					modestbranding: 1,
	// 				},
	// 				events: {
	// 					onReady,
	// 					onStateChange,
	// 				},
	// 			})
	// 		} catch {
	// 			setTimeout(setPlayer, 400)
	// 		}
	// 	}
	// 	setPlayer()
	// }, [onStateChange, onReady, id])

	return (
		<YTVideo
			id={id}
			className={className}
			src={`https://www.youtube.com/embed/${id}?enablejsapi=1&modestbranding=1`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title={title}
		/>
	)
}
