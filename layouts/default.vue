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
  components: { TopNav },
  data () {
    return {
      render: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
