//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  // State
  const [ hasPageLoaded, setHasPageLoaded ] = useState(false)

  // Effects
  useEffect(() => {
    setHasPageLoaded(true)
  }, [])

  // Videos
  const videos = [
    {
      title: "2020",
      src: "https://jakeandmalia.s3.amazonaws.com/Christmas+Video+2020+-+1.mp4", 
      poster: "https://jakeandmalia.s3.amazonaws.com/2020+Thumbnail.jpg"
    },
    {
      title: "2019",
      src: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'19+(Stream).m4v", 
      poster: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'19+Thumbnail_med.png"
    },
    {
      title: "2018",
      src: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'18+(stream).mp4", 
      poster: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'18+Thumbnail_med.png"
    },
    {
      title: "2017",
      src: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'17+(stream).mp4", 
      poster: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'17+Thumbnail_med.png"
    },
    {
      title: "2016",
      src: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'16+(stream).MOV", 
      poster: "https://jakeandmalia.s3.amazonaws.com/Carlson+Christmas+Greeting+'16+Thumbnail_med.png"
    },
  ]

  return (
    <Container>
      <HeaderContainer>
        <HeaderEmoji><span role="img" aria-label="Christmas Tree">🎄</span></HeaderEmoji>
        <HeaderText>
          Jake and Malia's
          <br/>
          Christmas Greetings
        </HeaderText>
        <HeaderEmoji><span role="img" aria-label="Christmas Tree">🎄</span></HeaderEmoji>
      </HeaderContainer>
      <VideosContainer>
        {hasPageLoaded && videos.map(video => (
          <VideoContainer
            key={video.src}>
            <StyledVideo
              controls
              preload="none"
              poster={video.poster}
              src={video.src}/>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoContainer>
        ))}
      </VideosContainer>
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
  padding: 10vh 15vh;
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
  padding: 3rem 0;
  font-size: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 480px) {
    justify-content: space-between;
    padding: 2rem 0;
    font-size: 1.5rem;
  }
`

const HeaderText = styled.div`
  margin: 0 10%;
`
const HeaderEmoji = styled.div`
  width: 3%;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoTitle = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  font-size: 1.25rem;
  @media (max-width: 480px) {
    margin-top: 0.25rem;
  }
`

const StyledVideo = styled.video`
  margin-top: 1rem;
  width: 100%;
  height: auto;
`

export default App
