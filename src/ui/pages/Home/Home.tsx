import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { StyledContainer, StyledJobTitle, StyledNameTitle, StyledSmallTitle } from './Home.style'

export default function Home() {
  const { t } = useTranslation()
  return (
    <StyledContainer id="home">
      <Box sx={{ width: '100%' }}>
        <StyledSmallTitle>{t('welcome')}</StyledSmallTitle>
        <StyledNameTitle>{t('namewelcome')}</StyledNameTitle>
        <StyledJobTitle>{t('job')}</StyledJobTitle>
      </Box>
    </StyledContainer>
  )
}
