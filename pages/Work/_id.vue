<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <h1>{{ id[index] !== undefined ? `${id[index].title}` : 'NOT FOUND 404' }}</h1>
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
      id: {
        galerias: {
          title: 'GALERIAS',
          content: 'asdfasdfasdfasd'
        },
        'rio-de-oro': {
          title: 'RÍO DE ORO',
          content: 'asdfasdfasdfasd'
        },
        madreselva: {
          title: 'MADRESELVA',
          content: 'asdfasdfasdfasd'

        }
      },
      index: ''
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
  },
  created () {
    this.index = `${this.$route.params.id}`
  }
}
</script>
