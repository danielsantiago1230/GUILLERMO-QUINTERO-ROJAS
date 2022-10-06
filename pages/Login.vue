<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <!--title login-->
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {{ english ? 'Sign in to your account' : 'Inicia sesión con tú cuenta' }}
          </h2>
        </div>
        <!--form login-->
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST" @submit.prevent="login" @submit.enter="login">
              <!--input email-->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  {{ english ? 'Email address' : 'Dirección de correo' }}
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="account.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required="required"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>
              <!--input password-->
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                  {{ english ? 'Password' : 'Contraseña' }}
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    v-model="account.password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required="required"
                    class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                </div>
              </div>
              <!--submit-->
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-brown-button bg-gray-bg hover:bg-brown-soft hover:text-gray-bg">
                  {{ english ? 'Sign in' : 'Iniciar sesión' }}
                </button>
              </div>
            </form>
            <div v-if="isError" class="mt-4 text-red-500">
              {{ errMsg === 'auth/wrong-password' ? english ? 'wrong password' : 'Clave incorrecta' : errMsg.slice(5) }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LoginVue',
  // components: { TopNav },
  data () {
    return {
      english: true,
      account: {
        email: '',
        password: ''
      },
      isError: false,
      errMsg: ''
    }
  },
  head () {
    return {
      title: 'Guillermo Quintero Rojas | Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sign in page for Guillermo Quintero Rojas'
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
    login (e) {
      e.preventDefault()
      this.$store
        .dispatch('users/login', this.account)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch((error) => {
          this.isError = true
          this.errMsg = error.code
          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    }
  }
}
</script>
