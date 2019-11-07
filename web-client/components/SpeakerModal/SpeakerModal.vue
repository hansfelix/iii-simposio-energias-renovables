<template>
  <Modal :showModal="showSpeakerModal" @close="$emit('close')">
    <template #modal-header>
      <div class="pontente-header row w-100">
        <div class="col ponente-header__avatar" style="flex: 0 1;">
          <img :src="urlImg" class="rounded-circle" alt />
        </div>
        <div class="col">
          <div class="ponente-header__info">
            <h4 class="modal-title">{{ nombre }}</h4>
            <p>{{ cargo }}</p>
          </div>
        </div>
      </div>
    </template>

    <template #modal-body>
      <div class="ponente-body">
        <div class="ponente-body__descripcion">
          <p>{{ descripcion }}</p>
        </div>
        <div class="ponente-body__ponencias">
          <h4 class="titulo-1">Ponencias</h4>
          <div class="listado-ponencias">
            <Ponencia
              v-for="(ponencia, index) in ponencias"
              :key="index"
              :titulo="ponencia.title"
              :horario="ponencia.datetime"
              :tema="ponencia.topic"
            />
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <a class="btn-icon" :href="linkedin" target="_blank" v-if="linkedin">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </template>
  </Modal>
</template>

<script>
import Modal from "~/components/Modal.vue";
import Ponencia from "~/components/SpeakerModal/components/Ponencia.vue";

export default {
  components: {
    Modal,
    Ponencia
  },
  props: [
    "showSpeakerModal",
    "ponencias",
    "descripcion",
    "cargo",
    "urlImg",
    "nombre",
    "linkedin"
  ],
  methods: {
    hasntLinkedin() {
      if (this.linkedin === undefined || this.linkedin == "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.ponente-header {
  &__avatar {
    img {
      width: 80px;
      height: 80px;
    }
  }
  &__info {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
  }
}
.ponente-body {
  text-align: left;
  &__descripcion {
    font-size: 14px;
  }
  &__ponencias {
    h4 {
      font-weight: bold;
      font-size: 1.1em;
    }
  }
}
.btn-icon {
  border-radius: 50%;
  color: #fff;
  background-color: #2867b2;
  width: 35px;
  height: 35px;
  position: relative;

  i {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
  }
}
</style>