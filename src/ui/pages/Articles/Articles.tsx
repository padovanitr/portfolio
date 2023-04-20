import { ContentContainer, StyledContainer, StyledDescription, StyledTitle } from './Articles.style'
import { ArticlesTexts } from './Articles.utils'

export default function Articles() {
  return (
    <StyledContainer id="articles">
      <ContentContainer>
        <StyledTitle variant="h2">{ArticlesTexts.Title}</StyledTitle>
        <StyledDescription>{ArticlesTexts.Description}</StyledDescription>
      </ContentContainer>
    </StyledContainer>
  )
}
