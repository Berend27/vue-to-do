import axios from "axios";

const API_URL = process.env.VUE_APP_SERVER_URL || "http://localhost:3001";

const apiClient = axios.create({
  baseURL: API_URL,
});

export default {
  deleteTodo(id) {
    return apiClient.delete(`/todos/${id}`);
  },

  getTodos() {
    return apiClient.get("/todos");
  },

  postTodo(todo) {
    return apiClient.post("/todos", todo);
  },

  updateTodo(data) {
    return apiClient.put(`/todos/${data.id}`, data);
  },
};
