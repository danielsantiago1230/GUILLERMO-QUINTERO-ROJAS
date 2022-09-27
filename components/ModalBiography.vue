<template>
  <div class="absolute justify-center h-full w-full" :class="redMore ? 'flex' : 'hidden'">
    <div class="absolute h-full w-full flex flex-col items-center text-justify bg-gray-bg z-10 opacity-70" />
    <div class="absolute lg:w-4/6 w-5/6  overflow-y-auto h-full flex flex-col items-center lg:text-justify bg-white z-20">
      <div class=" h-auto w-auto absolute right-10 md:right-20 z-30">
        <button class="hidden lg:flex fixed my-4 font-montserrat rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg md:text-base xl:text-lg text-xs" @click="handleRedMore">
          {{ english ? 'Close' : 'Cerrar' }}
        </button>
        <button class="lg:hidden flex items-center fixed my-4 font-montserrat rounded-lg px-2 h-8 w-auto drop-shadow-md text-brown-button bg-gray-bg md:text-base xl:text-lg text-xs" @click="handleRedMore">
          {{ english ? 'X' : 'X' }}
        </button>
      </div>
      <h1 class="w-4/6 lg:w-auto font-grotesk font-extrabold text-xl lg:text-3xl xl:text-4xl text-brown-dark mt-12 xl:mt-16">
        GUILLERMO QUINTERO ROJAS
      </h1>
      <p class="w-4/6 text-brown-soft text-justify mt-6 font-grotesk text-sm md:text-lg font-normal">
        {{ english ? `Visual artist with notable dedication to contemporary sculptural practice. From the initial stage of her professional career and artistic trajectory, which began at the end of the 20th century, she excelled in individual and collective exhibitions. During the course of the 90's, she develops in her country of origin an intense national connection in salons and biennials of Colombian artists, contests in which she obtains prizes and mentions. In the same period, coinciding in turn with the end of the 20th century, at the international level it took part in the II Biennial of Colombo-Venezuelan Art in the city of Mérida, Venezuela, II Biennial of Visual Arts of MERCOSUR, Porto Alegre, Brazil, Third Biennial Iberoamericana of Lima Peru and the Eighth Biennial of International Art of Havana Cuba. In 2010 she joined the group of artists selected by the Artistic Residencies program for Creators of Ibero-America in Mexico. Her sculptural work is part of the Diego Rivera Museum collection Currently, his active presence in the following events and projects stands out, developed in the public and urban space: Installation of the sculpture "Sietenario" at the Universidad Industrial de Santander, he participates in the project "Espacios Revelados - Bucaramanga 2018". He creates and designs the urban art project, “Barrio Museo San Miguel” in Bucaramanga, Colombia.` : `Artista visual con notable dedicación a la práctica escultórica contemporánea. Desde la etapa inicial de su carrera profesional y trayectoria artística, iniciada a finales del siglo XX, sobresale en la realización de exposiciones individuales y colectivas. Durante el transcurso de los años 90, desarrolla en el país de origen una intensa vinculación nacional en los salones y bienales de artistas colombianos, certámenes en los que obtiene premios y menciones. En el mismo periodo, coincidiendo a su vez con la finalización del siglo XX, a nivel internacional toma participación en la II Bienal de Arte Colombo Venezolana en la ciudad de Mérida Venezuela, II Bienal de Artes Visuales del MERCOSUR, Porto Alegre Brasil, Tercera Bienal Iberoamericana de Lima Perú y la Octava Bienal de Arte Internacional de La Habana Cuba. En el 2010 integró el grupo de artistas seleccionados por el programa de Residencias Artísticas para Creadores de Iberoamérica en México. Su obra escultórica hace parte de la colección del Museo Diego Rivera.En la actualidad se destaca su activa presencia en los siguientes eventos y proyectos, desarrollados en el espacio público y urbano: Instalación de la escultura “Sietenario” en la Universidad Industrial de Santander, interviene en el proyecto “Espacios Revelados - Bucaramanga 2018”. Crea y diseña el proyecto de arte urbano, “Barrio Museo San Miguel” de Bucaramanga, Colombia.` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBiography',
  props: {
    english: Boolean,
    redMore: Boolean
  },
  data () {
    return {
      burguer: false
    }
  },
  methods: {
    handleRedMore () {
      this.$emit('handle-red-more', false)
    }
  }
}
</script>
