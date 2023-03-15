import { Avatar, AvatarProps } from '@diasjoe-ds/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/joelsondiasti.png',
    alt: 'Joelson Dias',
  },
  argTypes: {
    src: {
      description: 'A URL for avatar image.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Any URL' },
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
