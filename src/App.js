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
  OFFERSFORM,
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
import OffersForm from './pages/OffersForm/OffersForm';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import CompaniesState from './context/companies/CompaniesState';
import JobOffersState from './context/jobOffers/JobOffersState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import RequireAuth from './utils/requireAuth';

const EmployersPage = React.lazy(() =>
  import('./pages/EmployersPage/EmployersPage')
);

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
                  <Route element={<RequireAuth />}>
                    <Route path={DASHBOARD} element={<EmployersPage />} />
                    <Route path={OFFERSFORM} element={<OffersForm />} />
                  </Route>
                  <Route path={NOT_FOUND} element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            </Suspense>
          </Router>
        </JobOffersState>
      </CompaniesState>
    </AuthState>
  );
}

export default App;
