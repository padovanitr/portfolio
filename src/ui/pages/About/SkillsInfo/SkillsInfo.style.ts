import { Theme, Typography, css, styled } from '@mui/material'

export const TypographyMixin = (theme: Theme) => css`
  color: ${theme.palette.secondary.contrastText};
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  line-height: 30px;
`

export const Title = styled(Typography)(
  ({ theme }) => css`
    ${TypographyMixin(theme)}
    font-weight: 700;
  `
)

export const Skills = styled(Typography)(
  ({ theme }) => css`
    ${TypographyMixin(theme)}
  `
)
