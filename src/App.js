import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { responsiveFontSizes } from "@mui/material";
import { theme } from './utils/useThemeStyles';
import DefaultLayout from './components/DefaultLayout';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import WorkPage from './views/WorkPage';
import FaqPage from './views/FaqPage';

function App() {

  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/work' element={<WorkPage />} />

              <Route path='/faq' element={<FaqPage />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
