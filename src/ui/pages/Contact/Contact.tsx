import { useTranslation } from 'react-i18next'
import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledLinkButton,
  StyledTitle,
} from './Contact.style'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <StyledContainer id="contact">
      <ContentContainer>
        <StyledTitle variant="h2">{t('getInTouch')}</StyledTitle>
        <StyledDescription>{t('getInTouchDesc')}</StyledDescription>
      </ContentContainer>

      <StyledLinkButton href="mailto:padovanitr@gmail.com" target="_blank">
        {t('sayHelloBtn')}
      </StyledLinkButton>
    </StyledContainer>
  )
}
