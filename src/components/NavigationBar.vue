<template>
  <div class="container">
    <div class="navbar-buttons">
      <ul>
        <li 
          :key="tab.id"
          v-for="tab in tabs">
          <button 
            class="navigation"
            :class="{ active: (currentTab === tab) }" 
            @click="$emit('update:currentTab', tab)"
            >{{ tab }}</button>
        </li>
      </ul>
    </div>
    <button 
      class="title"
      @click="$emit('update:currentTab', 'Home')"
      >Alan Chung</button>
  </div>
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
.container {
  width: 100%;
  overflow: hidden;
  background-color: #333;
}

.navbar-buttons {
  float: left;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #333; */
}

li {
  /* float: left; */
  display: inline;
}

button {
  border: none;
  border-radius: 0.4em;
  color: #fff;
  background-color: #333;
  text-align: center;
  padding: 0.8em 1.0em;
  margin: 0.2em 0.1em;
  text-decoration: none;
}

.title {
  float: right;
  width: 8em;
}

button.title:hover {
  background-color: #444;
}

.navigation {
  width: 6em;
}

button.navigation:hover {
  background-color: #111;
}

.active {
  /* color: #999; */
  background-color: #222;
}
</style>
