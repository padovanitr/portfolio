import { Box, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.darkGray};
    height: 882px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(5, 15)};
    display: flex;
    align-items: center;
    margin-bottom: 200px;
  `
)

export const ImageContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mediumGray};
    height: 640px;
    width: 483px;
    min-width: 483px;
    border-radius: ${theme.shape.borderRadius}px;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${colors.white};
    font-size: 3.75rem;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    margin-bottom: ${theme.spacing(2)};
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
