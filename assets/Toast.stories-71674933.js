var r=Object.defineProperty;var e=(o,t)=>r(o,"name",{value:t,configurable:!0});import{d as n}from"./index-3f3a042a.js";import{j as s}from"./jsx-runtime-9d6e853f.js";import{J as p}from"./iframe-7c41e9d5.js";import"./index-d8f7264b.js";import"./index-11a36503.js";const u={parameters:{storySource:{source:`import { Toast, ToastProps } from '@diasjoe-ds/react'
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
`,locationsMap:{template:{startLoc:{col:54,line:20},endLoc:{col:1,line:25},startBody:{col:54,line:20},endBody:{col:1,line:25}}}}},title:"Data Display/Toast",component:n,argTypes:{open:{control:"boolean"}},args:{title:"Agendamento Realizado",description:"Quarta-feira, 16 de abril às 15h",open:!0}},T=e(({open:o,...t})=>{const[,a]=p();return s(n,{open:o,onOpenChange:()=>a({open:o}),...t})},"Template"),y=["Template"];export{T as Template,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Toast.stories-71674933.js.map
