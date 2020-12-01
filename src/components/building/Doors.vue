<template>
  <div class="doors">
    <div class="doors__left"></div>
    <div class="doors__right"></div>
    <FloorButtons />
  </div>
</template>

<script>
import FloorButtons from '@/components/building/FloorButtons.vue'

export default {
  name: 'Doors',
  components: {
    FloorButtons
  }
}
</script>
