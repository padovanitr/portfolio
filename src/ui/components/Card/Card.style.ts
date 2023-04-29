import { Box, Paper, Typography, css, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledPaperContainer = styled(Paper)(
  ({ theme }) => css`
    background: ${theme.palette.mode === 'dark' ? colors.mainBlack : colors.linkWaterGray};
    max-width: 350px;
    height: auto;
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
    height: 255px;
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
