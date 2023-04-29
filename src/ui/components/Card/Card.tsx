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
}

export default function Card({ image, title, preview }: CardProps) {
  return (
    <StyledPaperContainer>
      <StyledImage src={image} />
      <DescriptionContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledPreview>{preview}</StyledPreview>
      </DescriptionContainer>
      <ButtonContainer>
        <StyledButton>Read more</StyledButton>
      </ButtonContainer>
    </StyledPaperContainer>
  )
}
