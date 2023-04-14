import { Box, IconButton, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  LeftContent,
  ListItemTypography,
  RightContent,
  StyledAppBar,
  StyledContainer,
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledNav,
} from './Navbar.style'
import { pages } from './Navbar.utils'
import { CancelIcon, HamburguerIcon } from '../../assets/icons'
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer'

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const desktopMatches = useMediaQuery(theme.breakpoints.up('lg'))
  const [isNavBarFixed, setIsNavBarFixed] = useState(false)

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
                {pages.map((page) => (
                  <StyledListItem key={page}>
                    <ListItemTypography>{page}</ListItemTypography>
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
          {!desktopMatches && openDrawer && (
            <StyledIconButton onClick={() => setOpenDrawer(false)}>
              <SvgIcon
                inheritViewBox
                component={CancelIcon}
                sx={{
                  width: '30px',
                  height: '30px',
                }}
              />
            </StyledIconButton>
          )}
        </RightContent>
      </StyledContainer>
      {!desktopMatches && <NavbarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />}
    </StyledAppBar>
  )
}
