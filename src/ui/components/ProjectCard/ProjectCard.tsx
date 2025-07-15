import { useTranslation } from 'react-i18next'
import {
  ButtonContainer,
  DescriptionContainer,
  StyledButton,
  StyledImage,
  StyledPaperContainer,
  StyledPreview,
  StyledTitle,
} from './ProjectCard.style'

export interface ProjectCardProps {
  image: string
  title: string
  stack: { title: string }[]
  imageAlt: string
  url: string
}

export default function ProjectCard({ image, title, stack, imageAlt, url }: ProjectCardProps) {
  const { t } = useTranslation()
  return (
    <StyledPaperContainer>
      <StyledImage src={image} alt={imageAlt} />
      <DescriptionContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledPreview>
          {stack.map(({ title: projectTitle }) => (
            <span key={projectTitle}>{projectTitle} </span>
          ))}
        </StyledPreview>
      </DescriptionContainer>
      <ButtonContainer>
        <StyledButton>{t('readMore')}</StyledButton>
      </ButtonContainer>
    </StyledPaperContainer>
  )
}
