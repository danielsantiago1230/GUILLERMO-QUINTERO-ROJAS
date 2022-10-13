<template>
  <div class="absolute justify-center h-full w-full" :class="redMore ? 'flex' : 'hidden'">
    <div class="absolute h-full w-full flex flex-col items-center text-justify bg-gray-bg z-10 opacity-70" />
    <div class="absolute lg:w-4/6 w-5/6  overflow-y-auto h-full flex flex-col items-center lg:text-justify bg-white z-20">
      <div class=" h-auto w-auto absolute right-10 md:right-20 z-30">
        <button class="hidden lg:flex fixed my-4 font-montserrat rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg md:text-base xl:text-lg text-xs" @click="handleRedMore">
          {{ $t("ModalBiography.close") }}
        </button>
        <button class="lg:hidden flex items-center fixed my-4 font-montserrat rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg md:text-base xl:text-lg text-xs" @click="handleRedMore">
          X
        </button>
      </div>
      <h1 class="w-4/6 lg:w-auto font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark mt-12 xl:mt-16">
        GUILLERMO QUINTERO ROJAS
      </h1>
      <p class="w-4/6 text-brown-soft text-justify my-6 font-grotesk text-sm md:text-lg font-normal">
        {{ $t("index.biographyContent") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBiography',
  props: {
    redMore: Boolean
  },
  data () {
    return {
      burguer: false
    }
  },
  methods: {
    handleRedMore () {
      this.$emit('handle-red-more', false)
    }
  }
}
</script>
