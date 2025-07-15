import { Box } from '@mui/material'
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
  return (
    <StyledContainer id="articles">
      <ContentContainer>
        <Box>
          <StyledTitle variant="h2">My Projects</StyledTitle>
          <StyledDescription>
            These are some of the projects I current have in production.
          </StyledDescription>
        </Box>
        <StyledGridContainer>
          {projectsInfo.map(({ title, id, image, url, stack, imageAlt }) => (
            <ProjectCard
              key={id}
              title={title}
              image={image}
              imageAlt={imageAlt}
              stack={stack}
              url={url}
            />
          ))}
        </StyledGridContainer>
      </ContentContainer>
    </StyledContainer>
  )
}
