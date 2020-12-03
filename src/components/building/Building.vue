<template>
  <div class="building">
    <div class="building__roof"></div>
    <Floor
      v-for="floor in floors"
      :key="floor"
      :floor="floor"
    />
    <Elevator />
  </div>
</template>

<script>
import { FLOORS_NUMBER } from '@/constants/building.js'
import { generateReversedArrayFromNumber } from '@/utils/helpers.js'
import Floor from '@/components/building/Floor.vue'
import Elevator from '@/components/building/Elevator.vue'

export default {
  name: 'Building',
  components: {
    Floor,
    Elevator
  },
  computed: {
    floors () {
      return generateReversedArrayFromNumber(FLOORS_NUMBER)
    }
  },
  mounted () {
    // console.log(this.floors)
  }
}
</script>
