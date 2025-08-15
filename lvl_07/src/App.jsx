import { useState, createContext } from "react";
import Header from './Header';
import Cont from './cont'
import Footer from "./foter"; 

export const ThemeOfPage = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeOfPage.Provider value={{ theme, setTheme}}>
      <Header />
      <Cont />
      <Footer />
    </ThemeOfPage.Provider>

  );
}

export default App;
