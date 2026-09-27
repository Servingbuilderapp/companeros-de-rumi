// Historia "La Cordillera" — expedición de montaña a lo largo del año escolar,
// sin fantasía: caminatas, campamentos, trabajo en equipo real. Mismo motor
// clínico que "Rumi en el colegio".

const dialogues_cordillera = {};

dialogues_cordillera[1] = [
  { tag: "Lunes · Campamento base", text: "Primer día de <b>Rumi</b> en la Expedición Cordillera. El guía Andino reparte los puestos en las carpas. Hay uno solo, apartado, y otro compartido con el resto del grupo.",
    choices: [
      { label: "Elegir el puesto apartado, más tranquilo.", diary: "Buscó un lugar tranquilo, lejos del ruido.", w: 1, ax: "ansiedad" },
      { label: "Elegir el puesto compartido con el grupo.", diary: "Prefirió no estar solo el primer día." }
    ] },
  { tag: "Martes · Descanso en la caminata", text: "En la pausa de la caminata, un grupo se ríe fuerte cerca de las mochilas. No sabes si se ríen contigo o de algo tuyo.",
    choices: [
      { label: "Acercarse y preguntar qué es tan gracioso.", diary: "Decidió acercarse en lugar de suponer." },
      { label: "Quedarse aparte, revisando su propia mochila.", diary: "Prefirió evitar el grupo, por si acaso.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Noche en la carpa", text: "Antes de dormir, el celular sigue sonando en el chat de la expedición. Ya son las 11:40 p.m.",
    choices: [
      { label: "Silenciar el chat y dormir.", diary: "Puso un límite y apagó la pantalla." },
      { label: "Seguir leyendo por si dicen algo de mí.", diary: "Se quedó despierto revisando el chat.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Reunión de expedición", text: "El guía Andino pregunta quién quiere contar una experiencia corta frente al grupo. El corazón de Rumi empieza a latir más rápido antes de levantar la mano — o no.",
    choices: [
      { label: "Levantar la mano, aunque el estómago se apriete.", diary: "Se animó a participar pese a los nervios." },
      { label: "Bajar la mirada y esperar que no lo nombren.", diary: "Evitó la situación hasta que pasó.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Camino al descenso", text: "Ya casi termina la primera semana de la expedición. Yeni pregunta si quiere caminar junto a ella hasta el campamento.",
    choices: [
      { label: "Aceptar y contarle algo de la semana.", diary: "Cerró la semana compartiendo cómo se sintió." },
      { label: "Decir que prefiere ir solo y seguir de largo.", diary: "Cerró la semana guardándose lo que sintió." }
    ] }
];

dialogues_cordillera[2] = [
  { tag: "Lunes · Caminata de la tarde", text: "Es la hora de la caminata, algo que a <b>Rumi</b> siempre le ha gustado. Hoy, sin razón clara, no le provoca ir.",
    choices: [
      { label: "Ir de todas formas, aunque sea sin muchas ganas.", diary: "Fue a la caminata aunque no tenía ánimo." },
      { label: "Quedarse viendo el celular en la carpa.", diary: "Dejó pasar algo que antes disfrutaba.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · 6:30 a.m.", text: "Durmió sus ocho horas completas, pero se despierta como si no hubiera dormido nada.",
    choices: [
      { label: "Levantarse y desayunar con calma antes de salir.", diary: "Se dio un momento antes de arrancar el día." },
      { label: "Quedarse en el saco de dormir hasta el último minuto posible.", diary: "El cansancio le ganó la mañana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Chat con Yeni", text: "Yeni le escribe para caminar juntos después del descanso, como hacían antes.",
    choices: [
      { label: "Aceptar, aunque tenga que hacer un esfuerzo.", diary: "Aceptó salir, aunque le costó decidirse." },
      { label: "Responder que hoy no puede y quedarse en la carpa.", diary: "Prefirió quedarse solo, otra vez.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Error en el mapa", text: "Se equivoca leyendo el mapa frente al grupo. El pensamiento le llega rápido: \"soy un desastre para esto\".",
    choices: [
      { label: "Pensar que fue solo un error de lectura, no una sentencia.", diary: "Se corrigió el pensamiento antes de que creciera." },
      { label: "Quedarse repitiendo la idea el resto de la caminata.", diary: "Se quedó dándole vueltas al mismo pensamiento duro.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Fin de la caminata", text: "El guía Andino le pregunta, de pasada, \"¿todo bien, Rumi?\".",
    choices: [
      { label: "Contarle, aunque sea un poco, que ha estado desanimado.", diary: "Se animó a decir algo real sobre cómo se siente." },
      { label: "Responder \"sí, todo bien\" y seguir caminando.", diary: "Cerró la semana con la respuesta automática de siempre.", w: 1, ax: "depresion" }
    ] }
];

dialogues_cordillera[3] = [
  { tag: "Lunes · Cambio de ruta urgente", text: "El guía Andino anuncia un cambio de ruta urgente sin aviso previo, por el clima. A <b>Rumi</b> se le enfrían las manos antes de tomar el mapa.",
    choices: [
      { label: "Respirar hondo y empezar de todas formas.", diary: "Sintió los nervios pero pudo empezar igual." },
      { label: "Quedarse en blanco varios minutos antes de moverse.", diary: "El cuerpo se le tensionó más de la cuenta.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Descanso, otra vez", text: "El mismo grupo le puso un apodo burlón sobre cómo caminó la semana pasada. Hoy se lo repiten, más fuerte, cuando pasa cerca.",
    choices: [
      { label: "Decir, con calma, que ese apodo no le gusta.", diary: "Puso un límite claro frente al grupo." },
      { label: "Reírse también, aunque por dentro le moleste.", diary: "Fingió que no le afectaba, para que no siguieran.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Fogata de la expedición", text: "Hay una pequeña fogata para celebrar la mitad de la ruta. Rumi no está seguro de encajar todavía.",
    choices: [
      { label: "Ir un rato, aunque sea con algo de pena.", diary: "Se dio la oportunidad de aparecer, aunque le costara." },
      { label: "Inventar una excusa para no ir.", diary: "Prefirió quedarse por fuera, una vez más." }
    ] },
  { tag: "Jueves · Tramo nuevo y difícil", text: "Hay un tramo nuevo y difícil que no entiende bien cómo abordar. El guía Andino queda disponible después de la caminata.",
    choices: [
      { label: "Acercarse a preguntarle, aunque le dé pena.", diary: "Pidió ayuda en lugar de quedarse con la duda." },
      { label: "Quedarse con la duda antes que preguntar.", diary: "Prefirió no exponerse a preguntar en público.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre con Yeni", text: "Yeni le pregunta cómo le fue en general esta semana, con curiosidad real.",
    choices: [
      { label: "Contarle que fue una semana pesada.", diary: "Se animó a contar cómo se sintió de verdad." },
      { label: "Decir que todo normal, como siempre.", diary: "Volvió a la respuesta de siempre, sin entrar en detalle." }
    ] }
];

dialogues_cordillera[9] = [
  { tag: "Lunes · Noche, después de tarea", text: "Rumi había quedado con sus papás en apagar la consola a las 9. A las 9 justo, el juego lo deja a mitad de una partida importante.",
    choices: [
      { label: "Pausar y apagar, aunque quede a la mitad.", diary: "Respetó la hora acordada, aunque le costara." },
      { label: "Terminar \"solo esta partida\", ya son las 9:40.", diary: "Se quedó un buen rato más de lo acordado.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · 6:15 a.m.", text: "Se despierta agotado por dormir poco. Antes de una caminata larga, un compañero le recomienda una bebida energética para \"aguantar el día\".",
    choices: [
      { label: "Tomar agua o algo normal, y dormir temprano hoy.", diary: "Prefirió recuperar el sueño en vez de forzar el cuerpo." },
      { label: "Tomarse la bebida energética para aguantar.", diary: "Usó una bebida energética para tapar el cansancio.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Tarde", text: "Un amigo del chat le escribe: \"una partida más y ya\", justo cuando Rumi iba a empezar a revisar el equipo para mañana.",
    choices: [
      { label: "Responder que primero revisa el equipo.", diary: "Puso el equipo antes que \"una partida más\"." },
      { label: "Aceptar, y la revisión queda para después de varias partidas.", diary: "Dejó que \"una más\" se convirtiera en varias.", w: 1, ax: "adicciones" }
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

dialogues_cordillera[11] = [
  { tag: "Lunes · Chat de la expedición", text: "En el chat de la expedición, alguien empieza a burlarse de una foto que otra persona subió. Varios responden con risas.",
    choices: [
      { label: "No sumarse a las risas ni reenviar nada.", diary: "Se quedó al margen de la burla, sin participar." },
      { label: "Reenviar el chat a otro grupo, \"para que vean\".", diary: "Ayudó a que la burla llegara a más gente.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · La misma persona, otra vez", text: "La persona de la foto deja de escribir en el chat desde ayer. Nadie pregunta por qué.",
    choices: [
      { label: "Escribirle aparte para ver cómo está.", diary: "Se tomó un momento para preguntar por alguien más." },
      { label: "No decir nada, no es asunto suyo.", diary: "Dejó pasar la situación sin preguntar nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Se burlan de Rumi", text: "Ahora el chat cambia de blanco: alguien edita una foto de Rumi y la pone con un comentario burlón.",
    choices: [
      { label: "Pedirle a esa persona que la borre.", diary: "Puso un límite directo frente al grupo." },
      { label: "Salir del chat sin decir nada.", diary: "Prefirió desaparecer del chat en silencio.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El guía Andino pregunta", text: "El guía Andino pregunta si alguien ha visto algo raro en el chat de la expedición últimamente.",
    choices: [
      { label: "Contarle lo que ha estado pasando.", diary: "Se animó a contarle a un adulto lo que pasaba." },
      { label: "Decir que no ha visto nada.", diary: "Prefirió no contar lo que sabía.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de la semana", text: "El chat sigue activo, pero esta vez alguien escribe pidiendo que \"bajen la agresividad\".",
    choices: [
      { label: "Apoyar ese mensaje en el chat.", diary: "Respaldó públicamente que se bajara la agresividad." },
      { label: "Quedarse callado, como la mayoría.", diary: "Se quedó en silencio, como casi todos en el chat.", w: 1, ax: "bullying" }
    ] }
];

dialogues_cordillera[13] = [
  { tag: "Lunes · Anuncian la presentación frente a todos", text: "El guía Andino anuncia que el viernes cada expedicionario debe presentar su bitácora frente al grupo completo. A <b>Rumi</b> se le aprieta el estómago apenas lo escucha.",
    choices: [
      { label: "Anotarse entre los primeros en presentar.", diary: "Decidió no darle más vueltas y presentar temprano." },
      { label: "Pedir ser el último, para tener más tiempo de esperar.", diary: "Empujó la espera lo más lejos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo en la carpa", text: "Practica la presentación en voz baja, pero se le olvidan las palabras justo donde más las necesita.",
    choices: [
      { label: "Volver a intentarlo, aunque se trabe otra vez.", diary: "Insistió con el ensayo pese a los tropiezos." },
      { label: "Dejar de practicar para no sentir eso de nuevo.", diary: "Prefirió no volver a sentir ese tropiezo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Grupo de expedicionarios", text: "El grupo se reúne para repartir los temas de la bitácora. Le ofrecen escoger primero cuál quiere presentar.",
    choices: [
      { label: "Escoger el tema que le toque, sin pedir cambios.", diary: "Aceptó la parte que le tocó sin evitarla." },
      { label: "Escoger el tema más corto, para exponerse lo menos posible.", diary: "Buscó exponerse lo menos posible.", w: 1, ax: "ansiedad" }
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

dialogues_cordillera[15] = [
  { tag: "Lunes · Primer día libre", text: "Empiezan las vacaciones de mitad de año, sin caminatas ni campamento. El día se siente más largo y más vacío de lo esperado.",
    choices: [
      { label: "Proponerse una cosa pequeña para hacer hoy.", diary: "Se dio una razón pequeña para levantarse." },
      { label: "Quedarse en la cama la mayor parte del día.", diary: "Dejó pasar el día casi entero en la cama.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Mensaje de Yeni", text: "Yeni le escribe para planear algo durante la semana. Rumi ve el mensaje y lo deja en visto un buen rato.",
    choices: [
      { label: "Responder y proponer un día para verse.", diary: "Respondió y propuso verse esta semana." },
      { label: "Dejarlo en visto y no responder por ahora.", diary: "Dejó el mensaje sin responder.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Tarde sin planes", text: "No hay caminata ni campamento, y tampoco muchas ganas de hacer lo que antes le gustaba.",
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
      { label: "Escribirle a Yeni que ha estado un poco desanimado.", diary: "Se animó a contarle a Yeni cómo se ha sentido." },
      { label: "No decirle nada a nadie y seguir igual.", diary: "Prefirió no contarle a nadie cómo se sentía.", w: 1, ax: "depresion" }
    ] }
];

dialogues_cordillera[18] = [
  { tag: "Lunes · Trabajo en parejas", text: "El guía Andino pide formar parejas para revisar el mapa de la próxima ruta. Todos se acomodan rápido, menos un expedicionario nuevo que se queda sin pareja.",
    choices: [
      { label: "Ofrecerle hacer pareja con él.", diary: "Se ofreció a hacer pareja con quien se quedó solo." },
      { label: "Voltear la mirada y dejar que alguien más resuelva.", diary: "Evitó la mirada y dejó que otro resolviera.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Grupo cerrado", text: "En el descanso, un grupo arma un chat \"solo para elegidos\" y deja por fuera a un par de expedicionarios.",
    choices: [
      { label: "Preguntar por qué no está invitada toda la expedición.", diary: "Cuestionó dejar a compañeros por fuera del grupo." },
      { label: "Unirse al chat sin decir nada al respecto.", diary: "Se unió al grupo cerrado sin cuestionarlo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Puesto en el comedor de campamento", text: "A la hora del almuerzo, alguien le dice en voz baja que no se siente en la mesa de siempre porque \"ahí ya no cabe cualquiera\".",
    choices: [
      { label: "Sentarse ahí de todas formas, con calma.", diary: "No aceptó que le dijeran dónde no podía sentarse." },
      { label: "Buscar otra mesa para evitar el problema.", diary: "Evitó el conflicto cambiando de mesa.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El expedicionario nuevo, otra vez", text: "El expedicionario nuevo de la pareja del lunes sigue caminando solo casi todos los días.",
    choices: [
      { label: "Invitarlo a caminar con su grupo.", diary: "Lo invitó a integrarse a su grupo de siempre." },
      { label: "Notarlo y no hacer nada.", diary: "Notó que caminaba solo y no hizo nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Reunión de la expedición", text: "El guía Andino convoca una reunión corta sobre \"cómo nos estamos tratando entre expedicionarios\".",
    choices: [
      { label: "Comentar en la reunión lo que ha visto pasar.", diary: "Habló en la reunión sobre lo que ha visto." },
      { label: "Quedarse callado durante toda la reunión.", diary: "Se quedó callado durante toda la reunión.", w: 1, ax: "bullying" }
    ] }
];

dialogues_cordillera[21] = [
  { tag: "Lunes · Antes de dormir, otra vez", text: "Antes de dormir, Rumi abre \"solo un momento\" el feed de redes sociales. Treinta minutos después, sigue ahí.",
    choices: [
      { label: "Dejar el celular cargando fuera de la carpa.", diary: "Sacó el celular de la carpa antes de dormir." },
      { label: "Seguir viendo videos hasta quedarse dormido con el celular en la mano.", diary: "Se quedó dormido con el celular encendido en la mano.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Comparando", text: "Ve otras expediciones en redes y siente que la suya avanza menos que las de ellos.",
    choices: [
      { label: "Recordar que las redes muestran solo lo mejor de cada quien.", diary: "Se recordó que las redes no muestran todo." },
      { label: "Quedarse viendo perfiles ajenos un buen rato más.", diary: "Siguió comparando su expedición con lo que veía en pantalla.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Bitácora pendiente", text: "Tiene la bitácora por terminar antes de la caminata de mañana, pero el celular sigue vibrando con notificaciones.",
    choices: [
      { label: "Poner el celular en modo avión hasta terminar la bitácora.", diary: "Apagó las notificaciones para poder concentrarse." },
      { label: "Revisar cada notificación apenas suena, sin terminar la bitácora.", diary: "Dejó que las notificaciones interrumpieran toda la bitácora.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Un rato libre", text: "Tiene una hora libre antes de la cena de campamento. Podría llamar a alguien, salir un rato, o quedarse scrolleando.",
    choices: [
      { label: "Llamar a Yeni para hablar un rato.", diary: "Usó el tiempo libre para hablar con alguien de verdad." },
      { label: "Quedarse scrolleando sin darse cuenta de cuánto tiempo pasa.", diary: "El tiempo se le fue scrolleando sin notarlo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · El resumen semanal", text: "El celular muestra un resumen semanal: bastantes horas más de pantalla que la semana pasada.",
    choices: [
      { label: "Proponerse un límite para la próxima semana.", diary: "Se puso un límite para la semana que viene." },
      { label: "Cerrar la pantalla del resumen sin pensarlo más.", diary: "Ignoró el resumen y siguió igual.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_cordillera[23] = [
  { tag: "Lunes · Anuncian la ruta de altura", text: "Anuncian una ruta de altura, más exigente, para el viernes. A Rumi le gusta caminar, pero la idea de que lo evalúen su resistencia le pone el estómago pesado.",
    choices: [
      { label: "Anotarse a la ruta de todas formas.", diary: "Se anotó a la ruta pese a los nervios." },
      { label: "Decidir no ir, para no arriesgarse a que lo midan.", diary: "Evitó la ruta para no exponerse a ser evaluado.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Practicar solo", text: "Practica solo en un sendero cercano, pero se cansa varias veces seguidas y piensa en rendirse antes de intentarlo con el grupo.",
    choices: [
      { label: "Seguir practicando un rato más.", diary: "Insistió con la práctica pese a los tropiezos." },
      { label: "Guardar todo y no volver a practicar antes del viernes.", diary: "Dejó de practicar para no seguir cansándose.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Compañeros hablan de la ruta", text: "En el descanso, varios expedicionarios hablan de quién creen que va a rendir mejor en la ruta de altura. Rumi no sabe si mencionar que también va a ir.",
    choices: [
      { label: "Contarles que también se anotó a la ruta.", diary: "Se animó a contar que también participaría." },
      { label: "No decir nada, por si acaso no rinde bien.", diary: "Prefirió no contar nada, por si no rendía bien.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes de la ruta", text: "No logra dormir bien pensando en cómo le va a ir al día siguiente.",
    choices: [
      { label: "Hacer algo relajante antes de dormir, como música o estiramientos.", diary: "Se preparó con calma para el día siguiente." },
      { label: "Quedarse repasando cada tramo que podría costarle.", diary: "Se quedó despierto anticipando fallar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · La ruta de altura", text: "Llega el momento de la ruta. El guía Andino organiza el orden de salida uno por uno.",
    choices: [
      { label: "Salir cuando lo llaman, aunque le tiemble el pulso.", diary: "Salió aunque el pulso le temblara." },
      { label: "Pedir salir de último, para retrasar el momento.", diary: "Buscó retrasar lo más posible su turno.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_cordillera[25] = [
  { tag: "Lunes · Grupo de la ruta final", text: "Forman un chat para planear la ruta final del año. Una compañera pregunta algo simple y alguien responde con burla en vez de ayudarle.",
    choices: [
      { label: "Responderle la pregunta directamente, sin burlarse.", diary: "Ayudó en vez de sumarse a la burla." },
      { label: "Poner un emoji de risa a la burla, sin decir nada más.", diary: "Reaccionó con risa a la burla del grupo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Silencio de alguien", text: "Esa misma compañera deja de escribir en el chat desde entonces, aunque la ruta la necesita.",
    choices: [
      { label: "Escribirle aparte para que no se sienta sola con la ruta.", diary: "Se tomó un momento para incluirla aparte." },
      { label: "Dejar que el grupo avance sin ella.", diary: "Dejó que el grupo siguiera sin incluirla.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Reparto de responsabilidades", text: "Al repartir las responsabilidades de la ruta, alguien propone dejarle a esa compañera el tramo más difícil, \"total, para eso está\".",
    choices: [
      { label: "Proponer repartir las responsabilidades de forma más justa.", diary: "Pidió que el reparto fuera más justo para todos." },
      { label: "No decir nada y dejar que se la asignen así.", diary: "No dijo nada mientras le asignaban lo más difícil.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · Cierre de la ruta", text: "La ruta sale bien, en parte gracias a la compañera que casi quedó por fuera. Nadie se lo reconoce en el grupo.",
    choices: [
      { label: "Mencionar en el grupo el aporte de ella.", diary: "Reconoció en público el aporte de la compañera." },
      { label: "Dejar que el reconocimiento se lo lleven otros.", diary: "Dejó que el reconocimiento se lo llevaran otros.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de la ruta final", text: "El guía Andino pregunta cómo les pareció trabajar en grupo esta vez.",
    choices: [
      { label: "Comentar que el grupo podría tratarse mejor entre todos.", diary: "Habló sobre cómo se trataron entre compañeros." },
      { label: "Decir que todo estuvo bien, sin mencionar nada más.", diary: "Prefirió no mencionar cómo se trataron entre ellos.", w: 1, ax: "bullying" }
    ] }
];

dialogues_cordillera[27] = [
  { tag: "Lunes · Evaluación del trimestre", text: "El guía Andino le entrega su evaluación del trimestre. El desempeño bajó un poco frente al anterior, y el pensamiento de \"no sirvo para esto\" aparece rápido.",
    choices: [
      { label: "Revisar con calma en qué bajó y por qué.", diary: "Revisó con calma qué pasó con su evaluación." },
      { label: "Guardar la evaluación sin mirarla de nuevo en toda la semana.", diary: "Evitó volver a mirar la evaluación toda la semana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Tramo repetido", text: "Repite un tramo que ya había fallado antes. El cansancio de intentarlo otra vez le pesa más que el tramo mismo.",
    choices: [
      { label: "Pedirle ayuda a un compañero con el tramo.", diary: "Pidió ayuda en vez de rendirse con el tramo." },
      { label: "Dejar el tramo a medias y no volver a intentarlo.", diary: "Dejó el tramo a medias, sin volver a intentarlo.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Invitación de Yeni", text: "Yeni lo invita a practicar juntos para la evaluación de recuperación. Rumi no está seguro de que valga la pena el esfuerzo.",
    choices: [
      { label: "Aceptar practicar juntos, aunque sea sin muchas ganas.", diary: "Aceptó practicar con Yeni, aunque le costara decidirse." },
      { label: "Decir que mejor no, que total no va a servir de mucho.", diary: "Rechazó ayuda pensando que no iba a servir de nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Cena en casa", text: "En la cena, sus papás le preguntan por la evaluación. Rumi siente ganas de quedarse callado y terminar rápido.",
    choices: [
      { label: "Contarles cómo se ha sentido con el trimestre.", diary: "Les contó a sus papás cómo se ha sentido." },
      { label: "Responder con monosílabos y levantarse de la mesa.", diary: "Respondió con monosílabos y se levantó rápido.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Evaluación de recuperación", text: "Llega la evaluación de recuperación. Ya practicó algo con Yeni, pero la duda de si sirvió de algo sigue ahí.",
    choices: [
      { label: "Presentarla con lo que alcanzó a preparar.", diary: "Presentó la evaluación con lo que había preparado." },
      { label: "Pensar que da igual cómo le vaya y hacerla a medias.", diary: "Entregó la evaluación a medias, pensando que daba igual.", w: 1, ax: "depresion" }
    ] }
];

dialogues_cordillera[29] = [
  { tag: "Lunes · Nuevo capítulo cada noche", text: "Empezó una serie nueva y cada noche se dice a sí mismo que ve \"solo un capítulo más\" antes de dormir.",
    choices: [
      { label: "Ponerse una alarma para apagar la serie a cierta hora.", diary: "Se puso un límite de horario para ver series." },
      { label: "Ver varios capítulos seguidos hasta muy tarde.", diary: "Se quedó viendo varios capítulos hasta muy tarde.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Ruta importante en dos días", text: "Tiene una ruta importante en dos días, pero el capítulo de anoche terminó justo en un momento clave.",
    choices: [
      { label: "Dejar la serie pausada y repasar el equipo.", diary: "Priorizó repasar en vez de seguir la serie." },
      { label: "Ver \"solo un capítulo más\" antes de revisar la mochila.", diary: "Pospuso el repaso por ver un capítulo más.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Cansancio en el campamento", text: "Se queda dormido un momento en el campamento, justo cuando explican lo que más le sirve para la ruta importante.",
    choices: [
      { label: "Dormir más temprano esa noche para recuperar sueño.", diary: "Decidió dormir más temprano para recuperarse." },
      { label: "Ver otro capítulo esa noche también, \"ya qué más da\".", diary: "Siguió la maratón, pensando que ya daba igual.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Noche antes de la ruta importante", text: "Podría repasar su equipo o terminar la temporada completa que le falta.",
    choices: [
      { label: "Repasar su equipo antes de dormir temprano.", diary: "Repasó su equipo antes de dormir temprano." },
      { label: "Terminar la temporada completa esa misma noche.", diary: "Terminó la temporada completa la noche antes de la ruta.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · La ruta importante", text: "Llega a la ruta importante con el cansancio acumulado de varias noches cortas.",
    choices: [
      { label: "Hacer lo mejor posible con la energía que tiene.", diary: "Hizo la ruta con lo mejor de la energía que le quedaba." },
      { label: "Pensar que da igual, hacerlo rápido y sin cuidado.", diary: "Hizo la ruta rápido, sin revisar nada.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_cordillera[31] = [
  { tag: "Lunes · Nuevo guía temporal", text: "El guía Andino se toma unas semanas y llega un guía temporal con fama de exigente. Hoy es la primera caminata con él.",
    choices: [
      { label: "Caminar adelante, aunque dé más nervios.", diary: "Caminó adelante pese a los nervios." },
      { label: "Caminar al final para pasar desapercibido.", diary: "Buscó pasar desapercibido al final.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primer tramo con él", text: "Deja un tramo difícil para el día siguiente. Rumi no está seguro de haberlo entendido bien.",
    choices: [
      { label: "Preguntarle una duda por el chat de la expedición.", diary: "Se animó a preguntar su duda directamente." },
      { label: "No preguntar nada, aunque quede con dudas.", diary: "Se quedó con dudas en vez de preguntar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Revisión en la reunión", text: "El guía temporal empieza a revisar el tramo en voz alta, llamando al azar a quien lo explique frente a todos.",
    choices: [
      { label: "Prepararse mentalmente por si lo llaman.", diary: "Se preparó mentalmente por si lo llamaban." },
      { label: "Evitar mirarlo, esperando que no lo note.", diary: "Evitó la mirada del guía todo el rato.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Lo llaman al frente", text: "El guía temporal dice su nombre. Es su turno de pasar a explicar el tramo.",
    choices: [
      { label: "Pasar al frente, aunque le tiemble la voz.", diary: "Pasó al frente aunque le temblara la voz." },
      { label: "Decir que no se acuerda, para no intentarlo.", diary: "Dijo que no se acordaba, para no intentarlo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre de la semana con el guía temporal", text: "Termina la primera semana completa con el guía temporal. Ya no se siente tan desconocido como el lunes.",
    choices: [
      { label: "Contarle a Yeni que la semana no fue tan mala.", diary: "Reconoció que la semana no fue tan mala." },
      { label: "Seguir pensando que el próximo tramo será un desastre.", diary: "Siguió anticipando que lo próximo sería un desastre.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_cordillera[33] = [
  { tag: "Lunes · La noticia", text: "Un expedicionario cercano anuncia que su familia se muda de ciudad en un mes.",
    choices: [
      { label: "Preguntarle cómo se siente con la noticia.", diary: "Se interesó por cómo se sentía su compañero." },
      { label: "No decir mucho al respecto y cambiar de tema.", diary: "Evitó hablar del tema y cambió de conversación.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Últimas semanas juntos", text: "Sabe que le quedan pocas semanas para caminar con este expedicionario, pero no tiene muchas ganas de hacer planes.",
    choices: [
      { label: "Proponer hacer algo juntos antes de que se vaya.", diary: "Propuso aprovechar el tiempo que queda." },
      { label: "Dejar pasar los días sin proponer nada.", diary: "Dejó pasar los días sin proponer nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Recuerdos", text: "Revisando fotos viejas, encuentra varias de momentos con este expedicionario y con otros que ya no ve tan seguido.",
    choices: [
      { label: "Escribirle a alguien de esas fotos, solo para saludar.", diary: "Retomó contacto con alguien que ya no veía tanto." },
      { label: "Cerrar las fotos y no escribirle a nadie.", diary: "Cerró las fotos sin escribirle a nadie.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Despedida improvisada", text: "Algunos expedicionarios organizan una despedida informal para el viernes. Rumi no está seguro de tener ánimo para ir.",
    choices: [
      { label: "Ir a la despedida, aunque sea un rato.", diary: "Fue a la despedida, aunque fuera un rato." },
      { label: "Decir que tiene algo que hacer y no ir.", diary: "Se excusó y no fue a la despedida.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Después de la despedida", text: "El expedicionario ya se fue. El campamento se siente un poco distinto sin él, al menos por ahora.",
    choices: [
      { label: "Prometerle mantener contacto y cumplirlo esa misma semana.", diary: "Mantuvo el contacto esa misma semana, como prometió." },
      { label: "Pensar que igual ya no va a ser lo mismo y dejarlo ahí.", diary: "Dejó el contacto ahí, pensando que ya no sería lo mismo.", w: 1, ax: "depresion" }
    ] }
];

dialogues_cordillera[35] = [
  { tag: "Lunes · Equipo gastado", text: "Una compañera llega con el equipo de montaña visiblemente gastado, y un par de personas empiezan a hacer comentarios en voz baja.",
    choices: [
      { label: "Caminar junto a ella como cualquier otro día.", diary: "Se sentó con ella como cualquier otro día." },
      { label: "Reírse por lo bajo con el resto del grupo.", diary: "Se sumó a las risas por lo bajo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Se repite", text: "Los comentarios sobre su equipo siguen, ahora un poco más fuerte, cuando ella pasa cerca del grupo.",
    choices: [
      { label: "Decirles a los demás que paren con eso.", diary: "Les pidió a los demás que pararan los comentarios." },
      { label: "Quedarse callado, aunque le parezca injusto.", diary: "Se quedó callado aunque le pareciera injusto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Ella deja de participar", text: "La compañera empieza a evitar los descansos, quedándose sola en la carpa.",
    choices: [
      { label: "Ir a acompañarla un rato en la carpa.", diary: "Fue a acompañarla en la carpa." },
      { label: "No hacer nada, no es su problema.", diary: "No hizo nada, pensando que no era su problema.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El guía Andino pregunta", text: "El guía Andino nota que ella ha estado distinta y pregunta a la expedición si alguien sabe algo.",
    choices: [
      { label: "Contarle lo que ha estado pasando con los comentarios.", diary: "Le contó al guía lo que había visto." },
      { label: "Decir que no ha notado nada raro.", diary: "Dijo que no había notado nada raro.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de semana", text: "El grupo tiene una charla corta sobre respeto entre compañeros, después de lo hablado con el guía.",
    choices: [
      { label: "Participar contando lo que aprendió esta semana.", diary: "Participó contando lo que aprendió esta semana." },
      { label: "Quedarse callado durante toda la charla.", diary: "Se quedó callado durante toda la charla.", w: 1, ax: "bullying" }
    ] }
];

dialogues_cordillera[37] = [
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

dialogues_cordillera[39] = [
  { tag: "Lunes · Anuncian la reunión", text: "Sus papás anuncian una reunión familiar grande el sábado, con primos y tíos que Rumi no ve seguido.",
    choices: [
      { label: "Preguntar quiénes van a estar, con curiosidad.", diary: "Preguntó con curiosidad quiénes iban a estar." },
      { label: "Empezar a pensar en excusas para no ir.", diary: "Empezó a pensar en excusas para no ir.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Comentario de un tío", text: "Recuerda que en la última reunión un tío le hizo una pregunta incómoda sobre la expedición frente a todos.",
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

dialogues_cordillera[41] = [
  { tag: "Lunes · Los eligen para el encuentro interregional", text: "El equipo de Rumi queda seleccionado para representar a la expedición en el encuentro interregional de expediciones juveniles. Hay que presentarse frente a evaluadores que no conocen.",
    choices: [
      { label: "Alegrarse y empezar a preparar la presentación.", diary: "Se alegró y empezó a preparar la presentación." },
      { label: "Pensar en pedir que otro del equipo hable en su lugar.", diary: "Pensó en dejar que otro hablara en su lugar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo frente al grupo", text: "Ensayan la presentación frente al resto de la expedición antes del viaje. Le toca explicar la parte central de la ruta.",
    choices: [
      { label: "Explicar su parte, aunque se sienta expuesto frente a todos.", diary: "Explicó su parte pese a sentirse expuesto." },
      { label: "Pedir hacer solo la parte más corta y sencilla.", diary: "Buscó la parte más corta para exponerse lo menos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Viaje al encuentro", text: "En el bus hacia el encuentro interregional, piensa en todo lo que los evaluadores podrían preguntarle.",
    choices: [
      { label: "Repasar con calma lo que ya preparó.", diary: "Repasó con calma lo que ya había preparado." },
      { label: "Imaginar solo las preguntas que no sabría responder.", diary: "Solo imaginó las preguntas que no sabría responder.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Turno de presentar", text: "Llega el turno de su equipo frente a los evaluadores del encuentro.",
    choices: [
      { label: "Empezar a hablar aunque las manos le suden.", diary: "Empezó a hablar aunque las manos le sudaran." },
      { label: "Quedarse callado esperando que hable primero otro del equipo.", diary: "Esperó a que otro del equipo hablara primero.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Resultados", text: "Anuncian los resultados del encuentro interregional. El equipo de Rumi no gana, pero recibe una mención especial.",
    choices: [
      { label: "Sentirse orgulloso de haber participado, gane o no.", diary: "Se sintió orgulloso de haber participado." },
      { label: "Pensar que no ganar significa que no sirvió de nada.", diary: "Pensó que no ganar significaba que no había servido de nada.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_cordillera[43] = [
  { tag: "Lunes · Otra semana igual", text: "Faltan pocas semanas para terminar el año, pero las caminatas empiezan a sentirse todas iguales, sin mucho ánimo de por medio.",
    choices: [
      { label: "Buscar algo pequeño y distinto para hacer hoy.", diary: "Buscó algo pequeño y distinto para hacer hoy." },
      { label: "Dejar que el día pase igual que los anteriores.", diary: "Dejó que el día pasara igual que los anteriores.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Entrenamiento de fútbol", text: "Tiene entrenamiento, algo que normalmente disfruta, pero hoy le cuesta encontrar ganas de ir.",
    choices: [
      { label: "Ir al entrenamiento, aunque sea sin muchas ganas.", diary: "Fue al entrenamiento aunque no tuviera muchas ganas." },
      { label: "Inventar una excusa para no ir esta vez.", diary: "Inventó una excusa para no ir al entrenamiento.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Mensaje sin responder", text: "Yeni le escribe preguntando si quiere hacer algo el fin de semana. El mensaje queda sin responder varias horas.",
    choices: [
      { label: "Responder, aunque sea para decir que lo piensa.", diary: "Respondió el mensaje, aunque fuera para pensarlo." },
      { label: "Dejarlo sin responder hasta el día siguiente.", diary: "Dejó el mensaje sin responder hasta el día siguiente.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Parte de la caminata que más disfruta", text: "En la parte de la caminata que más suele disfrutar, hoy no logra concentrarse ni encontrarle sentido.",
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

dialogues_cordillera[45] = [
  { tag: "Lunes · Un rumor", text: "Corre un rumor entre los expedicionarios sobre por qué un compañero faltó varios días — nadie sabe si es cierto, pero todos lo repiten.",
    choices: [
      { label: "Preguntarle directamente a él qué pasó, con respeto.", diary: "Prefirió preguntar directamente antes que suponer." },
      { label: "Repetir el rumor a alguien más, \"por si acaso es cierto\".", diary: "Ayudó a que el rumor siguiera corriendo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · El rumor crece", text: "El rumor ya cambió varias veces de versión, cada vez más exagerado.",
    choices: [
      { label: "Aclarar frente al grupo que no se sabe si es cierto.", diary: "Aclaró frente al grupo que el rumor no estaba confirmado." },
      { label: "Sumarle un detalle más, aunque no lo sepa de cierto.", diary: "Sumó un detalle más al rumor sin saberlo de cierto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · El compañero se entera", text: "El expedicionario del rumor se entera de lo que se dice de él y deja de hablar con casi todos.",
    choices: [
      { label: "Buscarlo para decirle que no cree el rumor.", diary: "Le dijo directamente que no creía el rumor." },
      { label: "No decirle nada, para no meterse en el tema.", diary: "No le dijo nada, para no meterse en el tema.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · Se sabe la verdad", text: "Se aclara que el expedicionario había faltado por un motivo normal, nada parecido a lo que decía el rumor.",
    choices: [
      { label: "Reconocer frente a otros que el rumor era falso.", diary: "Reconoció frente a otros que el rumor era falso." },
      { label: "No decir nada más al respecto.", diary: "No dijo nada más al respecto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de semana", text: "El expedicionario vuelve a hablar con el grupo, aunque todavía un poco más callado que antes.",
    choices: [
      { label: "Acercarse a hablar con él como antes del rumor.", diary: "Se acercó a hablar con él como antes." },
      { label: "Seguir tratándolo distinto, por si el rumor tenía algo de cierto.", diary: "Siguió tratándolo distinto, por si acaso.", w: 1, ax: "bullying" }
    ] }
];

dialogues_cordillera[47] = [
  { tag: "Lunes · Detrás de las carpas", text: "En el descanso, un grupo pequeño vapea a escondidas detrás de las carpas y le ofrecen probar a Rumi.",
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

dialogues_cordillera[49] = [
  { tag: "Lunes · Anuncian el calendario de evaluación final", text: "Publican el calendario de evaluación final de la expedición: cinco tramos en cinco días.",
    choices: [
      { label: "Organizar un plan de trabajo por día.", diary: "Organizó un plan de trabajo para la semana." },
      { label: "Evitar mirar el calendario completo de una vez.", diary: "Evitó mirar el calendario completo de una vez.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primer tramo", text: "Presenta el primer tramo. Al terminar, se queda pensando si resolvió bien la mitad de los puntos.",
    choices: [
      { label: "Dejarlo ir y concentrarse en el siguiente tramo.", diary: "Dejó ir el tramo y se concentró en el siguiente." },
      { label: "Quedarse repasando mentalmente cada detalle el resto del día.", diary: "Se quedó repasando cada detalle todo el día.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Duda con un tema", text: "Repasando para el tramo de mañana, encuentra algo que no recuerda haber visto bien.",
    choices: [
      { label: "Escribirle a un compañero para entender ese tema.", diary: "Pidió ayuda para entender el tema que le faltaba." },
      { label: "Saltarse ese tema, esperando que no salga en el tramo.", diary: "Se saltó el tema, esperando que no saliera.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes del tramo más difícil", text: "Mañana es el tramo que más le preocupa de toda la semana.",
    choices: [
      { label: "Dormir temprano, aunque sienta que le falta repasar.", diary: "Priorizó dormir, aunque sintiera que le faltaba repasar." },
      { label: "Quedarse trabajando hasta muy tarde, sin parar.", diary: "Se quedó trabajando hasta muy tarde, sin parar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Último tramo", text: "Presenta el último tramo de la semana. Al salir, la semana de evaluación final queda atrás.",
    choices: [
      { label: "Celebrar que la semana de evaluación terminó, salga como salga.", diary: "Celebró que la semana de evaluación había terminado." },
      { label: "Empezar a preocuparse ya por los resultados antes de saberlos.", diary: "Empezó a preocuparse por los resultados antes de saberlos.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_cordillera[51] = [
  { tag: "Lunes · Última ruta del año", text: "Para la última ruta grupal del año, el guía Andino pide incluir en cada equipo a alguien con quien no hayan trabajado antes.",
    choices: [
      { label: "Proponer sumar a alguien que suele quedar por fuera de los equipos.", diary: "Propuso sumar a alguien que solía quedar por fuera." },
      { label: "Formar equipo con los de siempre y ya.", diary: "Formó equipo con los de siempre, sin sumar a nadie más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Primeras reuniones", text: "El nuevo integrante del equipo, poco acostumbrado a que lo incluyan, no dice casi nada en la primera reunión.",
    choices: [
      { label: "Preguntarle directamente su opinión sobre la ruta.", diary: "Le preguntó directamente su opinión sobre la ruta." },
      { label: "Dejar que el resto del equipo decida todo sin él.", diary: "Dejó que el resto del equipo decidiera todo sin él.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Un comentario aparte", text: "Alguien le dice a Rumi, en broma, que \"le tocó cargar\" con ese compañero en el equipo.",
    choices: [
      { label: "Decir que no lo ve como una carga, sino como parte del equipo.", diary: "Defendió al compañero frente al comentario." },
      { label: "Reírse del comentario, sin decir nada más.", diary: "Se rió del comentario, sin decir nada más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El aporte del nuevo integrante", text: "El compañero nuevo termina proponiendo la mejor idea para la ruta.",
    choices: [
      { label: "Reconocer frente al grupo que fue la mejor idea.", diary: "Reconoció frente al grupo que fue la mejor idea." },
      { label: "Usar la idea sin mencionar de quién fue.", diary: "Usó la idea sin mencionar de quién había sido.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre del año de la expedición", text: "El equipo cierra la última ruta del año. El ambiente entre todos se siente distinto al del primer día.",
    choices: [
      { label: "Agradecerle al grupo completo, incluyendo al que se sumó al final.", diary: "Agradeció a todo el grupo, incluyendo al que se sumó al final." },
      { label: "Cerrar la ruta sin mencionar a nadie en particular.", diary: "Cerró la ruta sin mencionar a nadie en particular.", w: 1, ax: "bullying" }
    ] }
];

const mechanics_cordillera = {};

mechanics_cordillera[4] = { type: "habit", axis: "depresion", diaryWeek: "Semana 4", totalDays: 5,
  intro: "Semana 4. Rumi encuentra una planta pequeña en una maceta del campamento que le encargaron cuidar unos días. Nadie le pide que la cuide. Durante 5 días, puede regarla o no.",
  doLabel: "Regarla", skipLabel: "Dejarla para después", itemLabel: "la regó" };

mechanics_cordillera[5] = { type: "timing", diaryWeek: "Semana 5",
  intro: "Semana 5. Antes de la caminata, Rumi debe alcanzar al grupo justo cuando sale del campamento — ni antes, ni después.",
  actionLabel: "¡Ahora!", verbPast: "alcanzó a tiempo" };

mechanics_cordillera[6] = { type: "social", axis: "bullying", diaryWeek: "Semana 6", verbPast: "saludó a", continueLabel: "Seguir",
  intro: "Semana 6. Es descanso entre tramos. Rumi puede saludar a quien quiera, a nadie, o simplemente seguir cuando esté listo.",
  classmates: [
    { initials: "AL", saludo: "Alejo te saluda de vuelta." },
    { initials: "BE", saludo: "Beto te pregunta cómo va tu día." },
    { initials: "KV", saludo: "Kevin te choca la mano al pasar." }
  ] };

mechanics_cordillera[7] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 7",
  intro: "Semana 7. Un pensamiento aparece: \"no camino tan bien como los demás expedicionarios\". Reconocerlo no resta ni suma nada. Lo que sí se registra es cuando Rumi decide probar una forma distinta de verlo.",
  thoughts: [
    { t: "Con lo que hago, seguro nadie se fija en mí.", r: "¿Y si lo que haces sí se nota, aunque nadie lo diga en voz alta?" },
    { t: "Los demás la tienen más fácil que yo.", r: "¿Y si cada quien está peleando algo que no se ve?" },
    { t: "Si me equivoco aquí, van a pensar que no sirvo.", r: "¿Y si equivocarse es justo la parte donde se aprende algo?" },
    { t: "No valgo tanto como para que esto me salga bien.", r: "¿Y si el resultado de hoy no dice nada sobre lo que vales?" }
  ] };

mechanics_cordillera[8] = { type: "social", axis: null, diaryWeek: "Semana 8", verbPast: "se acercó a", continueLabel: "Terminar semana 8",
  intro: "Semana 8. Jornada abierta de la expedición. Rumi cruza el campamento y llega donde están los mismos compañeros de siempre, cerca de la fogata. Semana de revisión: no suma puntos nuevos a ningún eje.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo invita a hacer fila juntos." },
    { initials: "BE", saludo: "Beto le guarda un puesto." },
    { initials: "KV", saludo: "Kevin le pasa algo de comer." }
  ] };

mechanics_cordillera[10] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 10", totalDays: 5,
  intro: "Semana 10. Rumi y sus papás acordaron una hora para apagar pantallas cada noche. Durante 5 noches, puede cumplirla o no — nadie se lo recuerda en el juego.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_cordillera[12] = { type: "social", axis: "bullying", diaryWeek: "Semana 12", verbPast: "se acercó a", continueLabel: "Terminar semana 12",
  intro: "Semana 12. En la revisión del mapa de la próxima ruta, hacen el trabajo en pareja. Rumi puede acercarse a proponer algo, a nadie, o simplemente esperar a que alguien más hable.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra en qué va su parte." },
    { initials: "BE", saludo: "Beto le pregunta qué tramo le gustaría cubrir." },
    { initials: "KV", saludo: "Kevin le pasa sus apuntes para revisar juntos." }
  ] };

mechanics_cordillera[14] = { type: "timing", diaryWeek: "Semana 14",
  intro: "Semana 14. En un simulacro de primeros auxilios en la montaña, hay que actuar justo cuando el cronómetro marca el segundo indicado — ni antes, ni después.",
  actionLabel: "¡Actuar ahora!", verbPast: "actuó a tiempo" };

mechanics_cordillera[16] = { type: "social", axis: "bullying", diaryWeek: "Semana 16", verbPast: "se acercó a", continueLabel: "Terminar semana 16",
  intro: "Semana 16. Primer día de vuelta al campamento después de las vacaciones. El lugar está lleno de gente que Rumi no ve hace tiempo.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo saluda con un choque de manos." },
    { initials: "BE", saludo: "Beto le cuenta cómo estuvieron sus vacaciones." },
    { initials: "KV", saludo: "Kevin le pregunta si vio la ruta del fin de semana." }
  ] };

mechanics_cordillera[17] = { type: "habit", axis: "depresion", diaryWeek: "Semana 17", totalDays: 5,
  intro: "Semana 17. El campamento adoptó un par de gallinas para el huerto. Nadie asignó turnos fijos para darles de comer.",
  doLabel: "Darles de comer", skipLabel: "Dejarlo para después", itemLabel: "les dio de comer a las gallinas" };

mechanics_cordillera[19] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 19",
  intro: "Semana 19. Otro pensamiento aparece sobre si de verdad encaja en la expedición.",
  thoughts: [
    { t: "Si no respondo rápido, van a dejar de invitarme.", r: "¿Y si una amistad de verdad no depende de responder en segundos?" },
    { t: "Me veo raro en las fotos que suben del grupo.", r: "¿Y si una sola foto no dice cómo te ves siempre?" },
    { t: "Seguro los demás notan todo lo que me sale mal.", r: "¿Y si casi nadie se fija tanto como yo creo?" },
    { t: "Si digo lo que pienso, capaz ya no les caigo bien.", r: "¿Y si decir lo que piensas es parte de por qué te quieren cerca?" }
  ] };

mechanics_cordillera[20] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 20", totalDays: 5,
  intro: "Semana 20. Hay un puente festivo de varios días antes de volver al campamento. Rumi puede seguir apagando las pantallas a la hora acordada, o dejar que el puente se le vaya en eso.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_cordillera[22] = { type: "habit", axis: "depresion", diaryWeek: "Semana 22", totalDays: 5,
  intro: "Semana 22. El perro de la casa espera su paseo después de la caminata. Nadie más en la casa insiste en que Rumi lo saque.",
  doLabel: "Sacarlo a pasear", skipLabel: "Dejarlo para después", itemLabel: "sacó a pasear al perro" };

mechanics_cordillera[24] = { type: "timing", diaryWeek: "Semana 24",
  intro: "Semana 24. En un cruce del sendero, hay que pasar el puente colgante justo cuando el guía da la señal — ni antes, ni después.",
  actionLabel: "¡Cruzar!", verbPast: "cruzó en el momento justo" };

mechanics_cordillera[26] = { type: "social", axis: "bullying", diaryWeek: "Semana 26", verbPast: "se acercó a", continueLabel: "Terminar semana 26",
  intro: "Semana 26. Un grupo de expedicionarios organiza comer algo junto a la fogata después de la caminata. Rumi puede sumarse a la conversación, a nadie, o simplemente ir en silencio.",
  classmates: [
    { initials: "AL", saludo: "Alejo le guarda un puesto junto a la fogata." },
    { initials: "BE", saludo: "Beto le pregunta qué va a comer." },
    { initials: "KV", saludo: "Kevin le cuenta un chiste malo, como siempre." }
  ] };

mechanics_cordillera[28] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 28",
  intro: "Semana 28. Otro pensamiento aparece, esta vez relacionado con la evaluación de recuperación de la semana pasada.",
  thoughts: [
    { t: "Si vuelvo a fallar, ya no vale la pena intentarlo.", r: "¿Y si fallar una vez no significa que no valga la pena seguir intentando?" },
    { t: "Los demás aprenden más rápido que yo.", r: "¿Y si cada quien aprende a un ritmo distinto, no mejor ni peor?" },
    { t: "Ya perdí el trimestre, para qué esforzarme ahora.", r: "¿Y si lo que haga de aquí en adelante también cuenta?" },
    { t: "Si pido ayuda, van a pensar que no puedo solo.", r: "¿Y si pedir ayuda es parte de aprender a resolver las cosas?" }
  ] };

mechanics_cordillera[30] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 30", totalDays: 5,
  intro: "Semana 30. Hay una semana corta de receso. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que el receso se le vaya igual que antes.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_cordillera[32] = { type: "habit", axis: "depresion", diaryWeek: "Semana 32", totalDays: 5,
  intro: "Semana 32. El campamento tiene una mula de carga que ayuda con el equipo. Esta semana le toca a Rumi encargarse de darle de comer, sin que nadie se lo recuerde.",
  doLabel: "Darle de comer", skipLabel: "Dejarlo para después", itemLabel: "le dio de comer a la mula" };

mechanics_cordillera[34] = { type: "timing", diaryWeek: "Semana 34",
  intro: "Semana 34. En clase de cocina (aparte de la expedición), hay que sacar la olla del fuego justo cuando el agua hierve — ni antes, ni después.",
  actionLabel: "¡Sacarla ahora!", verbPast: "sacó la olla en el momento justo" };

mechanics_cordillera[36] = { type: "social", axis: "bullying", diaryWeek: "Semana 36", verbPast: "participó con", continueLabel: "Terminar semana 36",
  intro: "Semana 36. Un grupo de expedicionarios se reúne un sábado en casa de un compañero para repasar juntos. Rumi puede participar de la conversación, a nadie, o quedarse callado con su cuaderno.",
  classmates: [
    { initials: "AL", saludo: "Alejo le explica la parte que no entendía." },
    { initials: "BE", saludo: "Beto le pregunta si quiere algo de tomar." },
    { initials: "KV", saludo: "Kevin le muestra sus apuntes de la ruta." }
  ] };

mechanics_cordillera[38] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 38",
  intro: "Semana 38. Antes de una reunión familiar grande, otro pensamiento aparece, tal cual lo pensaría cualquiera.",
  thoughts: [
    { t: "Si no soy igual de gracioso que mis primos, se van a aburrir conmigo.", r: "¿Y si no hace falta ser el más gracioso para que disfruten estar contigo?" },
    { t: "Seguro todos notan que estoy más callado que antes.", r: "¿Y si estar más callado un rato no es algo que todos estén midiendo?" },
    { t: "Si digo algo raro, se van a acordar de eso para siempre.", r: "¿Y si la gente olvida esas cosas más rápido de lo que uno cree?" },
    { t: "Debería tener más de qué hablar con la familia.", r: "¿Y si escuchar también cuenta como estar presente?" }
  ] };

mechanics_cordillera[40] = { type: "social", axis: "bullying", diaryWeek: "Semana 40", verbPast: "conversó con", continueLabel: "Terminar semana 40",
  intro: "Semana 40. Cierra la primera mitad del año. En un descanso, varios expedicionarios conversan sobre lo que se viene en el segundo semestre.",
  classmates: [
    { initials: "AL", saludo: "Alejo le cuenta sus planes para el segundo semestre." },
    { initials: "BE", saludo: "Beto le pregunta cómo le fue en todo este tiempo." },
    { initials: "KV", saludo: "Kevin le propone seguir caminando juntos." }
  ] };

mechanics_cordillera[42] = { type: "habit", axis: "depresion", diaryWeek: "Semana 42", totalDays: 5,
  intro: "Semana 42. Hay un huerto de altura que mantiene la expedición, con turnos por grupo. Esta semana le toca a Rumi revisarlo y regarlo, sin que nadie se lo recuerde.",
  doLabel: "Revisarlo y regarlo", skipLabel: "Dejarlo para después", itemLabel: "revisó y regó el huerto" };

mechanics_cordillera[44] = { type: "timing", diaryWeek: "Semana 44",
  intro: "Semana 44. Hay que actuar en un simulacro de emergencia en el sendero justo en el momento indicado — ni antes, ni después.",
  actionLabel: "¡Actuar ahora!", verbPast: "actuó en el momento justo" };

mechanics_cordillera[46] = { type: "social", axis: "bullying", diaryWeek: "Semana 46", verbPast: "ensayó con", continueLabel: "Terminar semana 46",
  intro: "Semana 46. La expedición prepara el acto de cierre de año. En el ensayo, Rumi puede sumarse a la conversación del grupo, a nadie, o quedarse en silencio practicando solo.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra el nudo que le está costando." },
    { initials: "BE", saludo: "Beto le pregunta si quiere ensayar juntos el acto." },
    { initials: "KV", saludo: "Kevin le presta su turno del parlante para practicar." }
  ] };

mechanics_cordillera[48] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 48",
  intro: "Semana 48. Con el año casi terminado, otro pensamiento aparece sobre cómo le fue en la expedición este año.",
  thoughts: [
    { t: "Este año no logré tanto como debería.", r: "¿Y si lograr menos de lo esperado no borra lo que sí logró?" },
    { t: "Los demás van a recordar solo mis errores del año.", r: "¿Y si la gente recuerda mucho menos de lo que uno cree?" },
    { t: "Si el próximo año es igual de difícil, no sé si voy a poder.", r: "¿Y si no hace falta saberlo todavía, solo ir viendo semana a semana?" },
    { t: "No cambié tanto como pensé que iba a cambiar.", r: "¿Y si los cambios más importantes no siempre se notan de inmediato?" }
  ] };

mechanics_cordillera[50] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 50", totalDays: 5,
  intro: "Semana 50. Faltan pocas semanas para las vacaciones largas de fin de año. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que la ansiedad de fin de año se lo lleve todo frente a una pantalla.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_cordillera[52] = { type: "social", axis: "bullying", diaryWeek: "Semana 52", verbPast: "se despidió de", continueLabel: "Cerrar el año",
  intro: "Semana 52, último día del año en la Expedición Cordillera. Rumi se despide de un año completo de expedición. En el campamento base, todos los expedicionarios se reúnen una última vez antes de las vacaciones.",
  classmates: [
    { initials: "AL", saludo: "Alejo le da un abrazo de despedida." },
    { initials: "BE", saludo: "Beto le promete escribirle en vacaciones." },
    { initials: "KV", saludo: "Kevin le desea felices vacaciones." }
  ] };

if (typeof module !== "undefined") { module.exports = { dialogues_cordillera, mechanics_cordillera }; }
