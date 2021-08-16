<template>
  <div>
    <ul>
      <li
        v-for="submission in contactSubmissions"
        :key="submission.id"
      >
        <p>{{ submission.id }}</p>
        <p>{{ submission.name }}</p>
        <p>{{ submission.email }}</p>
        <p>{{ submission.subject }}</p>
        <p>{{ submission.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./admin.js"></script>
<style src="./admin.css"></style>