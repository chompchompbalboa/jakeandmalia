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
        <HeaderEmoji><span role="img" aria-label="Christmas Tree">🎄</span></HeaderEmoji>
        <HeaderText>
          Jake and Malia's Christmas Videos
        </HeaderText>
        <HeaderEmoji><span role="img" aria-label="Christmas Tree">🎄</span></HeaderEmoji>
      </HeaderContainer>
      <VideoContainer>
        {videoUrls.map(videoUrl => (
          <StyledVideo
            key={videoUrl}
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
  @media (max-width: 480px) {
    padding: 2rem;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`

const HeaderText = styled.div`
  margin: 0 10%;
  width: 75%;
`
const HeaderEmoji = styled.div`
  width: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
