import { Box, Button, TextField, Typography, css, inputBaseClasses, styled } from '@mui/material'
import { Form } from 'formik'
import { colors } from '../../../utils/colors'

export const StyledContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.default};
    height: fit-content;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing(7)};
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(10, 15, 20)};
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

export const FormWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacing(3)};
    display: flex;
    justify-content: space-between;
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
    text-align: left;

    ${theme.breakpoints.up('lg')} {
      text-align: center;
    }
  `
)

export const StyledTextarea = styled(TextField)(
  ({ theme }) => css`
    &&& .MuiFormLabel-root {
      color: ${theme.palette.mode === 'dark' ? colors.heatherGray : colors.darkGray};
      font-size: 1rem;
    }

    & .MuiInputBase-input {
      height: 275px;
      padding: ${theme.spacing(2.5, 2)};
    }

    & .${inputBaseClasses.root} {
      font-size: 1rem;
      font-weight: 400;
      line-height: 22px;
      padding: 0;
      background-color: ${theme.palette.mode === 'dark' ? colors.mediumGray : 'transparent'};
      color: ${theme.palette.mode === 'dark' ? colors.borderColorGray : colors.darkGray};
    }

    & .MuiInputBase-root {
      &.Mui-focused {
        fieldset {
          border-color: ${colors.red};
        }
      }
    }
  `
)

export const StyledTextField = styled(TextField)(
  ({ theme }) => css`
    &&& .MuiFormLabel-root {
      color: ${theme.palette.mode === 'dark' ? colors.heatherGray : colors.darkGray};
      font-size: 1rem;
    }

    & .MuiInputBase-root {
      background-color: ${theme.palette.mode === 'dark' ? colors.mediumGray : 'transparent'};
      overflow: visible;
      border-radius: ${theme.shape.borderRadius}px;
      height: 58px;
      color: ${theme.palette.mode === 'dark' ? colors.borderColorGray : colors.darkGray};
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

      &.Mui-focused {
        fieldset {
          border-color: ${colors.red};
        }
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
      color: ${theme.palette.primary.contrastText};
    }

    ${theme.breakpoints.up('md')} {
      width: 160px;
    }
  `
)

export const StyledImage = styled(`img`)(
  ({ theme }) => css`
    width: 650px;
    height: 450px;
    border-radius: 5px;
  `
)

export const StyledForm = styled(Form)(
  () => css`
    width: 100%;
  `
)
