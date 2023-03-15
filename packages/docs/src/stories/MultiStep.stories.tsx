import { Box, MultiStep, MultiStepProps } from '@diasjoe-ds/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
    size: 5,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 5,
    currentStep: 5,
  },
}
