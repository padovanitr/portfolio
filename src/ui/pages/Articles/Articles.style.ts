import { Box, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.darkGray};
    height: 700px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7)};
    display: flex;
    align-items: flex-start;

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
  `
)

export const ImageContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mediumGray};
    height: 385px;
    width: 100%;
    min-width: 290px;
    border-radius: ${theme.shape.borderRadius}px;

    ${theme.breakpoints.up('md')} {
      height: 917px;
      width: 483px;
      min-width: 483px;
    }

    ${theme.breakpoints.up('lg')} {
      height: 640px;
      width: 483px;
    }
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${colors.white};
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
    color: ${colors.lightGray};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 30px;
  `
)
