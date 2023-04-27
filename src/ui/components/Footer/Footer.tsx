import {
  FooterGridContainer,
  FooterItem,
  LogoSubtitle,
  LogoSvgIcon,
  StyledContainer,
} from './Footer.style'
import { LogoIcon } from '../../../assets/icons'

export default function Footer() {
  return (
    <StyledContainer>
      <FooterGridContainer container>
        <FooterItem item>
          <LogoSvgIcon inheritViewBox component={LogoIcon} />
          <LogoSubtitle>Thiago Padovani</LogoSubtitle>
        </FooterItem>
        <FooterItem item>social media</FooterItem>
        <FooterItem item>copy rights</FooterItem>
      </FooterGridContainer>
    </StyledContainer>
  )
}
