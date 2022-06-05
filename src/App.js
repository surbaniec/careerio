import 'normalize.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { createContext, useState, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { fetchJobOffers } from './actions/jobOfferActions';
import {
  HOME,
  SEARCH_PAGE,
  JOB_AD,
  COMPANY_PROFILE,
  LOGIN,
  DASHBOARD,
  NOT_FOUND,
} from './Routes/routes';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import DesktopSubmenu from './layout/DesktopSubmenu/DesktopSubmenu';
import Footer from './layout/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import ScrollToTop from './utils/ScrollToTop';
import JobAd from './pages/JobAd/JobAd';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

const EmployersPage = React.lazy(() =>
  import('./pages/EmployersPage/EmployersPage')
);

//Dispatch the fetchJobOffers() before our root component renders
store.dispatch(fetchJobOffers());

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
        <Suspense fallback={<p>Loading...</p>}>
          <>
            <ScrollToTop />
            <SubmenuOpenContext.Provider value={submenuValue}>
              <Header />
              <DesktopSubmenu />
            </SubmenuOpenContext.Provider>
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={SEARCH_PAGE} element={<SearchPage />} />
              <Route path={JOB_AD} element={<JobAd />} />
              <Route path={COMPANY_PROFILE} element={<CompanyProfile />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={DASHBOARD} element={<EmployersPage />} />
              <Route path={NOT_FOUND} element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
