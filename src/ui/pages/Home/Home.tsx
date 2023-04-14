import { Box } from '@mui/material'
import { StyledContainer, StyledJobTitle, StyledNameTitle, StyledSmallTitle } from './Home.style'

export default function Home() {
  return (
    <StyledContainer>
      <Box sx={{ width: '100%' }}>
        <StyledSmallTitle>Welcome to my portfolio</StyledSmallTitle>
        <StyledNameTitle>I'm Thiago Padovani</StyledNameTitle>
        <StyledJobTitle>Software Developer</StyledJobTitle>
      </Box>
    </StyledContainer>
  )
}
