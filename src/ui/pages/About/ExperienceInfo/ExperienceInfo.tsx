import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { experienceInfo } from './ExperienceInfo.utils'
import { StyledTab, StyledTabs } from '../../Service/Service.style'
import TabPanel from '../../../components/TabPanel/TabPanel'
import { ExperienceContainer } from './ExperienceInfo.style'

export default function ExperienceInfo() {
  const theme = useTheme()
  const isLargerScreen = useMediaQuery(theme.breakpoints.up('md'))
  const [tabActive, setTabActive] = useState('Loka')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabActive(newValue)
  }

  return (
    <ExperienceContainer>
      <StyledTabs
        indicatorColor="secondary"
        onChange={handleChange}
        value={tabActive}
        orientation={isLargerScreen ? 'vertical' : 'horizontal'}
      >
        {experienceInfo.map(({ id, company }) => (
          <StyledTab key={id} id={String(id)} label={company} value={company} />
        ))}
      </StyledTabs>

      <Box>
        {experienceInfo.map(({ id, position, company, location, startDate, endDate }) => (
          <TabPanel key={company} isSelectedPanel={tabActive === company}>
            {company} description
          </TabPanel>
        ))}
      </Box>
    </ExperienceContainer>
  )
}
