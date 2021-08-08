<template>
  <div class="wrapper">
    <div class="profile">
      <p>Profile</p>
    </div>
    <div class="links">
      <ul class="link">
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Home')"
          >
            {{ 'Home' }}
          </button>
        </li>
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Blog')"
          >
            {{ 'Blog' }}
          </button>
        </li>
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Contact')"
          >
            {{ 'Contact' }}
          </button>
        </li>
      </ul>
    </div>
    <div class="socials">
      <p>Socials</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['changeTabClicked'],
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.profile {
  grid-column: 1;
}

.links {
  grid-column: 2;
}

ul.link {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 2px;
}

button.navigation {
  text-align: left;
  font-size: 1em;
  border: none;
  border-radius: 0.4em;
  color: #ddd;
  background-color: #444;
  height: 100%;
  width: 100%;
  padding: 0.3em 0.6em;
  transition: 0.2s ease-in;
}

button.navigation:hover {
  background-color: #333;
}

.socials {
  grid-column: 3;
}
</style>
