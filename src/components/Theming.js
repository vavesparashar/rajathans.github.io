import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'dark',
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.gray,
      link: colors.blue,
      ...colors,
    },
  },
  dark: {
    themeName: 'default',
    colors: {
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      bodyBg: colors.alligator,
      headerBg: colors.black,
      link: lighten(0.05, colors.blue),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
