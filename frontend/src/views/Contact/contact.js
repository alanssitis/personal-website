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
      const value = [];
      if (!this.isValidText(this.formFields.name)) {
        value.push("name");
      }
      if (!this.isValidEmail(this.formFields.email)) {
        value.push("email");
      }
      if (!this.isValidText(this.formFields.message)) {
        value.push("message");
      }
      console.log(value);
      return value;
    },
    canSubmit() {
      if (this.missingFields.length > 0) {return false}
      return true;
    },
  },
  methods: {
    mustFill(label) {
      return this.showIncomplete && this.missingFields.includes(label);
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
    isValidEmail(string) {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(string);
    },
    isValidText(string) {
      return string;
    }
  }
}