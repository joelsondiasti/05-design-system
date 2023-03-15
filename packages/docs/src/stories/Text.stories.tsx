import { Text, TextProps } from '@ignite-ui/react'
import { fontSizes } from '@ignite-ui/tokens'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis adipisci mollitia officia est excepturi itaque id similique, natus, placeat dolor voluptate nostrum? Ipsum, dolore eligendi sed cumque excepturi praesentium!',
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
