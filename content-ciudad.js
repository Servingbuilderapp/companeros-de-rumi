// Historia "Mi Ciudad" — Rumi ayuda a levantar un barrio/ciudad pequeña que crece con
// cada buena decisión. Mismo motor clínico que "Rumi en el colegio": mismo eje, mismo
// peso, mismo mecanismo en cada semana; solo cambia el escenario y el tono.

const dialogues_ciudad = {};

dialogues_ciudad[1] = [
  { tag: "Lunes · Mesa de planos", text: "Es tu primer lunes en el barrio El Progreso. El líder Tomás pide que cada quien elija un lugar en la mesa. <b>Rumi</b> se queda de pie un segundo de más.",
    choices: [
      { label: "Sentarse en una silla aparte, cerca de la puerta.", diary: "Buscó un lugar tranquilo, lejos del ruido.", w: 1, ax: "ansiedad" },
      { label: "Sentarse en la mesa donde están los planos, con los demás.", diary: "Prefirió no estar solo el primer día." }
    ] },
  { tag: "Martes · Descanso en la obra", text: "En la pausa, un grupo se ríe fuerte cerca de los materiales. No sabes si se ríen contigo o de algo tuyo.",
    choices: [
      { label: "Acercarse y preguntar qué es tan gracioso.", diary: "Decidió acercarse en lugar de suponer." },
      { label: "Cambiar de lugar y quedarse aparte.", diary: "Prefirió evitar el grupo, por si acaso.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Noche", text: "Antes de dormir, el celular sigue sonando en el chat de la obra. Ya son las 11:40 p.m.",
    choices: [
      { label: "Silenciar el chat y dormir.", diary: "Puso un límite y apagó la pantalla." },
      { label: "Seguir leyendo por si dicen algo de mí.", diary: "Se quedó despierto revisando el chat.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Reunión de diseño", text: "El líder Tomás pregunta quién quiere proponer una idea corta frente al grupo. El corazón de Rumi empieza a latir más rápido antes de levantar la mano — o no.",
    choices: [
      { label: "Levantar la mano, aunque el estómago se apriete.", diary: "Se animó a participar pese a los nervios." },
      { label: "Bajar la mirada y esperar que no lo nombren.", diary: "Evitó la situación hasta que pasó.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Camino a casa", text: "Ya casi termina la primera jornada de la semana. Alguien del grupo de construcción pregunta si quiere caminar juntos hasta el paradero.",
    choices: [
      { label: "Aceptar y contarle algo de la semana.", diary: "Cerró la semana compartiendo cómo se sintió." },
      { label: "Decir que tiene afán y seguir solo.", diary: "Cerró la semana guardándose lo que sintió." }
    ] }
];

dialogues_ciudad[2] = [
  { tag: "Lunes · Jornada de la tarde", text: "Es la hora de trabajo en la obra, algo que a <b>Rumi</b> siempre le ha gustado. Hoy, sin razón clara, no le provoca ir.",
    choices: [
      { label: "Ir de todas formas, aunque sea sin muchas ganas.", diary: "Fue a la obra aunque no tenía ánimo." },
      { label: "Quedarse viendo el celular en su cuarto.", diary: "Dejó pasar algo que antes disfrutaba.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · 6:30 a.m.", text: "Durmió sus ocho horas completas, pero se despierta como si no hubiera dormido nada.",
    choices: [
      { label: "Levantarse y desayunar con calma antes de salir.", diary: "Se dio un momento antes de arrancar el día." },
      { label: "Quedarse en la cama hasta el último minuto posible.", diary: "El cansancio le ganó la mañana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Chat con Sole", text: "Sole le escribe para salir a caminar después de la jornada, como hacían antes.",
    choices: [
      { label: "Aceptar, aunque tenga que hacer un esfuerzo.", diary: "Aceptó salir, aunque le costó decidirse." },
      { label: "Responder que hoy no puede y quedarse en el cuarto.", diary: "Prefirió quedarse solo, otra vez.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Error en el diseño", text: "Se equivoca en una medida frente al grupo. El pensamiento le llega rápido: \"soy un desastre para todo esto\".",
    choices: [
      { label: "Pensar que fue solo una medida, no una sentencia.", diary: "Se corrigió el pensamiento antes de que creciera." },
      { label: "Quedarse repitiendo la idea el resto de la jornada.", diary: "Se quedó dándole vueltas al mismo pensamiento duro.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Salida de la obra", text: "El líder Tomás le pregunta, de pasada, \"¿todo bien, Rumi?\".",
    choices: [
      { label: "Contarle, aunque sea un poco, que ha estado desanimado.", diary: "Se animó a decir algo real sobre cómo se siente." },
      { label: "Responder \"sí, todo bien\" y seguir caminando.", diary: "Cerró la semana con la respuesta automática de siempre.", w: 1, ax: "depresion" }
    ] }
];

dialogues_ciudad[3] = [
  { tag: "Lunes · Revisión sorpresa", text: "El líder Tomás anuncia una revisión sorpresa del avance sin aviso. A <b>Rumi</b> se le enfrían las manos antes de mostrar su parte.",
    choices: [
      { label: "Respirar hondo y empezar de todas formas.", diary: "Sintió los nervios pero pudo empezar igual." },
      { label: "Quedarse en blanco varios minutos antes de mostrar algo.", diary: "El cuerpo se le tensionó más de la cuenta.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Descanso, otra vez", text: "El mismo grupo le puso un apodo burlón sobre su diseño la semana pasada. Hoy se lo repiten, más fuerte, cuando pasa cerca.",
    choices: [
      { label: "Decir, con calma, que ese apodo no le gusta.", diary: "Puso un límite claro frente al grupo." },
      { label: "Reírse también, aunque por dentro le moleste.", diary: "Fingió que no le afectaba, para que no siguieran.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Celebración del barrio", text: "Hay una pequeña celebración del barrio por un logro reciente. Rumi no está seguro de encajar todavía.",
    choices: [
      { label: "Ir un rato, aunque sea con algo de pena.", diary: "Se dio la oportunidad de aparecer, aunque le costara." },
      { label: "Inventar una excusa para no ir.", diary: "Prefirió quedarse por fuera, una vez más." }
    ] },
  { tag: "Jueves · Herramienta nueva", text: "Hay una herramienta nueva que no entiende bien. El líder Tomás queda disponible después de la jornada.",
    choices: [
      { label: "Acercarse a preguntarle, aunque le dé pena.", diary: "Pidió ayuda en lugar de quedarse con la duda." },
      { label: "Quedarse con la duda antes que preguntar.", diary: "Prefirió no exponerse a preguntar en público.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre con Sole", text: "Sole le pregunta cómo le fue en general esta semana, con curiosidad real.",
    choices: [
      { label: "Contarle que fue una semana pesada.", diary: "Se animó a contar cómo se sintió de verdad." },
      { label: "Decir que todo normal, como siempre.", diary: "Volvió a la respuesta de siempre, sin entrar en detalle." }
    ] }
];

dialogues_ciudad[9] = [
  { tag: "Lunes · Noche, después de tarea", text: "Rumi había quedado con sus papás en apagar la consola a las 9. A las 9 justo, el juego lo deja a mitad de una partida importante.",
    choices: [
      { label: "Pausar y apagar, aunque quede a la mitad.", diary: "Respetó la hora acordada, aunque le costara." },
      { label: "Terminar \"solo esta partida\", ya son las 9:40.", diary: "Se quedó un buen rato más de lo acordado.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · 6:15 a.m.", text: "Se despierta agotado por dormir poco. Antes de una jornada importante, un compañero le recomienda una bebida energética para \"aguantar el día\".",
    choices: [
      { label: "Tomar agua o algo normal, y dormir temprano hoy.", diary: "Prefirió recuperar el sueño en vez de forzar el cuerpo." },
      { label: "Tomarse la bebida energética para aguantar.", diary: "Usó una bebida energética para tapar el cansancio.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Tarde", text: "Un amigo del chat le escribe: \"una partida más y ya\", justo cuando Rumi iba a empezar a avanzar el diseño de mañana.",
    choices: [
      { label: "Responder que primero avanza el diseño.", diary: "Puso el diseño antes que \"una partida más\"." },
      { label: "Aceptar, y el diseño queda para después de varias partidas.", diary: "Dejó que \"una más\" se convirtiera en varias.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · A solas", text: "Rumi nota que hace rato el juego ya no le da la misma emoción de antes, pero lo abre de todas formas, casi sin pensarlo.",
    choices: [
      { label: "Notarlo y hacer otra cosa un rato distinto.", diary: "Se dio cuenta del piloto automático y lo cambió." },
      { label: "Abrirlo igual, aunque ya no disfrute tanto.", diary: "Siguió la costumbre aunque ya no la disfrutara igual.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · Empieza el fin de semana", text: "El sábado por delante puede irse en pantallas sin que Rumi se dé cuenta, o puede planear algo de tiempo para otras cosas.",
    choices: [
      { label: "Planear algo de tiempo para salir o ver a alguien.", diary: "Se organizó para que el fin de semana no fuera solo pantalla." },
      { label: "Dejar que el fin de semana \"se le vaya\" como siempre.", diary: "Dejó que el fin de semana se le fuera igual que las últimas veces.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_ciudad[11] = [
  { tag: "Lunes · Chat de la obra", text: "En el chat de la obra, alguien empieza a burlarse de una foto que otra persona subió. Varios responden con risas.",
    choices: [
      { label: "No sumarse a las risas ni reenviar nada.", diary: "Se quedó al margen de la burla, sin participar." },
      { label: "Reenviar el chat a otro grupo, \"para que vean\".", diary: "Ayudó a que la burla llegara a más gente.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · La misma persona, otra vez", text: "La persona de la foto deja de escribir en el chat de la obra desde ayer. Nadie pregunta por qué.",
    choices: [
      { label: "Escribirle aparte para ver cómo está.", diary: "Se tomó un momento para preguntar por alguien más." },
      { label: "No decir nada, no es asunto suyo.", diary: "Dejó pasar la situación sin preguntar nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Se burlan de Rumi", text: "Ahora el chat cambia de blanco: alguien edita una foto de Rumi y la pone con un comentario burlón.",
    choices: [
      { label: "Pedirle a esa persona que la borre.", diary: "Puso un límite directo frente al grupo." },
      { label: "Salir del chat sin decir nada.", diary: "Prefirió desaparecer del chat en silencio.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El líder Tomás pregunta", text: "El líder Tomás pregunta si alguien ha visto algo raro en el chat de la obra últimamente.",
    choices: [
      { label: "Contarle lo que ha estado pasando.", diary: "Se animó a contarle a un adulto lo que pasaba." },
      { label: "Decir que no ha visto nada.", diary: "Prefirió no contar lo que sabía.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de la semana", text: "El chat de la obra sigue activo, pero esta vez alguien escribe pidiendo que \"bajen la agresividad\".",
    choices: [
      { label: "Apoyar ese mensaje en el chat.", diary: "Respaldó públicamente que se bajara la agresividad." },
      { label: "Quedarse callado, como la mayoría.", diary: "Se quedó en silencio, como casi todos en el chat.", w: 1, ax: "bullying" }
    ] }
];

dialogues_ciudad[13] = [
  { tag: "Lunes · Anuncian la presentación", text: "El líder Tomás anuncia que el viernes cada grupo debe presentar su parte del diseño frente a todos. A <b>Rumi</b> se le aprieta el estómago apenas lo escucha.",
    choices: [
      { label: "Anotarse para presentar entre los primeros grupos.", diary: "Decidió no darle más vueltas y presentar temprano." },
      { label: "Pedir ser el último grupo, para tener más tiempo de esperar.", diary: "Empujó la espera lo más lejos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo en casa", text: "Practica la presentación frente al espejo, pero se le olvidan las palabras justo donde más las necesita.",
    choices: [
      { label: "Volver a intentarlo, aunque se trabe otra vez.", diary: "Insistió con el ensayo pese a los tropiezos." },
      { label: "Dejar de practicar para no sentir eso de nuevo.", diary: "Prefirió no volver a sentir ese tropiezo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Grupo de trabajo", text: "El grupo se reúne para repartir las partes. Le ofrecen escoger primero qué parte quiere presentar.",
    choices: [
      { label: "Escoger la parte que le toque, sin pedir cambios.", diary: "Aceptó la parte que le tocó sin evitarla." },
      { label: "Escoger la parte más corta, para exponerse lo menos posible.", diary: "Buscó exponerse lo menos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes", text: "Antes de dormir, repasa mentalmente todo lo que podría salir mal al día siguiente.",
    choices: [
      { label: "Escribir tres cosas que sí sabe hacer bien, y dormir.", diary: "Se enfocó en lo que sí controla antes de dormir." },
      { label: "Quedarse despierto imaginando cada error posible.", diary: "Se quedó despierto anticipando errores.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · El turno de Rumi", text: "Llega el momento de pasar al frente. El corazón le late fuerte, pero el cuerpo ya está de pie.",
    choices: [
      { label: "Empezar a hablar, aunque la voz tiemble al inicio.", diary: "Habló aunque la voz temblara al principio." },
      { label: "Pedir que otro del grupo empiece, para ganar tiempo.", diary: "Buscó que alguien más empezara primero por él.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[15] = [
  { tag: "Lunes · Primer día libre", text: "Empiezan las vacaciones de mitad de año. Sin la rutina de la obra, el día se siente más largo y más vacío de lo esperado.",
    choices: [
      { label: "Proponerse una cosa pequeña para hacer hoy.", diary: "Se dio una razón pequeña para levantarse." },
      { label: "Quedarse en la cama la mayor parte del día.", diary: "Dejó pasar el día casi entero en la cama.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Mensaje de Sole", text: "Sole le escribe para planear algo durante la semana. Rumi ve el mensaje y lo deja en visto un buen rato.",
    choices: [
      { label: "Responder y proponer un día para verse.", diary: "Respondió y propuso verse esta semana." },
      { label: "Dejarlo en visto y no responder por ahora.", diary: "Dejó el mensaje sin responder.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Tarde sin planes", text: "No hay jornada ni tareas, y tampoco muchas ganas de hacer lo que antes le gustaba.",
    choices: [
      { label: "Salir a caminar un rato, aunque sea sin ganas.", diary: "Salió un rato aunque no tuviera muchas ganas." },
      { label: "Quedarse todo el día viendo videos en la cama.", diary: "Se quedó todo el día en la cama con el celular.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Comida familiar", text: "Hay un almuerzo familiar. Rumi podría sentarse con los demás y participar, o quedarse aparte.",
    choices: [
      { label: "Sentarse con los demás y contar algo, aunque sea poco.", diary: "Se sentó con la familia y contó algo de su semana." },
      { label: "Quedarse aparte, sin muchas ganas de hablar.", diary: "Se mantuvo aparte, sin hablar con nadie.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Cierre de la semana de vacaciones", text: "Termina la primera semana de vacaciones. Rumi piensa en cómo se ha sentido, sin que nadie se lo pregunte directamente.",
    choices: [
      { label: "Escribirle a Sole que ha estado un poco desanimado.", diary: "Se animó a contarle a Sole cómo se ha sentido." },
      { label: "No decirle nada a nadie y seguir igual.", diary: "Prefirió no contarle a nadie cómo se sentía.", w: 1, ax: "depresion" }
    ] }
];

dialogues_ciudad[18] = [
  { tag: "Lunes · Trabajo en parejas", text: "El líder Tomás pide formar parejas para revisar los planos. Todos se acomodan rápido, menos una integrante nueva que se queda sin pareja.",
    choices: [
      { label: "Ofrecerle hacer pareja con ella.", diary: "Se ofreció a hacer pareja con quien se quedó sola." },
      { label: "Voltear la mirada y dejar que alguien más resuelva.", diary: "Evitó la mirada y dejó que otro resolviera.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Grupo cerrado", text: "En el descanso, un grupo arma un chat \"solo para elegidos\" y deja por fuera a un par de compañeros.",
    choices: [
      { label: "Preguntar por qué no está invitado todo el grupo.", diary: "Cuestionó dejar a compañeros por fuera del grupo." },
      { label: "Unirse al chat sin decir nada al respecto.", diary: "Se unió al grupo cerrado sin cuestionarlo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Puesto en el comedor", text: "A la hora del almuerzo, alguien le dice en voz baja que no se siente en la mesa de siempre porque \"ahí ya no cabe cualquiera\".",
    choices: [
      { label: "Sentarse ahí de todas formas, con calma.", diary: "No aceptó que le dijeran dónde no podía sentarse." },
      { label: "Buscar otra mesa para evitar el problema.", diary: "Evitó el conflicto cambiando de mesa.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · La integrante nueva, otra vez", text: "La integrante nueva de la pareja del lunes sigue trabajando sola casi todos los días.",
    choices: [
      { label: "Invitarla a trabajar con su grupo.", diary: "La invitó a integrarse a su grupo de siempre." },
      { label: "Notarlo y no hacer nada.", diary: "Notó que trabajaba sola y no hizo nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Reunión del grupo", text: "El líder Tomás convoca una reunión corta sobre \"cómo nos estamos tratando entre compañeros\".",
    choices: [
      { label: "Comentar en la reunión lo que ha visto pasar.", diary: "Habló en la reunión sobre lo que ha visto." },
      { label: "Quedarse callado durante toda la reunión.", diary: "Se quedó callado durante toda la reunión.", w: 1, ax: "bullying" }
    ] }
];

dialogues_ciudad[21] = [
  { tag: "Lunes · Antes de dormir, otra vez", text: "Antes de dormir, Rumi abre \"solo un momento\" el feed de redes sociales. Treinta minutos después, sigue ahí.",
    choices: [
      { label: "Dejar el celular cargando fuera del cuarto.", diary: "Sacó el celular del cuarto antes de dormir." },
      { label: "Seguir viendo videos hasta quedarse dormido con el celular en la mano.", diary: "Se quedó dormido con el celular encendido en la mano.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Comparando", text: "Ve fotos de otros proyectos comunitarios y siente que el suyo es menos interesante que el de ellos.",
    choices: [
      { label: "Recordar que las redes muestran solo lo mejor de cada quien.", diary: "Se recordó que las redes no muestran todo." },
      { label: "Quedarse viendo fotos ajenas un buen rato más.", diary: "Siguió comparando su proyecto con lo que veía en pantalla.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Diseño pendiente", text: "Tiene un plano por terminar antes de la jornada de mañana, pero el celular sigue vibrando con notificaciones.",
    choices: [
      { label: "Poner el celular en modo avión hasta terminar el plano.", diary: "Apagó las notificaciones para poder concentrarse." },
      { label: "Revisar cada notificación apenas suena, sin terminar el plano.", diary: "Dejó que las notificaciones interrumpieran todo el trabajo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Un rato libre", text: "Tiene una hora libre antes de la cena. Podría llamar a alguien, salir un rato, o quedarse scrolleando.",
    choices: [
      { label: "Llamar a Sole para hablar un rato.", diary: "Usó el tiempo libre para hablar con alguien de verdad." },
      { label: "Quedarse scrolleando sin darse cuenta de cuánto tiempo pasa.", diary: "El tiempo se le fue scrolleando sin notarlo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · El resumen semanal", text: "El celular muestra un resumen semanal: bastantes horas más de pantalla que la semana pasada.",
    choices: [
      { label: "Proponerse un límite para la próxima semana.", diary: "Se puso un límite para la semana que viene." },
      { label: "Cerrar la pantalla del resumen sin pensarlo más.", diary: "Ignoró el resumen y siguió igual.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_ciudad[23] = [
  { tag: "Lunes · Anuncian la prueba de liderazgo", text: "Anuncian una prueba para liderar una fase de la obra, el viernes. A Rumi le gusta construir, pero la idea de que lo evalúen le pone el estómago pesado.",
    choices: [
      { label: "Anotarse a la prueba de todas formas.", diary: "Se anotó a la prueba pese a los nervios." },
      { label: "Decidir no ir, para no arriesgarse a que lo midan.", diary: "Evitó la prueba para no exponerse a ser evaluado.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Practicar solo", text: "Practica el plan solo en la obra vacía, pero falla varias veces seguidas y piensa en rendirse antes de intentarlo en público.",
    choices: [
      { label: "Seguir practicando un rato más.", diary: "Insistió con la práctica pese a los tropiezos." },
      { label: "Guardar los planos y no volver a practicar antes del viernes.", diary: "Dejó de practicar para no seguir fallando.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Compañeros hablan de la prueba", text: "En el descanso, varios compañeros hablan de quién creen que va a quedar liderando la fase. Rumi no sabe si mencionar que también va a ir.",
    choices: [
      { label: "Contarles que también se anotó a la prueba.", diary: "Se animó a contar que también participaría." },
      { label: "No decir nada, por si acaso no queda.", diary: "Prefirió no contar nada, por si no quedaba.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes de la prueba", text: "No logra dormir bien pensando en cómo le va a ir al día siguiente.",
    choices: [
      { label: "Hacer algo relajante antes de dormir, como música o estiramientos.", diary: "Se preparó con calma para el día siguiente." },
      { label: "Quedarse repasando cada error que podría cometer.", diary: "Se quedó despierto anticipando fallar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · La prueba", text: "Llega el momento de la prueba. El líder Tomás llama a los nombres uno por uno.",
    choices: [
      { label: "Pasar a liderar cuando lo llaman, aunque le tiemble el pulso.", diary: "Lideró aunque el pulso le temblara." },
      { label: "Pedir pasar de último, para retrasar el momento.", diary: "Buscó retrasar lo más posible su turno.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[25] = [
  { tag: "Lunes · Grupo del proyecto final", text: "Forman un chat para la fase final del barrio. Una compañera pregunta algo simple y alguien responde con burla en vez de ayudarle.",
    choices: [
      { label: "Responderle la pregunta directamente, sin burlarse.", diary: "Ayudó en vez de sumarse a la burla." },
      { label: "Poner un emoji de risa a la burla, sin decir nada más.", diary: "Reaccionó con risa a la burla del grupo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Silencio de alguien", text: "Esa misma compañera deja de escribir en el chat desde entonces, aunque la fase la necesita.",
    choices: [
      { label: "Escribirle aparte para que no se sienta sola con el trabajo.", diary: "Se tomó un momento para incluirla aparte." },
      { label: "Dejar que el grupo avance sin ella.", diary: "Dejó que el grupo siguiera sin incluirla.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Reparto de tareas", text: "Al repartir las partes del trabajo, alguien propone dejarle a esa compañera la parte más difícil, \"total, para eso está\".",
    choices: [
      { label: "Proponer repartir las partes de forma más justa.", diary: "Pidió que el reparto fuera más justo para todos." },
      { label: "No decir nada y dejar que se la asignen así.", diary: "No dijo nada mientras le asignaban lo más difícil.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · Entrega del trabajo", text: "El trabajo sale bien, en parte gracias a la compañera que casi quedó por fuera. Nadie se lo reconoce en el grupo.",
    choices: [
      { label: "Mencionar en el grupo el aporte de ella.", diary: "Reconoció en público el aporte de la compañera." },
      { label: "Dejar que el reconocimiento se lo lleven otros.", diary: "Dejó que el reconocimiento se lo llevaran otros.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre del proyecto", text: "El líder Tomás pregunta cómo les pareció trabajar en grupo esta vez.",
    choices: [
      { label: "Comentar que el grupo podría tratarse mejor entre todos.", diary: "Habló sobre cómo se trataron entre compañeros." },
      { label: "Decir que todo estuvo bien, sin mencionar nada más.", diary: "Prefirió no mencionar cómo se trataron entre ellos.", w: 1, ax: "bullying" }
    ] }
];

dialogues_ciudad[27] = [
  { tag: "Lunes · Evaluación del trimestre", text: "El líder Tomás le entrega su evaluación del avance. El progreso bajó un poco frente al anterior, y el pensamiento de \"no sirvo para esto\" aparece rápido.",
    choices: [
      { label: "Revisar con calma en qué bajó y por qué.", diary: "Revisó con calma qué pasó con su evaluación." },
      { label: "Guardar la evaluación sin mirarla de nuevo en toda la semana.", diary: "Evitó volver a mirar la evaluación toda la semana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Medida difícil", text: "Repite una medida que ya había fallado antes. El cansancio de intentarlo otra vez le pesa más que la medida misma.",
    choices: [
      { label: "Pedirle ayuda a un compañero con la medida.", diary: "Pidió ayuda en vez de rendirse con la medida." },
      { label: "Dejar la medida a medias y no volver a intentarlo.", diary: "Dejó la medida a medias, sin volver a intentarlo.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Invitación de Sole", text: "Sole lo invita a repasar juntos para la revisión de recuperación. Rumi no está seguro de que valga la pena el esfuerzo.",
    choices: [
      { label: "Aceptar repasar juntos, aunque sea sin muchas ganas.", diary: "Aceptó repasar con Sole, aunque le costara decidirse." },
      { label: "Decir que mejor no, que total no va a servir de mucho.", diary: "Rechazó ayuda pensando que no iba a servir de nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Cena en casa", text: "En la cena, sus papás le preguntan por el avance. Rumi siente ganas de quedarse callado y terminar rápido.",
    choices: [
      { label: "Contarles cómo se ha sentido con el trimestre.", diary: "Les contó a sus papás cómo se ha sentido." },
      { label: "Responder con monosílabos y levantarse de la mesa.", diary: "Respondió con monosílabos y se levantó rápido.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Revisión de recuperación", text: "Llega la revisión de recuperación. Ya repasó algo con Sole, pero la duda de si sirvió de algo sigue ahí.",
    choices: [
      { label: "Presentarla con lo que alcanzó a preparar.", diary: "Presentó la revisión con lo que había preparado." },
      { label: "Pensar que da igual cómo le vaya y hacerla a medias.", diary: "Entregó la revisión a medias, pensando que daba igual.", w: 1, ax: "depresion" }
    ] }
];

dialogues_ciudad[29] = [
  { tag: "Lunes · Nuevo capítulo cada noche", text: "Empezó una serie nueva y cada noche se dice a sí mismo que ve \"solo un capítulo más\" antes de dormir.",
    choices: [
      { label: "Ponerse una alarma para apagar la serie a cierta hora.", diary: "Se puso un límite de horario para ver series." },
      { label: "Ver varios capítulos seguidos hasta muy tarde.", diary: "Se quedó viendo varios capítulos hasta muy tarde.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Jornada importante en dos días", text: "Tiene una jornada de construcción importante en dos días, pero el capítulo de anoche terminó justo en un momento clave.",
    choices: [
      { label: "Dejar la serie pausada y repasar el plan.", diary: "Priorizó repasar en vez de seguir la serie." },
      { label: "Ver \"solo un capítulo más\" antes de revisar los planos.", diary: "Pospuso el repaso por ver un capítulo más.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Cansancio en la obra", text: "Se queda dormido un momento durante la jornada, justo cuando explican lo que más le sirve para la jornada importante.",
    choices: [
      { label: "Dormir más temprano esa noche para recuperar sueño.", diary: "Decidió dormir más temprano para recuperarse." },
      { label: "Ver otro capítulo esa noche también, \"ya qué más da\".", diary: "Siguió la maratón, pensando que ya daba igual.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Noche antes de la jornada importante", text: "Podría repasar sus planos o terminar la temporada completa que le falta.",
    choices: [
      { label: "Repasar sus planos antes de dormir temprano.", diary: "Repasó sus planos antes de dormir temprano." },
      { label: "Terminar la temporada completa esa misma noche.", diary: "Terminó la temporada completa la noche antes de la jornada.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · La jornada importante", text: "Llega a la jornada importante con el cansancio acumulado de varias noches cortas.",
    choices: [
      { label: "Hacer lo mejor posible con la energía que tiene.", diary: "Trabajó con lo mejor de la energía que le quedaba." },
      { label: "Pensar que da igual, hacerlo rápido y sin cuidado.", diary: "Trabajó rápido, sin revisar nada.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_ciudad[31] = [
  { tag: "Lunes · Nuevo líder del grupo", text: "Cambian al líder del grupo de Rumi a mitad de año. El nuevo líder tiene fama de exigente, y hoy es la primera jornada con él.",
    choices: [
      { label: "Sentarse adelante, aunque dé más nervios.", diary: "Se sentó adelante pese a los nervios." },
      { label: "Sentarse al fondo para pasar desapercibido.", diary: "Buscó pasar desapercibido al fondo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primera tarea con él", text: "Deja una tarea difícil para el día siguiente. Rumi no está seguro de haberla entendido bien.",
    choices: [
      { label: "Preguntarle una duda por el chat de la obra.", diary: "Se animó a preguntar su duda directamente." },
      { label: "No preguntar nada, aunque quede con dudas.", diary: "Se quedó con dudas en vez de preguntar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Revisión en la obra", text: "El nuevo líder empieza a revisar la tarea en voz alta, llamando al azar a quien la explique frente a todos.",
    choices: [
      { label: "Prepararse mentalmente por si lo llaman.", diary: "Se preparó mentalmente por si lo llamaban." },
      { label: "Evitar mirarlo, esperando que no lo note.", diary: "Evitó la mirada del líder todo el rato.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Lo llaman al frente", text: "El nuevo líder dice su nombre. Es su turno de pasar a explicar la tarea.",
    choices: [
      { label: "Pasar al frente, aunque le tiemble la voz.", diary: "Pasó al frente aunque le temblara la voz." },
      { label: "Decir que no se acuerda, para no intentarlo.", diary: "Dijo que no se acordaba, para no intentarlo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre de la semana con el nuevo líder", text: "Termina la primera semana completa con el líder nuevo. Ya no se siente tan desconocido como el lunes.",
    choices: [
      { label: "Contarle a Sole que la semana no fue tan mala.", diary: "Reconoció que la semana no fue tan mala." },
      { label: "Seguir pensando que la próxima tarea será un desastre.", diary: "Siguió anticipando que lo próximo sería un desastre.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[33] = [
  { tag: "Lunes · La noticia", text: "Un compañero cercano del grupo de construcción anuncia que su familia se muda de ciudad en un mes.",
    choices: [
      { label: "Preguntarle cómo se siente con la noticia.", diary: "Se interesó por cómo se sentía su compañero." },
      { label: "No decir mucho al respecto y cambiar de tema.", diary: "Evitó hablar del tema y cambió de conversación.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Últimas semanas juntos", text: "Sabe que le quedan pocas semanas para trabajar con este compañero, pero no tiene muchas ganas de hacer planes.",
    choices: [
      { label: "Proponer hacer algo juntos antes de que se vaya.", diary: "Propuso aprovechar el tiempo que queda." },
      { label: "Dejar pasar los días sin proponer nada.", diary: "Dejó pasar los días sin proponer nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Recuerdos", text: "Revisando fotos viejas, encuentra varias de momentos con este compañero y con otros del grupo que ya no ve tan seguido.",
    choices: [
      { label: "Escribirle a alguien de esas fotos, solo para saludar.", diary: "Retomó contacto con alguien que ya no veía tanto." },
      { label: "Cerrar las fotos y no escribirle a nadie.", diary: "Cerró las fotos sin escribirle a nadie.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Despedida improvisada", text: "Algunos compañeros organizan una despedida informal para el viernes. Rumi no está seguro de tener ánimo para ir.",
    choices: [
      { label: "Ir a la despedida, aunque sea un rato.", diary: "Fue a la despedida, aunque fuera un rato." },
      { label: "Decir que tiene algo que hacer y no ir.", diary: "Se excusó y no fue a la despedida.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Después de la despedida", text: "El compañero ya se fue. La obra se siente un poco distinta sin él, al menos por ahora.",
    choices: [
      { label: "Prometerle mantener contacto y cumplirlo esa misma semana.", diary: "Mantuvo el contacto esa misma semana, como prometió." },
      { label: "Pensar que igual ya no va a ser lo mismo y dejarlo ahí.", diary: "Dejó el contacto ahí, pensando que ya no sería lo mismo.", w: 1, ax: "depresion" }
    ] }
];

dialogues_ciudad[35] = [
  { tag: "Lunes · Ropa de trabajo gastada", text: "Una compañera llega con la ropa de trabajo visiblemente gastada, y un par de personas empiezan a hacer comentarios en voz baja.",
    choices: [
      { label: "Sentarse junto a ella como cualquier otro día.", diary: "Se sentó con ella como cualquier otro día." },
      { label: "Reírse por lo bajo con el resto del grupo.", diary: "Se sumó a las risas por lo bajo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Se repite", text: "Los comentarios sobre su ropa siguen, ahora un poco más fuerte, cuando ella pasa cerca del grupo.",
    choices: [
      { label: "Decirles a los demás que paren con eso.", diary: "Les pidió a los demás que pararan los comentarios." },
      { label: "Quedarse callado, aunque le parezca injusto.", diary: "Se quedó callado aunque le pareciera injusto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Ella deja de participar", text: "La compañera empieza a evitar los descansos, quedándose sola cerca de los materiales.",
    choices: [
      { label: "Ir a acompañarla un rato.", diary: "Fue a acompañarla cerca de los materiales." },
      { label: "No hacer nada, no es su problema.", diary: "No hizo nada, pensando que no era su problema.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El líder Tomás pregunta", text: "El líder Tomás nota que ella ha estado distinta y pregunta al grupo si alguien sabe algo.",
    choices: [
      { label: "Contarle lo que ha estado pasando con los comentarios.", diary: "Le contó al líder lo que había visto." },
      { label: "Decir que no ha notado nada raro.", diary: "Dijo que no había notado nada raro.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de semana", text: "El grupo tiene una charla corta sobre respeto entre compañeros, después de lo hablado con el líder.",
    choices: [
      { label: "Participar contando lo que aprendió esta semana.", diary: "Participó contando lo que aprendió esta semana." },
      { label: "Quedarse callado durante toda la charla.", diary: "Se quedó callado durante toda la charla.", w: 1, ax: "bullying" }
    ] }
];

dialogues_ciudad[37] = [
  { tag: "Lunes · Una oferta limitada", text: "El juego que más juega Rumi anuncia una oferta de \"solo hoy\" para comprar un objeto especial con dinero real.",
    choices: [
      { label: "Ignorar la oferta y seguir jugando gratis.", diary: "Ignoró la oferta y siguió jugando sin gastar." },
      { label: "Pedirle a sus papás la plata para comprarla, \"solo esta vez\".", diary: "Pidió dinero real para comprar algo del juego.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Otra oferta", text: "Al día siguiente aparece otra oferta parecida, \"todavía mejor que la de ayer\".",
    choices: [
      { label: "Notar el patrón y no caer de nuevo.", diary: "Notó el patrón de las ofertas y no compró nada." },
      { label: "Comprar de nuevo, pensando que esta sí vale la pena.", diary: "Volvió a comprar, pensando que esta sí valía la pena.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Revisa cuánto ha gastado", text: "Revisa el historial de compras del juego y se sorprende de cuánto suma en el mes.",
    choices: [
      { label: "Contarle a sus papás cuánto ha gastado.", diary: "Le contó a sus papás cuánto había gastado." },
      { label: "No decir nada al respecto.", diary: "Prefirió no contarle a nadie cuánto había gastado.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Un amigo le presta plata", text: "Un amigo del chat le ofrece prestarle \"unas monedas del juego\" a cambio de plata real después.",
    choices: [
      { label: "Decir que no, que prefiere no deber nada por esto.", diary: "Rechazó el préstamo dentro del juego." },
      { label: "Aceptar el préstamo, para no perderse la oferta.", diary: "Aceptó deber plata real por algo del juego.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · Balance de la semana", text: "Termina la semana pensando en cuánto tiempo y plata le ha dedicado al juego últimamente.",
    choices: [
      { label: "Ponerse un límite de gasto para el mes que viene.", diary: "Se puso un límite de gasto para el juego." },
      { label: "Pensar que ya luego lo controla y seguir igual.", diary: "Pensó que luego lo controlaría y siguió igual.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_ciudad[39] = [
  { tag: "Lunes · Anuncian la reunión", text: "Sus papás anuncian una reunión familiar grande el sábado, con primos y tíos que Rumi no ve seguido.",
    choices: [
      { label: "Preguntar quiénes van a estar, con curiosidad.", diary: "Preguntó con curiosidad quiénes iban a estar." },
      { label: "Empezar a pensar en excusas para no ir.", diary: "Empezó a pensar en excusas para no ir.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Comentario de un tío", text: "Recuerda que en la última reunión un tío le hizo una pregunta incómoda sobre el proyecto del barrio frente a todos.",
    choices: [
      { label: "Pensar en una respuesta corta por si se repite.", diary: "Se preparó una respuesta corta por si se repetía." },
      { label: "Decidir quedarse callado toda la reunión, por si acaso.", diary: "Decidió quedarse callado toda la reunión, por si acaso.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Ensayo mental", text: "Se imagina varias veces cómo podría ir la reunión, casi siempre pensando en lo que podría salir mal.",
    choices: [
      { label: "Pensar también en algo que sí le gusta de esas reuniones.", diary: "Pensó también en algo que sí disfruta de esas reuniones." },
      { label: "Solo imaginar los momentos incómodos posibles.", diary: "Solo imaginó los momentos incómodos posibles.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Su mamá pregunta", text: "Su mamá nota que está callado y le pregunta si algo le preocupa de la reunión.",
    choices: [
      { label: "Contarle que le pone nervioso ver a tanta gente junta.", diary: "Le contó a su mamá lo que le ponía nervioso." },
      { label: "Decir que no pasa nada.", diary: "Dijo que no pasaba nada.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Sábado · La reunión", text: "Llega el día. La casa de la abuela está llena de gente hablando fuerte y riendo.",
    choices: [
      { label: "Entrar y saludar, aunque el estómago esté apretado.", diary: "Entró y saludó, aunque el estómago estuviera apretado." },
      { label: "Quedarse cerca de la puerta el mayor tiempo posible.", diary: "Se quedó cerca de la puerta el mayor tiempo posible.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[41] = [
  { tag: "Lunes · Los eligen para el concurso regional", text: "El diseño de Rumi y su grupo queda seleccionado para representar al barrio en el concurso regional de proyectos comunitarios. Hay que exponerlo frente a jurados que no conocen.",
    choices: [
      { label: "Alegrarse y empezar a preparar la exposición.", diary: "Se alegró y empezó a preparar la exposición." },
      { label: "Pensar en pedir que otro del grupo hable en su lugar.", diary: "Pensó en dejar que otro hablara en su lugar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo frente al grupo", text: "Ensayan la exposición frente al resto del grupo antes del viaje. Le toca explicar la parte central.",
    choices: [
      { label: "Explicar su parte, aunque se sienta expuesto frente a todos.", diary: "Explicó su parte pese a sentirse expuesto." },
      { label: "Pedir hacer solo la parte más corta y sencilla.", diary: "Buscó la parte más corta para exponerse lo menos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Viaje al concurso", text: "En el bus hacia el concurso regional, piensa en todas las preguntas que los jurados podrían hacerle.",
    choices: [
      { label: "Repasar con calma las respuestas que ya preparó.", diary: "Repasó con calma lo que ya había preparado." },
      { label: "Imaginar solo las preguntas que no sabría responder.", diary: "Solo imaginó las preguntas que no sabría responder.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Turno de presentar", text: "Llega el turno de su grupo frente a los jurados del concurso.",
    choices: [
      { label: "Empezar a hablar aunque las manos le suden.", diary: "Empezó a hablar aunque las manos le sudaran." },
      { label: "Quedarse callado esperando que hable primero otro del grupo.", diary: "Esperó a que otro del grupo hablara primero.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Resultados", text: "Anuncian los resultados del concurso regional. El grupo de Rumi no gana, pero recibe una mención.",
    choices: [
      { label: "Sentirse orgulloso de haber participado, gane o no.", diary: "Se sintió orgulloso de haber participado." },
      { label: "Pensar que no ganar significa que no sirvió de nada.", diary: "Pensó que no ganar significaba que no había servido de nada.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[43] = [
  { tag: "Lunes · Otra semana igual", text: "Faltan pocas semanas para terminar el año, pero las jornadas empiezan a sentirse todas iguales, sin mucho ánimo de por medio.",
    choices: [
      { label: "Buscar algo pequeño y distinto para hacer hoy.", diary: "Buscó algo pequeño y distinto para hacer hoy." },
      { label: "Dejar que el día pase igual que los anteriores.", diary: "Dejó que el día pasara igual que los anteriores.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Entrenamiento de fútbol", text: "Tiene entrenamiento, algo que normalmente disfruta, pero hoy le cuesta encontrar ganas de ir.",
    choices: [
      { label: "Ir al entrenamiento, aunque sea sin muchas ganas.", diary: "Fue al entrenamiento aunque no tuviera muchas ganas." },
      { label: "Inventar una excusa para no ir esta vez.", diary: "Inventó una excusa para no ir al entrenamiento.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Mensaje sin responder", text: "Sole le escribe preguntando si quiere hacer algo el fin de semana. El mensaje queda sin responder varias horas.",
    choices: [
      { label: "Responder, aunque sea para decir que lo piensa.", diary: "Respondió el mensaje, aunque fuera para pensarlo." },
      { label: "Dejarlo sin responder hasta el día siguiente.", diary: "Dejó el mensaje sin responder hasta el día siguiente.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Parte del diseño que más disfruta", text: "En la parte del diseño que más suele disfrutar, hoy no logra concentrarse ni encontrarle sentido.",
    choices: [
      { label: "Intentar avanzar un poco, aunque sea lento.", diary: "Intentó avanzar un poco, aunque fuera lento." },
      { label: "Dejar la actividad sin terminar, sin muchas ganas de seguir.", diary: "Dejó la actividad sin terminar.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Fin de semana por delante", text: "Llega el fin de semana. Podría hacer planes con alguien o dejar que se le vaya sin mucho de por medio.",
    choices: [
      { label: "Proponerle a alguien hacer algo el sábado.", diary: "Propuso hacer algo el sábado con alguien." },
      { label: "Dejar el fin de semana sin planes, otra vez.", diary: "Dejó el fin de semana sin planes, otra vez.", w: 1, ax: "depresion" }
    ] }
];

dialogues_ciudad[45] = [
  { tag: "Lunes · Un rumor", text: "Corre un rumor en el grupo sobre por qué un compañero faltó varios días — nadie sabe si es cierto, pero todos lo repiten.",
    choices: [
      { label: "Preguntarle directamente a él qué pasó, con respeto.", diary: "Prefirió preguntar directamente antes que suponer." },
      { label: "Repetir el rumor a alguien más, \"por si acaso es cierto\".", diary: "Ayudó a que el rumor siguiera corriendo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · El rumor crece", text: "El rumor ya cambió varias veces de versión, cada vez más exagerado.",
    choices: [
      { label: "Aclarar frente al grupo que no se sabe si es cierto.", diary: "Aclaró frente al grupo que el rumor no estaba confirmado." },
      { label: "Sumarle un detalle más, aunque no lo sepa de cierto.", diary: "Sumó un detalle más al rumor sin saberlo de cierto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · El compañero se entera", text: "El compañero del rumor se entera de lo que se dice de él y deja de hablar con casi todos.",
    choices: [
      { label: "Buscarlo para decirle que no cree el rumor.", diary: "Le dijo directamente que no creía el rumor." },
      { label: "No decirle nada, para no meterse en el tema.", diary: "No le dijo nada, para no meterse en el tema.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · Se sabe la verdad", text: "Se aclara que el compañero había faltado por un motivo normal, nada parecido a lo que decía el rumor.",
    choices: [
      { label: "Reconocer frente a otros que el rumor era falso.", diary: "Reconoció frente a otros que el rumor era falso." },
      { label: "No decir nada más al respecto.", diary: "No dijo nada más al respecto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de semana", text: "El compañero vuelve a trabajar con el grupo, aunque todavía un poco más callado que antes.",
    choices: [
      { label: "Acercarse a hablar con él como antes del rumor.", diary: "Se acercó a hablar con él como antes." },
      { label: "Seguir tratándolo distinto, por si el rumor tenía algo de cierto.", diary: "Siguió tratándolo distinto, por si acaso.", w: 1, ax: "bullying" }
    ] }
];

dialogues_ciudad[47] = [
  { tag: "Lunes · En el baño de la obra", text: "En el descanso, un grupo pequeño vapea a escondidas en el baño y le ofrecen probar a Rumi.",
    choices: [
      { label: "Decir que no y seguir de largo.", diary: "Dijo que no y siguió de largo." },
      { label: "Probarlo \"solo por curiosidad\", para no quedar mal con el grupo.", diary: "Probó el vapeador para no quedar mal con el grupo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Le ofrecen otra vez", text: "El mismo grupo lo busca de nuevo en el descanso, esta vez con más confianza que ayer.",
    choices: [
      { label: "Decir que ayer fue la única vez y no va a repetir.", diary: "Fue claro en que no iba a repetir." },
      { label: "Aceptar de nuevo, para no sentirse fuera del grupo.", diary: "Aceptó de nuevo, para no sentirse fuera del grupo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Nota el olor en la ropa", text: "Nota que la ropa le queda con el olor del vapeador, y le preocupa que en la casa se den cuenta.",
    choices: [
      { label: "Contarle a alguien de confianza lo que ha estado pasando.", diary: "Le contó a alguien de confianza lo que estaba pasando." },
      { label: "Tratar de disimularlo y no contarle a nadie.", diary: "Trató de disimular el olor sin contarle a nadie.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · El grupo insiste", text: "El grupo lo invita a comprar uno propio entre todos, para no tener que pedir prestado cada vez.",
    choices: [
      { label: "Decir que no quiere poner plata en eso.", diary: "Se negó a poner plata en comprar uno." },
      { label: "Poner plata para el vapeador del grupo.", diary: "Puso plata para comprar un vapeador entre el grupo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · Balance de la semana", text: "Termina la semana pensando en cómo empezó siendo \"solo una vez\" y en qué se ha convertido.",
    choices: [
      { label: "Decidir parar y contárselo a un adulto de confianza.", diary: "Decidió parar y buscar apoyo de un adulto." },
      { label: "Pensar que ya después lo deja, sin decirle nada a nadie.", diary: "Pensó que después lo dejaría, sin decirle a nadie.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_ciudad[49] = [
  { tag: "Lunes · Anuncian el calendario de evaluación final", text: "Publican el calendario de evaluación final del proyecto: cinco entregas en cinco días.",
    choices: [
      { label: "Organizar un plan de trabajo por día.", diary: "Organizó un plan de trabajo para la semana." },
      { label: "Evitar mirar el calendario completo de una vez.", diary: "Evitó mirar el calendario completo de una vez.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primera entrega", text: "Presenta la primera entrega. Al terminar, se queda pensando si hizo bien la mitad de lo pedido.",
    choices: [
      { label: "Dejarlo ir y concentrarse en la siguiente entrega.", diary: "Dejó ir la entrega y se concentró en la siguiente." },
      { label: "Quedarse repasando mentalmente cada detalle el resto del día.", diary: "Se quedó repasando cada detalle todo el día.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Duda con un tema", text: "Repasando para la entrega de mañana, encuentra un tema que no recuerda haber visto bien.",
    choices: [
      { label: "Escribirle a un compañero para entender ese tema.", diary: "Pidió ayuda para entender el tema que le faltaba." },
      { label: "Saltarse ese tema, esperando que no salga en la evaluación.", diary: "Se saltó el tema, esperando que no saliera.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes de la entrega más difícil", text: "Mañana es la entrega que más le preocupa de toda la semana.",
    choices: [
      { label: "Dormir temprano, aunque sienta que le falta repasar.", diary: "Priorizó dormir, aunque sintiera que le faltaba repasar." },
      { label: "Quedarse trabajando hasta muy tarde, sin parar.", diary: "Se quedó trabajando hasta muy tarde, sin parar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Última entrega", text: "Presenta la última entrega de la semana. Al salir, la semana de evaluación final queda atrás.",
    choices: [
      { label: "Celebrar que la semana de evaluación terminó, salga como salga.", diary: "Celebró que la semana de evaluación había terminado." },
      { label: "Empezar a preocuparse ya por los resultados antes de saberlos.", diary: "Empezó a preocuparse por los resultados antes de saberlos.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_ciudad[51] = [
  { tag: "Lunes · Último proyecto del año", text: "Para la última fase grupal del año, el líder Tomás pide incluir en cada grupo a alguien con quien no hayan trabajado antes.",
    choices: [
      { label: "Proponer sumar a alguien que suele quedar por fuera de los grupos.", diary: "Propuso sumar a alguien que solía quedar por fuera." },
      { label: "Formar grupo con los de siempre y ya.", diary: "Formó grupo con los de siempre, sin sumar a nadie más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Primeras reuniones", text: "El nuevo integrante del grupo, poco acostumbrado a que lo incluyan, no dice casi nada en la primera reunión.",
    choices: [
      { label: "Preguntarle directamente su opinión sobre el trabajo.", diary: "Le preguntó directamente su opinión sobre el trabajo." },
      { label: "Dejar que el resto del grupo decida todo sin él.", diary: "Dejó que el resto del grupo decidiera todo sin él.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Un comentario aparte", text: "Alguien le dice a Rumi, en broma, que \"le tocó cargar\" con ese compañero en el grupo.",
    choices: [
      { label: "Decir que no lo ve como una carga, sino como parte del equipo.", diary: "Defendió al compañero frente al comentario." },
      { label: "Reírse del comentario, sin decir nada más.", diary: "Se rió del comentario, sin decir nada más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El aporte del nuevo integrante", text: "El compañero nuevo termina proponiendo la idea que mejor le queda al proyecto.",
    choices: [
      { label: "Reconocer frente al grupo que fue la mejor idea.", diary: "Reconoció frente al grupo que fue la mejor idea." },
      { label: "Usar la idea sin mencionar de quién fue.", diary: "Usó la idea sin mencionar de quién había sido.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Entrega final del año", text: "El grupo entrega la última fase del proyecto del barrio. El ambiente entre todos se siente distinto al del primer día.",
    choices: [
      { label: "Agradecerle al grupo completo, incluyendo al que se sumó al final.", diary: "Agradeció a todo el grupo, incluyendo al que se sumó al final." },
      { label: "Cerrar el proyecto sin mencionar a nadie en particular.", diary: "Cerró el proyecto sin mencionar a nadie en particular.", w: 1, ax: "bullying" }
    ] }
];

const mechanics_ciudad = {};

mechanics_ciudad[4] = { type: "habit", axis: "depresion", diaryWeek: "Semana 4", totalDays: 5,
  intro: "Semana 4. Rumi encuentra una planta para el balcón, parte del proyecto de huerta del barrio, y se la lleva a su cuarto. Nadie le pide que la cuide. Durante 5 días, puede regarla o no.",
  doLabel: "Regarla", skipLabel: "Dejarla para después", itemLabel: "la regó" };

mechanics_ciudad[5] = { type: "timing", diaryWeek: "Semana 5",
  intro: "Semana 5. Antes de la jornada, Rumi debe subirse al vehículo de la obra justo cuando pasa por la parada — ni antes, ni después.",
  actionLabel: "¡Ahora!", verbPast: "se subió a tiempo" };

mechanics_ciudad[6] = { type: "social", axis: "bullying", diaryWeek: "Semana 6", verbPast: "saludó a", continueLabel: "Seguir",
  intro: "Semana 6. Es descanso en la obra. Rumi puede saludar a quien quiera, a nadie, o simplemente seguir cuando esté listo.",
  classmates: [
    { initials: "AL", saludo: "Alejo te saluda de vuelta." },
    { initials: "SO", saludo: "Sole te pregunta cómo va tu día." },
    { initials: "KV", saludo: "Kevin te choca la mano al pasar." }
  ] };

mechanics_ciudad[7] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 7",
  intro: "Semana 7. Un pensamiento aparece: \"mi idea no vale tanto como las de los demás\". Reconocerlo no resta ni suma nada. Lo que sí se registra es cuando Rumi decide probar una forma distinta de verlo.",
  thoughts: [
    { t: "Con lo que hago, seguro nadie se fija en mí.", r: "¿Y si lo que haces sí se nota, aunque nadie lo diga en voz alta?" },
    { t: "Los demás la tienen más fácil que yo.", r: "¿Y si cada quien está peleando algo que no se ve?" },
    { t: "Si me equivoco aquí, van a pensar que no sirvo.", r: "¿Y si equivocarse es justo la parte donde se aprende algo?" },
    { t: "No valgo tanto como para que esto me salga bien.", r: "¿Y si el resultado de hoy no dice nada sobre lo que vales?" }
  ] };

mechanics_ciudad[8] = { type: "social", axis: null, diaryWeek: "Semana 8", verbPast: "se acercó a", continueLabel: "Terminar semana 8",
  intro: "Semana 8. Inauguración de una fase ya construida del barrio. Rumi cruza el lugar y llega donde están los mismos compañeros de siempre, cerca de un puesto de comida. Semana de revisión: no suma puntos nuevos a ningún eje.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo invita a hacer fila juntos." },
    { initials: "SO", saludo: "Sole le guarda un puesto." },
    { initials: "KV", saludo: "Kevin le pasa algo de comer." }
  ] };

mechanics_ciudad[10] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 10", totalDays: 5,
  intro: "Semana 10. Rumi y sus papás acordaron una hora para apagar pantallas cada noche. Durante 5 noches, puede cumplirla o no — nadie se lo recuerda en el juego.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_ciudad[12] = { type: "social", axis: "bullying", diaryWeek: "Semana 12", verbPast: "se acercó a", continueLabel: "Terminar semana 12",
  intro: "Semana 12. En la mesa de planos, trabajan en equipo sobre un diseño. Rumi puede acercarse a proponer algo, a nadie, o simplemente esperar a que alguien más hable.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra en qué va su parte." },
    { initials: "SO", saludo: "Sole le pregunta qué tema le gustaría cubrir." },
    { initials: "KV", saludo: "Kevin le pasa sus apuntes para revisar juntos." }
  ] };

mechanics_ciudad[14] = { type: "timing", diaryWeek: "Semana 14",
  intro: "Semana 14. Hay que verter la mezcla de materiales justo cuando el cronómetro marca el segundo indicado — ni antes, ni después.",
  actionLabel: "¡Verter ahora!", verbPast: "vertió la mezcla a tiempo" };

mechanics_ciudad[16] = { type: "social", axis: "bullying", diaryWeek: "Semana 16", verbPast: "se acercó a", continueLabel: "Terminar semana 16",
  intro: "Semana 16. Primer día de vuelta a la obra después de las vacaciones. El lugar está lleno de gente que Rumi no ve hace tiempo.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo saluda con un choque de manos." },
    { initials: "SO", saludo: "Sole le cuenta cómo estuvieron sus vacaciones." },
    { initials: "KV", saludo: "Kevin le pregunta si vio el avance del fin de semana." }
  ] };

mechanics_ciudad[17] = { type: "habit", axis: "depresion", diaryWeek: "Semana 17", totalDays: 5,
  intro: "Semana 17. El nuevo salón comunal del barrio tiene un acuario pequeño con dos peces. Nadie asignó turnos fijos para darles de comer.",
  doLabel: "Darles de comer", skipLabel: "Dejarlo para después", itemLabel: "le dio de comer a los peces" };

mechanics_ciudad[19] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 19",
  intro: "Semana 19. Otro pensamiento aparece sobre si de verdad encaja en el grupo de construcción.",
  thoughts: [
    { t: "Si no respondo rápido, van a dejar de invitarme.", r: "¿Y si una amistad de verdad no depende de responder en segundos?" },
    { t: "Me veo raro en las fotos que suben del grupo.", r: "¿Y si una sola foto no dice cómo te ves siempre?" },
    { t: "Seguro los demás notan todo lo que me sale mal.", r: "¿Y si casi nadie se fija tanto como yo creo?" },
    { t: "Si digo lo que pienso, capaz ya no les caigo bien.", r: "¿Y si decir lo que piensas es parte de por qué te quieren cerca?" }
  ] };

mechanics_ciudad[20] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 20", totalDays: 5,
  intro: "Semana 20. Hay un puente festivo de varios días antes de volver a la obra. Rumi puede seguir apagando las pantallas a la hora acordada, o dejar que el puente se le vaya en eso.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_ciudad[22] = { type: "habit", axis: "depresion", diaryWeek: "Semana 22", totalDays: 5,
  intro: "Semana 22. El perro de la casa espera su paseo después de la obra. Nadie más en la casa insiste en que Rumi lo saque.",
  doLabel: "Sacarlo a pasear", skipLabel: "Dejarlo para después", itemLabel: "sacó a pasear al perro" };

mechanics_ciudad[24] = { type: "timing", diaryWeek: "Semana 24",
  intro: "Semana 24. En la esquina camino a la obra, el semáforo peatonal da apenas un segundo justo para cruzar antes de que cambie.",
  actionLabel: "¡Cruzar!", verbPast: "cruzó en el momento justo" };

mechanics_ciudad[26] = { type: "social", axis: "bullying", diaryWeek: "Semana 26", verbPast: "se acercó a", continueLabel: "Terminar semana 26",
  intro: "Semana 26. Un grupo del barrio organiza ir a comer algo cerca después de la jornada. Rumi puede sumarse a la conversación, a nadie, o simplemente ir en silencio.",
  classmates: [
    { initials: "AL", saludo: "Alejo le guarda un puesto en la mesa." },
    { initials: "SO", saludo: "Sole le pregunta qué va a pedir." },
    { initials: "KV", saludo: "Kevin le cuenta un chiste malo, como siempre." }
  ] };

mechanics_ciudad[28] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 28",
  intro: "Semana 28. Otro pensamiento aparece, esta vez relacionado con la revisión de recuperación de la semana pasada.",
  thoughts: [
    { t: "Si vuelvo a fallar, ya no vale la pena intentarlo.", r: "¿Y si fallar una vez no significa que no valga la pena seguir intentando?" },
    { t: "Los demás aprenden más rápido que yo.", r: "¿Y si cada quien aprende a un ritmo distinto, no mejor ni peor?" },
    { t: "Ya perdí el trimestre, para qué esforzarme ahora.", r: "¿Y si lo que haga de aquí en adelante también cuenta?" },
    { t: "Si pido ayuda, van a pensar que no puedo solo.", r: "¿Y si pedir ayuda es parte de aprender a resolver las cosas?" }
  ] };

mechanics_ciudad[30] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 30", totalDays: 5,
  intro: "Semana 30. Hay una semana corta de receso. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que el receso se le vaya igual que antes.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_ciudad[32] = { type: "habit", axis: "depresion", diaryWeek: "Semana 32", totalDays: 5,
  intro: "Semana 32. El salón comunal tiene un hámster de mascota. Esta semana le toca a Rumi encargarse de darle de comer, sin que nadie se lo recuerde.",
  doLabel: "Darle de comer", skipLabel: "Dejarlo para después", itemLabel: "le dio de comer al hámster" };

mechanics_ciudad[34] = { type: "timing", diaryWeek: "Semana 34",
  intro: "Semana 34. En clase de cocina (aparte de la obra), hay que sacar la bandeja del horno justo cuando el temporizador llega a cero — ni antes, ni después.",
  actionLabel: "¡Sacarla ahora!", verbPast: "sacó la bandeja en el momento justo" };

mechanics_ciudad[36] = { type: "social", axis: "bullying", diaryWeek: "Semana 36", verbPast: "participó con", continueLabel: "Terminar semana 36",
  intro: "Semana 36. Un grupo se reúne un sábado en casa de un compañero para repasar los planos juntos. Rumi puede participar de la conversación, a nadie, o quedarse callado con su cuaderno.",
  classmates: [
    { initials: "AL", saludo: "Alejo le explica la parte que no entendía." },
    { initials: "SO", saludo: "Sole le pregunta si quiere algo de tomar." },
    { initials: "KV", saludo: "Kevin le muestra sus apuntes del tema." }
  ] };

mechanics_ciudad[38] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 38",
  intro: "Semana 38. Antes de una reunión familiar grande, otro pensamiento aparece, tal cual lo pensaría cualquiera.",
  thoughts: [
    { t: "Si no soy igual de gracioso que mis primos, se van a aburrir conmigo.", r: "¿Y si no hace falta ser el más gracioso para que disfruten estar contigo?" },
    { t: "Seguro todos notan que estoy más callado que antes.", r: "¿Y si estar más callado un rato no es algo que todos estén midiendo?" },
    { t: "Si digo algo raro, se van a acordar de eso para siempre.", r: "¿Y si la gente olvida esas cosas más rápido de lo que uno cree?" },
    { t: "Debería tener más de qué hablar con la familia.", r: "¿Y si escuchar también cuenta como estar presente?" }
  ] };

mechanics_ciudad[40] = { type: "social", axis: "bullying", diaryWeek: "Semana 40", verbPast: "conversó con", continueLabel: "Terminar semana 40",
  intro: "Semana 40. Cierra la primera mitad del año. En un descanso, varios compañeros conversan sobre lo que se viene en el segundo semestre del proyecto.",
  classmates: [
    { initials: "AL", saludo: "Alejo le cuenta sus planes para el segundo semestre." },
    { initials: "SO", saludo: "Sole le pregunta cómo le fue en todo este tiempo." },
    { initials: "KV", saludo: "Kevin le propone seguir trabajando juntos." }
  ] };

mechanics_ciudad[42] = { type: "habit", axis: "depresion", diaryWeek: "Semana 42", totalDays: 5,
  intro: "Semana 42. Hay un huerto comunitario del barrio con turnos por grupo. Esta semana le toca a Rumi revisarlo y regarlo, sin que nadie se lo recuerde.",
  doLabel: "Revisarlo y regarlo", skipLabel: "Dejarlo para después", itemLabel: "revisó y regó el huerto" };

mechanics_ciudad[44] = { type: "timing", diaryWeek: "Semana 44",
  intro: "Semana 44. Hay que verter la colada de cemento justo cuando el cronómetro marca el momento indicado — ni antes, ni después.",
  actionLabel: "¡Verter ahora!", verbPast: "vertió la colada en el momento justo" };

mechanics_ciudad[46] = { type: "social", axis: "bullying", diaryWeek: "Semana 46", verbPast: "ensayó con", continueLabel: "Terminar semana 46",
  intro: "Semana 46. El barrio prepara la inauguración de cierre de año. En el ensayo, Rumi puede sumarse a la conversación del grupo, a nadie, o quedarse en silencio practicando solo.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra el paso que le está costando." },
    { initials: "SO", saludo: "Sole le pregunta si quiere ensayar juntos la presentación." },
    { initials: "KV", saludo: "Kevin le presta su turno del parlante para practicar." }
  ] };

mechanics_ciudad[48] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 48",
  intro: "Semana 48. Con el año casi terminado, otro pensamiento aparece sobre cómo le fue en el proyecto del barrio este año.",
  thoughts: [
    { t: "Este año no logré tanto como debería.", r: "¿Y si lograr menos de lo esperado no borra lo que sí logró?" },
    { t: "Los demás van a recordar solo mis errores del año.", r: "¿Y si la gente recuerda mucho menos de lo que uno cree?" },
    { t: "Si el próximo año es igual de difícil, no sé si voy a poder.", r: "¿Y si no hace falta saberlo todavía, solo ir viendo semana a semana?" },
    { t: "No cambié tanto como pensé que iba a cambiar.", r: "¿Y si los cambios más importantes no siempre se notan de inmediato?" }
  ] };

mechanics_ciudad[50] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 50", totalDays: 5,
  intro: "Semana 50. Faltan pocas semanas para las vacaciones largas de fin de año. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que la ansiedad de fin de año se lo lleve todo frente a una pantalla.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_ciudad[52] = { type: "social", axis: "bullying", diaryWeek: "Semana 52", verbPast: "se despidió de", continueLabel: "Cerrar el año",
  intro: "Semana 52, último día del año en el barrio El Progreso. Rumi se despide de un año completo construyendo con el grupo. En el lugar, todo el grupo se reúne una última vez antes de las vacaciones.",
  classmates: [
    { initials: "AL", saludo: "Alejo le da un abrazo de despedida." },
    { initials: "SO", saludo: "Sole le promete escribirle en vacaciones." },
    { initials: "KV", saludo: "Kevin le desea felices vacaciones." }
  ] };

if (typeof module !== "undefined") { module.exports = { dialogues_ciudad, mechanics_ciudad }; }
