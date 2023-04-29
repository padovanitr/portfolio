import { Box, ListItem, SvgIcon, Typography } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import { styled, css } from '@mui/material/styles'
import { colors } from '../../../utils/colors'
import { transientProps } from '../../../utils/transientProps'
import { StyledSvgIconType } from '../../../utils/types'

export const DrawerContainer = styled(Box)(
  ({ theme }) => css`
    width: 86vw;
    background-color: ${theme.palette.background.default};
    height: 100%;
    padding: ${theme.spacing(3, 2.5)};
  `
)

export const DrawerHeader = styled(Box)(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: ${theme.spacing(0, 1)};
  `
)

export const StyledListItem = styled(ListItem)(
  ({ theme }) => css`
    padding: ${theme.spacing(2, 0)};
  `
)

export const StyledPageText = styled(
  Typography,
  transientProps
)<{ $isselected: boolean }>(
  ({ theme, $isselected }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${$isselected ? colors.red : theme.palette.primary.contrastText};
    font-family: Poppins, sans-serif;
    line-height: 140%;
    width: 100%;
    border-bottom: ${$isselected ? `2px solid ${colors.red}` : `2px solid transparent`};
  `
)

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    text-decoration: none;
    width: 100%;
  `
)

export const CloseDrawerSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    stroke: ${theme.palette.mode === 'dark' ? colors.lightGray : colors.darkGray};
    width: 30px;
    height: 30px;
  `
) as StyledSvgIconType
