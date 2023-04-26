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
} from './About.style'
import { AboutTexts } from './About.utils'
import AboutTabs from './AboutTabs/AboutTabs'
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

          <AboutTabs tabActive={tabActive} handleChange={handleChange} />

          <TabPanel isSelectedPanel={tabActive === 'Skills'}>Skills</TabPanel>
          <TabPanel isSelectedPanel={tabActive === 'Experience'}>Experience</TabPanel>
          <TabPanel isSelectedPanel={tabActive === 'Education'}>Education</TabPanel>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
