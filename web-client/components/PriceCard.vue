<template>
  <div class="card card-precio">
    <div class="card-body">
      <h5 class="card-title card-precio__title">{{title}}</h5>
      <h5 class="card-precio__precio">
        <small>S/</small>
        {{price}}
      </h5>
      <a href="#" class="btn card-precio__btn">LO QUIERO</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },

    price: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.card-precio {
  margin-bottom: 10px;

  &__title {
    font-size: 1.4rem;
    flex: 1 100%;
    color: var(--main-color-1);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  &__precio {
    flex: 1 100%;
    font-size: 2.5rem;
    margin: 20px 0px;

    @include media(md) {
      //   margin-left: auto;
      //   margin-top: 0;
    }
  }

  &__btn {
    flex: 1 0 100%;
    color: #fff;
    background-color: var(--main-color-2);
    border-color: var(--main-color-2);

    @include media(sm) {
      max-width: 150px;
    }
  }

  .card-body {
    padding: 0.5rem;
  }
}
</style>