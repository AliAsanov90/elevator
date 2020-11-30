<template>
  <div id="app">
    <Building />
    <ControlPanel />
  </div>
</template>

<script>
import Building from '@/components/Building.vue'
import ControlPanel from '@/components/ControlPanel.vue'
export default {
  name: 'App',
  components: {
    Building,
    ControlPanel
  }
}
</script>
