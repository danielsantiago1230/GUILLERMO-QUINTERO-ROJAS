<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav :english="english" @handle-language="handleLanguage" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 flex flex-col items-center lg:justify-between" :class="id[index] === undefined ? 'bg-error-page bg-cover' : 'bg-white'">
        <img src="../../public/warning.png" alt="warning" class="w-24 mt-6" :class="id[index] === undefined ? 'flex' : 'hidden'">
        <h1 class="font-grotesk font-extrabold text-base lg:text-3xl xl:text-4xl text-brown-soft" :class="id[index] === undefined ? '' : 'mt-4'">
          {{ id[index] !== undefined ? `${id[index].title}` : english ? 'THIS PAGE COULD NOT BE FOUND' : 'PAGINA NO ENCONTRADA' }}
        </h1>
        <button class="font-montserrat mt-4 py-1 md:text-base xl:text-lg text-xs rounded-lg px-2 h-auto w-auto drop-shadow-md text-brown-button bg-gray-bg" :class="id[index] !== undefined ? 'hidden': 'flex'" @click="() => $router.push('/work')">
          {{ english ? 'GO BACK' : 'REGRESAR' }}
        </button>
        <div class="w-full h-5/6 flex-col lg:flex-row items-center justify-center" :class="id[index] === undefined ? 'hidden' : 'flex'">
          <div class="w-5/6 lg:w-1/2 h-1/2 lg:h-full mb-6">
            <div class="w-full h-1/2 bg-cover bg-center" :style="id[index] !== undefined ? { 'background-image': 'url(' + require(`../../public/work/${id[index].images[0]}`) + ')'} : ''" />
            <div class="w-full h-1/2 flex flex-row justify-start items-center">
              <div class="w-1/2 h-full bg-cover bg-center" :style="id[index] !== undefined ? { 'background-image': 'url(' + require(`../../public/work/${id[index].images[1]}`) + ')'} : ''" />
              <div class="w-1/2 h-full bg-cover bg-center" :style="id[index] !== undefined ? { 'background-image': 'url(' + require(`../../public/work/${id[index].images[2]}`) + ')'} : ''" />
            </div>
          </div>
          <div class="w-5/6 lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center justify-around lg:mx-6 xl:mx-8">
            <h2 class="font-grotesk font-extrabold text-sm lg:text-xl xl:text-2xl text-brown-soft mb-4 lg:mb-0" :class="id[index] === undefined ? 'hidden' : 'flex'">
              {{ id[index] !== undefined ? english ? id[index].subTitle[0] : id[index].subTitle[1] : '' }}
            </h2>
            <div class="w-full px-2 lg:px-1 overflow-y-auto ">
              <p class="text-justify text-sm md:text-base xl:text-lg text-brown-soft">
                {{ id[index] !== undefined ? english ? id[index].content[0] : id[index].content[1]: '' }}
              </p>
            </div>
          </div>
        </div>
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
        calerias: {
          title: 'CALERIAS',
          subTitle: ['Material: Mineral Lime, Soil, Manure', 'Material: Cal mineral, Tierra, Estiercol'],
          content: ['A concern arising from the curious and detailed observation of traces and footprints. The face of time revealing its secrets through thick and fragmented layers of limestone paint. Color zones that reflect the diversity of the collective spirit of a region with its own characteristics. There, a segment made up of a series of volumetric modules is present in which its construction and design reflect the abstraction of an architecture based on the interception or intersection of the spaces of the house and the street. In a certain way we could be witnessing the visual, imaginary and sensitive exploration of a set of elements that place us in a particular sector of life, existing within the city, which can be that hidden city, or suddenly unnoticed.', 'Una inquietud surgida a partir de la curiosa y detallada observación de rastros y huellas. La cara del tiempo desvelándonos sus secretos por medio de espesas y fragmentadas capas de pintura caliza. Unas zonas de color en las que se refleja la diversidad del espíritu colectivo de una región con características propias. Allí hace presencia un segmento compuesto por una serie de módulos volumétricos  en los que su construcción y diseño recogen la abstracción de una arquitectura fundamentada en la intercepción o el cruce de los espacios de la casa y la calle. De cierta manera podríamos estar asistiendo a la exploración visual, imaginaria y sensible, de un conjunto de elementos que nos ubican en un particular sector de vida, existente dentro de la ciudad, que puede ser aquella ciudad oculta, o de pronto desapercibida.'],
          images: ['galerias-1.jpg', 'galerias-2.jpg', 'galerias-3.jpg']
        },
        'rio-de-oro': {
          title: 'RÍO DE ORO',
          subTitle: ['Material: Earth, Glass , Audios', 'Material: Tierra, Vidrio , Audios'],
          content: ['"RIO DE ORO" It is a work that can be considered in its appreciation as the result of a procedure aimed at building an action based on the use of resources arranged by the appropriation systems with states, spaces and elements of nature belonging to a geography and particular ways of life. "Inside the room, outside in the park, this complex work is associated with an awareness of the land and the territory, with a rediscovery of its sounds, its signs, its vital signs. At the same time it is related to an urban and creating a tension between the work of nature and the work of man".', '"RIO DE ORO” Es una obra que puede considerarse en su apreciación como el resultado de un procedimiento dirigido a construir una acción basada en el uso de los recursos dispuestos por los sistemas de apropiación con estados, espacios y elementos de la naturaleza pertenecientes a una geografía y a unos particulares modos de vida. "Adentro en la sala, afuera en el parque, esta compleja obra se asocia a una conciencia de la tierra y el territorio, a un redescubrimiento de sus sonidos, sus señales, sus signos vitales. Al mismo tiempo se relaciona con una arqueología urbana e industrial creando una  tensión entre el trabajo de la naturaleza y el trabajo del hombre".'],
          images: ['rio-oro-1.jpg', 'rio-oro-2.jpg', 'rio-oro-3.jpg']
        },
        madreselva: {
          title: 'MADRESELVA',
          subTitle: ['Material: Wood, Charcoal, Concrete', 'Material: Madera , Carbón Vegetal , Hormigón'],
          content: ['It is a work that, due to its area, form, technique, materials and especially for its exploratory awareness, transcends the limits of traditional museum spaces, managing to advance towards a strategic location in public space. It contains the essential elements of denunciation and a critical spirit, proposing in its passing the renewal and multiplication of its own spectator. MADRESELVA , from its pre-intentional metaphorical communication, alludes to the landscape and an atmosphere of chaos and self-destruction, originating in the exorbitant and uncontrollable urban centers. Characterized by its three-dimensionality and notable sculptural presence, it reiterates the fundamental commitment to respect nature, presenting an interrogative image of the deplorable behavior of the human race.', 'Es una obra que por su área, forma, técnica, materiales y en especial por su sensibilización exploratoria, trasciende los límites de los espacios museales tradicionales, consiguiendo avanzar hacia una ubicación estratégica en el espacio público. Conlleva los elementos esenciales de la denuncia y el espíritu crítico, va planteando en su transcurrir la renovación y multiplicación de su propio público espectador. MADRESELVA, desde su pre-intencional comunicación metafórica, alude al paisaje ya una atmósfera de caos y autodestrucción, originada en los desorbitados e incontrolables centros urbanos. Caracterizada por la tridimensionalidad y notable presencia escultórica, reitera el primordial compromiso de respeto por la naturaleza, colocando de presente una interrogativa imagen de los deplorables comportamientos del género humano.'],
          images: ['madreselva-1.jpg', 'madreselva-2.jpg', 'madreselva-3.jpg']
        }
      },
      index: '',
      english: true
    }
  },
  head () {
    return {
      title: `${this.id[this.index] !== undefined ? this.id[this.index].title + 'a work from Guillermo Quintero Rojas' : 'NOT FOUND 404'}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.id[this.index] !== undefined ? 'Guillermo Quintero Rojas Work in ' + this.id[this.index].title : 'NOT FOUND 404'}`
        }
      ]
    }
  },
  created () {
    this.index = `${this.$route.params.id}`
  },
  beforeMount () {
    if (sessionStorage.getItem('english')) {
      this.english = JSON.parse(sessionStorage.getItem('english'))
    } else {
      sessionStorage.english = JSON.stringify(this.english)
    }
  },
  methods: {
    handleLanguage (value) {
      this.english = value
      sessionStorage.english = JSON.stringify(this.english)
    }
  }
}
</script>
