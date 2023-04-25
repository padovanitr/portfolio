import { Box, Typography, css, styled } from '@mui/material'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.default};
    height: 700px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7, 3)};
    display: flex;
    align-items: baseline;
    justify-content: center;

    ${theme.breakpoints.up('lg')} {
      height: 882px;
      padding: ${theme.spacing(13, 15)};
    }
  `
)

export const ContentContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
    flex-direction: column;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
    font-size: 2.25rem;
    font-family: Poppins, sans-serif;
    font-weight: 700;

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
    text-align: center;
  `
)
