import { Box, Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledGridContainer,
  StyledTitle,
} from './Projects.style'

import { projectsInfo } from './Projects.utils'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <StyledContainer id="projects">
      <ContentContainer>
        <Box>
          <StyledTitle variant="h2">{t('myProjects')}</StyledTitle>
          <StyledDescription>{t('projectsDescription')}</StyledDescription>
        </Box>
        <StyledGridContainer>
          {projectsInfo.map(({ title, id, image, url, stack, imageAlt }) => (
            <Link
              sx={{ textDecoration: 'none', position: 'relative' }}
              key={id}
              href={url}
              target="_blank"
            >
              <ProjectCard
                title={title}
                image={image}
                imageAlt={imageAlt}
                stack={stack}
                url={url}
              />
            </Link>
          ))}
        </StyledGridContainer>
      </ContentContainer>
    </StyledContainer>
  )
}
