import http from "./http-common"

const base = "http://localhost:3000/api/contact"
class contactService {
  getAll() {
    return http.get(base)
  }

  get(id) {
    return http.get(base + id)
  }

  submit(data) {
    return http.post(base, data);
  }

  delete(id) {
    return http.delete(base + id);
  }

  deleteAll() {
    return http.delete(base);
  }
}

export default new contactService();