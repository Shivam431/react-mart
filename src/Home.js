import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
   <Wrapper>
    <h1>home</h1>
    </Wrapper>
  )
}

  const Wrapper = styled.section `
  background-color: ${({theme})=>theme.colors.bg};
  width: 500px;
  height: 500px;
  `;

export default Home
