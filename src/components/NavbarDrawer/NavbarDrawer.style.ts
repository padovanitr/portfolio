import { Box, Drawer } from '@mui/material'
import { styled, css } from '@mui/material/styles'
import { colors } from '../../utils/colors'

export const StyledDrawer = styled(Drawer)(
  ({ theme }) => css`
    &.MuiDrawer-root {
      z-index: 999;
    }
  `
)

export const DrawerContainer = styled(Box)(
  ({ theme }) => css`
    width: 86vw;
    background-color: ${colors.secondaryBlack};
    height: 100%;
  `
)
