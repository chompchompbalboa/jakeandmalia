//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  const videoUrls = [
    "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'19+(Stream).m4v"
  ]

  return (
    <Container>
      <HeaderContainer>
        Jake and Malia's Christmas Videos
      </HeaderContainer>
      <VideoContainer>
        {videoUrls.map(videoUrl => (
          <StyledVideo
            controls
            src={videoUrl}/>
        ))}
      </VideoContainer>
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
  padding: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
`

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`

export default App
