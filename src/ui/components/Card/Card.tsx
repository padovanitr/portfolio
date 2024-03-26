import { useTranslation } from 'react-i18next'
import {
  ButtonContainer,
  DescriptionContainer,
  StyledButton,
  StyledImage,
  StyledPaperContainer,
  StyledPreview,
  StyledTitle,
} from './Card.style'

export interface CardProps {
  image: string
  title: string
  preview: string
  imageAlt: string
}

export default function Card({ image, title, preview, imageAlt }: CardProps) {
  const { t } = useTranslation()
  return (
    <StyledPaperContainer>
      <StyledImage src={image} alt={imageAlt} />
      <DescriptionContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledPreview>{preview}</StyledPreview>
      </DescriptionContainer>
      <ButtonContainer>
        <StyledButton>{t('readMore')}</StyledButton>
      </ButtonContainer>
    </StyledPaperContainer>
  )
}
