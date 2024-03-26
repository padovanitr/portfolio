import { Box, SxProps } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { StyledTab, StyledTabs } from '../About.style'

export interface AboutTabsProps {
  handleChange: (_: React.SyntheticEvent, newValue: string) => void
  tabActive: string
  sx?: SxProps
}

export default function AboutTabs({ handleChange, tabActive, sx }: AboutTabsProps) {
  const { t } = useTranslation()
  return (
    <Box sx={{ height: '48px', ...sx }}>
      <StyledTabs indicatorColor="secondary" onChange={handleChange} value={tabActive}>
        <StyledTab id="skills" label={t('aboutTabSkills')} value="Skills" />
        <StyledTab id="education" label={t('aboutTabEducation')} value="Education" />
      </StyledTabs>
    </Box>
  )
}
