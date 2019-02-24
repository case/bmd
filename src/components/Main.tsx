import styled from 'styled-components'

interface Props {
  noMargin?: boolean
}

const Main = styled('main')<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  padding: ${({ noMargin }: Props) => (noMargin ? undefined : '2rem 1rem')};
  @media print {
    justify-content: flex-start;
    padding: 0;
  }
`

interface ChildProps {
  center?: boolean
  centerVertical?: boolean
  centerHorizontal?: boolean
  padded?: boolean
}

export const MainChild = styled('div')<ChildProps>`
  width: 100%;
  max-width: 40rem;
  margin: ${({
    center = false,
    centerVertical = center,
    centerHorizontal = true,
  }: ChildProps) =>
    `${centerVertical ? 'auto' : '0'} ${centerHorizontal ? 'auto' : '0'}`};
  padding: ${({ padded = false }: ChildProps) => (padded ? '1rem' : undefined)};
  @media print {
    max-width: 100%;
    margin: 0;
  }
`

export default Main
