import { render, screen } from 'test-utils'
import { Event } from './Event'
import { mockData } from './data.mock'

describe('<Event />', () => {
  it('should render', () => {
    render(<Event {...mockData} />)
    const name = screen.getByText(mockData.name)
    expect(name).toBeInTheDocument()
  })
})
