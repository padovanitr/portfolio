import { Box, Button, IconButton, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import {
  LeftContent,
  ListItemTypography,
  RightContent,
  StyledAppBar,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav,
} from './Navbar.style'
import { pages } from './Navbar.utils'
import { HamburguerIcon } from '../../../assets/icons'
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer'
import { useGetSelectedSectionScroll } from '../../../utils/hooks/useGetSelectedSectionScroll'
import { ColorModeContext } from '../../../utils/ColorModeContextProvider'

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const desktopMatches = useMediaQuery(theme.breakpoints.up('lg'))
  const [isNavBarFixed, setIsNavBarFixed] = useState(false)
  const [selectedSection] = useGetSelectedSectionScroll()

  const { toggleColorMode } = useContext(ColorModeContext)

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
          <Box>logo</Box>
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
          <Button sx={{ color: 'red' }} onClick={toggleColorMode}>
            change theme
          </Button>
          {!desktopMatches && !openDrawer && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <SvgIcon
                inheritViewBox
                component={HamburguerIcon}
                sx={{
                  width: '28px',
                  height: '28px',
                }}
              />
            </IconButton>
          )}
        </RightContent>
      </StyledContainer>
      {!desktopMatches && <NavbarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />}
    </StyledAppBar>
  )
}
