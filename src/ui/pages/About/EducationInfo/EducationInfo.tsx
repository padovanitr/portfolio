import { Box } from '@mui/material'
import { educationInfo } from './EducationInfo.utils'
import Info from '../Info'

export default function EducationInfo() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {educationInfo.map(({ id, title, company, location, startDate, endDate }) => (
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
