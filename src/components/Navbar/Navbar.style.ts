import { AppBar, Container, css, styled } from '@mui/material'
import { transientProps } from '../../utils/transientProps'
import { colors } from '../../utils/colors'

export const StyledAppBar = styled(
  AppBar,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    border: none;
    position: ${$fixedposition ? 'fixed' : 'absolute'};
    transition: 0.3s;
    background-color: ${$fixedposition ? colors.darkGray : 'transparent'};
    box-shadow: ${$fixedposition ? theme.shadows[1] : 'none'};
    padding: ${theme.spacing(0, 7)};
  `
)

export const StyledContainer = styled(
  Container,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    padding: ${$fixedposition ? '0' : theme.spacing(2.5, 0)};

    &&&.MuiContainer-root {
      padding-left: 0;
      padding-right: 0;
    }
  `
)
