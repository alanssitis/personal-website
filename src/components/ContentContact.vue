<template>
  <div class="form-wrapper">
    <div>
      <label for="name">Name</label>
      <input type="text" placeholder="First Last">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" placeholder="my@email.com">
    </div>
    <div>
      <label for="subject">Subject</label>
      <input type="text" placeholder="What is this about?">
    </div>
    <div>
      <label for="message">Message</label>
      <input type="text">
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
.form-wrapper {
  height: 100%;
  padding: 1em;
  border: 1px solid #333;
  border-radius: 0.4em;
}
</style>