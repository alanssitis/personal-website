<template>
  <div class="wrapper">
    <div class="navigation">
      <!-- Navigation -->
      <navigation-bar 
        @change-tab-clicked="changeCurrentTab"
      />
    </div>
    <div class="content">
      <!-- Contents -->
      <router-view />
    </div>
    <div class="footer">
      <!-- Web Footer -->
      <web-footer
        @change-tab-clicked="changeCurrentTab"
      />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import WebFooter from '@/components/WebFooter/WebFooter.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    WebFooter,
  },
  methods: {
    changeCurrentTab(newTab) {
      this.$router.push({name: newTab});
    },
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  font-size: 1.2em;
}

.wrapper {
  height: 100%;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.navigation {
  margin: 0em;
  flex: 0 1 auto;
}

.content {
  padding: 1em;
  margin: 1em 0em;
  box-sizing: border-box;
  flex: 1 0 auto;
}

.footer {
  color: #ddd;
  background-color: #444;
  padding: 2em 1em;
  margin: 0em;
  box-sizing: border-box;
  flex: 0 1 auto;
}
</style>
