import { AppBar, Box, Container, List, ListItem, Typography, css, styled } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import { transientProps } from '../../../utils/transientProps'
import { colors } from '../../../utils/colors'

export const StyledAppBar = styled(
  AppBar,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    border: none;
    position: ${$fixedposition ? 'fixed' : 'absolute'};
    transition: 0.3s;
    background-color: ${$fixedposition ? colors.darkGray : 'transparent'};
    background-image: none;
    box-shadow: ${$fixedposition ? theme.shadows[1] : 'none'};
    padding: ${theme.spacing(1, 3)};

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(0, 7)};
    }
  `
)

export const StyledContainer = styled(
  Container,
  transientProps
)<{ $fixedposition: boolean }>(
  ({ theme, $fixedposition }) => css`
    padding: ${$fixedposition ? theme.spacing(0.7, 0) : theme.spacing(2.5, 0)};
    display: flex;
    justify-content: space-between;

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
    color: ${$isselected ? colors.red : colors.white};
    padding: ${theme.spacing(4, 0)};
    font-family: Poppins, sans-serif;
  `
)

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    text-decoration: none;
  `
)
