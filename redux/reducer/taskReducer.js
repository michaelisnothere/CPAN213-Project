import {
  ADD_MOVIE,
  DELETE_MOVIE,
  FETCH_MOVIES,
  LOGIN,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  listOfMovies: [],
};

const initialAuthState = {
  isLoggedIn: false,
  user: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      return {
        ...state,
        listOfMovies: action.payload,
      };
    }

    case ADD_MOVIE: {
      return {
        ...state,
        listOfMovies: [...state.listOfMovies, action.payload],
      };
    }
    case DELETE_MOVIE: {
      return {
        ...state,
        listOfMovies: state.listOfMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
