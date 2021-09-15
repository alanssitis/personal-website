<template>
  <div>
    <div class="contactgallery">
      <h2>Contacts</h2>
      <hr>
      <ul class="contacts">
        <li
          v-for="submission in contactSubmissions"
          :key="submission.id"
          class="contact"
        >
          <p>ID: {{ submission.id }}</p>
          <p>Name: {{ submission.name }}</p>
          <p>Email: {{ submission.email }}</p>
          <p>Subject: {{ submission.subject }}</p>
          <p>Message: {{ submission.message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./admin.js"></script>
<style src="./admin.css"></style>