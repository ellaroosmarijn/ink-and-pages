import styled from '@emotion/styled'

import Books from './Books'

const Heading = styled.div`
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.75rem 0;
  background-color: #ffffff;
`

const Divider = styled.div`
  background-color: #715312;
  padding: 0.5px;
`

const HeadingLinks = styled.div`
  background-color: #ffffff;
  padding: 0.75rem 2rem;
  display: inline-block;
`

export default function Header() {
  return (
    <>
      <Heading>Ink & Pages</Heading>
      <Divider />
      <HeadingLinks>Read</HeadingLinks>
      <HeadingLinks>Reading</HeadingLinks>
      <HeadingLinks>Collection</HeadingLinks>
      <Books />
    </>
  )
}
