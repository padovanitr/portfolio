import { AppBar, css, styled } from '@mui/material'
import { transientProps } from '../../utils/transientProps'
import { colors } from '../../utils/colors'

export const StyledAppBar = styled(
  AppBar,
  transientProps
)<{ $fixedPosition: boolean }>(
  ({ theme, $fixedPosition }) => css`
    border: none;
    position: ${$fixedPosition ? 'fixed' : 'absolute'};
    transition: 0.3s;
    background-color: ${$fixedPosition ? colors.darkGray : colors.mainBlack};
    box-shadow: ${theme.shadows[1]};
  `
)
