<template>
  <div
    class="elevator"
    :style="elevStyles"
    @transitionstart="onElevStart"
    @transitionend="onElevStop"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {
  FLOOR_HEIGHT,
  ELEV_TRANSITION_TIMING,
  ELEV_POSITION_GETTING_INTERVAL_MS
} from '@/constants/building.js'

export default {
  name: 'Elevator',

  data () {
    return {
      elevInterval: null
    }
  },

  computed: {
    ...mapGetters([
      'elevBottomPx',
      'elevTransitionSec'
    ]),

    elevStyles () {
      return {
        height: `${FLOOR_HEIGHT}px`,
        bottom: `${this.elevBottomPx}px`,
        transitionDuration: `${this.elevTransitionSec}s`,
        transitionTimingFunction: ELEV_TRANSITION_TIMING
      }
    }
  },

  methods: {
    ...mapMutations([
      'getElevCurrentFloor'
    ]),

    onElevStart (e) {
      this.elevInterval = setInterval(() => {
        this.getElevCurrentFloor(e.target.offsetTop)
      }, ELEV_POSITION_GETTING_INTERVAL_MS)
    },

    onElevStop (e) {
      this.getElevCurrentFloor(e.target.offsetTop)
      clearInterval(this.elevInterval)
      this.elevInterval = null
    }
  }
}
</script>
