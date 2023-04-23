import { FooterGridContainer, FooterItem, StyledContainer } from './Footer.style'

export default function Footer() {
  return (
    <StyledContainer>
      <FooterGridContainer container>
        <FooterItem item>logo</FooterItem>
        <FooterItem item>social media</FooterItem>
        <FooterItem item>copy rights</FooterItem>
      </FooterGridContainer>
    </StyledContainer>
  )
}
