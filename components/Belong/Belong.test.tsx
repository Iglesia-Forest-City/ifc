import { render, screen } from '@testing-library/react'
import { Belong } from './Belong'
import { mockData } from './data.mock'

describe('<Belong />', () => {
  it('should render', () => {
    render(<Belong {...mockData} />)
    const title = screen.getByRole('heading', { level: 1, name: mockData.title })
    expect(title).toBeInTheDocument()
  })
})
