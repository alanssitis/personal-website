<template>
  <div class="wrapper">
    <div class="message-wrapper">
      <h1>Let's Talk!</h1>
    </div>
    <div class="form-wrapper">
      <div class="small-input">
        <label
          class="label"
          for="name"
        >Name</label>
        <input
          type="text"
          placeholder="Your Name"
        >
      </div>
      <div class="small-input">
        <label
          class="label"
          for="email"
        >Email</label>
        <input
          type="email"
          placeholder="Your Email"
        >
      </div>
      <div class="small-input">
        <label
          class="label"
          for="subject"
        >Subject</label>
        <input type="text">
      </div>
      <div class="large-input">
        <label
          class="label"
          for="textarea"
        >Message</label>
        <textarea
          class="message"
          name="textarea"
          placeholder="..."
          required=""
        />
      </div>
      <div class="small-input">
        <input
          type="submit"
          value="Send"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.message-wrapper {
  margin: 0em 1em;
}

.form-wrapper {
  box-sizing: border-box;
  padding: 1em 1.5em;
  margin: 0em 1em;
  border: 1px solid #333;
  border-radius: 0.4em;
  width: 20em;
  display: flex;
  flex-direction: column;
}

.small-input {
  margin: 0.3em;
  flex: 0 1 auto;
}

.large-input {
  margin: 0.3em;
  flex: 1 0 auto;
}

.label {
  text-align: left;
  display: block;
  color: #777;
}

textarea.message {
  height: calc(100% - 1.6em);
  resize: none;
  overflow: auto;
  padding: 0.4em 0.2em;
}

input[type="text"],
input[type="email"] {
  padding: 0.2em;
}

input[type="text"],
input[type="email"],
textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.8em;
}

input[type="submit"] {
  width: 40%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.8em;
}
</style>