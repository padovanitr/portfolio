import { Box, Grid, Typography, css, styled } from '@mui/material'

export const ContentContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(6)};
    flex-direction: column;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
    font-size: 2.25rem;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    text-align: center;
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
    text-align: center;
  `
)

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    height: auto;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7, 3)};
    display: flex;
    align-items: flex-start;
    justify-content: center;

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(5, 8, 8)};
    }

    ${theme.breakpoints.up('xl')} {
      padding: ${theme.spacing(9, 15, 10)};
    }
  `
)

export const StyledGridContainer = styled(Grid)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: ${theme.spacing(20)};
    margin-top: ${theme.spacing(2)};

    ${theme.breakpoints.up('md')} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${theme.breakpoints.up('lg')} {
      grid-template-columns: repeat(1, 1fr);
      gap: ${theme.spacing(20)};
    }
  `
)
