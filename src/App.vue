<template>
  <div id="app">
    <Building />
    <ControlPanel />
  </div>
</template>

<script>
import Building from '@/components/building/Building.vue'
import ControlPanel from '@/components/control-panel/ControlPanel.vue'
export default {
  name: 'App',
  components: {
    Building,
    ControlPanel
  }
}
</script>
