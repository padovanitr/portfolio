import { Box } from '@mui/material'
import { useState } from 'react'
import ProfilePictureLight from '../../../assets/img/profile.jpg'
import {
  ContentContainer,
  ImageContainer,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledTitle,
  TabItemTypography,
} from './About.style'
import { AboutTexts } from './About.utils'
import AboutTabs from './AboutTabs/AboutTabs'
import ExperienceInfo from './ExperienceInfo/ExperienceInfo'
import EducationInfo from './EducationInfo/EducationInfo'
import TabPanel from '../../components/TabPanel/TabPanel'

export default function About() {
  const [tabActive, setTabActive] = useState('Skills')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabActive(newValue)
  }

  return (
    <StyledContainer id="about">
      <ContentContainer>
        <ImageContainer>
          <StyledImage src={ProfilePictureLight} />
        </ImageContainer>
        <Box sx={{ maxWidth: '746px' }}>
          <StyledTitle variant="h2">{AboutTexts.Title}</StyledTitle>
          <StyledDescription>{AboutTexts.Description}</StyledDescription>

          <AboutTabs sx={{ marginTop: '2rem' }} tabActive={tabActive} handleChange={handleChange} />

          <Box>
            <TabPanel isSelectedPanel={tabActive === 'Skills'}>
              <TabItemTypography>{AboutTexts.Skills}</TabItemTypography>
            </TabPanel>
            <TabPanel isSelectedPanel={tabActive === 'Experience'}>
              <ExperienceInfo />
            </TabPanel>
            <TabPanel isSelectedPanel={tabActive === 'Education'}>
              <EducationInfo />
            </TabPanel>
          </Box>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
