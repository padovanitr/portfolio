import { Box, IconButton, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
import { HamburguerIcon } from '../../assets/icons'
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer'

export default function NavBar() {
  const location = useLocation()
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const desktopMatches = useMediaQuery(theme.breakpoints.up('lg'))
  const [isNavBarFixed, setIsNavBarFixed] = useState(false)
  const selectedPage = location.hash

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
                  <StyledListItem key={title} $isselected={selectedPage === path}>
                    <StyledLink to={path} smooth>
                      <ListItemTypography $isselected={selectedPage === path}>
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