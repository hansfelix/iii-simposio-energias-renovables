<template>
  <div class="default-layout">
    <NavBar />
    <Nuxt class="default-layout__content" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
/*------------------------------------*\
  .default-layout
\*------------------------------------*/
.default-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: minmax(0, 1fr) ;

  &__content {
    padding-top: 56px;
    background: url("/bg_2.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @include media(md) {
      padding-top: 76px;
    }
  }
}

:root {
  --main-color-1: #c3cf6a;
  --main-color-2: #91b053;
  --main-color-3: #6c8e50;
}

body {
  margin: 0;
  font-family: "Raleway", sans-serif;
}

body p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

