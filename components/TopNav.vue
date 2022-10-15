<template>
  <header class="bg-white absolute flex justify-center h-20 xl:24 w-full">
    <nav class="h-full w-5/6 flex flex-row items-center">
      <button @click="burguer ? burguer = false : burguer = true">
        <img src="../public/2.png" alt="menu-burguer" class="w-7 lg:w-12">
      </button>
      <ul class="fex-row mx-1 md:mx-12 xl:mx-14 text-brown-dark" :class="burguer ? 'hidden' : 'flex'">
        <button @click="() => $router.push(english !== '' ? english : '/')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14" :class="$i18n.locale === 'en' ? 'mr-7' :'mr-2'">
            {{ $t("TopNav.home") }}
          </li>
        </button>
        <button @click="() => $router.push(english !== '' ? english + '/work' : '/work')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14" :class="$i18n.locale === 'en' ? 'mr-7' :'mr-2'">
            {{ $t("TopNav.work") }}
          </li>
        </button>
        <button @click="() => $router.push(english !== '' ? english + '/contact' : '/contact')">
          <li class="font-montserrat font-extrabold text-xs md:text-base lg:text-xl md:mr-12 xl:mr-14">
            {{ $t("TopNav.contact") }}
          </li>
        </button>
      </ul>
      <div class="absolute flex flex-col items-center right-7 text-brown-button font-bold text-xs xl:text-sm">
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
        <button v-if="!$cookies.get('access_token')" class="hover:text-gray-bg" @click="() => $router.push(english !== '' ? english + '/login' : '/login')">
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
  data () {
    return {
      burguer: false,
      fullPath: '',
      english: ''
    }
  },
  methods: {
    handleLanguage (value) {
      if (value) {
        this.english = ''
        if (this.$route.fullPath.includes('/es')) {
          this.fullPath = this.$route.fullPath.slice(3)
          this.$router.push(this.fullPath)
        } else {
          this.fullPath = this.$route.fullPath
          this.$router.push(this.fullPath)
        }
      } else if (!value) {
        this.english = '/es'
        if (this.$route.fullPath.includes('/es')) {
          this.fullPath = this.$route.fullPath
          this.$router.push(this.fullPath)
        } else {
          this.fullPath = '/es' + this.$route.fullPath
          this.$router.push(this.fullPath)
        }
      }
    },
    async logout () {
      await auth.signOut()
      await Cookie.remove('access_token')
      this.$router.push('/')
    }
  }
}
</script>
