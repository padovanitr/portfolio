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
import TabPanel from '../../components/TabPanel/TabPanel'
import ExperienceInfo from './ExperienceInfo/ExperienceInfo'

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
              <TabItemTypography>
                HTML, CSS, Styled-components, Material UI, Reactjs, JavaScript, TypeScript, Redux
                Tool Kit, Jest, React Testing Library, Cypress and Django.
              </TabItemTypography>
            </TabPanel>
            <TabPanel isSelectedPanel={tabActive === 'Experience'}>
              <ExperienceInfo />
            </TabPanel>
            <TabPanel isSelectedPanel={tabActive === 'Education'}>Education</TabPanel>
          </Box>
        </Box>
      </ContentContainer>
    </StyledContainer>
  )
}
