<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
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
export default {
  name: 'WorkGuillermo',
  // components: { TopNav }
  data () {
    return {

    }
  },
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
  // methods: {
  //   handleLanguage (value) {
  //     this.english = value
  //     sessionStorage.english = JSON.stringify(this.english)
  //   }
  // }
}
</script>
