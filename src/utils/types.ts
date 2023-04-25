import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export type StyledSvgIconType<T = Record<string, unknown>> = OverridableComponent<
  SvgIconTypeMap<T & Record<string, unknown>, 'svg'>
>
