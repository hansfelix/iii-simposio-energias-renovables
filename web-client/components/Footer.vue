<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <img src="/logo-ias-blanco.png" alt style="max-width: 100%;" />
      </div>
      <div class="footer__right">
        <p>
          ¿Tienes dudas? Escríbenos:
          <br />
          <a href="mailto:ser@udep.pe">ser@udep.pe</a>
        </p>
        <div class="footer__redes-sociales">
          <img
            id="comp-j1afrwv20imageimageimage"
            alt="Blanca Facebook Icono"
            data-type="image"
            itemprop="image"
            style="width: 38px; height: 38px; object-fit: cover;"
            src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"
          />
          <img
            id="comp-j1afrwv21imageimageimage"
            alt="LinkedIn"
            data-type="image"
            itemprop="image"
            style="width: 38px; height: 38px; object-fit: cover;"
            src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"
          />
          <img
            id="comp-j1afrwv22imageimageimage"
            alt="Instagram"
            data-type="image"
            itemprop="image"
            style="width: 38px; height: 38px; object-fit: cover;"
            src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"
          />
        </div>
      </div>
      <div class="footer__copyright">
        <span>© 2019 Simposio de Energía renovables. Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #3a3839;
  color: #d0d0d0;

  &__container {
    display: flex;
    flex: 1 0 100%;
    flex-direction: column;
    flex-wrap: wrap;

    @include media(md) {
      flex-direction: row;
    }
  }

  &__left {
    border-top: 1px dotted #b3b3b3;
    flex: 0;
    padding: 40px 0;

    @include media(md) {
      border-top: 0;
      flex: 1 0 50%;
    }
  }

  &__right {
    flex-direction: column;
    flex: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    order: -1;

    @include media(md) {
      flex-direction: row;
      flex: 1 0 50%;
      order: 0;
    }

    p {
      text-align: center;
      font-size: 1.2rem;
      margin: 35px 0;

      @include media(md) {
        text-align: left;
        font-size: 1.1rem;
      }
    }
  }

  &__redes-sociales {
    margin-bottom: 30px;

    img:not(:nth-child(1)) {
      margin-left: 15px;
    }

    @include media(md) {
      margin-bottom: 0px;
    }
  }

  &__copyright {
    flex: 1 0 100%;
    padding: 15px 5px;
    border-top: 1px dotted #b3b3b3;
    text-align: center;
    font-size: 0.9rem;

    @include media(md) {
      border-top: 0;
    }
  }
}
</style>