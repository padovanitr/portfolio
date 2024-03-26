import { useTranslation } from 'react-i18next'
import ExperienceInfo from './ExperienceInfo/ExperienceInfo'
import { ContentContainer, StyledContainer, StyledTitle } from './Experience.style'

export default function Experience() {
  const { t } = useTranslation()
  return (
    <StyledContainer id="experience">
      <ContentContainer>
        <StyledTitle variant="h2">{t('experience')}</StyledTitle>
        <ExperienceInfo />
      </ContentContainer>
    </StyledContainer>
  )
}
