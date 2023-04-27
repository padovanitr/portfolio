import { Box } from '@mui/material'
import { experienceInfo } from './ExperienceInfo.utils'
import Info from '../Info'

export default function ExperienceInfo() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {experienceInfo.map(({ id, position, company, location, startDate, endDate }) => (
        <Info
          key={id}
          title={position}
          location={location}
          place={company}
          startDate={startDate}
          endDate={endDate}
        />
      ))}
    </Box>
  )
}
