<template>
  <div class="panel-buttons">
    <div
      v-for="button in $options.FLOORS_NUMBER"
      :key="button"
      class="panel-buttons__button"
      @click="$emit('panel-call', button)"
    >
      {{ button }}
    </div>
  </div>
</template>

<script>
import { FLOORS_NUMBER } from '@/constants/building.js'

export default {
  name: 'PanelButtons',
  FLOORS_NUMBER
}
</script>
