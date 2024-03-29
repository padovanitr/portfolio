import { Box } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProfilePictureLight from '../../../assets/img/profile.avif'
import {
  ContentContainer,
  ImageContainer,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledTitle,
  TabsInfoContainer,
} from './About.style'
import AboutTabs from './AboutTabs/AboutTabs'
import EducationInfo from './EducationInfo/EducationInfo'
import TabPanel from '../../components/TabPanel/TabPanel'
import SkillsInfo from './SkillsInfo/SkillsInfo'

export default function About() {
  const { t } = useTranslation()
  const [tabActive, setTabActive] = useState('Skills')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabActive(newValue)
  }

  return (
    <StyledContainer id="about">
      <ContentContainer>
        <ImageContainer>
          <StyledImage src={ProfilePictureLight} alt="thiago padovani profile picture" />
        </ImageContainer>
        <Box sx={{ maxWidth: '746px' }}>
          <StyledTitle variant="h2">{t('aboutTitle')}</StyledTitle>
          <StyledDescription>{t('aboutDescription')}</StyledDescription>

          <AboutTabs sx={{ marginTop: '2rem' }} tabActive={tabActive} handleChange={handleChange} />

          <TabsInfoContainer>
            <TabPanel isSelectedPanel={tabActive === 'Skills'}>
              <SkillsInfo />
            </TabPanel>
            <TabPanel isSelectedPanel={tabActive === 'Education'}>
              <EducationInfo />
            </TabPanel>
          </TabsInfoContainer>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
