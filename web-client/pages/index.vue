<template>
  <div class="preVenta">
    <!-- Bloque principal -->
    <principal />

    <!-- Bloque DESCRIPCIÓN -->
    <section class="bloque-descripcion" style="width:100%; background: white">
      <div class="container">
        <div class="bloque-descripcion--contenido">
          <h2 class="text-center mb-4">
            <span class="titulo-1">Hacia un país tecnológico</span>
          </h2>
          <p style="max-width: 800px;">
            El
            <span class="texto-simposio">Simposio de Energías Renovables</span> tiene como objetivo fortalecer la red de conocimiento en energías renovables,
            además de generar espacios de propuestas en el sector energético con viabilidad técnica,
            social, ambiental y económica para un desarrollo sostenible.
          </p>
        </div>
      </div>
    </section>

    <!-- Bloque EJES -->
    <section class="bloque-ejes pt-0">
      <div class="container">
        <h2 class="text-center mb-4">
          <span class="titulo-1">Ejes temáticos</span>
        </h2>
        <div class="row mt-5">
          <div class="col-6 col-md-3 eje">
            <img src="/icon-movilidad-electrica.png" alt srcset />
            <p class="mt-2">Movilidad Eléctrica</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-innovacion.png" alt srcset />
            <p class="mt-2">Innovación y tecnologías disruptivas</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-actual.png" alt srcset />
            <p class="mt-2">Estado actual de la normativa peruana</p>
          </div>
          <div class="col-6 col-md-3 eje">
            <img src="/icon-futuro.png" alt srcset />
            <p class="mt-2">Presente y futuro de las energías renovables</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Boque VIDEO -->
    <section class="bloque-video">
      <div class="container" style="max-width:750px">
        <h2 class="text-center mb-5">
          <span class="titulo-1 titulo-1--light">¿Por qué asistir?</span>
        </h2>
        <style>
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
        </style>
        <div class="embed-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/XvcwSB96c4U"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Bloque PRECIO -->
    <precio />

    <!-- Bloque PONENTES -->
    <ponentes />

    <!-- Bloque AUSPICIOS -->
    <!-- <auspicios /> -->

    <ubicacion />
  </div>
</template>

<script>
import landing from "~/layouts/landing.vue";
import LeadForm from "~/components/LeadForm.vue";
import Ponente from "~/components/SpeakerCard.vue";
import PriceCard from "~/components/PriceCard.vue";

import principal from "./index/principal";
import precio from "./index/precio";
import ponentes from "./index/ponentes";
import auspicios from "./index/auspicios";
import ubicacion from "./index/ubicacion";

export default {
  layout: "landing",
  components: {
    LeadForm,
    Ponente,
    PriceCard,
    principal,
    precio,
    ponentes,
    auspicios,
    ubicacion
  }
};
</script>

<style lang="scss">
.preVenta {
  .bloque-descripcion {
    background: white;
    color: #404040;
    padding: 60px 0;

    .bloque-descripcion--contenido {
      p {
        font-size: 1.1rem;
        line-height: 2rem;
        margin: 0 auto;
        text-align: center;
      }
      .img-video {
        border-radius: 5px;
        margin-left: 20px;
      }
    }
  }

  .bloque-ejes {
    background: white;
    padding: 60px 0;

    .eje {
      text-align: center;
    }
  }

  .bloque-video {
    background: white;
    padding: 60px 0;
    background: linear-gradient(
        rgba(195, 207, 106, 0.9),
        rgba(195, 207, 106, 0.9)
      ),
      url(https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_rains_in_Africa_wind_solar.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .bloque-precio {
    background: white;
    padding: 50px 0;
    text-align: center;

    .card-body {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @include media(sm) {
        justify-content: center;
      }
    }
  }

  .bloque-ponentes {
    background: white;
    // background-color: var(--main-color-1);
    padding: 50px 0;
    // color: white;

    .ponente {
      text-align: center;

      .ponente__img {
        border-radius: 50%;
      }

      .ponente__nombre {
        margin: 15px 0 5px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }

  .bloque-auspicios {
    padding: 50px 0;
    background-color: #d8d8d8;
  }
}

.preVenta-columna-centrada {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

