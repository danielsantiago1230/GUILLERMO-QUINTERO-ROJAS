<template>
  <div>
    <TopNav />
    <Nuxt />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'DefaultVue',
  components: { TopNav }
}
</script>

<style lang="scss" scoped>

</style>
