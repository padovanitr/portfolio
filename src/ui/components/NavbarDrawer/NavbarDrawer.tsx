import { Drawer, IconButton, List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import {
  ButtonContainer,
  CloseDrawerSvgIcon,
  DrawerContainer,
  DrawerHeader,
  StyledButton,
  StyledLink,
  StyledListItem,
  StyledPageText,
} from './NavbarDrawer.style'
import { CancelIcon } from '../../../assets/icons'
import { pages } from '../Navbar/Navbar.utils'
import Resume from '../../../assets/docs/thiago-padovani-resume.pdf'

export enum NavbarDrawerTexts {
  ResumeButtonLabel = 'Resume',
}

export interface NavbarDrawerProps {
  open: boolean
  onClose: () => void
}

export default function NavbarDrawer({ open, onClose }: NavbarDrawerProps) {
  const location = useLocation()
  const selectedPage = location.hash === '' ? '#home' : location.hash

  const handleClickItem = (pagePath: string) => {
    onClose()
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContainer>
        <DrawerHeader>
          <IconButton onClick={onClose}>
            <CloseDrawerSvgIcon inheritViewBox component={CancelIcon} />
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

        <ButtonContainer>
          <StyledButton href={Resume}>{NavbarDrawerTexts.ResumeButtonLabel}</StyledButton>
        </ButtonContainer>
      </DrawerContainer>
    </Drawer>
  )
}
