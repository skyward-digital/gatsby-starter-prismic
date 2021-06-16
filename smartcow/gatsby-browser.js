import React from 'react'
import { PreRenderThemeSetupScript } from './src/themes/utils'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<PreRenderThemeSetupScript />)
}
