<template>
  <section class="bloque bloque-navbar">
    <div class="container">
      <h1 class="titulo-1 mt-5">Ponentes de talla</h1>
      <p
        class="subtitulo-1"
      >Además contaremos con ponentes de alto prestigio y experiencia, tanto nacional como internacional, en lo referente a energías renovables que harán que el simposio sea práctico y sobre todo útil.</p>
      <div class="row">
        <template v-if="listaPonentes.length">
          <ponente
            v-for="ponente in listaPonentes"
            :key="ponente.key"
            :mostrarCuatro="true"
            :fullname="ponente.fullname"
            :urlImg="ponente.urlimg"
            :job="ponente.job"
            :ponencias="ponente.speakings"
            :descripcion="ponente.description"
            :linkedin="ponente.linkedin"
          ></ponente>
        </template>

        <template v-else>
          Cargando ...
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

import Title from "~/components/Title.vue";
import Ponente from "~/components/SpeakerCard.vue";

export default {
  head() {
    return {
      title: "Ponentes - III Simposio de Energías Renovables"
    };
  },

  components: {
    Title,
    Ponente
  },

  data() {
    return {
      listaPonentes: []
    };
  },

  created() {
    fireDb
      .collection("ponentes")
      .get()
      .then(snapshot => {
        this.listaPonentes = [];
        snapshot.forEach(doc => {
          let ponencias = [];
          fireDb
            .collection("ponentes")
            .doc(doc.id)
            .collection("ponencias")
            .get()
            .then(snapshot => {
              snapshot.forEach(d => {
                ponencias.push({
                  datetime: d.data().datetime,
                  title: d.data().title,
                  topic: d.data().topic
                });
              });
            })
            .catch(err => {
              console.log("Error getting documents", err);
            });
          this.listaPonentes.push({
            key: doc.id,
            urlimg: doc.data().urlimg,
            fullname: doc.data().fullname,
            job: doc.data().job,
            description: doc.data().description,
            linkedin: doc.data().linkedin,
            speakings: ponencias
          });
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  // methods: {
  //   async readPonentesFromFirestore() {
  //     const ponentesRef = fireDB.collection('ponentes');

  //     let ponentes;
  //     try {
  //       ponentes = await ponentesRef.get();
  //     } catch (err) {
  //       console.error(err);
  //     }

  //   }
  // }
};
</script>

<style lang="scss">
.links {
  padding-top: 15px;
}
.w-20 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.66% !important;
  flex: 0 0 16.66% !important;
  max-width: 16.66%;
}
.subtitulo-1 {
  max-width: 100%;
  @include media(lg) {
    max-width: 70%;
  }
}
</style>
