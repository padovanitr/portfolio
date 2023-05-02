import { Box, Link, List, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { experienceInfo } from './ExperienceInfo.utils'
import { StyledTab, StyledTabs } from '../Experience.style'
import {
  ExperienceContainer,
  PositionCompany,
  PositionTitle,
  StyledDescription,
  StyledListItem,
  StyledTabPanel,
} from './ExperienceInfo.style'

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
        {experienceInfo.map(
          ({ id, position, company, location, startDate, endDate, description, website }) => (
            <StyledTabPanel key={id} isSelectedPanel={tabActive === company}>
              <Box>
                <Box display="flex">
                  <PositionTitle>{position} -</PositionTitle>
                  <Link href={website} target="_blank">
                    <PositionCompany>@ {company}</PositionCompany>
                  </Link>
                  <PositionTitle>, {location}</PositionTitle>
                </Box>
                <StyledDescription>
                  {startDate} - {endDate}
                </StyledDescription>
              </Box>
              <Box>
                <List>
                  {description.map((desc) => (
                    <StyledListItem key={desc}>
                      <StyledDescription>{desc}</StyledDescription>
                    </StyledListItem>
                  ))}
                </List>
              </Box>
            </StyledTabPanel>
          )
        )}
      </Box>
    </ExperienceContainer>
  )
}
