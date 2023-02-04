import { render, screen } from 'test-utils'
import { Info } from './Info'
import { mockData } from './data.mock'

describe('<Info />', () => {
  it('should render', () => {
    render(<Info {...mockData} />)
    const whatsAppLink = screen.getByRole('link', { name: mockData.whatsApp })
    expect(whatsAppLink).toBeInTheDocument()
  })
})
