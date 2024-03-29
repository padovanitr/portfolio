import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  SvgIcon,
  Typography,
  css,
  styled,
  Link as MuiLink,
} from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import { transientProps } from '../../../utils/transientProps'
import { colors } from '../../../utils/colors'
import { StyledSvgIconType } from '../../../utils/types'

export const StyledAppBar = styled(
  AppBar,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    border: none;
    position: ${$fixedposition ? 'fixed' : 'absolute'};
    transition: 0.3s;
    background-color: ${$fixedposition ? theme.palette.background.paper : 'transparent'};
    background-image: none;
    box-shadow: ${$fixedposition ? theme.shadows[1] : 'none'};
    padding: ${theme.spacing(1, 3)};

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(0, 7)};
    }
  `
)

export const StyledContainer = styled(
  Box,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    padding: ${$fixedposition ? theme.spacing(0.7, 0) : theme.spacing(2.5, 0)};
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;

    &&&.MuiContainer-root {
      padding-left: 0;
      padding-right: 0;
    }

    ${theme.breakpoints.up('lg')} {
      padding: ${$fixedposition ? '0' : theme.spacing(2.5, 0)};
    }
  `
)

export const LeftContent = styled(Box)(
  ({ theme }) => css`
    display: flex;
  `
)

export const RightContent = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
  `
)

export const StyledNav = styled(Box)(
  ({ theme }) => css`
    display: flex;
    margin-left: ${theme.spacing(7)};
  `
)

export const StyledList = styled(List)(
  ({ theme }) => css`
    display: flex;
    padding: 0;
  `
)

export const StyledListItem = styled(
  ListItem,
  transientProps
)<{ $isselected: boolean }>(
  ({ theme, $isselected }) => css`
    display: flex;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};

    &::after {
      position: absolute;
      content: '';
      left: 0;
      width: 0;
      height: 3px;
      background: ${colors.red};
      transition: 0.3s;
      bottom: 0;
      width: ${$isselected ? '100%' : '0%'};
    }
  `
)

export const ListItemTypography = styled(
  Typography,
  transientProps
)<{ $isselected: boolean }>(
  ({ theme, $isselected }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${$isselected ? colors.red : theme.palette.primary.contrastText};
    padding: ${theme.spacing(4, 0)};
    font-family: Poppins, sans-serif;
  `
)

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    text-decoration: none;
  `
)

export const StyleIconButtonTheme = styled(IconButton)(
  ({ theme }) => css`
    cursor: pointer;
    margin: ${theme.spacing(0, 2)};

    ${theme.breakpoints.up('md')} {
      margin: 0;
    }
  `
)

export const SocialMediaContainer = styled(Box)(
  ({ theme }) => css`
    display: none;
    padding: ${theme.spacing(0, 2)};
    margin: ${theme.spacing(0, 1, 0, 3)};
    gap: ${theme.spacing(2)};
    justify-content: space-evenly;
    width: 150px;

    ${theme.breakpoints.up('md')} {
      margin: ${theme.spacing(0, 3)};
    }

    ${theme.breakpoints.up('md')} {
      display: flex;
    }
  `
)

export const SocialMediaSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    fill: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
  `
) as StyledSvgIconType

export const HamburguerSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    width: 28px;
    height: 28px;
    stroke: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
  `
) as StyledSvgIconType

export const LogoSvgIcon = styled(SvgIcon)(
  ({ theme }) => css`
    transition: ${theme.transitions.create(['height'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
    #logoBackground {
      fill: ${theme.palette.mode === 'dark' ? colors.linkWaterGray : colors.darkGray};
    }

    #logoReactSymbol,
    #logoInitials {
      fill: ${theme.palette.mode === 'dark' ? colors.darkGray : colors.linkWaterGray};
    }

    align-self: center;
  `
) as StyledSvgIconType

export const StyledButton = styled(MuiLink)(
  ({ theme }) => css`
    &&&.MuiLink-root {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: ${theme.spacing(2.2)};
      align-self: center;
      text-transform: none;
      box-shadow: none;
      color: ${theme.palette.mode === 'dark' ? colors.white : colors.darkGray};
      border: 1px solid ${colors.red};
      font-size: 1rem;
      width: 100px;
      align-self: center;
      background-color: transparent;
      border-radius: ${theme.shape.borderRadius}px;
      font-weight: 600;
      margin: ${theme.spacing(0, 0, 0, 4)};
      text-decoration: none;
      transition: ${theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};

      &:hover {
        background-color: ${colors.red};
        border: 1px solid ${colors.red};
        color: ${theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : colors.white};
        transform: translateY(-0.3rem);
      }
    }
  `
)
