<template>
  <div class="control-panel">
    <PanelDisplay />

    <PanelButtons
      @panel-call="log"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import PanelDisplay from '@/components/control-panel/PanelDisplay.vue'
import PanelButtons from '@/components/control-panel/PanelButtons.vue'

export default {
  name: 'ControlPanel',
  components: {
    PanelDisplay,
    PanelButtons
  },
  methods: {
    ...mapMutations([
      'defineNextFloor'
    ]),
    log (btn) {
      console.log(btn)
      this.defineNextFloor(btn)
    }
  }
}
</script>
