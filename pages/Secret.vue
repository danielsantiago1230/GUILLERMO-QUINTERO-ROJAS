<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav :english="english" @handle-language="handleLanguage" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'SecretVue',
  components: { TopNav },
  data () {
    return {
      english: true
    }
  },
  head () {
    return {
      title: 'Guillermo Quintero Rojas | Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login page for Guillermo Quintero Rojas'
        }
      ]
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
      this.english = value
      sessionStorage.english = JSON.stringify(this.english)
    }
  }
}
</script>
