<template>
  <div>
    <div class="navigation"> <!-- Navigation -->
      <navigation-bar 
        v-model:current-tab="currentTab"
        :tabs="tabs"/>
    </div>
    <div class="divider"> <!-- Contents -->
      <component :is="currentTabComponent"/>
    </div>
    <div class="divider"> <!-- Web Footer -->
      <web-footer/>
    </div>
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
  methods: {
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
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.navigation {
  margin: 0em;
}

.divider {
  padding: 1em;
  margin: 1em 0em;
}
</style>
