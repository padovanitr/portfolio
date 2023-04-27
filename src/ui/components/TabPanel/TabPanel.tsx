import Box from '@mui/material/Box'
import { ReactNode } from 'react'

export interface TabPanelProps {
  children?: ReactNode | JSX.Element | JSX.Element[]
  isSelectedPanel: boolean
  alignItems?: string
  justifyContent?: string
  className?: string
}

export default function TabPanel({
  children,
  isSelectedPanel,
  alignItems = 'center',
  justifyContent = 'flex-start',
  className,
}: TabPanelProps): JSX.Element | null {
  if (!isSelectedPanel) {
    return null
  }
  return (
    <Box
      className={className}
      role="tabpanel"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems,
        justifyContent,
        paddingTop: 3,
      }}
    >
      {children}
    </Box>
  )
}
