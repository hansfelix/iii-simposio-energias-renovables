<template>
  <div class="landing-layout">
    <NavBar logoUrl="/logo-udep.png" />
    <Nuxt class="landing-layout__content" />
    <Footer />

    <div id="fb-root"></div>
    <!-- Your customer chat code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="109700820384167"
      theme_color="#91b053"
      greeting_dialog_display="fade"
      greeting_dialog_delay="3"
      logged_in_greeting="¡Hola! ¿Necesitas más información?"
      logged_out_greeting="¡Hola! ¿Necesitas más información?"
    ></div>
  </div>
</template>

<script>
import NavBar from "~/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { NavBar, Footer },

  created() {}
};
</script>


<style lang="scss">
/*------------------------------------*\
  .landing-layout
\*------------------------------------*/
.landing-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  &__content {
    padding-top: 76px;
    background: url("/bg_1.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
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

