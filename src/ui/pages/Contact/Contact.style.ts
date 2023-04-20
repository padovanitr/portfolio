import { Box, Button, TextField, Typography, css, inputBaseClasses, styled } from '@mui/material'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${colors.secondaryBlack};
    height: 700px;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7)};
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;

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
    color: ${colors.white};
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
    color: ${colors.lightGray};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
  `
)

export const StyledTextarea = styled(TextField)(
  ({ theme }) => css`
    &.MuiInputLabel-root {
      font-size: 1rem;
      color: ${colors.heatherGray};
      transition: ${theme.transitions.create(['font-size', 'transform', 'color'])};
    }

    &&& .MuiFilledInput-root {
      height: fit-content;
    }

    & .${inputBaseClasses.root} {
      font-size: 1rem;
      font-weight: 400;
      line-height: 22px;
      padding: 0;
      background-color: ${colors.mediumGray};
      color: ${colors.borderColorGray};
    }
  `
)

export const StyledTextField = styled(TextField)(
  ({ theme }) => css`
    & .MuiInputLabel-root {
      color: ${colors.heatherGray};
      font-size: 1rem;
    }

    & .MuiInputBase-root {
      background-color: ${colors.mediumGray};
      overflow: visible;
      border-radius: ${theme.shape.borderRadius}px;
      height: 58px;
      color: ${colors.borderColorGray};
      font-size: 1rem;

      ${theme.breakpoints.up('md')} {
        height: 60px;
      }

      &.Mui-error {
        border-color: ${colors.errorRed};
        border-width: 2px;
      }

      &.Mui-disabled {
        border-color: ${colors.heatherGray};
      }
    }
  `
)

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    padding: ${theme.spacing(1.7, 7)};
    text-transform: none;
    box-shadow: none;
    color: ${colors.white};
    background-color: ${colors.red};
    border: 1px solid ${colors.red};
    font-size: 1rem;
    width: 100%;
    align-self: flex-end;

    &:hover {
      background-color: transparent;
      border: 1px solid ${colors.red};
    }

    ${theme.breakpoints.up('md')} {
      width: 160px;
    }
  `
)
