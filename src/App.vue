<template>
  <div id="app">
    <lift></lift>
    <router-view></router-view>
  </div>
</template>
<script>
import lift from './components/lift.vue'
export default {
  name: 'app',
  components: {
    lift
  }
}
</script>
<style></style>
