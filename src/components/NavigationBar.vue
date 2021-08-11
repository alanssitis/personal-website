<template>
  <div class="container">
    <button 
      class="title"
      :class="{ active: (currentTab === 'Home') }" 
      @click="$emit('changeTabClicked', 'Home')"
    >
      Alan Chung
    </button>
    <div class="navbar-buttons">
      <ul>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Projects') }" 
            @click="$emit('changeTabClicked', 'Projects')"
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Blog') }" 
            @click="$emit('changeTabClicked', 'Blog')"
          >
            Blog
          </button>
        </li>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Contact') }" 
            @click="$emit('changeTabClicked', 'Contact')"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentTab() {
      return this.$route.name;
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  overflow: hidden;
  background-color: #333;
  padding: 0.5em 2em;
  box-sizing: border-box;
}

.navbar-buttons {
  float: right;
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
  font-size: 0.8em;
  text-align: center;
  padding: 0.8em 1.0em;
  margin: 0.2em 0.1em;
  text-decoration: none;
  transition: 0.2s ease-in;
}

.title {
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