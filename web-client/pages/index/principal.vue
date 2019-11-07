<template>
  <section class="bloque bloque-principal container">
    <div class="row h-100 align-content-center" style="flex: 1">
      <div class="col-lg-8 preVenta-columna-centrada">
        <img class="bloque-principal__logo" src="/logos/logo-simposio.svg" width="475px" srcset />
        <p
          class="bloque-principal__phrase"
        >Descrubre el camino para la transformación energética del Perú</p>
        <div class="bloque-principal__information">
          <div class="bloque-principal__information-item">
            <i class="bloque-principal__information-icon fas fa-calendar-alt"></i>
            <div>
              <div class="bloque-principal__information-title">13 y 14</div>
              <div class="bloque-principal__information-sub-title">de diciembre</div>
            </div>
          </div>

          <div class="bloque-principal__information-item">
            <i class="bloque-principal__information-icon fas fa-map-marker-alt"></i>
            <a @click.stop="goToUbicacion" style="cursor: pointer">
              <div class="bloque-principal__information-title">Universidad de Piura</div>
              <div class="bloque-principal__information-sub-title">(Sede Lima)</div>
            </a>
          </div>
        </div>
      </div>

      <div class="lead-container col-lg-4">
        <!-- Formulario Lead -->
        <LeadForm />
      </div>
    </div>
  </section>
</template>

<script>
import LeadForm from "~/components/LeadForm.vue";

export default {
  components: {
    LeadForm
  },

  methods: {
    goToUbicacion() {
      var elmnt = document.getElementById("bloque-ubicacion");
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" >
.lead-container {
  margin-bottom: 100px;

  @include media(md) {
    margin-bottom: 0px;
  }
}
</style>