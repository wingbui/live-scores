import { GRAY_900, WHITE, GRAY, BLACK, BRIGHT_400, BRIGHT_300 } from './constants';

export const brightTheme = {
  themeName: 'bright',
  toggleLabel: 'dark',
  line: BRIGHT_300,
  text: GRAY_900,
  listBg: BRIGHT_400,
  mainBg: GRAY,
};

export const darkTheme = {
  themName: 'dark',
  toggleLabel: 'bright',
  line: BRIGHT_300,
  text: WHITE,
  listBg: GRAY_900,
  mainBg: BLACK,
};
