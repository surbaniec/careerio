import 'normalize.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { createContext, useState, Suspense } from 'react';
import {
  HOME,
  SEARCH_PAGE,
  JOB_AD,
  COMPANY_PROFILE,
  LOGIN,
  NOT_FOUND,
  DASHBOARD,
  BRAND_STORIES,
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
import CompaniesState from './context/companies/CompaniesState';
import JobOffersState from './context/jobOffers/JobOffersState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import RequireAuth from './utils/requireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import BrandStories from './pages/BrandStories/BrandStories';
import LocalStorageUserState from './context/localStorageUser/LocalStorageUserState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export const SubmenuOpenContext = createContext({
  submenuOpen: false,
  setSubmenuOpen: () => {},
});

function App() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuValue = { submenuOpen, setSubmenuOpen };

  return (
    <AuthState>
      <CompaniesState>
        <JobOffersState>
          <LocalStorageUserState>
            <Router>
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
                  <Route path={BRAND_STORIES} element={<BrandStories />} />
                  <Route element={<RequireAuth />}>
                    <Route path={DASHBOARD} element={<Dashboard />} />
                  </Route>
                  <Route path={NOT_FOUND} element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            </Router>
          </LocalStorageUserState>
        </JobOffersState>
      </CompaniesState>
    </AuthState>
  );
}

export default App;
