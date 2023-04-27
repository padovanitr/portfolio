import { Box, Grid, SvgIcon, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'
import { StyledSvgIconType } from '../../../utils/types'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mainBlack};
    height: fit-content;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(3, 2)};
  `
)

export const FooterGridContainer = styled(Grid)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.up('lg')} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `
)

export const FooterItem = styled(Grid)(
  ({ theme }) => css`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(1)};
  `
)

export const LogoSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    height: 70px;
    width: 70px;
    #logoBackground {
      fill: ${colors.linkWaterGray};
    }

    #logoReactSymbol,
    #logoInitials {
      fill: ${colors.darkGray};
    }
  `
) as StyledSvgIconType

export const LogoSubtitle = styled(Typography)(
  ({ theme }) => css`
    color: ${colors.white};
    font-size: 1.5rem;
    font-family: Poppins, sans-serif;
    font-weight: 500;
  `
)
