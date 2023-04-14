import { DrawerContainer, StyledDrawer } from './NavbarDrawer.style'

export interface NavbarDrawerProps {
  open: boolean
  onClose: () => void
}

export default function NavbarDrawer({ open, onClose }: NavbarDrawerProps) {
  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <DrawerContainer />
    </StyledDrawer>
  )
}
