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
    background-color: ${theme.palette.primary.main};
    height: auto;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(16, 5)};
    display: flex;
    align-items: center;

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(20, 15)};
      height: 680px;
    }
  `
)

export const StyledSmallTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 20px;
    color: ${colors.gray};
    line-height: normal;
    width: 100%;
    margin-top: ${theme.spacing(4)};

    ${theme.breakpoints.up('md')} {
      margin-top: 0;
      font-size: 15px;
    }
  `
)

export const StyledNameTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${theme.palette.primary.contrastText};
    width: 100%;
  `
)

export const StyledJobTitle = styled(Typography)(
  ({ theme }) => css`
    ${TitleMixin(theme)}
    color: ${colors.red};
    width: 100%;
  `
)
