import 'styled-components'
import type { Colors, MediaQueries, Typography, Vars, ZIndex } from './theme.types'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: Colors
		mediaQueries: MediaQueries
		typography: Typography
		vars: Vars
		zIndex: ZIndex
	}
}
