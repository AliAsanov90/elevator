<template>
  <div class="panel-display">
    <i
      class="panel-display__direction-icon icon-arrow-up"
      :style="{ transform: `rotate(${ isElevGoingUp ? 0 : 180 }deg)` }"
    />
    <span class="panel-display__current-floor">{{ currentFloor }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PanelDisplay',
  computed: {
    ...mapState([
      'currentFloor'
    ]),
    ...mapGetters([
      'isElevGoingUp'
    ])
  }
}
</script>
