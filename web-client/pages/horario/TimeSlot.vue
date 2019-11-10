<template>
  <section class="time-slot">
    <div class="time-slot__time">
      {{ timeSlot.time_start }}
      <div>-</div>
      {{ timeSlot.time_end }}
    </div>
    <div class="time-slot__session">
      <div class="time-slot__title">
        {{ timeSlot.session_title }}
      </div>
      <div class="time-slot__speaker" v-if="timeSlot.speaker">
        <img
          class="time-slot__speaker-img"
          :src="timeSlot.speaker.img_url"
          :alt="timeSlot.speaker.diplay_name"
        />
        <div class="time-slot__speaker-name">
          {{ timeSlot.speaker.diplay_name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    timeSlot: {
      type: Object
      // default: {}
    }
  }
};
</script>

<style lang="scss">
.time-slot {
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: #f7f7f7;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 2px 1px -2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  // cursor: pointer;

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 4px 0 rgba(0, 0, 0, 0.12),
      0 2px 3px -1px rgba(0, 0, 0, 0.4);
  }

  &__time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 1 75px;
    text-align: center;
    line-height: 16px;
    font-size: 14px;
  }

  &__session {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  &__title {
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: bold;
  }

  &__speaker {
    display: flex;
    align-items: center;
  }

  &__speaker-img {
    border-radius: 50%;
    margin-right: 10px;
    width: 26px;
    height: 26px;
  }

  &__speaker-name {
    font-size: 14px;
  }
}
</style>