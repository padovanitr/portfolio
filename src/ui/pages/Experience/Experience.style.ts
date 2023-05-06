import { Box, Tab, Tabs, Typography, css, styled, tabClasses } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.default};
    height: auto;
    min-height: 700px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7, 0, 7, 3)};
    display: flex;
    align-items: baseline;
    justify-content: center;

    ${theme.breakpoints.up('lg')} {
      height: auto;
      padding: ${theme.spacing(9, 15)};
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

export const StyledTabs = styled(Tabs)(
  ({ theme }) => css`
    min-width: 130px;
    &&& .MuiTabs-scroller {
      overflow: auto !important;
      width: 350px;

      ${theme.breakpoints.up('md')} {
        width: 100%;
        overflow: hidden;
        width: auto;
      }
    }

    & .MuiTabs-flexContainer {
      gap: 0;

      ${theme.breakpoints.up('md')} {
        gap: ${theme.spacing(4)};
        border-right: 1px solid ${colors.linkWaterGray};
      }
    }

    .MuiButtonBase-root {
      border-bottom: 2px solid ${colors.textGrayLight};

      ${theme.breakpoints.up('md')} {
        border-bottom: none;
      }
    }
  `
)

export const StyledTab = styled(Tab)`
  font-family: Poppins, sans-serif;
  text-transform: capitalize;
  font-size: 1.125rem;
  align-items: center;
  color: ${colors.textGrayLight};

  &.${tabClasses.selected} {
    color: ${colors.red};
  }
`
