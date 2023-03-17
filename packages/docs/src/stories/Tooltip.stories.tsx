import { Box, Tooltip, TooltipProps } from '@diasjoe-ds/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: '12',
  },

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            width: 'fit-content',
            flexDirection: 'column',
            gap: '$2',

            color: 'White',
            fontFamily: '$default',
          }}
        >
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: '12 de Abril - Disponível',
  },
}
