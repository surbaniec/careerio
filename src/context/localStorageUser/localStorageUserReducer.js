import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVUIRITES } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const {
        jobOfferId,
        companyName,
        salaryFrom,
        salaryTo,
        province,
        city,
        logo,
        jobTitle,
      } = action.payload;

      const tempItem = state.favourites.find(
        (i) => i.jobOfferId === jobOfferId
      );

      if (tempItem) {
        return {
          ...state,
        };
      } else {
        const newItem = {
          jobOfferId,
          companyName,
          salaryFrom,
          salaryTo,
          province,
          city,
          logo,
          jobTitle,
        };
        return { ...state, favourites: [newItem, ...state.favourites] };
      }
    case REMOVE_FROM_FAVUIRITES: {
      return {
        ...state,
        favourites: state.favourites.filter(
          (jobOffer) => jobOffer.jobOfferId !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
