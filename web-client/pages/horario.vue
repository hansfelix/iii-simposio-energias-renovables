<template>
  <section class="bloque bloque-navbar">
    <div class="container">
      <h1 class="titulo-1 mt-5">Horario</h1>

      <div class="schedule">
        <div class="schedule__day">
          <h5>Viernes 13</h5>
          <TimeSlot
            v-for="(timeSlot, index) in schedule_day_1"
            :key="index"
            :timeSlot="timeSlot"
          />
        </div>
        <div class="schedule__day">
          <h5>Sábado 14</h5>
          <TimeSlot
            v-for="(timeSlot, index) in schedule_day_2"
            :key="index"
            :timeSlot="timeSlot"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

import Title from "~/components/Title.vue";
import TimeSlot from "./horario/TimeSlot";

export default {
  head() {
    return {
      title: "Horario - III Simposio de Energías Renovables"
    };
  },

  components: {
    Title,
    TimeSlot
  },

  data() {
    return {
      schedule_day_1: [
        {
          order: 1,
          time_start: "09:00",
          time_end: "10:00",
          session_title: "Registro de los participantes"
        },
        {
          order: 2,
          time_start: "10:00",
          time_end: "10:30",
          session_title: "Palabras de apertura"
        },
        {
          order: 3,
          time_start: "10:30",
          time_end: "11:15",
          session_title:
            "El futuro de las hidroeléctricas y las Energías Renovables en el Perú",
          speaker: {
            img_url: "/ponentes/roberto-tamayo.jpg",
            diplay_name: "Roberto Tamayo"
          }
        },
        {
          order: 4,
          time_start: "11:15",
          time_end: "12:00",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/alberto-rios.jpg",
            diplay_name: "Alberto Rios"
          }
        },
        {
          order: 5,
          time_start: "12:00",
          time_end: "12:45",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/rosendo-ramirez.jpg",
            diplay_name: "Rosendo Ramirez"
          }
        },
        {
          order: 6,
          time_start: "12:45",
          time_end: "14:00",
          session_title: "Almuerzo"
        },
        {
          order: 7,
          time_start: "14:00",
          time_end: "14:45",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/rodolfo-zamalloa.jpg",
            diplay_name: "Rodolfo Zamalloa"
          }
        },
        {
          order: 8,
          time_start: "14:45",
          time_end: "15:30",
          session_title: "Transporte Eléctrico y Ciudades Sostenibles",
          speaker: {
            img_url: "/ponentes/javier-peon.jpg",
            diplay_name: "Javier Peon"
          }
        },
        {
          order: 9,
          time_start: "15:30",
          time_end: "16:15",
          session_title: "Desarrollo de la movilidad eléctrica en el Perú",
          speaker: {
            img_url: "/ponentes/edwin-zorrilla.jpg",
            diplay_name: "Edwin Zorrilla"
          }
        },
        {
          order: 10,
          time_start: "16:15",
          time_end: "17:00",
          session_title: "Exposición de vehículo eléctrico"
        },
        {
          order: 11,
          time_start: "17:00",
          time_end: "17:30",
          session_title: "Coffee Break"
        },
        {
          order: 12,
          time_start: "17:30",
          time_end: "18:15",
          session_title: "Potencia Firme",
          speaker: {
            img_url: "/ponentes/luis-espinoza.jpg",
            diplay_name: "Luis Espinoza"
          }
        },
        {
          order: 13,
          time_start: "18:15",
          time_end: "19:30",
          session_title: "Regulación en Energías Renovables",
          speaker: {
            img_url: "/ponentes/riquel-mitma.jpg",
            diplay_name: "Riquel Mitma"
          }
        },
        {
          order: 14,
          time_start: "19:30",
          time_end: "20:15",
          session_title: "Regulaciones Eléctricas",
          speaker: {
            img_url: "/ponentes/orlando-chavez.jpg",
            diplay_name: "Orlando Chávez"
          }
        }
      ],

      schedule_day_2: [
        {
          order: 1,
          time_start: "09:00",
          time_end: "10:30",
          session_title: "Registro de los participantes"
        },
        {
          order: 2,
          time_start: "10:30",
          time_end: "11:15",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/herrera-descalzi.jpg",
            diplay_name: "Carlos Herrera Descalzi"
          }
        },
        {
          order: 3,
          time_start: "11:15",
          time_end: "12:00",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/darwin-medina.jpg",
            diplay_name: "Darwin Medina"
          }
        },
        {
          order: 4,
          time_start: "12:45",
          time_end: "14:00",
          session_title: "Almuerzo"
        },
        {
          order: 5,
          time_start: "14:00",
          time_end: "14:45",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/pedro-gamio.jpg",
            diplay_name: "Pedro Gamio"
          }
        },
        {
          order: 6,
          time_start: "14:45",
          time_end: "15:30",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/darwin-padilla.jpg",
            diplay_name: "Darwin Padilla"
          }
        },
        {
          order: 7,
          time_start: "15:30",
          time_end: "16:15",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/daniel-camac.jpg",
            diplay_name: "Daniel Camac"
          }
        },
        {
          order: 8,
          time_start: "16:15",
          time_end: "17:00",
          session_title: "Exposición de vehículo eléctrico"
        },
        {
          order: 9,
          time_start: "17:00",
          time_end: "17:30",
          session_title: "Coffee Break"
        },
        {
          order: 10,
          time_start: "17:30",
          time_end: "18:15",
          session_title: "TBD",
          speaker: {
            img_url: "/ponentes/TBD.jpg",
            diplay_name: "TBD"
          }
        },
        {
          order: 11,
          time_start: "18:15",
          time_end: "19:30",
          session_title:
            "Uso de tecnología BESS para almacenamiento de energía",
          speaker: {
            img_url: "/ponentes/jorge-guimac.jpg",
            diplay_name: "Jorge Guimac"
          }
        },
        {
          order: 12,
          time_start: "19:30",
          time_end: "20:15",
          session_title:
            "Generadores solares autosostenibles para la industria 4.0",
          speaker: {
            img_url: "/ponentes/adolfo-rojas.jpg",
            diplay_name: "Adolfo Rojas"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.schedule {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @include media(md) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
