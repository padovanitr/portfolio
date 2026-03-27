import { useTranslation } from 'react-i18next'
import { FunctionComponent, SVGProps } from 'react'
import { Box, Typography } from '@mui/material'
import {
  ButtonContainer,
  CustomSvgIcon,
  DescriptionContainer,
  StyledButton,
  StyledDescription,
  StyledImage,
  StyledPaperContainer,
  StyledPreview,
  StyledTitle,
} from './ProjectCard.style'

export interface ProjectCardProps {
  image: string
  title: string
  stack: { title: string; icon?: FunctionComponent<SVGProps<SVGSVGElement>> }[]
  imageAlt: string
  url: string
  description: string
}

export default function ProjectCard({
  image,
  title,
  stack,
  imageAlt,
  url,
  description,
}: ProjectCardProps) {
  const { t } = useTranslation()
  return (
    <StyledPaperContainer>
      <StyledImage src={image} alt={imageAlt} />
      <DescriptionContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          {t('techUsed')}
        </Typography>
        <StyledPreview>
          {stack.map(({ title: projectTitle, icon }) => (
            <Box
              key={projectTitle}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Box sx={{ filter: 'drop-shadow(0 0px 1px white)' }}>
                {icon && <CustomSvgIcon inheritViewBox component={icon} />}
              </Box>
              <Typography key={projectTitle} variant="body2">
                {projectTitle}
              </Typography>
            </Box>
          ))}
        </StyledPreview>
      </DescriptionContainer>
      <ButtonContainer>
        <StyledButton>{t('view')}</StyledButton>
      </ButtonContainer>
    </StyledPaperContainer>
  )
}
