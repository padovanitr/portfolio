import { Box } from '@mui/material'
import { ImageContainer, StyledContainer, StyledDescription, StyledTitle } from './About.style'

export default function About() {
  return (
    <StyledContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <ImageContainer>image</ImageContainer>
        <Box sx={{ maxWidth: '746px' }}>
          <StyledTitle variant="h2">About Me</StyledTitle>
          <StyledDescription>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which dont
            look even slightly believable. If you are going to use a passage of Lorem Ipsum
          </StyledDescription>
        </Box>
      </Box>
    </StyledContainer>
  )
}
