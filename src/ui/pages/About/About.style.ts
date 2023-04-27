import { Box, Tab, Tabs, Theme, Typography, css, styled, tabClasses } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    height: auto;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(10, 3)};
    display: flex;
    align-items: flex-start;

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(12, 15)};
    }
  `
)

export const ContentContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(6)};
    flex-direction: column;

    ${theme.breakpoints.up('lg')} {
      flex-direction: row;
    }
  `
)

export const ImageContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.mediumGray};
    height: 420px;
    width: 100%;
    min-width: 290px;
    border-radius: ${theme.shape.borderRadius}px;

    ${theme.breakpoints.up('md')} {
      height: 567px;
      width: 483px;
      min-width: 483px;
    }

    ${theme.breakpoints.up('lg')} {
      height: 570px;
      width: 483px;
    }
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
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
    color: ${theme.palette.secondary.contrastText};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 30px;
  `
)

export const StyledImage = styled(`img`)(
  ({ theme }) => css`
    border-radius: 5px;
    width: inherit;
    height: inherit;
    filter: ${theme.palette.mode === 'dark' ? 'grayscale(100%)' : 'none'};
  `
)

export const StyledTab = styled(Tab)`
  font-family: Poppins, sans-serif;
  text-transform: capitalize;
  font-size: 1.125rem;
  align-items: center;

  &.${tabClasses.selected} {
    color: ${colors.red};
  }
`

export const StyledTabs = styled(Tabs)(
  ({ theme }) => css`
    & .MuiTabs-flexContainer {
      gap: 0;

      ${theme.breakpoints.up('md')} {
        gap: ${theme.spacing(4)};
      }
    }
  `
)

export const TabItemTypography = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 30px;
  `
)

export const TypographyMixin = (theme: Theme) => css`
  color: ${theme.palette.secondary.contrastText};
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  line-height: 30px;
`

export const StyledTypography = styled(Typography)(
  ({ theme }) => css`
    ${TypographyMixin(theme)}
  `
)
