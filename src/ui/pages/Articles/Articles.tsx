import { Box, Link } from '@mui/material'
import Card from '../../components/Card/Card'
import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledGridContainer,
  StyledTitle,
} from './Articles.style'
import { ArticlesTexts, articlesInfo } from './Articles.utils'

export default function Articles() {
  return (
    <StyledContainer id="articles">
      <ContentContainer>
        <Box>
          <StyledTitle variant="h2">{ArticlesTexts.Title}</StyledTitle>
          <StyledDescription>{ArticlesTexts.Description}</StyledDescription>
        </Box>
        <StyledGridContainer>
          {articlesInfo.map(({ title, id, image, url, preview }) => (
            <Link
              sx={{ textDecoration: 'none', position: 'relative' }}
              key={id}
              href={url}
              target="_blank"
            >
              <Card title={title} image={image} preview={preview} />
            </Link>
          ))}
        </StyledGridContainer>
      </ContentContainer>
    </StyledContainer>
  )
}
