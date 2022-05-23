import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import jobOfferReducer from './jobOfferReducer';

export default combineReducers({
  company: companyReducer,
  jobOffer: jobOfferReducer,
});
