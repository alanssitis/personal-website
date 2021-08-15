import http from "./http-common"

const base = "http://localhost:3000/api/contact"
class contactService {
  getAll() {
    http.get(base)
      .then(value => {
        console.log(value.data);
        return value.data;
      }) 
  }

  get(id) {
    http.get(base + id)
      .then(value => {
        console.log(value);
        return value;
      })
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