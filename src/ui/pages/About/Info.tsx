import { Box } from '@mui/material'
import { StyledTypography } from './About.style'

export interface InfoProps {
  title: string
  location: string
  place: string
  startDate: string
  endDate: string
}

export default function Info({ title, location, place, startDate, endDate }: InfoProps) {
  return (
    <Box>
      <Box display="flex" gap={0.5}>
        <StyledTypography>
          <b>{title}</b> - {place}, {location}
        </StyledTypography>
      </Box>
      <StyledTypography>
        {startDate} - {endDate}
      </StyledTypography>
    </Box>
  )
}
