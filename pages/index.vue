<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav :english="english" @handle-language="handleLanguage" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <div class="hidden lg:flex w-1/2 h-full bg-bulding-left bg-cover bg-center" />
        <div class="lg:w-1/2 w-full h-full flex flex-col items-start p-10 lg:p-0 lg:pl-8 xl:pl-10">
          <h1 class="font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark lg:mt-12 xl:mt-16">
            GUILLERMO <br>QUINTERO ROJAS
          </h1>
          <div>
            <h2 class="font-grotesk font-bold text-base lg:text-xl xl:text-2xl text-brown-soft mt-5 xl:mt-7">
              {{ english ? 'BIOGRAPHY' : 'BIOGRAFÍA' }}
            </h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'IndexPage',
  components: { TopNav },
  data () {
    return {
      english: true
    }
  },
  head () {
    return {
      title: 'Guillermo Quintero Rojas | Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Website about Colombian contemporary artist'
        }
      ]
    }
  },
  methods: {
    handleLanguage (value) {
      this.english = value
    }
  }
}
</script>
