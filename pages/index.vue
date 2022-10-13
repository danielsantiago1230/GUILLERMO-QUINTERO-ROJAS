<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <ModalBiography :red-more="redMore" @handle-red-more="handleRedMore" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <div class="hidden lg:flex w-1/2 h-full bg-bulding-left bg-cover bg-center" />
        <div class="lg:w-1/2 w-full h-full flex flex-col items-start p-10 lg:p-0 lg:px-4 xl:px-8 ">
          <h1 class="font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark lg:mt-12 xl:mt-16">
            GUILLERMO <br>QUINTERO ROJAS
          </h1>
          <div class="">
            <h2 class="font-grotesk font-bold text-base lg:text-xl xl:text-2xl text-brown-soft mt-5 xl:mt-7">
              {{ $t("index.biography") }}
            </h2>
          </div>
          <div class="text-justify w-full h-full text-ellipsis overflow-hidden">
            <p class="text-brown-soft font-grotesk text-lg font-normal">
              {{ $t("index.biographyContent") }}
            </p>
          </div>
          <div class="h-12 w-auto my-4 flex items-center">
            <button class="font-montserrat md:text-base xl:text-lg text-xs rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg" @click="handleRedMore(true)">
              {{ $t("index.redmore") }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ModalBiography from '~/components/ModalBiography.vue'
export default {
  name: 'IndexPage',
  components: { ModalBiography },
  data () {
    return {
      redMore: false
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
    handleRedMore (value) {
      this.redMore = value
    }
  }
}
</script>
