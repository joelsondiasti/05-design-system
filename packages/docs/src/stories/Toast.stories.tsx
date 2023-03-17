import { Toast, ToastProps } from '@diasjoe-ds/react'
import { useArgs } from '@storybook/client-api'
import type { ComponentStory, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 16 de abril às 15h',
    open: true,
  },
} as Meta<ToastProps>

export const Template: ComponentStory<typeof Toast> = ({ open, ...args }) => {
  const [, updateArgs] = useArgs()
  return (
    <Toast open={open} onOpenChange={() => updateArgs({ open })} {...args} />
  )
}

// export const Primary = Template.bind({})
