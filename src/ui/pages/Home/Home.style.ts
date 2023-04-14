import { styled, css, Box, Typography, Theme } from '@mui/material'
import { colors } from '../../../utils/colors'

export const TitleMixin = (theme: Theme) => css`
  font-weight: 900;
  font-family: Montserrat, sans-serif;
  line-height: 49px;
  text-transform: inherit;
  width: 70%;
  font-size: 34px;
  line-height: normal;

  ${theme.breakpoints.up('md')} {
    font-size: 54px;
    line-height: 90px;
  }
`

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mainBlack};
    height: 680px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(20, 5)};
    display: flex;
    align-items: center;

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(20, 15)};
    }
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
    width: 100%;
  `
)

export const StyledNameTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${colors.white};
    width: 100%;
  `
)

export const StyledJobTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${colors.pink};
    width: 100%;
  `
)
