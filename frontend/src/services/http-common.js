import axios from "axios";
export default axios.create({
  baseUrl: 'http:localhost:8080/#/',
  headers: {
    "Content-type": "application/json"
  }
});