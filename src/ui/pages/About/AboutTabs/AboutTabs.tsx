import { Box, SxProps } from '@mui/material'
import { StyledTab, StyledTabs } from '../About.style'

export interface AboutTabsProps {
  handleChange: (_: React.SyntheticEvent, newValue: string) => void
  tabActive: string
  sx?: SxProps
}

export default function AboutTabs({ handleChange, tabActive, sx }: AboutTabsProps) {
  return (
    <Box sx={{ height: '48px', ...sx }}>
      <StyledTabs indicatorColor="secondary" onChange={handleChange} value={tabActive}>
        <StyledTab id="skills" label="Skills" value="Skills" />
        <StyledTab id="education" label="Education" value="Education" />
      </StyledTabs>
    </Box>
  )
}
