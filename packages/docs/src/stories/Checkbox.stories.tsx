import { Box, Checkbox, CheckboxProps, Text } from '@diasjoe-ds/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          {Story()}
          <Text>Accept terms and conditions</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
