<template>
  <div class="gracias-page">
    <div class="gracias-page_mensaje">

      <div class="card card-thanks">
        <div class="card-header bg-simposio">
          <div class="thumbs-container">
            <img :src="thumbsUrl">
          </div>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title title-thanks">¡Muchas gracias por registrarte!</h5>
          <p class="card-text mb-1">Hemos recibido tu interés de participar en el <span class="text-simposio">Simposio de Energías Renovables</span>.</p>
          <p class="card-text">Te hemos enviado un mail al correo indicado, además nos pondremos en contacto con usted.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbsUrl: {
      type: String,
      default: "/like.svg"
    }
  },
  layout: "default"
};
</script>

<style lang="scss">
/*------------------------------------*\
  .gracias-page
\*------------------------------------*/
.gracias-page {
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 100%;
  width: 100%;
  &_mensaje {
    width: 90%;
    margin: 0 auto;

    @include media(md) {
      width: 60%;
    }

    .card-thanks {
      // width: 80%;
      margin: 0 auto;
      margin-bottom: 20px;
      border-width: 0px;
      -webkit-box-shadow: 0px 0px 8px 3px rgba(206,206,206,0.75);
      -moz-box-shadow: 0px 0px 8px 3px rgba(206,206,206,0.75);
      box-shadow: 0px 0px 8px 3px rgba(206,206,206,0.75);
    }
    .title-thanks {
      font-size: 2rem;
      line-height: 1.2;
      font-weight: bold;
    }
    .text-simposio {
      color: var(--main-color-2);
      font-weight: bold;
    }
    .thumbs-container {
      padding: 20px;
      border-radius: 50%;
      background-color: #fff;
      height: 150px;
      width: 150px;
      margin: 25px auto;

      img {
        width: 80%;
        height: 80%;
      }
    }
  }
}
.bg-simposio {
  background-color: var(--main-color-2)!important;
}
</style>