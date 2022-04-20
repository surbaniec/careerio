import 'normalize.css';
import './App.scss';
import Header from './components/layout/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DesktopSubmenu from './components/layout/DesktopSubmenu/DesktopSubmenu';
import { createContext, useState } from 'react';
import Footer from './components/layout/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import ScrollToTop from './utils/ScrollToTop';

export const SubmenuOpenContext = createContext({
  submenuOpen: false,
  setSubmenuOpen: () => {},
});

function App() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuValue = { submenuOpen, setSubmenuOpen };

  return (
    <Router>
      <>
        <ScrollToTop />
        <SubmenuOpenContext.Provider value={submenuValue}>
          <Header />
          <DesktopSubmenu />
        </SubmenuOpenContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
