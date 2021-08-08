<template>
  <div class="container">
    <div class="navbar-buttons">
      <ul>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Home') }" 
            @click="$emit('changeTabClicked', 'Home')"
          >
            {{ 'Home' }}
          </button>
        </li>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Blog') }" 
            @click="$emit('changeTabClicked', 'Blog')"
          >
            {{ 'Blog' }}
          </button>
        </li>
        <li>
          <button 
            class="navigation"
            :class="{ active: (currentTab === 'Contact') }" 
            @click="$emit('changeTabClicked', 'Contact')"
          >
            {{ 'Contact' }}
          </button>
        </li>
      </ul>
    </div>
    <button 
      class="title"
      @click="$emit('changeTabClicked', 'Home')"
    >
      Alan Chung
    </button>
  </div>
</template>

<script>
export default {
  props: {currentTab: String},
  emits: ['changeTabClicked'],
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
  font-size: 1em;
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
  transition: 0.2s ease-in;
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
