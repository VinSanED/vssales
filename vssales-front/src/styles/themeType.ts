import 'styled-components';
import { theme1 } from './theme';

type ThemeType = typeof theme1;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}