<template>
  <div class="navigation">
    <!-- Navigation -->
    <navigation-bar 
      :current-tab="currentTab"
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
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import WebFooter from '@/components/WebFooter.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    WebFooter,
  },
  data() {
    return {
      currentTab: 'Home',
    }
  },
  methods: {
    changeCurrentTab(newTab) {
      this.currentTab = newTab;
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
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.navigation {
  margin: 0em;
}

.content {
  padding: 1em;
  margin: 1em 0em;
  flex: 1 0 auto;
  box-sizing: border-box;
}

.footer {
  color: #ddd;
  background-color: #444;
  padding: 1em;
  margin: 0em;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
