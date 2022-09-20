<template>
  <header class="bg-white absolute flex justify-center h-20 xl:24 w-full">
    <nav class="h-full w-5/6 flex flex-row items-center">
      <button @click="burguer ? burguer = false : burguer = true">
        <img src="../public/2.png" alt="menu-burguer" class="w-7 lg:w-12">
      </button>
      <ul class="fex-row mx-7 lg:mx-12 xl:mx-14 text-brown-dark" :class="burguer ? 'hidden' : 'flex'">
        <li class="font-montserrat font-extrabold text-sm lg:text-xl mr-7 lg:mr-12 xl:mr-14">
          {{ english ? 'WORK' :'TRABAJOS' }}
        </li>
        <li class="font-montserrat font-extrabold text-sm lg:text-xl lg:mr-12 xl:mr-14">
          {{ english ? 'CONTACT' :'CONTACTO' }}
        </li>
      </ul>
      <div class="absolute flex item right-7 text-brown-button font-bold text-xs xl:text-sm">
        <button class="hover:text-gray-bg" :class="english ? 'underline decoration-1' : ''" @click="handleLanguage(true)">
          EN
        </button>
        <span>/</span>
        <button class="hover:text-gray-bg" :class="!english ? 'underline decoration-1' : ''" @click="handleLanguage(false)">
          ES
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    english: Boolean
  },
  data () {
    return {
      burguer: false
    }
  },
  methods: {
    handleLanguage (value) {
      this.$emit('handle-language', value)
    }
  }
}
</script>
