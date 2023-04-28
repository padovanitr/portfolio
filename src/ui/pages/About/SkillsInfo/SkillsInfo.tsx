import { Box } from '@mui/material'
import { Skills, Title } from './SkillsInfo.style'
import { SkillsInfoTexts } from './SkillsInfo.utils'

export default function SkillsInfo() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <Title>{SkillsInfoTexts.SolidTitle}</Title>
        <Skills>{SkillsInfoTexts.SolidSkills}</Skills>
      </Box>
      <Box>
        <Title>{SkillsInfoTexts.ImprovingTitle}</Title>
        <Skills>{SkillsInfoTexts.ImprovingSkills}</Skills>
      </Box>
      <Box>
        <Title>{SkillsInfoTexts.StudyingTitle}</Title>
        <Skills>{SkillsInfoTexts.StydingSkills}</Skills>
      </Box>
    </Box>
  )
}
