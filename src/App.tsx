//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {
  return (
    <Container>
      <StyledVideo
        controls
        src="https://jakeandmalia.s3.amazonaws.com/Pexels+Videos+2330708.mp4"/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`

export default App
