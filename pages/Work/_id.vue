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
          subTitle: 'Material: Mineral Lime, Soil, Manure',
          content: 'A concern arising from the curious and detailed observation of traces and footprints. The face of time revealing its secrets through thick and fragmented layers of limestone paint. Color zones that reflect the diversity of the collective spirit of a region with its own characteristics. There, a segment made up of a series of volumetric modules is present in which its construction and design reflect the abstraction of an architecture based on the interception or intersection of the spaces of the house and the street. In a certain way we could be witnessing the visual, imaginary and sensitive exploration of a set of elements that place us in a particular sector of life, existing within the city, which can be that hidden city, or suddenly unnoticed.'
        },
        'rio-de-oro': {
          title: 'RÍO DE ORO',
          subTitle: 'Material: Earth,Glass ,Audios',
          content: '"RIO DE ORO" It is a work that can be considered in its appreciation as the result of a procedure aimed at building an action based on the use of resources arranged by the appropriation systems with states, spaces and elements of nature belonging to a geography and particular ways of life. "Inside the room, outside in the park, this complex work is associated with an awareness of the land and the territory, with a rediscovery of its sounds, its signs, its vital signs. At the same time it is related to an urban and creating a tension between the work of nature and the work of man".'
        },
        madreselva: {
          title: 'MADRESELVA',
          subTitle: 'Material: Wood, Charcoal, Concrete',
          content: 'It is a work that, due to its area, form, technique, materials and especially for its exploratory awareness, transcends the limits of traditional museum spaces, managing to advance towards a strategic location in public space. It contains the essential elements of denunciation and a critical spirit, proposing in its passing the renewal and multiplication of its own spectator. MADRESELVA , from its pre-intentional metaphorical communication, alludes to the landscape and an atmosphere of chaos and self-destruction, originating in the exorbitant and uncontrollable urban centers. Characterized by its three-dimensionality and notable sculptural presence, it reiterates the fundamental commitment to respect nature, presenting an interrogative image of the deplorable behavior of the human race.'
        }
      },
      index: ''
    }
  },
  head () {
    return {
      title: `${this.id[this.index] !== undefined ? this.id[this.index].title : 'NOT FOUND 404'} | Work`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `page about the details of the artistic work of Guillermo Quintero Rojas in ${this.id[this.index] !== undefined ? this.id[this.index].title : 'NOT FOUND 404'}`
        }
      ]
    }
  },
  created () {
    this.index = `${this.$route.params.id}`
  }
}
</script>
