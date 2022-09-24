import { render, screen } from 'test-utils'
import { SocialNetworks } from './SocialNetworks'
import { mockData } from './data.mock'

describe('<SocialNetworks />', () => {
  it('should render', () => {
    render(<SocialNetworks {...mockData} />)
    const title = screen.getByRole('heading', { level: 2, name: mockData.title })
    expect(title).toBeInTheDocument()
  })
})
