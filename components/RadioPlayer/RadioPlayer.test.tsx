import { render, screen } from 'test-utils'
import { RadioPlayer } from './RadioPlayer'
import { mockData } from './data.mock'

describe('<RadioPlayer />', () => {
  xit('should render', () => {
    render(<RadioPlayer {...mockData} />)
    const title = screen.getByRole('heading', { level: 1, name: mockData.url })
    expect(title).toBeInTheDocument()
  })
})
