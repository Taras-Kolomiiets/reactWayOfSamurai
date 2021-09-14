const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
      followed: true,
      fullName: "Taras K",
      status: "I will be programmer",
      location: { city: "Lviv", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
      followed: false,
      fullName: "Slavik I",
      status: "Hello my friend",
      location: { city: "Lviv", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
      followed: true,
      fullName: "Nazar S",
      status: "I am a lawyer",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 4,
      photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
      followed: true,
      fullName: "Sergey S",
      status: "I am a programmer",
      location: { city: "Kyiv", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default usersReducer;
