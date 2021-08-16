<template>
  <div class="wrapper">
    <div class="links">
      <ul class="link">
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Home')"
          >
            Home
          </button>
        </li>
        <div class="horizontal-line" />
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Projects')"
          >
            Projects
          </button>
        </li>
        <div class="horizontal-line" />
        <li>
          <button
            class="navigation"
            @click="$emit('changeTabClicked', 'Blog')"
          >
            Blog
          </button>
        </li>
      </ul>
    </div>
    <div class="profile">
      <p class="contact1">
        Like what you see?
      </p>
      <p class="contact2">
        Feel free to say hi!
      </p>
      <button
        class="contact"
        @click="$emit('changeTabClicked', 'Contact')"
      >
        Contact
      </button>
    </div>
    <div class="socials">
      <p>Socials</p>
    </div>
  </div>
</template>

<style src="./webfooter.css" scoped></style>
