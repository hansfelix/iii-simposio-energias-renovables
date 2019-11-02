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
            <a href="#">términos de uso de datos de la Universidad de Piura</a>
          </label>
        </div>
        <div class="text-right">
          <button class="lead-form__button btn btn-sm" type="button" @click="enviar">Registrarme</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      error: null,
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

