import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { educationInfo } from './EducationInfo.utils'
import Info from '../Info'

export default function EducationInfo() {
  const { t } = useTranslation()
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {educationInfo(t).map(({ id, title, company, location, startDate, endDate }) => (
        <Info
          key={id}
          title={title}
          location={location}
          place={company}
          startDate={startDate}
          endDate={endDate}
        />
      ))}
    </Box>
  )
}
