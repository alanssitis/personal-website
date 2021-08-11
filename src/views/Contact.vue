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

<script src="./scripts/contact.js"></script>
<style src="./static/contact.css" scoped></style>