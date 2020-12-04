import {
  FLOORS_NUMBER,
  FLOOR_HEIGHT
} from '@/constants/building.js'

const mutations = {
  defineNextFloor (state, floor) {
    state.nextFloor = floor
  },

  getElevCurrentFloor (state, elevOffsetTop) {
    state.elevCurrentFloor = Math.ceil(FLOORS_NUMBER - (elevOffsetTop / FLOOR_HEIGHT))
  }
}

export default mutations
