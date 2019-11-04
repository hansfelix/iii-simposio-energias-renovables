<template>
  <transition name="modal">
    <div class="modal modal-mask" @click="$emit('close')" v-if="showModal">
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        @click.stop
        :style="`max-width: ${maxWidth}px;`"
      >
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <slot name="modal-header"></slot>
            <button type="button" class="close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <slot></slot>

          <!-- Modal Body -->
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },

    maxWidth: {
      type: Number,
      default: 600
    }
  }
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #3c3c3c;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  transition: opacity 0.3s ease;
}

.modal-header {
  font-weight: bold;
  border-bottom: 0px;
}

.modal-body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.9em;
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