<template>
  <div>
    <!-- Bloque principal -->
    <section class="bloque bloque-principal bloque-navbar">
      <div class="container h-100">
        <div class="row h-100 pt-2 align-content-center">
          <div class="col-md-8">
            <h1 class="font-weight-bold titulo1">Nuevas tendencias en el Perú y el mundo</h1>
            <!-- <h3>Nuevas tendencias en el Perú y el mundo</h3> -->
            <div class="datos">
              <img class="dato-item fecha" src="/index_fechas.png" />
              <img class="dato-item lugar" src="/index_lugar.png" />
            </div>
          </div>

          <div class="col-md-4">
            <!--align-self-center -->
            <!-- Formulario Lead -->
            <LeadForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Bloque Sec -->
    <section>
      <h2>Compartimos conocimiento</h2>
      <p>  
        El Simposio tiene como objetivo fortalecer la red de conocimiento en energías renovables, 
        además de generar espacios de propuestas en el sector energético con viabilidad técnica, 
        social , ambiental y económica para un desarrollo sostenible.
      </p>
    </section>
  </div>
</template>

<script>
import Title from "~/components/Title.vue";
import LeadForm from "~/components/LeadForm.vue";

export default {
  components: {
    Title,
    LeadForm
  },
  layout: "default"
};
</script>

<style>
.titulo1 {
  color: #4c4c4c;
  line-height: 3rem;
  margin-bottom: 35px;
}
.datos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.dato-item {
  margin-right: 35px;
  margin-bottom: 25px;
}

.dato-item.fecha {
  width: 160px;
}

.dato-item.lugar {
  width: 270px;
}
</style>
