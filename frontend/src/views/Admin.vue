<template>
  <div>
    <ul>
      <li
        v-for="sub in contactSubmissions"
        :key="sub.id"
      >
        {{ sub.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import contactService from "../services/contact";

export default {
  data() {
    return {
      nums: [1, 2, 3],
    }
  },
  computed: {
    contactSubmissions() {
      return contactService.getAll();
    }
  }
}
</script>

<style>
</style>