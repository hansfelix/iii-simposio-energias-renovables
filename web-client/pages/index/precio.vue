<template>
  <section class="bloque-precio">
    <div class="container">
      <h2 class="mb-5">
        <span class="titulo-1">Inversión</span>
      </h2>

      <div class="row">
        <div class="col-6 col-sm-6 col-md-3 mb-3">
          <PriceCard
            title="Estudiante IEEE"
            price="130"
            conditions="Enviar su código universitario y número de membresía IEEE."
          />
        </div>

        <div class="col-6 col-sm-6 col-md-3 mb-3">
          <PriceCard title="Estudiante" price="180" conditions="Enviar su código universitario." />
        </div>

        <div class="col-6 col-sm-6 col-md-3 mb-3">
          <PriceCard
            title="Profesional IEEE"
            price="230"
            conditions="Enviar su número de membresía IEEE."
          />
        </div>

        <div class="col-6 col-sm-6 col-md-3 mb-3">
          <PriceCard title="Profesional" price="280" />
        </div>
      </div>

      <h6 class="my-4">
        <strong>Procedimiento de pago:</strong>.
      </h6>

      <div class="row text-left">
        <div class="col-sm-4 mb-4">
          <div class="process">
            <div class="process__icon">1</div>
            <span class="process__text">Registro</span>
          </div>
          <p>Registra tus datos en el siguiente formulario:</p>
          <button
            type="button"
            class="btn btn-sm card-precio__btn"
            @click="showModalRegistration = true"
          >Inscripción</button>
        </div>
        <div class="col-sm-4 mb-4">
          <div class="process">
            <div class="process__icon">2</div>
            <span class="process__text">Pago</span>
          </div>
          <p>
            Realizar el depósito en la cuenta de la Universidad de Piura:
            <br />
            <strong>BCP MN 193-2564914-0-20</strong>
            <br />Curso de Ingeniería y otros.
          </p>
        </div>
        <div class="col-sm-4 mb-4">
          <div class="process">
            <div class="process__icon">3</div>
            <span class="process__text">Confirmación</span>
          </div>
          <p>
            Envíanos tu boucher o comprobante de pago al correo
            <a
              href="mailto:ser@udep.pe"
            >ser@udep.pe</a> o al whatsapp
            <a href="https://wa.me/51996915471" target="_blank">996 915 471</a>
          </p>
        </div>
      </div>
    </div>

    <Modal :showModal="showModalRegistration" @close="showModalRegistration = false">
      <template slot="modal-header">Registro al III Simposio de Energías Renovables</template>
      <template slot="modal-body">
        <form class="registered-form text-left">
          <p
            class="registered-form__description"
          >Para continuar con la inscripción, llena todos los siguientes campos:</p>

          <div class="alert alert-danger" v-if="error">
            <small>{{ error }}</small>
          </div>

          <div class="row">
            <div class="form-group col-md-4 pr-md-0">
              <label class="registered-form__label">Nombres</label>
              <input
                v-model="registered.nombres"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>

            <div class="form-group col-md-4 pr-md-0">
              <label class="registered-form__label">Apellidos</label>
              <input
                v-model="registered.apellidos"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>

            <div class="form-group col-md-4">
              <label class="registered-form__label">DNI</label>
              <input
                v-model="registered.dni"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>

            <div class="form-group col-md-6 pr-md-0">
              <label class="registered-form__label">Correo</label>
              <input
                v-model="registered.email"
                type="email"
                class="form-control form-control-sm"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label class="registered-form__label">Tipo de participante</label>
              <select v-model="registered.tipo" class="form-control form-control-sm">
                <option>Estudiante IEEE</option>
                <option>Estudiante</option>
                <option>Profesional IEEE</option>
                <option>Profesional</option>
              </select>
            </div>

            <div
              class="form-group col-md-6 pr-md-0"
              v-if="registered.tipo == 'Estudiante' || registered.tipo == 'Estudiante IEEE'"
            >
              <label class="registered-form__label"># Carnet universitario</label>
              <input
                v-model="registered.carnet"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>

            <div
              class="form-group col-md-6"
              v-if="registered.tipo == 'Profesional IEEE' || registered.tipo == 'Estudiante IEEE'"
            >
              <label class="registered-form__label">Número de membresía IEEE</label>
              <input
                v-model="registered.membership"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6 pr-md-0">
              <label class="registered-form__label">Celular</label>
              <input v-model="registered.celular" type="tel" class="form-control form-control-sm" />
            </div>
            <div class="form-group col-md-6">
              <label class="registered-form__label">Horario de llamada</label>
              <select v-model="registered.horarioLlamada" class="form-control form-control-sm">
                <!-- <option>No me llamen</option> -->
                <option>06:00 - 08:00</option>
                <option>08:00 - 12:00</option>
                <option>12:00 - 02:00</option>
                <option>14:00 - 18:00</option>
                <option>18:00 - 20:00</option>
                <option>20:00 - 22:00</option>
              </select>
            </div>
          </div>

          <div class="form-group custom-control custom-checkbox">
            <input
              v-model="registered.aceptaTyC"
              type="checkbox"
              class="custom-control-input"
              id="checkbox2"
            />
            <label
              class="registered-form__label form-check-label custom-control-label"
              for="checkbox2"
            >
              Acepto los
              <a
                href="#"
                @click.stop.prevent="showModalTyC = true"
              >términos de uso de datos de la Universidad de Piura</a>
            </label>
          </div>
        </form>
      </template>

      <template slot="modal-footer">
        <button class="btn-primary btn" type="button" @click="enviar">
          <template v-if="!loadingRegistration">Inscribirme</template>
          <template v-else>
            <span class="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
            <span>Procesando...</span>
          </template>
        </button>
      </template>
    </Modal>

    <Modal :showModal="showModalSuccessfull" @close="showModalSuccessfull = false">
      <template slot="modal-header">¡Registro Correcto!</template>
      <template slot="modal-body">
        <check />
        <p>
          Para continuar con la inscripción, debes depositar el monto correspondiente a tu categoría en la cuenta de la Universidad de Piura:
          BCP MN 193-2564914-0-20
          Curso de Ingeniería y otros.
        </p>
      </template>

      <template slot="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          @click="showModalSuccessfull = false"
        >Entendido</button>
      </template>
    </Modal>

    <Modal :showModal="showModalTyC" @close="showModalTyC = false">
      <template slot="modal-header">Términos de Uso de Datos</template>
      <template
        slot="modal-body"
      >Que, de conformidad con lo establecido en la Ley N° 29733 y su Reglamento, declaro haber sido informado y autorizo que los datos personales y/o sensibles consignados en el presente formulario, así como los que se obtengan en virtud de mi relación con la Universidad de Piura, (en adelante LA UNIVERSIDAD), incluida mi imagen, voz, firma, firma electrónica y/o huellas dactilares sean incorporados y almacenados en el Banco de Datos de LA UNIVERSIDAD, u otros que cumplan con las medidas de seguridad requeridas por las normativa de la materia; y sean tratados por LA UNIVERSIDAD y/o personas naturales y/o jurídicas a quienes la misma delegue o encargue. En este sentido, LA UNIVERSIDAD y/o las personas naturales y/o jurídicas a quienes la misma delegue o encargue podrán tratar dichos datos con las siguientes finalidades: (i) para la ejecución de la relación con el titular de los datos, (ii) para realizar la gestión económica, contable y de cobranza de los pagos efectuados por los participantes, (iii) para establecer y/o mantener contacto e informar y/o promocionar las actividades propias de LA UNIVERSIDAD,(iv) para fines estadísticos y/o de investigación,(v) para fines de prospección comercial, de marketing y/o envío de publicidad e información sobre productos y servicios,(vi) para ser compartidos con la comunidad UDEP-Alumni y cualquier otra unidad Académica o administrativa de LA UNIVERSIDAD. Los datos serán tratados mientras se consideren necesarios para los fines señalados.LA UNIVERSIDAD deja constancia de la posibilidad de ejercer los derechos de acceso, rectificación, cancelación y oposición, y cualesquier otros previstos, conforme a la normativa de la materia, solicitándolo por escrito en las siguientes direcciones Calle Mártir Olaya N°162, Miraflores, Lima o Av. Ramón Mugica 131, Urb. San Eduardo, Piura. En consecuencia, por la presente autorizo a LA UNIVERSIDAD a realizar las actividades antes señaladas.</template>

      <template slot="modal-footer">
        <button type="button" class="btn btn-primary" @click="showModalTyC = false">Entendido</button>
      </template>
    </Modal>
  </section>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
import PriceCard from "~/components/PriceCard.vue";
import Modal from "@/components/Modal.vue";
import check from "@/components/check.vue";

export default {
  components: { PriceCard, Modal, check },

  data() {
    return {
      error: null,
      showModalSuccessfull: false,
      showModalRegistration: false,
      loadingRegistration: false,
      showModalTyC: false,
      registered: {
        nombres: "",
        apellidos: "",
        dni: "",
        email: "",
        carnet: "",
        membership: "",
        celular: "",
        horarioLlamada: "",
        tipo: "",
        aceptaTyC: false
      }
    };
  },

  methods: {
    async enviar() {
      let registered = this.registered;

      if (
        registered.nombres &&
        registered.apellidos &&
        registered.celular &&
        registered.dni
      ) {
        if (registered.aceptaTyC) {
          this.loadingRegistration = true;
          this.error = null;
          const registeredsRef = fireDb.collection("inscripciones");

          try {
            await registeredsRef.add(registered);
          } catch (e) {
            // TODO: error handling
            console.error(e);
            this.loadingRegistration = false;
          }

          // Se realizo correctamente la escritura
          this.showModalRegistration = false;
          this.loadingRegistration = false;
          this.showModalSuccessfull = true;
        } else {
          this.error = "Debe aceptar los terminos y condiciones.";
        }
      } else {
        this.error = "Debe llenar todos los campos.";
      }
    }
  }
};
</script>

<style lang="scss">
.process {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #e9e9e9;
  }

  &__text {
    position: relative;
    margin-left: 10px;
    z-index: 5;

    &::after {
      content: "";
      background-color: var(--main-color-1);
      border-radius: 10px;
      position: absolute;
      width: 21px;
      height: 5px;
      bottom: -4px;
      left: 0px;
      z-index: -1;
    }
  }
}
</style>