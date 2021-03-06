import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Scores from './pages/scores/Scores'
import Button from './components/Buttons';
import { brightTheme, darkTheme } from './utils/themes';
import { WHITE, GRAY_900 } from './utils/constants';

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(brightTheme);
  const { toggleLabel, themeName } = currentTheme;

  const toggleTheme = () => {
    if (themeName === 'bright') {
      setCurrentTheme(darkTheme);
      return;
    }
    setCurrentTheme(brightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Scores />
      <Button bg={currentTheme.text} onClick={toggleTheme} color={themeName === 'bright' ? WHITE : GRAY_900}>
        {toggleLabel.toUpperCase()}
      </Button>
    </ThemeProvider>
  );
}

export default App;
