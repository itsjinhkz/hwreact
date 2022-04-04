import axios from "axios";

const BASE_URL =
  "https://620e4f65585fbc3359ddafd3.mockapi.io/quanlysinhvienreact";

export const quanlysinhvienreact = {
  GET_LIST() {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  GET_DETAIL(id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  DELETE_USER(id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  USER_UPDATE(id, data) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: data,
    });
  },
  USER_ADD(data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: data,
    });
  },
};
