<template>
  <div class="col-12 col-sm-6 col-md-4" :class="{'col-lg-3': mostrarCuatro}">
    <div class="speaker-card">
      <div class="speaker-card__content">
        <!-- Imagen del ponente -->
        <img class="speaker-card__img" :src="urlImg" alt="..." />

        <!-- Nombres del ponente  -->
        <h5 class="speaker-card__name">{{ fullname }}</h5>

        <!-- Puesto del ponente  -->
        <p class="speaker-card__job">{{ job }}</p>

        <!-- Descripción del ponente  -->
        <p class="speaker-card__descripcion">{{ descripcion }}</p>

        <div class="speaker-card__actions">
          <div class="speaker-card__button" @click="showModal = true">
            VER MÁS
            <i class="fas fa-arrow-right ml-2 mr-1"></i>
          </div>
        </div>
      </div>
    </div>

    <SpeakerModal
      :showSpeakerModal="showModal"
      @close="showModal = false"
      :ponencias="ponencias"
      :nombre="fullname"
      :urlImg="urlImg"
      :cargo="job"
      :descripcion="descripcion"
      :linkedin="linkedin"
    />
  </div>
</template>

<script>
import SpeakerModal from "~/components/SpeakerModal/SpeakerModal.vue";

export default {
  props: [
    "fullname",
    "urlImg",
    "job",
    "mostrarCuatro",
    "ponencias",
    "descripcion",
    "linkedin"
  ],
  components: {
    SpeakerModal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="scss">
.speaker-card {
  position: relative;
  padding-top: 50px;
  margin-bottom: 20px;

  &__content {
    padding: 0 20px 10px;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: white;
    border-top: 3px solid var(--main-color-3);
  }

  &__img {
    position: absolute;
    top: 0px;
    left: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.3);
  }

  &__name {
    padding-top: 70px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 7px;
    color: var(--main-color-3);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__job {
    font-size: 14.5px;
    color: var(--main-color-2);
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__descripcion {
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  &__actions {
    text-align: right;
  }

  &__button {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
    color: #767676;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      background-color: #f0f3d9;
    }
  }
}
</style>