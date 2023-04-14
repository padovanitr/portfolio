import { Box } from '@mui/material'
import { StyledContainer, StyledJobTitle, StyledNameTitle, StyledSmallTitle } from './Home.style'
import { HomeTexts } from './Home.utils'

export default function Home() {
  return (
    <StyledContainer>
      <Box sx={{ width: '100%' }}>
        <StyledSmallTitle>{HomeTexts.WelcomeText}</StyledSmallTitle>
        <StyledNameTitle>{HomeTexts.NameText}</StyledNameTitle>
        <StyledJobTitle>{HomeTexts.JobText}</StyledJobTitle>
      </Box>
    </StyledContainer>
  )
}
