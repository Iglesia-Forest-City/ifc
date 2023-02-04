import { render, screen } from 'test-utils'
import { Welcome } from './Welcome'
import { mockData } from './data.mock'

describe('<Welcome />', () => {
  it('should render', () => {
    render(<Welcome {...mockData} />)
    const title = screen.getByRole('heading', { name: mockData.title })
		const text = screen.getByText(mockData.text)
    expect(title).toBeInTheDocument()
		expect(text).toBeInTheDocument()
  })
})
