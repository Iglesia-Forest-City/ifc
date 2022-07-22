import { render, screen } from 'test-utils'
import { Values } from './Values'
import { mockData } from './data.mock'

describe('<Values />', () => {
  it('should render', () => {
    render(<Values {...mockData} />)
    const title = screen.getByRole('heading', { name: mockData.title })
    expect(title).toBeInTheDocument()
		mockData.values.forEach(value => {
			const valueString = screen.getByText(value)
			expect(valueString).toBeInTheDocument()
		})
  })
})
