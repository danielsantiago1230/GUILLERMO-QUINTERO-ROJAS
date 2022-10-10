<template>
  <header class="bg-white absolute flex justify-center h-20 xl:24 w-full">
    <nav class="h-full w-5/6 flex flex-row items-center">
      <button @click="burguer ? burguer = false : burguer = true">
        <img src="../public/2.png" alt="menu-burguer" class="w-7 lg:w-12">
      </button>
      <ul class="fex-row mx-1 md:mx-12 xl:mx-14 text-brown-dark" :class="burguer ? 'hidden' : 'flex'">
        <button @click="() => $router.push('/')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14" :class="english ? 'mr-7' :'mr-2'">
            {{ $t("TopNav.home") }}
          </li>
        </button>
        <button @click="() => $router.push('/work')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14" :class="english ? 'mr-7' :'mr-2'">
            {{ $t("TopNav.work") }}
          </li>
        </button>
        <button @click="() => $router.push('/contact')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14">
            {{ $t("TopNav.contact") }}
          </li>
        </button>
      </ul>
      <div :key="render" class="absolute flex flex-col items-center right-7 text-brown-button font-bold text-xs xl:text-sm">
        <div>
          <button class="hover:text-gray-bg" :class="$i18n.locale === 'en' ? 'underline decoration-1' : ''" @click="handleLanguage(true)">
            EN
          </button>
          <span>/</span>
          <button class="hover:text-gray-bg" :class="$i18n.locale === 'es' ? 'underline decoration-1' : ''" @click="handleLanguage(false)">
            ES
          </button>
        </div>
        <button v-if="$cookies.get('access_token')" class="hover:text-gray-bg" @click="logout">
          {{ $t("TopNav.logout") }}
        </button>
        <button v-if="!$cookies.get('access_token')" class="hover:text-gray-bg" @click="() => $router.push('/login')">
          {{ $t("TopNav.login") }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import Cookie from 'js-cookie'
import { auth } from '~/services/firebase'
export default {
  name: 'TopNav',
  props: {
    english: Boolean
  },
  data () {
    return {
      burguer: false,
      render: false
    }
  },
  methods: {
    handleLanguage (value) {
      if (value) {
        this.$router.push('/')
      } else {
        this.$router.push('/es')
      }
      this.$emit('handle-language', value)
    },
    async logout () {
      await auth.signOut()
      await Cookie.remove('access_token')
      this.$router.push('/')
      this.render = true
    }
  }
}
</script>
