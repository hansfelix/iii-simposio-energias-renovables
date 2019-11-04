<template>
  <section class="bloque-ponentes">
    <div class="container">
      <h2 class="text-center mb-5">
        <span class="titulo-1">Ponentes</span>
      </h2>
      <div class="row">
        <ponente
          v-for="ponente in listaPonentes"
          :key="ponente.id"
          :fullname="ponente.nombre"
          :urlImg="ponente.urlImg"
          :job="ponente.puesto"
          :ponencias="ponente.ponencias"
          :descripcion="ponente.descripcion"
        ></ponente>
      </div>

      <div class="row">
        <div class="col text-center">
          <a href="/ponentes" class="btn btn-main-1 mt-4">
            <span>Ver todos los ponentes</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Ponente from "~/components/SpeakerCard.vue";

export default {
  components: { Ponente },

  data() {
    return {
      listaPonentes: [
        {
          id: 1,
          nombre: "Pedro Gamio",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/PEDROGAMIO.jpg",
          puesto: "Ex Vice Ministro de Energía del Perú",
          descripcion:
            "Ingeniero Eléctrico por la Academia Estatal Politécnica de Belarús, Master of Science en Ingeniería por la Academia Estatal Politécnica de Belarús, Máster en Energías Renovables por la Universidad Europea de Madrid, también posee un doctorado en Ingeniería Eléctrica por la Universidad Carlos III de Madrid.",
          ponencias: [
            {
              titulo:
                "Rumbo al bicentenario: Cómo se hace realidad el mercado de las RER y cuál es su futuro en el Perú",
              horario: "Viernes 14 de diciembre, 17:00 - 17:45",
              tema: "Políticas de desarrollo eléctrico sostenible"
            }
          ]
        },
        {
          id: 2,
          nombre: "Alberto Rios",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/ALBERTORIOS.jpg",
          puesto: "Profesor Titular Principal en Universidad Técnica de Ambato",
          descripcion:
            "Ingeniero Eléctrico por la Academia Estatal Politécnica de Belarús, Master of Science en Ingeniería por la Academia Estatal Politécnica de Belarús, Máster en Energías Renovables por la Universidad Europea de Madrid, también posee un doctorado en Ingeniería Eléctrica por la Universidad Carlos III de Madrid."
        },
        {
          id: 3,
          nombre: "Herrera Descalzi",
          urlImg:
            "https://simposio-energias-renovables.firebaseapp.com/static/ponentes/HERRERADESCALZI.jpg",
          puesto: "Ex-ministro de Energía del Perú",
          descripcion:
            "Ex Ministro de Energía y Minas (2000-2001) durante el Gobierno Transitorio de Valentín Paniagua Corazao; ha sido Decano Nacional del Colegio de Ingenieros del Perú (CIP) en el periodo 2008-2009 y ha sido elegido nuevamente para el período 2013-2014 por amplio consenso pues, por primera vez en el CIP"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.btn-main-1 {
  color: white !important;
  background-color: var(--main-color-2);
  border-color: var(--main-color-2);
}
</style>