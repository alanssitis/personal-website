// import contactService from "../../services/contact";

export default {
  data() {
    return {
      formFields: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
  },
  computed: {
    canSubmit() {
    },
    missingFields() {
      let value = [];
      if (!this.formFields.name) {value.push("name")}
      if (!this.formFields.email) {value.push("email")}
      if (!this.formFields.message) {value.push("message")}
      return value;
    },
    missingFieldsMessage() {
      let message = "You still need to fill the following:"
      for (let message of this.missingFields()) {
        message += " " + message;
      }
      return message;
    }
  },
  methods: {
    submitForm() {
      console.log(this.formFields);
      this.formFields.name = "";
      this.formFields.email = "";
      this.formFields.subject = "";
      this.formFields.message = "";
      // contactService.submit(this.formFields);
    },
  }
}