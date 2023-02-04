import { render, screen } from 'test-utils'
import { ContactForm } from './ContactForm'
import { mockData } from './data.mock'

describe('<ContactForm />', () => {
  it('should render', () => {
    render(<ContactForm {...mockData} />)
    const nameField = screen.getByRole('textbox', { name: "Tu nombre *" })
    expect(nameField).toBeInTheDocument()
  })
})
