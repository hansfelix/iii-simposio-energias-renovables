<template>
  <transition name="modal">
    <div class="modal modal-mask" @click="$emit('close')" v-if="showModal">
      <div class="modal-dialog modal-dialog-centered" @click.stop="">
        <div class="modal-content">

          <slot></slot>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'showModal'
  ]
}
</script>

<style lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>