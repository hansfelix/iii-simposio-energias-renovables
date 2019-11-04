<template>
  <div class="card">
    <div class="card-body">
      <form class="lead-form">
        <h5 class="lead-form__title">Informes</h5>
        <p class="lead-form__description">Te enviaremos toda la información del evento.</p>

        <div class="alert alert-danger" v-if="error">
          <small>{{ error }}</small>
        </div>

        <div class="row">
          <div class="form-group col-md-6 pr-md-0">
            <label class="lead-form__label">Nombres y Apellidos</label>
            <input v-model="lead.nombre" type="text" class="form-control form-control-sm" />
          </div>
          <div class="form-group col-md-6">
            <label class="lead-form__label">Tipo de participante</label>
            <select v-model="lead.tipo" class="form-control form-control-sm">
              <option>Estudiante IEEE</option>
              <option>Estudiante</option>
              <option>Profesional</option>
              <option>Profesional IEEE</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="lead-form__label">Correo</label>
          <input
            v-model="lead.email"
            type="email"
            class="form-control form-control-sm"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="row">
          <div class="form-group col-md-5 pr-md-0">
            <label class="lead-form__label">Celular</label>
            <input v-model="lead.celular" type="tel" class="form-control form-control-sm" />
          </div>
          <div class="form-group col-md-7">
            <label class="lead-form__label">Horario de llamada</label>
            <select v-model="lead.horarioLlamada" class="form-control form-control-sm">
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
            v-model="lead.aceptaTyC"
            type="checkbox"
            class="custom-control-input"
            id="checkbox1"
          />
          <label class="lead-form__label form-check-label custom-control-label" for="checkbox1">
            Acepto los
            <a
              href="#"
              @click.stop="showModalTyC = true"
            >términos de uso de datos de la Universidad de Piura</a>
          </label>
        </div>
        <div class="text-right">
          <button class="lead-form__button btn btn-sm" type="button" @click="enviar">Registrarme</button>
        </div>
      </form>
    </div>

    <Modal :showModal="showModalTyC" @close="showModalTyC = false">
      <template slot="modal-header">Términos de Uso de Datos</template>
      <template
        slot="modal-body"
      >Que, de conformidad con lo establecido en la Ley N° 29733 y su Reglamento, declaro haber sido informado y autorizo que los datos personales y/o sensibles consignados en el presente formulario, así como los que se obtengan en virtud de mi relación con la Universidad de Piura, (en adelante LA UNIVERSIDAD), incluida mi imagen, voz, firma, firma electrónica y/o huellas dactilares sean incorporados y almacenados en el Banco de Datos de LA UNIVERSIDAD, u otros que cumplan con las medidas de seguridad requeridas por las normativa de la materia; y sean tratados por LA UNIVERSIDAD y/o personas naturales y/o jurídicas a quienes la misma delegue o encargue. En este sentido, LA UNIVERSIDAD y/o las personas naturales y/o jurídicas a quienes la misma delegue o encargue podrán tratar dichos datos con las siguientes finalidades: (i) para la ejecución de la relación con el titular de los datos, (ii) para realizar la gestión económica, contable y de cobranza de los pagos efectuados por los participantes, (iii) para establecer y/o mantener contacto e informar y/o promocionar las actividades propias de LA UNIVERSIDAD,(iv) para fines estadísticos y/o de investigación,(v) para fines de prospección comercial, de marketing y/o envío de publicidad e información sobre productos y servicios,(vi) para ser compartidos con la comunidad UDEP-Alumni y cualquier otra unidad Académica o administrativa de LA UNIVERSIDAD. Los datos serán tratados mientras se consideren necesarios para los fines señalados.LA UNIVERSIDAD deja constancia de la posibilidad de ejercer los derechos de acceso, rectificación, cancelación y oposición, y cualesquier otros previstos, conforme a la normativa de la materia, solicitándolo por escrito en las siguientes direcciones Calle Mártir Olaya N°162, Miraflores, Lima o Av. Ramón Mugica 131, Urb. San Eduardo, Piura. En consecuencia, por la presente autorizo a LA UNIVERSIDAD a realizar las actividades antes señaladas.</template>

      <template slot="modal-footer">
        <button type="button" class="btn btn-primary" @click="showModalTyC = false">Entendido</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },

  data() {
    return {
      error: null,
      showModalTyC: false,
      lead: {
        nombre: "",
        email: "",
        celular: "",
        horarioLlamada: "",
        tipo: "",
        aceptaTyC: false
      }
    };
  },

  methods: {
    async enviar() {
      let lead = this.lead;

      if (lead.nombre && lead.email && lead.celular && lead.horarioLlamada) {
        if (lead.aceptaTyC) {
          console.log("true");
          this.error = null;
          const leadsRef = fireDb.collection("leads");

          try {
            await leadsRef.add(lead);
          } catch (e) {
            // TODO: error handling
            console.error(e);
          }

          // Se realizo correctamente la escritura
          this.$router.push({
            path: "/gracias"
          });
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
.lead-form {
  &__title {
    // font-weight: bold;
    color: var(--main-color-2);
    margin-bottom: 2px;
  }

  &__description {
    font-size: 14px;
  }

  &__label {
    margin-bottom: 0.2rem;
    font-size: 13px;
    color: var(--main-color-3);
  }

  &__button {
    width: 100%;
    color: white;
    background-color: var(--main-color-2);
    border-color: var(--main-color-2);

    &:hover {
      color: white;
    }
  }
}

.lead-form .form-group {
  margin-bottom: 0.5rem;
}

.lead-form h4 {
  margin-bottom: 0.2rem;
}

.lead-form .form-check-label {
  font-size: 0.8rem;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: var(--main-color-1);
  outline: 0;
  box-shadow: 0 0 0 0.2rem #c3cf6a96;
}
</style>

