import { Header } from '../Components/Header/Header'
import { fn } from '@storybook/test'

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: fn(),
    onCreateAccount: fn(),
    onSignUp: fn()
  }
}

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    },
    onLogin: fn(), // Add login action
    onSignUp: fn() // Add sign up action
  }
}

export const LoggedOut = {
  args: {
    onLogin: fn(), // Add login action
    onSignUp: fn() // Add sign up action
  }
}
