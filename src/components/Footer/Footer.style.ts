import { Box, Grid, css, styled } from '@mui/material'
import { colors } from '../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mainBlack};
    height: fit-content;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(3, 4)};
  `
)

export const FooterGridContainer = styled(Grid)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacing(2)};
  `
)

export const FooterItem = styled(Grid)(
  ({ theme }) => css`
    height: 100px;
    background-color: red;
  `
)
