import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Skills, Title } from './SkillsInfo.style'
import { SkillsInfoTexts } from './SkillsInfo.utils'

export default function SkillsInfo() {
  const { t } = useTranslation()
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <Title>{t('solidKnowledge')}</Title>
        <Skills>{SkillsInfoTexts.SolidSkills}</Skills>
      </Box>
      <Box>
        <Title>{t('improvingKnowledge')}</Title>
        <Skills>{SkillsInfoTexts.ImprovingSkills}</Skills>
      </Box>
      <Box>
        <Title>{t('studying')}</Title>
        <Skills>{SkillsInfoTexts.StydingSkills}</Skills>
      </Box>
    </Box>
  )
}
