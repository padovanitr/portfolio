import { Box, FormControl, MenuItem, SelectChangeEvent, SvgIcon } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItemText, MenuItemWrapper, StyledSelect } from './LanguageSelector.style'
import { languagesOptions } from './LanguageSelector.utils'
import { defaultLanguage } from '../../../settings/i18nextConfig'

export default function LanguageSelector() {
  const [language, setLanguage] = useState(defaultLanguage)
  const { i18n } = useTranslation()

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event.target.value as string)
    i18n.changeLanguage(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <StyledSelect
          value={language}
          onChange={handleChange}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          {languagesOptions.map(({ value, label, icon }) => (
            <MenuItem key={value} value={value}>
              <MenuItemWrapper>
                <SvgIcon inheritViewBox component={icon} />
                <MenuItemText>{label}</MenuItemText>
              </MenuItemWrapper>
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </Box>
  )
}
