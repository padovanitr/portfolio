import { Box, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    height: auto;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7, 3)};
    display: flex;
    align-items: center;

    ${theme.breakpoints.up('lg')} {
      height: 882px;
      padding: ${theme.spacing(5, 15)};
    }
  `
)

export const ContentContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(6)};
    flex-direction: column;

    ${theme.breakpoints.up('lg')} {
      flex-direction: row;
    }
  `
)

export const ImageContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mediumGray};
    height: 420px;
    width: 100%;
    min-width: 290px;
    border-radius: ${theme.shape.borderRadius}px;

    ${theme.breakpoints.up('md')} {
      height: 567px;
      width: 483px;
      min-width: 483px;
    }

    ${theme.breakpoints.up('lg')} {
      height: 570px;
      width: 483px;
    }
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
    font-size: 2.25rem;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    margin-bottom: ${theme.spacing(2)};

    ${theme.breakpoints.up('md')} {
      font-size: 3.75rem;
    }
  `
)

export const StyledDescription = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 30px;
  `
)

export const StyledImage = styled(`img`)(
  ({ theme }) => css`
    border-radius: 5px;
    width: inherit;
    height: inherit;
  `
)
