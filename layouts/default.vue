<template>
  <div>
    <TopNav :english="english" @handle-language="handleLanguage" />
    <Nuxt :nuxt-child-key="englishkey" />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'DefaultVue',
  components: { TopNav },
  data () {
    return {
      english: true,
      englishkey: 'enlish'
    }
  },
  beforeMount () {
    if (sessionStorage.getItem('english')) {
      this.english = JSON.parse(sessionStorage.getItem('english'))
    } else {
      sessionStorage.english = JSON.stringify(this.english)
    }
  },
  methods: {
    handleLanguage (value) {
      if (value) {
        this.englishkey = 'enlish'
      } else {
        this.englishkey = 'spanish'
      }
      this.english = value
      sessionStorage.english = JSON.stringify(this.english)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
