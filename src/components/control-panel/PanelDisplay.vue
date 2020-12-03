<template>
  <div class="panel-display">
    <i class="panel-display__direction-icon icon-arrow-up"></i>
    <span class="panel-display__current-floor">{{ currentFloor }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PanelDisplay',
  computed: {
    ...mapState([
      'currentFloor'
    ])
  }
}
</script>
