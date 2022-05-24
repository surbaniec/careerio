import 'normalize.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import DesktopSubmenu from './layout/DesktopSubmenu/DesktopSubmenu';
import Footer from './layout/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import ScrollToTop from './utils/ScrollToTop';
import JobAd from './pages/JobAd/JobAd';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import Login from './pages/Login/Login';
import EmployersPage from './pages/EmployersPage/EmployersPage';
import { fetchJobOffers } from './actions/jobOfferActions';

//Dispatch the fetchJobOffers() beofre our root component renders
// store.dispatch(fetchJobOffers());

export const SubmenuOpenContext = createContext({
  submenuOpen: false,
  setSubmenuOpen: () => {},
});

function App() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuValue = { submenuOpen, setSubmenuOpen };

  return (
    <Provider store={store}>
      <Router>
        <>
          <ScrollToTop />
          <SubmenuOpenContext.Provider value={submenuValue}>
            <Header />
            <DesktopSubmenu />
          </SubmenuOpenContext.Provider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wyszukiwarka' element={<SearchPage />} />
            <Route path='/ogloszenie' element={<JobAd />} />
            <Route path='/profil-firmy' element={<CompanyProfile />} />
            <Route path='/logowanie' element={<Login />} />
            <Route path='/panel-pracodawcy' element={<EmployersPage />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
