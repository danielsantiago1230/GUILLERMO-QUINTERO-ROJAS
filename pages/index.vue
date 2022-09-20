<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <div class="w-1/2 h-full bg-bulding-left bg-cover bg-center" />
        <div class="w-1/2 h-full">
          <h1 class="font-grotesk font-extrabold lg:text-3xl xl:text-4xl">
            GUILLERMO QUINTERO ROJAS
          </h1>
          <div>
            <h2>{{ login ? 'BIOGRAPHY' : 'BIOGRAFÍA' }}</h2>
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
      login: true
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
  }
}
</script>
