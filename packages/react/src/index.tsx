import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$ignite300',
  fontFamily: '$default',
  borderRadius: '$sm',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
})

export function App() {
  return <Button>Teste</Button>
}
