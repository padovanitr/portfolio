import { Box, ListItem, Typography } from '@mui/material'
import { styled, css } from '@mui/material/styles'
import { colors } from '../../utils/colors'

export const DrawerContainer = styled(Box)(
  ({ theme }) => css`
    width: 86vw;
    background-color: ${colors.secondaryBlack};
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

export const StyledPageText = styled(Typography)(
  ({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.white};
    font-family: Poppins, sans-serif;
    line-height: 140%;
    width: 100%;
  `
)
