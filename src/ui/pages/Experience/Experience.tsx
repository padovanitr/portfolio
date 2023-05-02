import ExperienceInfo from './ExperienceInfo/ExperienceInfo'
import { ContentContainer, StyledContainer, StyledTitle } from './Experience.style'
import { ExperienceTexts } from './Experience.utils'

export default function Experience() {
  return (
    <StyledContainer id="experience">
      <ContentContainer>
        <StyledTitle variant="h2">{ExperienceTexts.Title}</StyledTitle>
        <ExperienceInfo />
      </ContentContainer>
    </StyledContainer>
  )
}
