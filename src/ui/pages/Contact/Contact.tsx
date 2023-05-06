import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledLinkButton,
  StyledTitle,
} from './Contact.style'
import { ContactTexts } from './Contact.utils'

export default function Contact() {
  return (
    <StyledContainer id="contact">
      <ContentContainer>
        <StyledTitle variant="h2">{ContactTexts.Title}</StyledTitle>
        <StyledDescription>{ContactTexts.Description}</StyledDescription>
      </ContentContainer>

      <StyledLinkButton href="mailto:padovanitr@gmail.com" target="_blank">
        Say hello
      </StyledLinkButton>
    </StyledContainer>
  )
}
