const getters = {
  floors: state => {
    // Generate floors from number of floors in the building
    return Array.from({ length: state.floorsCount }, (_, i) => i + 1)
  }
}

export default getters
