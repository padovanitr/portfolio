import { Box, Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Card from '../../components/Card/Card'
import {
  ContentContainer,
  StyledContainer,
  StyledDescription,
  StyledGridContainer,
  StyledTitle,
} from './Articles.style'
import { articlesInfo } from './Articles.utils'

export default function Articles() {
  const { t } = useTranslation()
  return (
    <StyledContainer id="articles">
      <ContentContainer>
        <Box>
          <StyledTitle variant="h2">{t('myArticles')}</StyledTitle>
          <StyledDescription>{t('myArticlesDesciption')}</StyledDescription>
        </Box>
        <StyledGridContainer>
          {articlesInfo.map(({ title, id, image, url, preview, imageAlt }) => (
            <Link
              sx={{ textDecoration: 'none', position: 'relative' }}
              key={id}
              href={url}
              target="_blank"
            >
              <Card title={title} image={image} preview={preview} imageAlt={imageAlt} />
            </Link>
          ))}
        </StyledGridContainer>
      </ContentContainer>
    </StyledContainer>
  )
}
