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
import { mapGetters } from 'vuex'
import Floor from '@/components/building/Floor.vue'
import Elevator from '@/components/building/Elevator.vue'

export default {
  name: 'Building',
  components: {
    Floor,
    Elevator
  },
  computed: {
    ...mapGetters([
      'floors'
    ])
  },
  mounted () {
    console.log(this.floors)
  }
}
</script>
