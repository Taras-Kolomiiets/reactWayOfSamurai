import { authAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setAuthUsersData = (userId, email, login) => ({
  type: SET_USERS_DATA,
  data: { userId, email, login },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUsersData(id, email, login));
    }
  });
};

export default authReducer;
