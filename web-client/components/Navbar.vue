<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-main bg-navbar">
    <div class="container">
      <div class="d-flex flex-grow-1">
        <img :src="logoUrl" class="navbar-logo" @click="$router.push({path: '/'})" />

        <div class="w-100 text-right d-flex align-items-center">
          <button
            class="navbar-toggler ml-auto"
            type="button"
            aria-label="Toggle navigation"
            v-on:click="hideNavbar = !hideNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <div
        class="navbar-collapse flex-grow-1 text-center order-2 order-lg-1"
        :class="{'collapse': hideNavbar}"
      >
        <span class="navbar-nav ml-auto flex-nowrap">
          <nuxt-link class="nav-item nav-link" to="/" exact>
            Inicio
            <span class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/ponentes" exact>Ponentes</nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/horario">Horario</nuxt-link>
        </span>
      </div>

      <a
        class="button-ws order-1 order-lg-2"
        target="_blank"
        href="https://wa.me/51996915471?text=Me%20gustaría%20saber%20sobre%20el%20simposio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          class="logo-ws"
        >
          <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>


<script>
export default {
  props: {
    logoUrl: {
      type: String,
      default: "/logo.png"
    }
  },
  data() {
    return {
      hideNavbar: true
    };
  }
};
</script>

<style lang="scss">
.navbar-logo {
  height: 40px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .navbar-logo {
    height: 60px;
  }
}

.bg-navbar {
  background-color: #f8f9fa !important;
  @include media(lg) {
    background-color: transparent !important;
  }
}

.navbar-main {
  position: absolute;
  /* width: 100%; inncecesario */
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar-light .navbar-nav .nav-link.nuxt-link-active {
  position: relative;
  font-weight: bold;
}

.navbar-light .navbar-nav .nav-link.nuxt-link-active::after {
  content: "";
  background-color: var(--main-color-1);
  height: 4px;
  width: 80%;
  position: absolute;
  border-radius: 2px;
  left: 10%;
  bottom: 0px;
}

.button-ws {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--main-color-2);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--main-color-2);
  color: white;
  fill: white;
  margin-left: 10px;

  &:hover {
    background-color: var(--main-color-3);
    text-decoration: none;
    color: white;
    fill: white;
  }

  .logo-ws {
    width: 18px;
    height: 18px;
  }
}
</style>
