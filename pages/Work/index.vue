<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <div class="w-1/2 h-full bg-bulding-left bg-cover bg-center" />
        <div class="w-1/2 h-full">
          <h1>GUILLERMO QUINTERO ROJAS</h1>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  name: 'WorkGuillermo',
  components: { TopNav },
  head () {
    return {
      title: 'Work | Guillermo Quintero Rojas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'page about the paintings, sculptures, art of the Colombian contemporary artist Guillermo Quintero Rojas'
        }
      ]
    }
  }
}
</script>
