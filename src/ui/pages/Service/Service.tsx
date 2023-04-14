import { ContentContainer, StyledContainer, StyledDescription, StyledTitle } from './Service.style'
import { ServiceTexts } from './Service.utils'

export default function Service() {
  return (
    <StyledContainer id="about">
      <ContentContainer>
        <StyledTitle variant="h2">{ServiceTexts.Title}</StyledTitle>
        <StyledDescription>{ServiceTexts.Description}</StyledDescription>
      </ContentContainer>
    </StyledContainer>
  )
}
