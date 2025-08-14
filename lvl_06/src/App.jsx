import { useState, createContext } from "react";
import Header from './header';
import Content from './cont';

export const ThemeOfPage = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeOfPage.Provider value={{ theme, setTheme}}>
      <Header />
      <Content />
    </ThemeOfPage.Provider>

  );
}

export default App;

