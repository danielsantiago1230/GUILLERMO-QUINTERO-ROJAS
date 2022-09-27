<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav :english="english" @handle-language="handleLanguage" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-col items-center">
        <img src="../public/warning.png" alt="warning" class="w-24 mt-6">
        <h1 class="font-grotesk font-extrabold text-base lg:text-3xl xl:text-4xl text-brown-dark">
          {{ message.toUpperCase() === 'THIS PAGE COULD NOT BE FOUND' ? english ? 'THIS PAGE COULD NOT BE FOUND' : 'PAGINA NO ENCONTRADA' : message.toUpperCase() }}
        </h1>
        <button class="font-montserrat mt-4 py-1 md:text-base xl:text-lg text-xs rounded-lg px-2 h-auto w-auto drop-shadow-md text-brown-button bg-gray-bg" @click="() => $router.push('/')">
          {{ english ? 'GO BACK' : 'REGRESAR' }}
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'ErrorPage',
  components: { TopNav },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      english: true
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error'
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
