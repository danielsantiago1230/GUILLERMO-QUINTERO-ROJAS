<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <h1>Detalle de la obra</h1>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'DetailsWork',
  components: { TopNav },
  data () {
    return {
      id: 'ejemplo id'
    }
  },
  head () {
    return {
      title: 'Work | Ejemplo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'page about the details of the artistic work of Guillermo Quintero Rojas'
        }
      ]
    }
  }
}
</script>
