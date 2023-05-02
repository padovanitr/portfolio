import ExperienceInfo from './ExperienceInfo/ExperienceInfo'
import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledTitle,
} from './Experience.style'
import { ExperienceTexts } from './Experience.utils'

export default function Experience() {
  return (
    <StyledContainer id="experience">
      <ContentContainer>
        <StyledTitle variant="h2">{ExperienceTexts.Title}</StyledTitle>
        <StyledDescription>{ExperienceTexts.Description}</StyledDescription>
        <ExperienceInfo />
      </ContentContainer>
    </StyledContainer>
  )
}
