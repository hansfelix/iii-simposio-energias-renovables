<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <img class="footer__left-img" src="/logos/logo-ias-udep.svg" alt />
      </div>
      <div class="footer__right">
        <p>
          ¿Tienes dudas? Escríbenos:
          <br />
          <a href="mailto:ser@udep.pe">ser@udep.pe</a>
        </p>
        <div class="footer__redes-sociales">
          <a href="https://www.facebook.com/simposio.energias.renovables" target="_blank">
            <img
              id="comp-j1afrwv20imageimageimage"
              alt="Blanca Facebook Icono"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; margin-right: 5px; object-fit: cover;"
              src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/simposio-energ%C3%ADas-renovables/"
            target="_blank"
          >
            <img
              id="comp-j1afrwv21imageimageimage"
              alt="LinkedIn"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; margin-right: 5px; object-fit: cover;"
              src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"
            />
          </a>
          <a href="https://www.instagram.com/simposiodeenergias/" target="_blank">
            <img
              id="comp-j1afrwv22imageimageimage"
              alt="Instagram"
              data-type="image"
              itemprop="image"
              style="width: 38px; height: 38px; object-fit: cover;"
              src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"
            />
          </a>
        </div>
      </div>
      <div class="footer__copyright">
        <span>
          Simposio de Energías Renovables © 2019 &nbsp;|&nbsp;
          <span
            class="footer__made-with-love"
            @click="showModalTyC = true"
          >
            Hecho con
            <span style>&#9829;</span> en Perú
          </span>
        </span>
      </div>
    </div>

    <Modal :showModal="showModalTyC" :maxWidth="400" @close="showModalTyC = false">
      <template slot="modal-header">Equipo de desarrollo</template>
      <template slot="modal-body">
        <ul class="list-group">
          <li
            class="list-group-item developer"
            v-for="(developer,index) in developers"
            :key="index"
          >
            <div class="developer__avatar">
              <img :src="developer.imgUrl" class="img-fluid" alt="quixote" />
            </div>

            <div class="developer__main">
              <div class="developer__name">{{developer.name}}</div>
              <div class="developer__job">{{developer.job}}</div>
            </div>

            <div class="developer__actions">
              <a class="developer__actions-link" :href="developer.github" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a class="developer__actions-link" :href="`mailto:${developer.mail}`" target="_blank">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </li>
        </ul>
      </template>

      <template slot="modal-footer">
        <button type="button" class="btn btn-primary" @click="showModalTyC = false">OK</button>
      </template>
    </Modal>
  </footer>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },

  data() {
    return {
      showModalTyC: false,
      developers: [
        {
          name: "Hans Felix",
          imgUrl: "/team/hans-felix.png",
          job: "Developer",
          github: "https://github.com/Hansfelix50",
          mail: "hansfelix50@gmail.com"
        },
        {
          name: "Joseph Whacheng",
          imgUrl: "/team/joseph-whacheng.jpg",
          job: "Developer",
          github: "https://github.com/JWhacheng",
          mail: "hansfelix50@gmail.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.footer {
  background-color: #3a3839;
  color: #d0d0d0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

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
    display: flex;
    align-items: center;
    justify-content: center;

    @include media(md) {
      border-top: 0;
      flex: 1 0 50%;
      padding: 40px 65px 40px 0;
      justify-content: unset;
    }
  }

  &__left-img {
    width: 90%;
    max-width: 360px;

    @include media(md) {
      width: 80%;
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
    border-top: 1px dashed #808080;
    text-align: center;
    font-size: 0.9rem;

    @include media(md) {
      border-top: 1px dashed #808080;
    }
  }

  &__made-with-love {
    display: block;
    cursor: pointer;

    &:hover {
      color: var(--main-color-1);
    }

    @include media(md) {
      display: inline;
    }
  }
}

.developer {
  display: flex;
  align-items: center;
  padding: 0.75rem;

  &__avatar {
    max-width: 45px;

    img {
      border-radius: 50%;
    }
  }

  &__main {
    flex: 1;
    margin-left: 15px;
  }

  &__name {
    font-weight: bold;
  }

  &__job {
    font-size: 0.9em;
  }

  &__actions {
    font-size: 1.15em;
  }

  &__actions-link {
    color: #3c3c3c;
    margin-right: 5px;

    &:hover {
      color: #808080;
    }
  }
}
</style>