<template>
  <ul>
    <li 
      :key="tab.id"
      v-for="tab in tabs">
      <button 
        :class="{ active: (currentTab === tab) }" 
        @click="$emit('update:currentTab', tab)"
        >{{ tab }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentTab: String,
    tabs: Array,
  },
  emits: ['update:currentTab'],
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li button {
  border: none;
  color: #fff;
  background-color: #333;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li button:hover {
  background-color: #111;
}

.active {
  color: #999;
}
</style>
