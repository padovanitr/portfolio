import { Box, IconButton, SvgIcon, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  LeftContent,
  ListItemTypography,
  RightContent,
  StyledAppBar,
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledNav,
} from './Navbar.style'
import { pages } from './Navbar.utils'
import { HamburguerIcon } from '../../assets/icons'

export default function NavBar() {
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
          {!desktopMatches && (
            <IconButton>
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
    </StyledAppBar>
  )
}
