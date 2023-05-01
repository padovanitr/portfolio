import { Box, css, styled } from '@mui/material'

export const ExperienceContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(4)};
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacing(0, 2)};

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
      padding: ${theme.spacing(0, 5)};
      gap: ${theme.spacing(10)};
    }
  `
)
