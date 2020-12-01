<template>
  <div class="building">
    <Floor
      v-for="floor in floors"
      :key="floor"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Floor from '@/components/building/Floor.vue'
export default {
  name: 'Building',
  components: {
    Floor
  },
  computed: {
    ...mapState([
      'floors'
    ])
  }
}
</script>
