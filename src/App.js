import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import DefaultLayout from './components/DefaultLayout';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { responsiveFontSizes } from "@mui/material";
import { theme } from './utils/useThemeStyles';
import HomePage from './views/HomePage';

function App() {

  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
