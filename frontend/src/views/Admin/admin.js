import contactService from "../../services/contact";

export default {
  data() {
    return {
      contactSubmissions: [],
    }
  },
  created() {
    // Get all contact submissions
    contactService.getAll()
      .then(value => {
        for (let submission of value.data) {
          this.contactSubmissions.push(submission);
        }
      })
  }
}