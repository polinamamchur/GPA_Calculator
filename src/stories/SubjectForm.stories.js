import { action } from '@storybook/addon-actions'
import { SubjectForm } from './SubjectForm'

export default {
  title: 'Example/SubjectForm',
  component: SubjectForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    onSubmit: action('onSubmit'),
    onDelete: action('onDelete')
  }
}

export const AddSubject = {
  args: {
    initialSubject: '',
    initialGrade: '',
    initialCredits: 0
  }
}

export const EditSubject = {
  args: {
    initialSubject: 'Math',
    initialGrade: 'A',
    initialCredits: 3
  }
}
