import { Box, useTheme } from '@mui/material'
import ProfilePictureLight from '../../../assets/img/profile.jpg'
import ProfilePictureBW from '../../../assets/img/profileBW.jpeg'
import {
  ContentContainer,
  ImageContainer,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledTitle,
} from './About.style'
import { AboutTexts } from './About.utils'

export default function About() {
  const theme = useTheme()
  return (
    <StyledContainer id="about">
      <ContentContainer>
        <ImageContainer>
          <StyledImage
            src={theme.palette.mode === 'dark' ? ProfilePictureBW : ProfilePictureLight}
          />
        </ImageContainer>
        <Box sx={{ maxWidth: '746px' }}>
          <StyledTitle variant="h2">{AboutTexts.Title}</StyledTitle>
          <StyledDescription>{AboutTexts.Description}</StyledDescription>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
