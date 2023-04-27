import { Theme, Typography, css, styled } from '@mui/material'

export const TypographyMixin = (theme: Theme) => css`
  color: ${theme.palette.secondary.contrastText};
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  line-height: 30px;
`

export const StyledPositionTypography = styled(Typography)(
  ({ theme }) => css`
    ${TypographyMixin(theme)}
    font-weight: 600;
  `
)

export const StyledTypography = styled(Typography)(
  ({ theme }) => css`
    ${TypographyMixin(theme)}
  `
)
