export default {
  global: {
    componenteFormativo: 'Formación virtual en el SENA',
    descripcionCurso:
      'El SENA cuenta con formación profesional virtual la cual tiene características especiales para su desarrollo, así mismo, conozca las diferentes oportunidades de formación e inserción laboral que ofrecemos. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La formación virtual en el SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ventajas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Recursos para la formación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Evaluación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Oportunidades de formación e inserción laboral',
            hash: 't_1_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co:  Familia Sena – Egresados.',
    },
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co:  Observatorio Laboral y ocupacional.',
    },
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co:  Internacionalización SENA.',
    },
    {
      referencia:
        'SENA (2003). Metodología para evaluar y certificar competencias laborales.',
    },
    {
      referencia:
        '[Imagen de convenios con instituciones de educación superior 2016].',
      link:
        'http://www.sena.edu.co/es-co/comunidades/egresados/Paginas/default.aspx',
    },
    {
      referencia: '[Imagen de fondo emprender 2018].',
      link: 'http://www.fondoemprender.com/SitePages/Home.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Aula virtual',
      significado:
        'Entorno telemático en el cual el aprendiz tiene acceso a la red (intranet o internet) para desarrollar un proceso de aprendizaje. Permite la consulta de la documentación de estudio, el desarrollo de actividades de aprendizaje y la utilización de herramientas de interacción como foros de discusión y correo electrónico, entre otros.',
    },
    {
      termino: 'TIC',
      significado:
        'Las Tecnologías de la Información y la Comunicación tomaron fuerza en el mundo a partir del siglo XX. Una época colmada de cambios tecnológicos, de la creación de la Internet (1969) de los avances en cibernética, informática, telecomunicaciones y otras ciencias. <br><br>Sin embargo, su auge se ha evidenciado en el S. XXI, en el cual los sujetos encuentran cada vez más, la necesidad de tecnología para llevar a cabo sus actividades diarias.<br><br>Las TIC han permeado el ámbito empresarial, bancario, comercial, de ocio y en general la mayoría de los espacios de interacción y comunicación de la humanidad, siendo la educación uno de los ambientes que más ha sacado provecho de estos desarrollos.',
    },
  ],
  complementario: [
    {
      texto:
        'Acuerdo 007 de 2012 [Servicio Nacional de Aprendizaje SENA]. Por el cual se adopta el reglamento del aprendiz  SENA. Mayo 3 de 2012',
      tipo: 'PDF',
      descarga: '/downloads/Reglamento_Aprendiz_Acuerdo.pdf',
    },
    {
      texto:
        'SENA, (2013). Proyecto Educativo Institucional [Ebook]. Retrieved 3 June 2021, from https://hdl.handle.net/11404/3253.',
      tipo: 'PDF',
      descarga: '/downloads/PEI_SENA.pdf',
    },
    {
      texto:
        'Amorós, A. (2011). Desarrollo e implementación de la formación por proyectos en el SENA [Ebook]. Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ).',
      tipo: 'PDF',
      descarga: '/downloads/Desarrollo_implementacion_formacion_proyectos.pdf',
    },
    {
      texto:
        'Zapata, L. (2018). El instructor y la formación por proyectos en el SENA. Rutas De formación: Prácticas Y Experiencias, 5, 63–70. https://doi.org/10.24236/24631388.n5.2017.1308',
      tipo: 'PDF',
      descarga: '/downloads/Instructor_y_formacion_poryectos_SENA.pdf',
    },
    {
      texto:
        'SENA, (2014). Gestión de proyectos de formación desde la ingeniería pedagógica.',
      tipo: 'PDF',
      descarga: '/downloads/Gestion_proyectos_formacion.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
