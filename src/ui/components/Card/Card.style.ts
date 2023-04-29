import { Box, Button, Paper, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledPaperContainer = styled(Paper)(
  ({ theme }) => css`
    background: ${theme.palette.mode === 'dark' ? colors.mainBlack : 'transaparent'};
    max-width: 350px;
    height: auto;

    transition: ${theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    &:hover {
      transform: scale(1.05);
    }
  `
)

export const StyledImage = styled(`img`)(
  ({ theme }) => css`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 350px;
    height: 190px;
  `
)

export const DescriptionContainer = styled(Box)(
  ({ theme }) => css`
    padding: ${theme.spacing(4)};
    height: 200px;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.mode === 'dark' ? colors.white : colors.mainBlack};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: ${theme.spacing(2)};
  `
)

export const StyledPreview = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 25px;
  `
)

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    align-self: center;
    text-transform: none;
    box-shadow: none;
    color: ${colors.white};
    border: 1px solid ${colors.red};
    font-size: 1rem;
    width: 100%;
    align-self: center;
    background-color: transparent;
    transition: ${theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    &:hover {
      background-color: ${colors.red};
      border: 1px solid ${colors.red};
      color: ${theme.palette.primary.contrastText};
      transform: translateY(-0.3rem);
    }

    ${theme.breakpoints.up('md')} {
      width: 160px;
    }
  `
)

export const ButtonContainer = styled(Box)(
  ({ theme }) => css`
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: center;
  `
)
