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
          v-model="formFields.name"
          :class="{ highlight: mustFill('name') }"
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
          v-model="formFields.email"
          :class="{ highlight: mustFill('email') }"
          type="email"
          placeholder="Your Email"
        >
      </div>
      <div class="small-input">
        <label
          class="label"
          for="subject"
        >Subject</label>
        <input 
          v-model="formFields.subject"
          type="text"
        >
      </div>
      <div class="large-input">
        <label
          class="label"
          for="textarea"
        >Message</label>
        <textarea
          v-model="formFields.message"
          :class="{ highlight: mustFill('message') }"
          class="message"
          name="textarea"
          placeholder="..."
          required=""
        />
      </div>
      <div class="small-input">
        <button
          class="submit"
          @click="submitForm()"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./contact.js"></script>
<style src="./contact.css" scoped></style>