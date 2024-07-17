import SignUp from '../Components/SignUp/SignUp'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/SignUp',
  component: SignUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onSignUp: action('onSignUp') }
}

export const Default = {
  args: {
    onSignUp: action('onSignUp')
  }
}
