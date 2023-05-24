import styled from '@emotion/styled'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { BREAKPOINTS } from '../../shared/constants'
import Books from './Library'

const HeaderWrapper = styled.div`
  width: 100%;
`

const Heading = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  padding: 0.75rem 0;
  background-color: #ffffff;
`

const Divider = styled.div`
  background-color: #715312;
  padding: 0.5px;
`

const HeadingLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0.75rem 0;
  gap: 100px;

  & a:before {
    text-align: center;
    display: block;
  }

  & a {
    display: inline-block;
  }
`
export const StyledAnchorLink = styled(AnchorLink)`
  color: inherit;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: #8f6917;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-weight: 700;
  }
`

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Heading>Ink & Pages</Heading>
        <Divider />
        <HeadingLinks>
          <StyledAnchorLink href="#library" data-hover="library">
            Library
          </StyledAnchorLink>
          <StyledAnchorLink href="#read" data-hover="read">
            Read
          </StyledAnchorLink>
          <StyledAnchorLink href="#reading" data-hover="reading">
            Reading
          </StyledAnchorLink>
          <StyledAnchorLink href="#rating" data-hover="rating">
            Rating
          </StyledAnchorLink>
        </HeadingLinks>
        <Books />
      </HeaderWrapper>
    </>
  )
}
