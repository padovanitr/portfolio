import { Drawer, IconButton, List, SvgIcon } from '@mui/material'
import { useLocation } from 'react-router-dom'
import {
  DrawerContainer,
  DrawerHeader,
  StyledLink,
  StyledListItem,
  StyledPageText,
} from './NavbarDrawer.style'
import { CancelIcon } from '../../assets/icons'
import { pages } from '../Navbar/Navbar.utils'

export interface NavbarDrawerProps {
  open: boolean
  onClose: () => void
}

export default function NavbarDrawer({ open, onClose }: NavbarDrawerProps) {
  const location = useLocation()
  const selectedPage = location.hash

  const handleClickItem = (pagePath: string) => {
    onClose()
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContainer>
        <DrawerHeader>
          <IconButton onClick={onClose}>
            <SvgIcon
              inheritViewBox
              component={CancelIcon}
              sx={{
                width: '30px',
                height: '30px',
              }}
            />
          </IconButton>
        </DrawerHeader>
        <List>
          {pages.map(({ title, path }) => (
            <StyledListItem key={title} onClick={() => handleClickItem(path)}>
              <StyledLink to={path}>
                <StyledPageText $isselected={selectedPage === path}>{title}</StyledPageText>
              </StyledLink>
            </StyledListItem>
          ))}
        </List>
      </DrawerContainer>
    </Drawer>
  )
}
