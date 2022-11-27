import {
  ADD_TO_FAVOURITES,
  ADD_TO_RECENTLY_VISITED,
  REMOVE_FROM_FAVOURITES,
} from '../types';

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
    case ADD_TO_RECENTLY_VISITED: {
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

      const tempItem = state.recentlyVisited.find(
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
        // store only 4 items in ls
        const tempRecentlyVisited = [newItem, ...state.recentlyVisited];
        return {
          ...state,
          recentlyVisited: tempRecentlyVisited.slice(0, 4),
        };
      }
    }

    case REMOVE_FROM_FAVOURITES: {
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
