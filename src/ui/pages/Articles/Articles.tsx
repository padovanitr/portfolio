import { Link } from '@mui/material'
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
        <StyledTitle variant="h2">{ArticlesTexts.Title}</StyledTitle>
        <StyledDescription>{ArticlesTexts.Description}</StyledDescription>
        <StyledGridContainer>
          {articlesInfo.map(({ title, id, image, url, preview }) => (
            <Link sx={{ textDecoration: 'none' }} key={id} href={url} target="_blank">
              <Card title={title} image={image} preview={preview} />
            </Link>
          ))}
        </StyledGridContainer>
      </ContentContainer>
    </StyledContainer>
  )
}
