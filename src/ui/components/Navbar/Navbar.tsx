import { IconButton, Link, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  HamburguerSvgIcon,
  LeftContent,
  ListItemTypography,
  LogoSvgIcon,
  RightContent,
  SocialMediaContainer,
  SocialMediaSvgIcon,
  StyleIconButtonTheme,
  StyledAppBar,
  StyledButton,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav,
} from './Navbar.style'
import { NavbarTexts, pages } from './Navbar.utils'
import {
  GithubIcon,
  HamburguerIcon,
  LinkedinIcon,
  LogoIcon,
  MoonIcon,
  SunIcon,
} from '../../../assets/icons'
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer'
import { useGetSelectedSectionScroll } from '../../../utils/hooks/useGetSelectedSectionScroll'
import { ColorModeContext } from '../../../utils/ColorModeContextProvider'
import Resume from '../../../assets/docs/thiago-padovani-resume.pdf'
import LanguageSelector from '../LanguageSelector'

export default function NavBar() {
  const { t } = useTranslation()
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const desktopMatches = useMediaQuery(theme.breakpoints.up('lg'))
  const [isNavBarFixed, setIsNavBarFixed] = useState(false)
  const [selectedSection] = useGetSelectedSectionScroll()

  const { toggleColorMode, mode } = useContext(ColorModeContext)

  const handleScroll = () => {
    const position = window.pageYOffset

    if (position > 75) {
      return setIsNavBarFixed(true)
    }

    return setIsNavBarFixed(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledAppBar $fixedposition={isNavBarFixed}>
      <StyledContainer maxWidth="xl" $fixedposition={isNavBarFixed}>
        <LeftContent>
          <LogoSvgIcon
            inheritViewBox
            component={LogoIcon}
            sx={{ height: isNavBarFixed ? '50px' : '70px', width: '70px' }}
          />

          {desktopMatches && (
            <StyledNav component="nav">
              <StyledList>
                {pages(t).map(({ title, path }) => (
                  <StyledListItem key={title} $isselected={selectedSection === path}>
                    <StyledLink to={path} smooth>
                      <ListItemTypography $isselected={selectedSection === path}>
                        {title}
                      </ListItemTypography>
                    </StyledLink>
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledNav>
          )}
        </LeftContent>
        <RightContent>
          <LanguageSelector />
          <SocialMediaContainer>
            <Link
              href="https://www.linkedin.com/in/thiago-padovani"
              target="_blank"
              aria-label="Linkedin link"
            >
              <SocialMediaSvgIcon inheritViewBox component={LinkedinIcon} />
            </Link>
            <Link href="https://github.com/padovanitr" target="_blank" aria-label="Github link">
              <SocialMediaSvgIcon inheritViewBox component={GithubIcon} />
            </Link>
          </SocialMediaContainer>
          <StyleIconButtonTheme
            onClick={toggleColorMode}
            title={NavbarTexts().ThemeIconButtonTitle(mode)}
          >
            {mode === 'dark' ? <SvgIcon component={SunIcon} /> : <SvgIcon component={MoonIcon} />}
          </StyleIconButtonTheme>
          {desktopMatches && (
            <StyledButton href={Resume} target="_blank" rel="noopener noreferrer">
              {NavbarTexts(t).ResumeButtonLabel}
            </StyledButton>
          )}
          {!desktopMatches && !openDrawer && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <HamburguerSvgIcon inheritViewBox component={HamburguerIcon} />
            </IconButton>
          )}
        </RightContent>
      </StyledContainer>
      {!desktopMatches && <NavbarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />}
    </StyledAppBar>
  )
}
