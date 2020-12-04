<template>
  <div
    class="elevator"
    :style="elevStyles"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import { ELEV_TRANSITION_TIMING } from '@/constants/building.js'

export default {
  name: 'Elevator',
  computed: {
    ...mapGetters([
      'elevBottomPx',
      'elevTransitionSec'
    ]),
    elevStyles () {
      return {
        bottom: `${this.elevBottomPx}px`,
        transitionDuration: `${this.elevTransitionSec}s`,
        transitionTimingFunction: ELEV_TRANSITION_TIMING
      }
    }
  }
}
</script>
