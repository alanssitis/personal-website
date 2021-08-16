// import contactService from "../../services/contact";

export default {
  data() {
    return {
      formFields: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      showIncomplete: false,
    }
  },
  computed: {
    missingFields() {
      let value = [];
      if (!this.formFields.name) {value.push("name")}
      if (!this.formFields.email) {value.push("email")}
      if (!this.formFields.message) {value.push("message")}
      return value;
    },
    canSubmit() {
      if (this.missingFields.length > 0) {return false}
      return true;
    },
  },
  methods: {
    mustFill(label) {
      if (this.showIncomplete && this.missingFields.includes(label)) {
        return true;
      }
      return false;
    },
    submitForm() {
      if (this.canSubmit) {
        // contactService.submit(this.formFields);
        this.showIncomplete = false;
        this.formFields.name = "";
        this.formFields.email = "";
        this.formFields.subject = "";
        this.formFields.message = "";
      } else {
        this.showIncomplete = true;
      }
    },
  }
}