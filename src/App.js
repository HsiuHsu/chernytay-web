import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { responsiveFontSizes } from "@mui/material";
import { theme } from './utils/useThemeStyles';
import DefaultLayout from './components/DefaultLayout';
import HomePage from './views/HomePage';
import About from './views/About';
import Faq from './views/Faq';

function App() {

  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/faq' element={<Faq />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
