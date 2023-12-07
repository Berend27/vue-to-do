import axios from "axios";

const API_URL = "https://my-json-server.typicode.com/Berend27/vue-to-do";

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
};
