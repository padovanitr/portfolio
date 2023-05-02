import { Box, Grid, Link, SvgIcon, Typography, css, styled } from '@mui/material'
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
    gap: ${theme.spacing(2)};
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

export const StyledMediaLink = styled(Link)(
  ({ theme }) => css`
    cursor: pointer;
    border: 2px solid ${colors.lightGray};
    color: ${colors.lightGray};
    padding: ${theme.spacing(2)};
    border-radius: 100%;
    transition: ${theme.transitions.create(['all', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    &:hover {
      background: ${colors.red};
      border: 2px solid ${colors.red};
      color: ${colors.white};
      transform: translateY(-0.3rem);
    }
  `
)

export const StyledCopyright = styled(Typography)(
  ({ theme }) => css`
    color: ${colors.white};
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    font-weight: 500;
  `
)
