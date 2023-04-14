import { Drawer, IconButton, List, SvgIcon } from '@mui/material'
import { DrawerContainer, DrawerHeader, StyledListItem, StyledPageText } from './NavbarDrawer.style'
import { CancelIcon } from '../../assets/icons'
import { pages } from '../Navbar/Navbar.utils'

export interface NavbarDrawerProps {
  open: boolean
  onClose: () => void
}

export default function NavbarDrawer({ open, onClose }: NavbarDrawerProps) {
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
              <StyledPageText>{title}</StyledPageText>
            </StyledListItem>
          ))}
        </List>
      </DrawerContainer>
    </Drawer>
  )
}
