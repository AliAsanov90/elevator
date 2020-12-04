import { FLOOR_HEIGHT, ELEV_TRANSITION_SEC_PER_FLOOR } from '@/constants/building.js'

const getters = {
  isElevGoingUp ({ lastFloor, nextFloor }) {
    return (nextFloor - lastFloor) > 0
  },

  elevBottomPx ({ nextFloor }) {
    return (nextFloor - 1) * FLOOR_HEIGHT
  },

  elevTransitionSec ({ lastFloor, nextFloor }) {
    return Math.abs(nextFloor - lastFloor) * ELEV_TRANSITION_SEC_PER_FLOOR
  }
}

export default getters
