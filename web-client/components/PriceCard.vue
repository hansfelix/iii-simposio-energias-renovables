<template>
  <div class="entry-ticket card-precio">
    <div class="entry-ticket__punch"></div>

    <div class="entry-ticket__inner">
      <div class="entry-ticket__main">
        <div class="entry-ticket__headline">
          <span class="entry-ticket__currency">S/.</span>
          {{price}}
        </div>

        <div class="entry-ticket__additional-info">
          Acceso a las conferencias, Coffee Break y Welcome Pack.
          <br />--<br />
          {{conditions}}
        </div>
      </div>
    </div>

    <div class="entry-ticket__side">
      <div class="entry-ticket__side-content">{{title}}</div>
    </div>

    <!-- <div class="card-body">
      <h5 class="card-title card-precio__title">{{title}}</h5>
      <h5 class="card-precio__precio">
        <small>S/</small>
        {{price}}
      </h5>
      <a href="#" class="btn card-precio__btn">LO QUIERO</a>
    </div>-->
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
    },

    conditions: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.entry-ticket {
  display: flex;
  height: 100%;
  min-height: 215px;
  background-color: #f7f7f7;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 2px 1px -2px rgba(0, 0, 0, 0.2);

  &__punch {
    background: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    box-shadow: inset -2px 0 1px rgba(0, 0, 0, 0.12);
    transform: translate3d(-50%, -50%, 0);
    z-index: 1;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    flex-basis: 0.000000001px;
    margin-left: 15px;
    position: relative;
    color: #212121;
    border-radius: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }

  &__headline {
    margin: 0 20px;
    font-size: 45px;
    line-height: 1;
    margin-bottom: 15px;
  }

  &__currency {
    font-size: 24px;
    vertical-align: super;
  }

  &__additional-info {
    font-size: 12px;
    color: #a2a2a2;
  }

  &__side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50px;
    border-left: 2px dotted #cbcbcb;
    overflow: hidden;
  }

  &__side-content {
    color: #212121;
    font-size: 17px;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    transform: rotate(-90deg) translate3d(0, 0, 0);
    -webkit-font-smoothing: antialiased;
  }
}

.card-precio {
  // margin-bottom: 10px;

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