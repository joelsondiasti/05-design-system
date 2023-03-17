import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: 6,
  padding: 15,
  maxWidth: '20rem',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  fontFamily: '$default',

  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
  svg: {
    width: '$5',
    height: '$5',
    color: '$white',
  },
  '&:hover': {
    svg: {
      color: '$gray200',
      transition: 'color 0.5s ease-out',
    },
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
