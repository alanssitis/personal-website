<template>
  <div>
    <div id="navigation"> <!-- Navigation -->
      <navigation-bar 
        v-if="!compactView"
        v-model:current-tab="currentTab"
        :tabs="tabs"/>
    </div>
    <div id="contents"> <!-- Contents -->
      <component :is="currentTabComponent"/>
    </div>
    <div id="footer"> <!-- Web Footer -->
      <web-footer/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import ContentHome from '@/components/ContentHome.vue'
import ContentBlog from '@/components/ContentBlog.vue'
import ContentContact from '@/components/ContentContact.vue'
import WebFooter from "@/components/WebFooter.vue";

export default {
  name: 'App',
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Blog', 'Contact'],
      compactView: false,
      showNav: false,
    }
  },
  computed: {
    currentTabComponent() {
      return 'content-' + this.currentTab.toLowerCase()
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

#navigation {
  margin: 0px 0px 20 0px;
}

#contents {
  padding: 20px;
}

#footer {
  padding: 20px;
}
</style>
