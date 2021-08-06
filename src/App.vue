<template>
  <div class="navigation"> <!-- Navigation -->
    <navigation-bar 
      v-model:current-tab="currentTab"
      :tabs="tabs"/>
  </div>
  <div class="content"> <!-- Contents -->
    <component
      :is="currentTabComponent"/>
  </div>
  <div class="footer"> <!-- Web Footer -->
    <web-footer
      v-model:current-tab="currentTab"
      :tabs="tabs"/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import ContentHome from '@/components/ContentHome.vue';
import ContentBlog from '@/components/ContentBlog.vue';
import ContentContact from '@/components/ContentContact.vue';
import WebFooter from '@/components/WebFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Blog', 'Contact'],
    }
  },
  computed: {
    currentTabComponent() {
      return 'content-' + this.currentTab.toLowerCase();
    },
  },

  components: {
    NavigationBar,
    ContentHome,
    ContentBlog,
    ContentContact,
    WebFooter,
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
