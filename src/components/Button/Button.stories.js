import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Custom Button',
  component: Button,
  decorators: [withKnobs]
}

const myProps = () => ({
  name: text('Name', 'Create'),
  click: action('clicked')
})

export const Basic = () => (
  <Button
    {...myProps()}
  />
)