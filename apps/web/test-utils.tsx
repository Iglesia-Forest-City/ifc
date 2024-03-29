import type { FC, ReactElement, ReactNode } from 'react'
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
)

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
