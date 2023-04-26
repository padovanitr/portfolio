import { Box } from '@mui/material'
import { StyledTab, StyledTabs } from '../About.style'

export interface AboutTabsProps {
  handleChange: (_: React.SyntheticEvent, newValue: string) => void
  tabActive: string
}

export default function AboutTabs({ handleChange, tabActive }: AboutTabsProps) {
  return (
    <Box sx={{ height: '48px' }}>
      <StyledTabs indicatorColor="secondary" onChange={handleChange} value={tabActive}>
        <StyledTab id="skills" label="Skills" value="Skills" />
        <StyledTab id="experience" label="Experience" value="Experience" />
        <StyledTab id="education" label="Education" value="Education" />
      </StyledTabs>
    </Box>
  )
}
