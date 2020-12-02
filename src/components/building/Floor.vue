<template>
  <div class="floor">
    <Doors />
    <div class="floor__number">Floor {{ floor }}</div>
  </div>
</template>

<script>
import Doors from '@/components/building/Doors.vue'

export default {
  name: 'Floor',
  components: {
    Doors
  },
  props: {
    floor: {
      type: Number,
      required: true
    }
  }
}
</script>
