import { Box, Button, Paper, SvgIcon, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'
import { StyledSvgIconType } from '../../../utils/types'

export const StyledPaperContainer = styled(Paper)(
  ({ theme }) => css`
    cursor: pointer;
    background: transparent;
    max-width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    text-align: center;
    box-shadow: none;
    align-items: center;

    transition: ${theme.transitions.create(['transform', 'filter'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    /* img {
      filter: grayscale(0%);
    } */

    ${theme.breakpoints.up('lg')} {
      /* img {
        filter: grayscale(100%);
      } */

      &:hover {
        transform: scale(1.05);

        /* img {
          filter: grayscale(0%);
        } */
      }
    }
  `
)

export const CustomSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    fill: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
    height: 30px;
    width: 30px;
  `
) as StyledSvgIconType

export const StyledImage = styled(`img`)(
  ({ theme }) => css`
    border-radius: 12px;
    width: 150px;
    height: 150px;
    box-shadow: ${theme.shadows[2]};
  `
)

export const DescriptionContainer = styled(Box)(
  ({ theme }) => css`
    padding: ${theme.spacing(4)};
    height: auto;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.mode === 'dark' ? colors.white : colors.mainBlack};
    font-size: 1.5rem;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(5)};
  `
)

export const StyledPreview = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2, 0)};
    border-radius: 12px;
  `
)

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    align-self: center;
    text-transform: none;
    box-shadow: none;
    color: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
    border: 1px solid ${colors.red};
    font-size: 1rem;
    width: 160px;
    align-self: center;
    background-color: transparent;
    transition: ${theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    &:hover {
      background-color: ${colors.red};
      border: 1px solid ${colors.red};
      color: ${theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : colors.white};
      transform: translateY(-0.3rem);
    }
  `
)

export const ButtonContainer = styled(Box)(
  ({ theme }) => css`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
  `
)
