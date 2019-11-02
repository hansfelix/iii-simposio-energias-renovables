<template>
  <div class="ponencia">
    <h5>{{ titulo }}</h5>
    <small class="text-muted">{{ horario }}</small>
    <span class="badge badge-topic">{{ tema }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'titulo',
    'horario',
    'tema'
  ]
  
}
</script>

<style lang="scss">
  .listado-ponencias {
    h5 {
      font-size: 1em;
      margin: 0;
      padding: 0;
    }
    .badge-topic {
      background-color: var(--main-color-1);
    }
  }
</style>