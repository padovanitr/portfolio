import { Box, IconButton, Link, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
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

export default function NavBar() {
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
            sx={{ alignSelf: 'center', height: isNavBarFixed ? '50px' : '70px', width: '70px' }}
          />

          {desktopMatches && (
            <StyledNav component="nav">
              <StyledList>
                {pages.map(({ title, path }) => (
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
          <SocialMediaContainer>
            <Link href="https://www.linkedin.com/in/thiago-padovani" target="_blank">
              <SocialMediaSvgIcon inheritViewBox component={LinkedinIcon} />
            </Link>
            <Link href="https://github.com/padovanitr" target="_blank">
              <SocialMediaSvgIcon inheritViewBox component={GithubIcon} />
            </Link>
          </SocialMediaContainer>
          <StyleIconButtonTheme
            onClick={toggleColorMode}
            title={NavbarTexts.ThemeIconButtonTitle(mode)}
          >
            {mode === 'dark' ? <SvgIcon component={SunIcon} /> : <SvgIcon component={MoonIcon} />}
          </StyleIconButtonTheme>
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
