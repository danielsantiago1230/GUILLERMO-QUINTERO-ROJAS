<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-col items-center justify-start">
        <h1 class="font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark lg:mt-12 xl:mt-16">
          Admin
        </h1>
        <p>{{ text }}</p>
        <button @click="handleData">click me</button>
        <button @click="writeToFirestore">Write something</button>
      </div>
    </main>
  </div>
</template>

<script>
import data from '../../lang/en.json'
import { db } from '~/services/firebase'

export default {
  name: 'AdminVue',
  data () {
    return {
      Data: data,
      text: ''
    }
  },
  methods: {
    async handleData () {
      // this.Data.admin = 'admin'
      // console.log(JSON.stringify(this.Data))
      const ref = db.collection('english').doc('english')
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        console.error(e)
      }
      this.text = snap.data()
    },
    async writeToFirestore () {
      const ref = db.collection('english').doc('english')
      this.text.goodbye = 'chao chao'
      try {
        await ref.set(this.text)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
