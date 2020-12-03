<template>
  <div class="control-panel">
    <PanelDisplay />
    <PanelButtons />
  </div>
</template>

<script>
import PanelDisplay from '@/components/control-panel/PanelDisplay.vue'
import PanelButtons from '@/components/control-panel/PanelButtons.vue'

export default {
  name: 'ControlPanel',
  components: {
    PanelDisplay,
    PanelButtons
  }
}
</script>
