import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent} from 'react';
import Image from 'next/image'
import { CgPlayButtonO, CgPlayPauseR, CgPlayStopR } from 'react-icons/cg'
import { Album, Artist, Audience, AudienceNumber, ControlButton, Controls, Metadata, RadioLogo, Title, ToggleVolButton, VolumeSlider, WrappedPlayer } from './RadioPlayer.styles'
import { Spinner } from 'components'
import type { Socket } from 'socket.io-client'
import { connectRadioSocket } from 'services'
import type { SimplifiedMetadata } from 'services'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { FiRadio } from 'react-icons/fi'

export type RadioPlayerProps = {
	className?: string
	logo: string
	logoAltText: string
	url: string
}

export const RadioPlayer = ({ className, logo, logoAltText, url }: RadioPlayerProps) => {
	const audioPlayer = useRef<HTMLMediaElement>(null)
	const socketRef = useRef<Socket>()
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const [volume, setVolume] = useState(0.5)
	const [previousVolume, setPreviousVolume] = useState<number | null>(null)
	const [isMuted, setIsMuted] = useState(false)
	const [artist, setArtist] = useState<string>()
	const [title, setTitle] = useState<string>()
	const [album, setAlbum] = useState<string>()
	const [currentListeners, setCurrentListeners] = useState<number>()

	useEffect(() => {
		const setPause = () => setIsPlaying(false)
		const setPlay = () => {
			setIsPlaying(true)
			setIsLoaded(true)
		}
		const setStop = () => {
			setIsPlaying(false)
			setIsLoaded(false)
		}

		const { current } = audioPlayer
		if(current) {
			current.addEventListener('pause', setPause)
			current.addEventListener('play', setPlay)
			current.addEventListener('emptied', setStop)

			return () => {
				current.removeEventListener('pause', setPause)
				current.removeEventListener('play', setPlay)
				current.removeEventListener('emptied', setStop)
			}
		}
	}, [])

	useEffect(() => {
		const { current } = audioPlayer
		if (current) {
			current.volume = volume
		}
		if (volume === 0) {
			setIsMuted(true)
		} else {
			setIsMuted(false)
		}
	}, [volume])

	const play = async () => {
		const { current } = audioPlayer
		if (current) {
			const hasSource = !!current.src
			setIsLoading(true)
			if (!hasSource) {
				current.src = url
				current.load()
				socketRef.current = await connectRadioSocket()
				socketRef.current?.on('radioMetadata', onMetadataChange)
			}
			await current.play()
			setIsLoading(false)
		}
	}

	const pause = () => {
		const { current } = audioPlayer
		if (current) {
			current.pause()
		}
	}

	const stop = () => {
		const { current } = audioPlayer
		if (current) {
			current.pause()
			current.removeAttribute('src')
			socketRef.current?.disconnect()
		}
	}

	const toggleVolume = () => {
		if (isMuted && previousVolume) {
			setVolume(previousVolume)
		} else {
			setVolume(0)
			setPreviousVolume(volume)
		}
	}

	const togglePlay = () => {
		if (isPlaying) {
			pause()
		} else {
			play()
		}
	}

	const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVolume(+e.currentTarget.value)
	}

	const onMetadataChange = ({ listeners, title, artist, album }: SimplifiedMetadata) => {
		setCurrentListeners(listeners)
		setArtist(artist)
		setTitle(title)
		setAlbum(album)
	}

	const togglePlayIcon = isPlaying ? <CgPlayPauseR /> : <CgPlayButtonO />
	const toggleVolumeIcon = isMuted ? <HiVolumeOff /> : <HiVolumeUp />

	return (
		<WrappedPlayer className={className}>
			<RadioLogo>
				<Image src={logo} alt={logoAltText} width={251} height={90} />
			</RadioLogo>
			<Controls>
				<audio ref={audioPlayer}/>
				<ControlButton type="button" title="play" onClick={togglePlay} disabled={isLoading}>{isLoading ? <Spinner size={32} /> : togglePlayIcon}</ControlButton>
				<ControlButton type="button" title="stop" onClick={stop} disabled={isLoading || !isLoaded}><CgPlayStopR /></ControlButton>
				<ToggleVolButton type="button" title="volume" onClick={toggleVolume} disabled={isLoading || !isLoaded}>{toggleVolumeIcon}</ToggleVolButton>
				<VolumeSlider title="volume" type="range" min={0} max={1} step={0.05} value={volume} onChange={onVolumeChange} disabled={isLoading || !isLoaded} />
			</Controls>
			<Metadata>
				<Title>{title}</Title>
				<Artist>{artist}</Artist>
				<Album>{album}</Album>
			</Metadata>
			<Audience $isLive={isPlaying}>
				<FiRadio />
				<AudienceNumber>{currentListeners}</AudienceNumber>
			</Audience>
		</WrappedPlayer>
	)
}
