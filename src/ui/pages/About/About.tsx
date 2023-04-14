import { Box } from '@mui/material'
import {
  ContentContainer,
  ImageContainer,
  StyledContainer,
  StyledDescription,
  StyledTitle,
} from './About.style'
import { AboutTexts } from './About.utils'

export default function About() {
  return (
    <StyledContainer>
      <ContentContainer>
        <ImageContainer>image</ImageContainer>
        <Box sx={{ maxWidth: '746px' }}>
          <StyledTitle variant="h2">{AboutTexts.Title}</StyledTitle>
          <StyledDescription>{AboutTexts.Description}</StyledDescription>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
