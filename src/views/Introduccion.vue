<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-0
      img(src='@/assets/curso/intro-imagen1.png')
    
    p.px-5.py-5.text-pr Conocer la caracterización de la formación virtual en el SENA le permitirá a usted como aprendiz hacer uso de los recursos dispuestos para su formación, comprender el compromiso que ha adquirido para su proceso formativo y explorar las diferentes oportunidades de formación que le brinda el SENA, además de las oportunidades de inserción al mercado laboral colombiano. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
