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

<script src="./navigationbar.js"></script>
<style src="./navigationbar.css" scoped></style>