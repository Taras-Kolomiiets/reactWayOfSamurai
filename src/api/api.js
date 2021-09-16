import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "dce9cf6b-56ee-4da1-b9ae-d02acc534146",
  },
  withCredentials: true,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  unfollowUsers(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
