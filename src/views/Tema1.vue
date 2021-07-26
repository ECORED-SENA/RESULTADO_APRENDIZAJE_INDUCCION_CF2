<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La formación virtual en el SENA

    .bloque-texto-a.color-secundario.p-4.mb-5(data-aos="slide-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El SENA desde su oferta académica busca facilitar el acceso a la formación en diversos ambientes y modalidades.  En relación con los ambientes de formación, el Aprendiz según sus necesidades, podrá elegir programas presenciales, virtuales o combinados.  Asimismo, cuenta las modalidades de formación complementaria y titulada.  
              br
              br
              | En los programas de formación titulada, encontramos planes técnicos, tecnológicos y especializaciones tecnológicas.   
        .col-lg-4.mb-4.mb-lg-0


    #t_1_1.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.1  Definición
    
    .row.justify-content-between.align-items-center(data-aos="fade" data-aos-duration="900")
      .col-4.d-flex
        img(src='@/assets/curso/tema1-imagen2.png')
      .col-7.d-flex
        p.mb-0 La formación profesional Integral se centra en generar competencias que le permitan al egresado integrar tecnologías, plantear y solucionar creativamente problemas para lograr eficacia en el saber hacer, además brindarle movilidad en la estructura ocupacional.
          br
          br
          | En este orden de ideas, las competencias se desarrollan de manera permanente en el proceso formativo, su punto de partida lo constituye el proyecto de vida personal del Aprendiz, estas se contextualizan en el marco de un Programa de Formación y se evidencian en los entornos sociales y productivos en el cual el Aprendiz interviene mediante sus desempeños.
    
    Separador
    
    #t_1_2.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.2  Características

    p.mb-5(data-aos="fade" data-aos-duration="900") La educación virtual hace referencia a los procesos de enseñanza-aprendizaje-evaluación que se llevan a cabo a partir de la interacción de sus actores en un ambiente mediado por las tecnologías de la información y comunicación -TIC.  
      br
      br
      | En este sentido, el SENA desde su oferta de formación virtual posibilita a los aprendices la interacción en un ambiente de aprendizaje en donde contarán con el acompañamiento y orientación de sus instructores, así como también, la opción de ajustar sus horarios de estudio según convenga a sus necesidades y acorde con el cronograma de trabajo propuesto. 
      br
      br
      strong A continuación, se destacan las principales características de esta modalidad:

    .row.justify-content-center
      .col-11
        .row.align-items-center.justify-content-between
          .col-4(data-aos="slide-right" data-aos-duration="900")
            img(src='@/assets/curso/tema1-imagen3.svg')
          .col-7(data-aos="slide-left" data-aos-duration="900")
            ul.lista-ul--color.lista-ul--separador
              li
                i.fas.fa-feather
                | Acceso a la información en diversos formatos y en los tiempos que requiera el aprendiz.
              li 
                i.fas.fa-feather
                | Comunicación entre sus compañeros e instructores a través de diversas herramientas como: foros, chat, correo electrónico, mensajería interna y sesiones en línea.
              li 
                i.fas.fa-feather
                | Participación en diversas actividades dinamizadas a través de didácticas activas, fomentando en el aprendiz el interés por el aprendizaje autónomo y colaborativo.
              li 
                i.fas.fa-feather
                | Posibilidad de mejorar continuamente su proceso formativo, dando significado a sus aprendizajes a partir de la retroalimentación oportuna frente al desarrollo de sus actividades.

    Separador

    #t_1_3.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.3  Ventajas

    p.mb-5(data-aos="fade" data-aos-duration="900") De acuerdo con el Ministerio de Educación Nacional, la formación virtual tiene múltiples fortalezas entre ellas, que se ajusta a las necesidades y tiempos de los aprendices, permitiéndoles realizar un proceso educativo en cualquier momento y lugar.  En este sentido, facilita el acceso a la educación a las personas que se encuentran en zonas de difícil acceso, trabajan y requieren una mayor flexibilidad de horarios.
      br
      br
      strong En la educación virtual:

    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar(data-aos="zoom-in" data-aos-duration="900")
          img(src='@/assets/curso/tema1-imagen4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido
            .p-4
              p Permite llegar a las regiones más apartadas, traspasar fronteras, apoyar a las personas que tienen menos recursos económicos con educación de alta calidad. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar(data-aos="zoom-in" data-aos-duration="900")
          img(src='@/assets/curso/tema1-imagen5.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido
            .p-4
              p Favorece el desarrollo de competencias en el uso de la tecnología, el aprendizaje autónomo, el trabajo en equipo y la posibilidad de conocer experiencias e intercambiar con compañeros de diferentes regiones, generando habilidades adicionales para ingresar al mercado laboral con mayor facilidad.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar(data-aos="zoom-in" data-aos-duration="900")
          img(src='@/assets/curso/tema1-imagen6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido
            .p-4
              p Facilita el acceso a nuevos objetos de conocimiento: materiales interactivos y dinámicos que propician la comprensión de diversos temas.  

    Separador

    #t_1_4.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.4  Recursos para la formación

    p.mb-5(data-aos="fade" data-aos-duration="900") Para participar en la formación titulada y a distancia con experticia y pertinencia, es necesario reconocer conceptos institucionales propios de la modalidad. En este caso, socializamos los siguientes: 

    .row
      .col-10.offset-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--curuba")
          .row(titulo="Programa formativo")
            .col-md-6.mb-4.mb-md-0.d-flex
              p Se trata de la tecnología o especialización tecnológica que el instructor liderará. Su construcción obedece a una necesidad del sector empresarial.

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen7.svg', style='max-width: 120px')
          .row(titulo="Diseño curricular")
            .col-md-6.mb-4.mb-md-0.d-flex
              p Es un documento que muestra la estructura general del programa, precisa características y proyecciones del contexto laboral y ocupacional, competencias que lo conforman, resultados de aprendizaje y tipo de formación. 

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen8.svg', style='max-width: 120px')
          .row(titulo="Planeación pedagógica")
            .col-md-6.mb-4.mb-md-0.d-flex
              p Antes de entrar a realizar un proceso de formación es indispensable realizar la caracterización, de tal forma que se identifiquen aspectos como: necesidades de formación de los aprendices, estilos de aprendizaje y adaptación de los currículos, los lineamientos institucionales y la legislación vigente. 

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen9.svg', style='max-width: 120px')
          .row(titulo="Proyecto formativo")
            .col-md-6.mb-4.mb-md-0.d-flex
              p El proyecto es un instrumento de gestión que prevé y organiza acciones de planeación, técnico - pedagógicas y de administración, con el fin de resolver una necesidad de la sociedad, enmarcada en los objetivos y políticas de la Entidad. 
                br
                br
                | Es el instrumento que concreta la estructuración de la respuesta para atender las necesidades de la población.

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen10.svg', style='max-width: 120px')
          .row(titulo="Resultado de aprendizaje")
            .col-md-6.mb-4.mb-md-0.d-flex
              p El resultado de aprendizaje presenta una relación de las evidencias junto con los resultados y su respectiva ponderación dentro del proceso de evaluación. 

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen11.svg', style='max-width: 120px')
          .row(titulo="Actividad de aprendizaje")
            .col-md-6.mb-4.mb-md-0.d-flex
              p Acciones integradoras e integradas entre sí, realizadas por los aprendices con la orientación del instructor a lo largo del proceso formativo. Son objeto directo de aprendizaje; esto indica que existe una relación directa entre lo que se debe hacer en el Centro formativo y lo que más tarde se hará en el mundo laboral. 

            .col-md-4.d-flex.offset-2
              figure
                img(src='@/assets/curso/tema1-imagen12.svg', style='max-width: 120px')

    Separador

    #t_1_5.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.5  Evaluación
    
    .row
      .col-md-7(data-aos="slide-right" data-aos-duration="900")
        p.mb-3 La evaluación del aprendizaje en la institución se realiza a través del enfoque por competencias.
          br
          br
          | Es el proceso por el cual los instructores-tutores obtienen y analizan las evidencias del proceso de aprendizaje y desarrollo de las competencias del aprendiz, con base en el programa de formación y las normas de competencia laboral que le cobijan, con la finalidad de emitir el juicio si ha logrado el desarrollo de la competencia.
          br
          br
          | La evaluación se centra en el desempeño del aprendiz soportado en evidencias que incluyen el conocimiento, el ser y el hacer, frente a los resultados de aprendizaje del programa de formación y las normas de competencia que le corresponden.
          br
          br
          | La finalidad de la evaluación está dirigida al mejoramiento del desarrollo de las competencias del aprendiz.
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p Se evalúa con el   modelo de evaluación definido por el SENA.
            br
            strong.ps-5 A 
            | = APROBADO.
            br
            strong.ps-5 D 
            | = DEFICIENTE.
      .col-md-5(data-aos="slide-left" data-aos-duration="900")
        figure
          img(src='@/assets/curso/tema1-imagen13.png')
    
    Separador

    #t_1_6.titulo-segundo(data-aos="fade" data-aos-duration="900")
      h2 1.6  Oportunidades de formación e inserción laboral

    p.mb-5(data-aos="fade" data-aos-duration="900") El egresado SENA es por definición una persona con una formación integral, es decir, que además de ser un gran profesional, formado con los más altos estándares del mercado mundial, también es una persona formada en valores y en habilidades blandas.
      br
      br
      | El SENA tiene el espacio para que el egresado siga vinculado con la Entidad de una manera activa a través de:

    LineaTiempoD.color-secundario.mb-5
      .row(numero="1" titulo="Agencia pública de empleo – Observatorio laboral")
        .col-md-8.mb-4.mb-md-0
          p.mb-5 El Observatorio Laboral y Ocupacional del SENA, es el grupo de profesionales que vigila el comportamiento de las ocupaciones, partiendo de diversas fuentes de información del mercado laboral. 
            br
            br
            | Provee información a nivel nacional, que contribuye a la orientación de acciones de formación y empleo.
            br
            br
            | Mide el comportamiento de las ocupaciones a nivel nacional y departamental, con base en la información de inscritos (personas que buscan empleo) vacantes (requerimientos de recurso humano por parte de las empresas) y colocados (vinculaciones laborales exitosas) a través de la Agencia Pública de Empleo SENA.
          .row
            .col-10.offset-1
              a.anexo.mb-4.mb-lg-0(href="http://www.sena.edu.co/es-co/trabajo/Paginas/observatorioLaboral.aspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/icono-link.svg")
                .anexo__texto
                  p
                    strong Enlace web.
                    |  Observatorio Laboral y Ocupacional del SENA

        .col-md-4
          figure
            img(src='@/assets/curso/tema1-imagen14.png')

      .row(numero="2" titulo="Oportunidades de emprendimiento")
        .col-md-8.mb-4.mb-md-0
          p El Fondo Emprender es un fondo de capital semilla creado por el Gobierno Nacional en el artículo 40 de la Ley 789 del 27 de diciembre de 2002: “por la cual se dictan normas para apoyar el empleo y ampliar la protección social y se modifican algunos artículos del Código Sustantivo de Trabajo”.
            br
            br
            | Es así como el Fondo Emprender se constituyó como una cuenta independiente y especial adscrita al Servicio Nacional de Aprendizaje, SENA, el cual será administrado por esta entidad y cuyo objeto exclusivo será financiar iniciativas empresariales que provengan y sean desarrolladas por aprendices o asociaciones entre aprendices, practicantes universitarios o profesionales que su formación se esté desarrollando o se haya desarrollado en instituciones que para los efectos legales, sean reconocidas por el Estado de conformidad con las Leyes 30 de 1992 y 115 de 1994 y demás que las complementen, modifiquen o adicionen.
      
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-imagen15.png')
      
      .row(numero="3" titulo="Convenios para acceder a título nivel profesional")
        .col-md-8.mb-4.mb-md-0
          p.mb-5 Un egresado SENA puede acceder a los convenios con Instituciones de Educación Superior con el fin de realizar su ciclo profesional.  
          .row
            .col-10.offset-1
              a.anexo.mb-4.mb-lg-0(href="http://www.sena.edu.co/es-co/comunidades/egresados/Paginas/default.aspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/icono-link.svg")
                .anexo__texto
                  p
                    strong Enlace web.
                    |  Consultar convenios actuales.
      
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-imagen16.png')
      
      .row(numero="4" titulo="Internacionalización")
        .col-md-8.mb-4.mb-md-0
          p El SENA gestiona la Internacionalización en los ámbitos tecnológicos, académicos y de transferencia de conocimientos, así como los proyectos de cooperación al desarrollo en el marco de la política exterior de Colombia. 
            br
            br
            | Lo anterior con el objetivo de estar a la vanguardia en innovación y tecnología en el sector productivo, el SENA suscribe acuerdos con los mejores del mundo. 
          .row
            .col-10.offset-1
              a.anexo.mb-4.mb-lg-0(href="https://www.sena.edu.co/es-co/sena/Paginas/internacionalizacion.aspx" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/icono-link.svg")
                .anexo__texto
                  p
                    strong Enlace web.
                    |  Información relacionada con la internacionalización 
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-imagen17.png')
      
    p
      strong Los egresados SENA son la prueba fehaciente que la formación profesional integral impartida en la Entidad es la de más alta reputación en el sector productivo.  

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
