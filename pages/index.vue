<template>
  <div class="bg-bulding-art bg-cover bg-center h-screen w-full">
    <TopNav :english="english" @handle-language="handleLanguage" />
    <ModalBiography :english="english" :red-more="redMore" @handle-red-more="handleRedMore" />
    <main class="h-full w-full bg-gray-bg bg-opacity-70 flex justify-center items-end">
      <div class="h-5/6 w-5/6 bg-white flex flex-row">
        <div class="hidden lg:flex w-1/2 h-full bg-bulding-left bg-cover bg-center" />
        <div class="lg:w-1/2 w-full h-full flex flex-col items-start p-10 lg:p-0 lg:px-4 xl:px-8 ">
          <h1 class="font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark lg:mt-12 xl:mt-16">
            GUILLERMO <br>QUINTERO ROJAS
          </h1>
          <div class="">
            <h2 class="font-grotesk font-bold text-base lg:text-xl xl:text-2xl text-brown-soft mt-5 xl:mt-7">
              {{ english ? 'BIOGRAPHY' : 'BIOGRAFÍA' }}
            </h2>
          </div>
          <div class="text-justify w-full h-full text-ellipsis overflow-hidden">
            <p class="text-brown-soft font-grotesk text-lg font-normal">
              {{ english ? `Visual artist with notable dedication to contemporary sculptural practice. From the initial stage of her professional career and artistic trajectory, which began at the end of the 20th century, she excelled in individual and collective exhibitions. During the course of the 90's, she develops in her country of origin an intense national connection in salons and biennials of Colombian artists, contests in which she obtains prizes and mentions. In the same period, coinciding in turn with the end of the 20th century, at the international level it took part in the II Biennial of Colombo-Venezuelan Art in the city of Mérida, Venezuela, II Biennial of Visual Arts of MERCOSUR, Porto Alegre, Brazil, Third Biennial Iberoamericana of Lima Peru and the Eighth Biennial of International Art of Havana Cuba. In 2010 she joined the group of artists selected by the Artistic Residencies program for Creators of Ibero-America in Mexico. Her sculptural work is part of the Diego Rivera Museum collection Currently, his active presence in the following events and projects stands out, developed in the public and urban space: Installation of the sculpture "Sietenario" at the Universidad Industrial de Santander, he participates in the project "Espacios Revelados - Bucaramanga 2018". He creates and designs the urban art project, “Barrio Museo San Miguel” in Bucaramanga, Colombia.` : `Artista visual con notable dedicación a la práctica escultórica contemporánea. Desde la etapa inicial de su carrera profesional y trayectoria artística, iniciada a finales del siglo XX, sobresale en la realización de exposiciones individuales y colectivas. Durante el transcurso de los años 90, desarrolla en el país de origen una intensa vinculación nacional en los salones y bienales de artistas colombianos, certámenes en los que obtiene premios y menciones. En el mismo periodo, coincidiendo a su vez con la finalización del siglo XX, a nivel internacional toma participación en la II Bienal de Arte Colombo Venezolana en la ciudad de Mérida Venezuela, II Bienal de Artes Visuales del MERCOSUR, Porto Alegre Brasil, Tercera Bienal Iberoamericana de Lima Perú y la Octava Bienal de Arte Internacional de La Habana Cuba. En el 2010 integró el grupo de artistas seleccionados por el programa de Residencias Artísticas para Creadores de Iberoamérica en México. Su obra escultórica hace parte de la colección del Museo Diego Rivera.En la actualidad se destaca su activa presencia en los siguientes eventos y proyectos, desarrollados en el espacio público y urbano: Instalación de la escultura “Sietenario” en la Universidad Industrial de Santander, interviene en el proyecto “Espacios Revelados - Bucaramanga 2018”. Crea y diseña el proyecto de arte urbano, “Barrio Museo San Miguel” de Bucaramanga, Colombia.` }}
            </p>
          </div>
          <div class="h-12 w-auto my-4 flex items-center">
            <button class="font-montserrat md:text-base xl:text-lg text-xs rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg" @click="handleRedMore(true)">
              {{ english ? 'Read More' : 'Ver más' }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
import ModalBiography from '~/components/ModalBiography.vue'
export default {
  name: 'IndexPage',
  components: { TopNav, ModalBiography },
  data () {
    return {
      english: true,
      redMore: false
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
    },
    handleRedMore (value) {
      this.redMore = value
    }
  }
}
</script>
