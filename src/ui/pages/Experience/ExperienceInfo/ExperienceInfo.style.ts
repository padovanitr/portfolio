import { Box, ListItem, Typography, css, styled } from '@mui/material'
import TabPanel from '../../../components/TabPanel/TabPanel'
import { colors } from '../../../../utils/colors'

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

export const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0;

    ${theme.breakpoints.up('md')} {
      max-width: 700px;
      align-items: flex-start;
    }
  `
)

export const StyledListItem = styled(ListItem)(
  ({ theme }) => css`
    &:before {
      content: '▹';
      position: absolute;
      left: 0px;
      color: ${colors.red};
      margin-top: 6px;
      font-size: 21px;
    }
    align-items: flex-start;
    padding-left: ${theme.spacing(3)};
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

export const PositionTitle = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.secondary.contrastText};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    line-height: 30px;
    font-weight: 700;
  `
)

export const PositionCompany = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
    font-size: 1.125rem;
    font-family: Poppins, sans-serif;
    line-height: 30px;
    font-weight: 700;
    transition: ${theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

    &:hover {
      transform: translateY(-0.3rem);
    }
  `
)
