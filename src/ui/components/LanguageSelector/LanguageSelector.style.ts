import { Box, Select, Typography, css, formLabelClasses, styled } from '@mui/material'

export const StyledSelect = styled(Select)(
  ({ theme }) => css`
    .${formLabelClasses.root} {
      display: none;
    }

    fieldset {
      border: none;
    }
  `
)

export const MenuItemText = styled(Typography)(
  ({ theme }) => css`
    font-size: 1rem;
    font-family: Poppins, sans-serif;
  `
)

export const MenuItemWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
  `
)
