import { render, screen } from 'test-utils'
import { Hero } from './Hero'
import { mockData } from './data.mock'

describe('<Hero />', () => {
  it('should render', () => {
    render(<Hero {...mockData} />)
		const title = screen.getByRole('heading', { name: mockData.title })
		const text = screen.getByText(mockData.text)
		const cta = screen.getByRole('link', { name: mockData.cta.text })

		expect(title).toBeInTheDocument()
		expect(text).toBeInTheDocument()
		expect(cta).toBeInTheDocument()
  })
})
