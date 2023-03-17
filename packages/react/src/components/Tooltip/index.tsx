import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
  sideOffset?: number
  triggerAsChild?: boolean
  dataSide?: 'left' | 'right' | 'bottom' | 'top'
}

export function Tooltip({
  content,
  triggerAsChild = false,
  sideOffset = 3,
  dataSide = 'top',
  ...props
}: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild={triggerAsChild}>
          {props.children}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            sideOffset={sideOffset}
            data-side={dataSide}
            {...props}
          >
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}
