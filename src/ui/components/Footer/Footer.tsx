import { Box, SvgIcon } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {
  FooterGridContainer,
  FooterItem,
  LogoSubtitle,
  LogoSvgIcon,
  StyledContainer,
  StyledCopyright,
  StyledLinkButton,
  StyledMediaLink,
} from './Footer.style'
import { GithubIcon, LinkedinIcon, LogoIcon } from '../../../assets/icons'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <StyledContainer>
      <FooterGridContainer container>
        <FooterItem item>
          <LogoSvgIcon inheritViewBox component={LogoIcon} />
          <LogoSubtitle>Thiago Padovani</LogoSubtitle>
        </FooterItem>
        <FooterItem item>
          <StyledMediaLink
            href="https://www.linkedin.com/in/thiago-padovani"
            target="_blank"
            aria-label="Linkedin link"
          >
            <SvgIcon inheritViewBox component={LinkedinIcon} />
          </StyledMediaLink>
          <StyledMediaLink
            href="https://github.com/padovanitr"
            target="_blank"
            aria-label="Github link"
          >
            <SvgIcon inheritViewBox component={GithubIcon} />
          </StyledMediaLink>
        </FooterItem>
        <FooterItem item>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <StyledCopyright>
              {t('madeWith')}{' '}
              <span key={0} style={{ color: '#e25555' }}>
                &#9829;
              </span>{' '}
              {t('by')} Thiago Padovani
            </StyledCopyright>
            <StyledLinkButton href="https://www.buymeacoffee.com/padovani" target="_blank">
              <span style={{ marginRight: '0.5rem' }}>☕</span>
              {t('buyMeACoffee')}
            </StyledLinkButton>
          </Box>
        </FooterItem>
      </FooterGridContainer>
    </StyledContainer>
  )
}
