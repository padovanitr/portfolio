import { styled, css, Box, Typography, Theme } from '@mui/material'
import { colors } from '../../../utils/colors'

export const TitleMixin = (theme: Theme) => css`
  font-weight: 900;
  font-family: Montserrat, sans-serif;
  line-height: 90px;
  text-transform: inherit;
  width: 70%;
  font-size: 54px;
  line-height: normal;
`

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mainBlack};
    height: 400px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(10, 15)};
  `
)

export const StyledSmallTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 20px;
    color: ${colors.gray};
    line-height: normal;
  `
)

export const StyledNameTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${colors.white};
  `
)

export const StyledJobTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${colors.pink};
  `
)
