// Historia "La Banda" — piel narrativa sobre el mismo motor clínico.
// Mismo eje, mismo peso, mismo mecanismo que "Rumi en el colegio" en cada semana;
// solo cambia el escenario, los nombres y el tono, según
// historias-seleccionables-piel-narrativa.md y los documentos de adaptación semana a semana.

const dialogues_banda = {};

dialogues_banda[1] = [
  { tag: "Lunes · Sala de ensayo", text: "Es tu primer lunes en la Banda Juvenil del Cerro. El director Mauro pide que cada quien elija un lugar para afinar. <b>Rumi</b> se queda de pie un segundo de más.",
    choices: [
      { label: "Ir a un rincón solo, lejos del grupo.", diary: "Buscó un lugar tranquilo, lejos del ruido.", w: 1, ax: "ansiedad" },
      { label: "Acercarse a donde afinan los demás.", diary: "Prefirió no estar solo el primer día." }
    ] },
  { tag: "Martes · Descanso del ensayo", text: "En la pausa, un grupo se ríe fuerte cerca de los instrumentos. No sabes si se ríen contigo o de algo tuyo.",
    choices: [
      { label: "Acercarse y preguntar qué es tan gracioso.", diary: "Decidió acercarse en lugar de suponer." },
      { label: "Cambiar de lugar y quedarse solo con su instrumento.", diary: "Prefirió evitar el grupo, por si acaso.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Noche", text: "Antes de dormir, el celular sigue sonando en el chat de la banda. Ya son las 11:40 p.m.",
    choices: [
      { label: "Silenciar el chat y dormir.", diary: "Puso un límite y apagó la pantalla." },
      { label: "Seguir leyendo por si dicen algo de mí.", diary: "Se quedó despierto revisando el chat.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Ensayo de sección", text: "El director Mauro pregunta quién quiere tocar un solo corto frente a la sección. El corazón de Rumi empieza a latir más rápido antes de levantar la mano — o no.",
    choices: [
      { label: "Levantar la mano, aunque el estómago se apriete.", diary: "Se animó a participar pese a los nervios." },
      { label: "Bajar la mirada y esperar que no lo nombren.", diary: "Evitó la situación hasta que pasó.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Camino a casa", text: "Ya casi termina el primer ensayo de la semana. Alguien de la banda pregunta si quiere caminar juntos hasta el paradero.",
    choices: [
      { label: "Aceptar y contarle algo de la semana.", diary: "Cerró la semana compartiendo cómo se sintió." },
      { label: "Decir que tiene afán y seguir solo.", diary: "Cerró la semana guardándose lo que sintió." }
    ] }
];

dialogues_banda[2] = [
  { tag: "Lunes · Ensayo de la tarde", text: "Es la hora de ensayo, algo que a <b>Rumi</b> siempre le ha gustado. Hoy, sin razón clara, no le provoca ir.",
    choices: [
      { label: "Ir de todas formas, aunque sea sin muchas ganas.", diary: "Fue al ensayo aunque no tenía ánimo." },
      { label: "Quedarse viendo el celular en su cuarto.", diary: "Dejó pasar algo que antes disfrutaba.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · 6:30 a.m.", text: "Durmió sus ocho horas completas, pero se despierta como si no hubiera dormido nada.",
    choices: [
      { label: "Levantarse y desayunar con calma antes de salir.", diary: "Se dio un momento antes de arrancar el día." },
      { label: "Quedarse en la cama hasta el último minuto posible.", diary: "El cansancio le ganó la mañana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Chat con Coco", text: "Coco le escribe para salir a caminar después del ensayo, como hacían antes.",
    choices: [
      { label: "Aceptar, aunque tenga que hacer un esfuerzo.", diary: "Aceptó salir, aunque le costó decidirse." },
      { label: "Responder que hoy no puede y quedarse en el cuarto.", diary: "Prefirió quedarse solo, otra vez.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Ensayo de sección", text: "Se equivoca en un pasaje frente a la sección. El pensamiento le llega rápido: \"soy un desastre para todo esto\".",
    choices: [
      { label: "Pensar que fue solo un pasaje, no una sentencia.", diary: "Se corrigió el pensamiento antes de que creciera." },
      { label: "Quedarse repitiendo la idea el resto del ensayo.", diary: "Se quedó dándole vueltas al mismo pensamiento duro.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Salida del ensayo", text: "El director Mauro le pregunta, de pasada, \"¿todo bien, Rumi?\".",
    choices: [
      { label: "Contarle, aunque sea un poco, que ha estado desanimado.", diary: "Se animó a decir algo real sobre cómo se siente." },
      { label: "Responder \"sí, todo bien\" y seguir caminando.", diary: "Cerró la semana con la respuesta automática de siempre.", w: 1, ax: "depresion" }
    ] }
];

dialogues_banda[3] = [
  { tag: "Lunes · Prueba sorpresa", text: "El director Mauro anuncia una prueba sorpresa de una canción nueva. A <b>Rumi</b> se le enfrían las manos antes de tomar el instrumento.",
    choices: [
      { label: "Respirar hondo y empezar de todas formas.", diary: "Sintió los nervios pero pudo empezar igual." },
      { label: "Quedarse en blanco varios minutos antes de tocar algo.", diary: "El cuerpo se le tensionó más de la cuenta.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Descanso, otra vez", text: "El mismo grupo le puso un apodo burlón sobre cómo toca la semana pasada. Hoy se lo repiten, más fuerte, cuando pasa cerca.",
    choices: [
      { label: "Decir, con calma, que ese apodo no le gusta.", diary: "Puso un límite claro frente al grupo." },
      { label: "Reírse también, aunque por dentro le moleste.", diary: "Fingió que no le afectaba, para que no siguieran.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Celebración de la banda", text: "Hay una pequeña celebración informal de la banda. Rumi no está seguro de encajar todavía.",
    choices: [
      { label: "Ir un rato, aunque sea con algo de pena.", diary: "Se dio la oportunidad de aparecer, aunque le costara." },
      { label: "Inventar una excusa para no ir.", diary: "Prefirió quedarse por fuera, una vez más." }
    ] },
  { tag: "Jueves · Técnica nueva", text: "Hay una técnica nueva que no entiende bien. El director Mauro queda disponible después del ensayo.",
    choices: [
      { label: "Acercarse a preguntarle, aunque le dé pena.", diary: "Pidió ayuda en lugar de quedarse con la duda." },
      { label: "Quedarse con la duda antes que preguntar.", diary: "Prefirió no exponerse a preguntar en público.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre con Coco", text: "Coco le pregunta cómo le fue en general esta semana, con curiosidad real.",
    choices: [
      { label: "Contarle que fue una semana pesada.", diary: "Se animó a contar cómo se sintió de verdad." },
      { label: "Decir que todo normal, como siempre.", diary: "Volvió a la respuesta de siempre, sin entrar en detalle." }
    ] }
];

dialogues_banda[9] = [
  { tag: "Lunes · Noche, después de tarea", text: "Rumi había quedado con sus papás en apagar la consola a las 9. A las 9 justo, el juego lo deja a mitad de una partida importante.",
    choices: [
      { label: "Pausar y apagar, aunque quede a la mitad.", diary: "Respetó la hora acordada, aunque le costara." },
      { label: "Terminar \"solo esta partida\", ya son las 9:40.", diary: "Se quedó un buen rato más de lo acordado.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · 6:15 a.m.", text: "Se despierta agotado por dormir poco. Antes de un ensayo importante, un compañero le recomienda una bebida energética para \"aguantar el día\".",
    choices: [
      { label: "Tomar agua o algo normal, y dormir temprano hoy.", diary: "Prefirió recuperar el sueño en vez de forzar el cuerpo." },
      { label: "Tomarse la bebida energética para aguantar.", diary: "Usó una bebida energética para tapar el cansancio.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Tarde", text: "Un amigo del chat le escribe: \"una partida más y ya\", justo cuando Rumi iba a empezar a practicar para el ensayo de mañana.",
    choices: [
      { label: "Responder que primero practica.", diary: "Puso la práctica antes que \"una partida más\"." },
      { label: "Aceptar, y la práctica queda para después de varias partidas.", diary: "Dejó que \"una más\" se convirtiera en varias.", w: 1, ax: "adicciones" }
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

dialogues_banda[11] = [
  { tag: "Lunes · Chat de la banda", text: "En el chat de la banda, alguien empieza a burlarse de una foto que otra persona subió. Varios responden con risas.",
    choices: [
      { label: "No sumarse a las risas ni reenviar nada.", diary: "Se quedó al margen de la burla, sin participar." },
      { label: "Reenviar el chat a otro grupo, \"para que vean\".", diary: "Ayudó a que la burla llegara a más gente.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · La misma persona, otra vez", text: "La persona de la foto deja de escribir en el chat de la banda desde ayer. Nadie pregunta por qué.",
    choices: [
      { label: "Escribirle aparte para ver cómo está.", diary: "Se tomó un momento para preguntar por alguien más." },
      { label: "No decir nada, no es asunto suyo.", diary: "Dejó pasar la situación sin preguntar nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Se burlan de Rumi", text: "Ahora el chat cambia de blanco: alguien edita una foto de Rumi tocando y la pone con un comentario burlón.",
    choices: [
      { label: "Pedirle a esa persona que la borre.", diary: "Puso un límite directo frente al grupo." },
      { label: "Salir del chat sin decir nada.", diary: "Prefirió desaparecer del chat en silencio.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El director Mauro pregunta", text: "El director Mauro pregunta si alguien ha visto algo raro en el chat de la banda últimamente.",
    choices: [
      { label: "Contarle lo que ha estado pasando.", diary: "Se animó a contarle a un adulto lo que pasaba." },
      { label: "Decir que no ha visto nada.", diary: "Prefirió no contar lo que sabía.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de la semana", text: "El chat de la banda sigue activo, pero esta vez alguien escribe pidiendo que \"bajen la agresividad\".",
    choices: [
      { label: "Apoyar ese mensaje en el chat.", diary: "Respaldó públicamente que se bajara la agresividad." },
      { label: "Quedarse callado, como la mayoría.", diary: "Se quedó en silencio, como casi todos en el chat.", w: 1, ax: "bullying" }
    ] }
];

dialogues_banda[13] = [
  { tag: "Lunes · Anuncian el ensayo abierto", text: "El director Mauro anuncia que el viernes cada sección debe tocar frente a todo el grupo. A <b>Rumi</b> se le aprieta el estómago apenas lo escucha.",
    choices: [
      { label: "Anotarse para tocar entre las primeras secciones.", diary: "Decidió no darle más vueltas y tocar temprano." },
      { label: "Pedir ser la última sección, para tener más tiempo de esperar.", diary: "Empujó la espera lo más lejos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo en casa", text: "Practica el pasaje frente al espejo, pero se le traban los dedos justo donde más los necesita.",
    choices: [
      { label: "Volver a intentarlo, aunque se trabe otra vez.", diary: "Insistió con el ensayo pese a los tropiezos." },
      { label: "Dejar de practicar para no sentir eso de nuevo.", diary: "Prefirió no volver a sentir ese tropiezo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Reparto de la sección", text: "La sección se reúne para repartir los solos. Le ofrecen escoger primero qué parte quiere tocar.",
    choices: [
      { label: "Escoger la parte que le toque, sin pedir cambios.", diary: "Aceptó la parte que le tocó sin evitarla." },
      { label: "Escoger la parte más corta, para tocar lo menos posible.", diary: "Buscó exponerse lo menos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes", text: "Antes de dormir, repasa mentalmente todo lo que podría salir mal al día siguiente.",
    choices: [
      { label: "Escribir tres cosas que sí sabe tocar bien, y dormir.", diary: "Se enfocó en lo que sí controla antes de dormir." },
      { label: "Quedarse despierto imaginando cada error posible.", diary: "Se quedó despierto anticipando errores.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · El turno de Rumi", text: "Llega el momento de tocar al frente. El corazón le late fuerte, pero el instrumento ya está en sus manos.",
    choices: [
      { label: "Empezar a tocar, aunque las manos tiemblen al inicio.", diary: "Tocó aunque las manos temblaran al principio." },
      { label: "Pedir que otro de la sección empiece, para ganar tiempo.", diary: "Buscó que alguien más empezara primero por él.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_banda[15] = [
  { tag: "Lunes · Primer día libre", text: "Empiezan las vacaciones de mitad de año. Sin la rutina de la banda, el día se siente más largo y más vacío de lo esperado.",
    choices: [
      { label: "Proponerse una cosa pequeña para hacer hoy.", diary: "Se dio una razón pequeña para levantarse." },
      { label: "Quedarse en la cama la mayor parte del día.", diary: "Dejó pasar el día casi entero en la cama.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Mensaje de Coco", text: "Coco le escribe para planear algo durante la semana. Rumi ve el mensaje y lo deja en visto un buen rato.",
    choices: [
      { label: "Responder y proponer un día para verse.", diary: "Respondió y propuso verse esta semana." },
      { label: "Dejarlo en visto y no responder por ahora.", diary: "Dejó el mensaje sin responder.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Tarde sin planes", text: "No hay ensayo, y tampoco muchas ganas de tocar lo que antes le gustaba.",
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
      { label: "Escribirle a Coco que ha estado un poco desanimado.", diary: "Se animó a contarle a Coco cómo se ha sentido." },
      { label: "No decirle nada a nadie y seguir igual.", diary: "Prefirió no contarle a nadie cómo se sentía.", w: 1, ax: "depresion" }
    ] }
];

dialogues_banda[18] = [
  { tag: "Lunes · Ensayo en parejas", text: "El director Mauro pide formar parejas para afinar un pasaje. Todos se acomodan rápido, menos una integrante nueva que se queda sin pareja.",
    choices: [
      { label: "Ofrecerle hacer pareja con ella.", diary: "Se ofreció a hacer pareja con quien se quedó sola." },
      { label: "Voltear la mirada y dejar que alguien más resuelva.", diary: "Evitó la mirada y dejó que otro resolviera.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Grupo cerrado", text: "En el descanso, un grupo arma un chat \"solo para elegidos\" de la banda y deja por fuera a un par de compañeros.",
    choices: [
      { label: "Preguntar por qué no está invitada toda la banda.", diary: "Cuestionó dejar a compañeros por fuera del grupo." },
      { label: "Unirse al chat sin decir nada al respecto.", diary: "Se unió al grupo cerrado sin cuestionarlo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Lugar en el ensayo", text: "A la hora de acomodarse, alguien le dice en voz baja que no se pare cerca del atril de siempre porque \"ahí ya no cabe cualquiera\".",
    choices: [
      { label: "Pararse ahí de todas formas, con calma.", diary: "No aceptó que le dijeran dónde no podía pararse." },
      { label: "Buscar otro lugar para evitar el problema.", diary: "Evitó el conflicto cambiando de lugar.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · La integrante nueva, otra vez", text: "La integrante nueva de la pareja del lunes sigue ensayando sola casi todos los días.",
    choices: [
      { label: "Invitarla a ensayar con su grupo.", diary: "La invitó a integrarse a su grupo de siempre." },
      { label: "Notarlo y no hacer nada.", diary: "Notó que ensayaba sola y no hizo nada.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Reunión de la banda", text: "El director Mauro convoca una reunión corta sobre \"cómo nos estamos tratando entre compañeros de la banda\".",
    choices: [
      { label: "Comentar en la reunión lo que ha visto pasar.", diary: "Habló en la reunión sobre lo que ha visto." },
      { label: "Quedarse callado durante toda la reunión.", diary: "Se quedó callado durante toda la reunión.", w: 1, ax: "bullying" }
    ] }
];

dialogues_banda[21] = [
  { tag: "Lunes · Antes de dormir, otra vez", text: "Antes de dormir, Rumi abre \"solo un momento\" el feed de redes sociales. Treinta minutos después, sigue ahí.",
    choices: [
      { label: "Dejar el celular cargando fuera del cuarto.", diary: "Sacó el celular del cuarto antes de dormir." },
      { label: "Seguir viendo videos hasta quedarse dormido con el celular en la mano.", diary: "Se quedó dormido con el celular encendido en la mano.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Comparando", text: "Ve videos de otros músicos tocando y siente que su forma de tocar es menos interesante que la de ellos.",
    choices: [
      { label: "Recordar que las redes muestran solo lo mejor de cada quien.", diary: "Se recordó que las redes no muestran todo." },
      { label: "Quedarse viendo videos ajenos un buen rato más.", diary: "Siguió comparando su forma de tocar con lo que veía en pantalla.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Práctica pendiente", text: "Tiene un pasaje por practicar antes del ensayo de mañana, pero el celular sigue vibrando con notificaciones.",
    choices: [
      { label: "Poner el celular en modo avión hasta terminar de practicar.", diary: "Apagó las notificaciones para poder concentrarse." },
      { label: "Revisar cada notificación apenas suena, sin terminar de practicar.", diary: "Dejó que las notificaciones interrumpieran toda la práctica.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Un rato libre", text: "Tiene una hora libre antes de la cena. Podría llamar a alguien, salir un rato, o quedarse scrolleando.",
    choices: [
      { label: "Llamar a Coco para hablar un rato.", diary: "Usó el tiempo libre para hablar con alguien de verdad." },
      { label: "Quedarse scrolleando sin darse cuenta de cuánto tiempo pasa.", diary: "El tiempo se le fue scrolleando sin notarlo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · El resumen semanal", text: "El celular muestra un resumen semanal: bastantes horas más de pantalla que la semana pasada.",
    choices: [
      { label: "Proponerse un límite para la próxima semana.", diary: "Se puso un límite para la semana que viene." },
      { label: "Cerrar la pantalla del resumen sin pensarlo más.", diary: "Ignoró el resumen y siguió igual.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_banda[23] = [
  { tag: "Lunes · Anuncian la audición", text: "Anuncian audiciones para los solos principales del concierto, el viernes. A Rumi le gusta tocar, pero la idea de que lo evalúen le pone el estómago pesado.",
    choices: [
      { label: "Anotarse a la audición de todas formas.", diary: "Se anotó a la audición pese a los nervios." },
      { label: "Decidir no ir, para no arriesgarse a que lo midan.", diary: "Evitó la audición para no exponerse a ser evaluado.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Practicar solo", text: "Practica el solo solo en la sala vacía, pero falla varias veces seguidas y piensa en rendirse antes de intentarlo en público.",
    choices: [
      { label: "Seguir practicando un rato más.", diary: "Insistió con la práctica pese a los tropiezos." },
      { label: "Guardar el instrumento y no volver a practicar antes del viernes.", diary: "Dejó de practicar para no seguir fallando.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Compañeros hablan de la audición", text: "En el descanso, varios compañeros hablan de quién creen que va a quedar con los solos. Rumi no sabe si mencionar que también va a ir.",
    choices: [
      { label: "Contarles que también se anotó a la audición.", diary: "Se animó a contar que también participaría." },
      { label: "No decir nada, por si acaso no queda.", diary: "Prefirió no contar nada, por si no quedaba.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes de la audición", text: "No logra dormir bien pensando en cómo le va a ir al día siguiente.",
    choices: [
      { label: "Hacer algo relajante antes de dormir, como música o estiramientos.", diary: "Se preparó con calma para el día siguiente." },
      { label: "Quedarse repasando cada error que podría cometer.", diary: "Se quedó despierto anticipando fallar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · La audición", text: "Llega el momento de la audición. El director Mauro llama a los nombres uno por uno.",
    choices: [
      { label: "Pasar a tocar cuando lo llaman, aunque le tiemble el pulso.", diary: "Tocó aunque el pulso le temblara." },
      { label: "Pedir tocar de último, para retrasar el momento.", diary: "Buscó retrasar lo más posible su turno.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_banda[25] = [
  { tag: "Lunes · Grupo del arreglo final", text: "Forman un chat para el arreglo final del concierto. Una compañera pregunta algo simple y alguien responde con burla en vez de ayudarle.",
    choices: [
      { label: "Responderle la pregunta directamente, sin burlarse.", diary: "Ayudó en vez de sumarse a la burla." },
      { label: "Poner un emoji de risa a la burla, sin decir nada más.", diary: "Reaccionó con risa a la burla del grupo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Silencio de alguien", text: "Esa misma compañera deja de escribir en el chat desde entonces, aunque el arreglo la necesita.",
    choices: [
      { label: "Escribirle aparte para que no se sienta sola con el arreglo.", diary: "Se tomó un momento para incluirla aparte." },
      { label: "Dejar que el grupo avance sin ella.", diary: "Dejó que el grupo siguiera sin incluirla.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Reparto de solos", text: "Al repartir los solos del arreglo, alguien propone dejarle a esa compañera el pasaje más difícil, \"total, para eso está\".",
    choices: [
      { label: "Proponer repartir los solos de forma más justa.", diary: "Pidió que el reparto fuera más justo para todos." },
      { label: "No decir nada y dejar que se lo asignen así.", diary: "No dijo nada mientras le asignaban lo más difícil.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · Entrega del arreglo", text: "El arreglo sale bien, en parte gracias a la compañera que casi quedó por fuera. Nadie se lo reconoce en el grupo.",
    choices: [
      { label: "Mencionar en el grupo el aporte de ella.", diary: "Reconoció en público el aporte de la compañera." },
      { label: "Dejar que el reconocimiento se lo lleven otros.", diary: "Dejó que el reconocimiento se lo llevaran otros.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre del arreglo", text: "El director Mauro pregunta cómo les pareció trabajar juntos esta vez.",
    choices: [
      { label: "Comentar que el grupo podría tratarse mejor entre todos.", diary: "Habló sobre cómo se trataron entre compañeros." },
      { label: "Decir que todo estuvo bien, sin mencionar nada más.", diary: "Prefirió no mencionar cómo se trataron entre ellos.", w: 1, ax: "bullying" }
    ] }
];

dialogues_banda[27] = [
  { tag: "Lunes · Evaluación del trimestre", text: "El director Mauro le entrega su evaluación del trimestre. El nivel bajó un poco frente a la anterior, y el pensamiento de \"no sirvo para esto\" aparece rápido.",
    choices: [
      { label: "Revisar con calma en qué bajó y por qué.", diary: "Revisó con calma qué pasó con su evaluación." },
      { label: "Guardar la evaluación sin mirarla de nuevo en toda la semana.", diary: "Evitó volver a mirar la evaluación toda la semana.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Pasaje difícil", text: "Repite un pasaje que ya había fallado antes. El cansancio de intentarlo otra vez le pesa más que el pasaje mismo.",
    choices: [
      { label: "Pedirle ayuda a un compañero con el pasaje.", diary: "Pidió ayuda en vez de rendirse con el pasaje." },
      { label: "Dejar el pasaje a medias y no volver a intentarlo.", diary: "Dejó el pasaje a medias, sin volver a intentarlo.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Invitación de Coco", text: "Coco lo invita a practicar juntos para la evaluación de recuperación. Rumi no está seguro de que valga la pena el esfuerzo.",
    choices: [
      { label: "Aceptar practicar juntos, aunque sea sin muchas ganas.", diary: "Aceptó practicar con Coco, aunque le costara decidirse." },
      { label: "Decir que mejor no, que total no va a servir de mucho.", diary: "Rechazó ayuda pensando que no iba a servir de nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Cena en casa", text: "En la cena, sus papás le preguntan por la evaluación. Rumi siente ganas de quedarse callado y terminar rápido.",
    choices: [
      { label: "Contarles cómo se ha sentido con el trimestre.", diary: "Les contó a sus papás cómo se ha sentido." },
      { label: "Responder con monosílabos y levantarse de la mesa.", diary: "Respondió con monosílabos y se levantó rápido.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Evaluación de recuperación", text: "Llega la evaluación de recuperación. Ya practicó algo con Coco, pero la duda de si sirvió de algo sigue ahí.",
    choices: [
      { label: "Presentarla con lo que alcanzó a preparar.", diary: "Presentó la evaluación con lo que había preparado." },
      { label: "Pensar que da igual cómo le vaya y tocarla a medias.", diary: "Tocó la evaluación a medias, pensando que daba igual.", w: 1, ax: "depresion" }
    ] }
];

dialogues_banda[29] = [
  { tag: "Lunes · Nuevo capítulo cada noche", text: "Empezó una serie nueva y cada noche se dice a sí mismo que ve \"solo un capítulo más\" antes de dormir.",
    choices: [
      { label: "Ponerse una alarma para apagar la serie a cierta hora.", diary: "Se puso un límite de horario para ver series." },
      { label: "Ver varios capítulos seguidos hasta muy tarde.", diary: "Se quedó viendo varios capítulos hasta muy tarde.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Martes · Ensayo importante en dos días", text: "Tiene un ensayo importante en dos días, pero el capítulo de anoche terminó justo en un momento clave.",
    choices: [
      { label: "Dejar la serie pausada y repasar para el ensayo.", diary: "Priorizó repasar en vez de seguir la serie." },
      { label: "Ver \"solo un capítulo más\" antes de tomar el instrumento.", diary: "Pospuso el repaso por ver un capítulo más.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Miércoles · Cansancio en el ensayo", text: "Se queda dormido un momento durante el ensayo, justo cuando explican lo que más le sirve para el ensayo importante.",
    choices: [
      { label: "Dormir más temprano esa noche para recuperar sueño.", diary: "Decidió dormir más temprano para recuperarse." },
      { label: "Ver otro capítulo esa noche también, \"ya qué más da\".", diary: "Siguió la maratón, pensando que ya daba igual.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Jueves · Noche antes del ensayo importante", text: "Podría repasar sus pasajes o terminar la temporada completa que le falta.",
    choices: [
      { label: "Repasar los pasajes antes de dormir temprano.", diary: "Repasó sus pasajes antes de dormir temprano." },
      { label: "Terminar la temporada completa esa misma noche.", diary: "Terminó la temporada completa la noche antes del ensayo.", w: 1, ax: "adicciones" }
    ] },
  { tag: "Viernes · El ensayo importante", text: "Llega al ensayo importante con el cansancio acumulado de varias noches cortas.",
    choices: [
      { label: "Hacer lo mejor posible con la energía que tiene.", diary: "Tocó con lo mejor de la energía que le quedaba." },
      { label: "Pensar que da igual, tocar rápido y sin cuidado.", diary: "Tocó rápido, sin revisar nada.", w: 1, ax: "adicciones" }
    ] }
];

dialogues_banda[31] = [
  { tag: "Lunes · Nuevo director de sección", text: "Cambian al director de la sección de Rumi a mitad de año. El nuevo director tiene fama de exigente, y hoy es el primer ensayo con él.",
    choices: [
      { label: "Sentarse adelante, aunque dé más nervios.", diary: "Se sentó adelante pese a los nervios." },
      { label: "Sentarse al fondo para pasar desapercibido.", diary: "Buscó pasar desapercibido al fondo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primer pasaje con él", text: "Deja un pasaje difícil para el día siguiente. Rumi no está seguro de haberlo entendido bien.",
    choices: [
      { label: "Preguntarle una duda por el chat de la banda.", diary: "Se animó a preguntar su duda directamente." },
      { label: "No preguntar nada, aunque quede con dudas.", diary: "Se quedó con dudas en vez de preguntar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Revisión en el ensayo", text: "El nuevo director empieza a revisar el pasaje en voz alta, llamando al azar a quien lo toque frente a todos.",
    choices: [
      { label: "Prepararse mentalmente por si lo llaman.", diary: "Se preparó mentalmente por si lo llamaban." },
      { label: "Evitar mirarlo, esperando que no lo note.", diary: "Evitó la mirada del director todo el rato.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Lo llaman al frente", text: "El nuevo director dice su nombre. Es su turno de pasar a tocar el pasaje.",
    choices: [
      { label: "Pasar al frente, aunque le tiemble la voz.", diary: "Pasó al frente aunque le temblara la voz." },
      { label: "Decir que no se acuerda, para no intentarlo.", diary: "Dijo que no se acordaba, para no intentarlo.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Cierre de la semana con el nuevo director", text: "Termina la primera semana completa con el director nuevo. Ya no se siente tan desconocido como el lunes.",
    choices: [
      { label: "Contarle a Coco que la semana no fue tan mala.", diary: "Reconoció que la semana no fue tan mala." },
      { label: "Seguir pensando que el próximo pasaje será un desastre.", diary: "Siguió anticipando que lo próximo sería un desastre.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_banda[33] = [
  { tag: "Lunes · La noticia", text: "Un compañero cercano de la banda anuncia que su familia se muda de ciudad en un mes.",
    choices: [
      { label: "Preguntarle cómo se siente con la noticia.", diary: "Se interesó por cómo se sentía su compañero." },
      { label: "No decir mucho al respecto y cambiar de tema.", diary: "Evitó hablar del tema y cambió de conversación.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Últimas semanas juntos", text: "Sabe que le quedan pocas semanas para tocar junto a este compañero, pero no tiene muchas ganas de hacer planes.",
    choices: [
      { label: "Proponer hacer algo juntos antes de que se vaya.", diary: "Propuso aprovechar el tiempo que queda." },
      { label: "Dejar pasar los días sin proponer nada.", diary: "Dejó pasar los días sin proponer nada.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Recuerdos", text: "Revisando fotos viejas, encuentra varias de momentos con este compañero y con otros de la banda que ya no ve tan seguido.",
    choices: [
      { label: "Escribirle a alguien de esas fotos, solo para saludar.", diary: "Retomó contacto con alguien que ya no veía tanto." },
      { label: "Cerrar las fotos y no escribirle a nadie.", diary: "Cerró las fotos sin escribirle a nadie.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Despedida improvisada", text: "Algunos compañeros de la banda organizan una despedida informal para el viernes. Rumi no está seguro de tener ánimo para ir.",
    choices: [
      { label: "Ir a la despedida, aunque sea un rato.", diary: "Fue a la despedida, aunque fuera un rato." },
      { label: "Decir que tiene algo que hacer y no ir.", diary: "Se excusó y no fue a la despedida.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Después de la despedida", text: "El compañero ya se fue. La sala de ensayo se siente un poco distinta sin él, al menos por ahora.",
    choices: [
      { label: "Prometerle mantener contacto y cumplirlo esa misma semana.", diary: "Mantuvo el contacto esa misma semana, como prometió." },
      { label: "Pensar que igual ya no va a ser lo mismo y dejarlo ahí.", diary: "Dejó el contacto ahí, pensando que ya no sería lo mismo.", w: 1, ax: "depresion" }
    ] }
];

dialogues_banda[35] = [
  { tag: "Lunes · Instrumento prestado", text: "Una compañera llega con un instrumento visiblemente viejo y prestado, y un par de personas empiezan a hacer comentarios en voz baja.",
    choices: [
      { label: "Sentarse junto a ella como cualquier otro día.", diary: "Se sentó con ella como cualquier otro día." },
      { label: "Reírse por lo bajo con el resto del grupo.", diary: "Se sumó a las risas por lo bajo.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Se repite", text: "Los comentarios sobre su instrumento siguen, ahora un poco más fuerte, cuando ella pasa cerca del grupo.",
    choices: [
      { label: "Decirles a los demás que paren con eso.", diary: "Les pidió a los demás que pararan los comentarios." },
      { label: "Quedarse callado, aunque le parezca injusto.", diary: "Se quedó callado aunque le pareciera injusto.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Ella deja de participar", text: "La compañera empieza a evitar los descansos, quedándose sola en la sala de ensayo.",
    choices: [
      { label: "Ir a acompañarla un rato en la sala.", diary: "Fue a acompañarla en la sala de ensayo." },
      { label: "No hacer nada, no es su problema.", diary: "No hizo nada, pensando que no era su problema.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El director Mauro pregunta", text: "El director Mauro nota que ella ha estado distinta y pregunta a la banda si alguien sabe algo.",
    choices: [
      { label: "Contarle lo que ha estado pasando con los comentarios.", diary: "Le contó al director lo que había visto." },
      { label: "Decir que no ha notado nada raro.", diary: "Dijo que no había notado nada raro.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Cierre de semana", text: "La banda tiene una charla corta sobre respeto entre compañeros, después de lo hablado con el director.",
    choices: [
      { label: "Participar contando lo que aprendió esta semana.", diary: "Participó contando lo que aprendió esta semana." },
      { label: "Quedarse callado durante toda la charla.", diary: "Se quedó callado durante toda la charla.", w: 1, ax: "bullying" }
    ] }
];

dialogues_banda[37] = [
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

dialogues_banda[39] = [
  { tag: "Lunes · Anuncian la reunión", text: "Sus papás anuncian una reunión familiar grande el sábado, con primos y tíos que Rumi no ve seguido.",
    choices: [
      { label: "Preguntar quiénes van a estar, con curiosidad.", diary: "Preguntó con curiosidad quiénes iban a estar." },
      { label: "Empezar a pensar en excusas para no ir.", diary: "Empezó a pensar en excusas para no ir.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Comentario de un tío", text: "Recuerda que en la última reunión un tío le hizo una pregunta incómoda sobre la banda frente a todos.",
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

dialogues_banda[41] = [
  { tag: "Lunes · Los eligen para el festival regional", text: "El arreglo de Rumi y su sección queda seleccionado para representar a la banda en el festival regional. Hay que tocarlo frente a jurados que no conocen.",
    choices: [
      { label: "Alegrarse y empezar a preparar el arreglo.", diary: "Se alegró y empezó a preparar el arreglo." },
      { label: "Pensar en pedir que otro de la sección toque en su lugar.", diary: "Pensó en dejar que otro tocara en su lugar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Ensayo frente al grupo", text: "Ensayan el arreglo frente al resto de la banda antes del viaje. Le toca tocar la parte central.",
    choices: [
      { label: "Tocar su parte, aunque se sienta expuesto frente a todos.", diary: "Tocó su parte pese a sentirse expuesto." },
      { label: "Pedir hacer solo la parte más corta y sencilla.", diary: "Buscó la parte más corta para exponerse lo menos posible.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Viaje al festival", text: "En el bus hacia el festival regional, piensa en todo lo que los jurados podrían notarle.",
    choices: [
      { label: "Repasar con calma lo que ya preparó.", diary: "Repasó con calma lo que ya había preparado." },
      { label: "Imaginar solo los errores que podría cometer.", diary: "Solo imaginó los errores que podría cometer.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Turno de tocar", text: "Llega el turno de su sección frente a los jurados del festival.",
    choices: [
      { label: "Empezar a tocar aunque las manos le suden.", diary: "Empezó a tocar aunque las manos le sudaran." },
      { label: "Quedarse quieto esperando que toque primero otro de la sección.", diary: "Esperó a que otro de la sección tocara primero.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Resultados", text: "Anuncian los resultados del festival regional. La sección de Rumi no gana, pero recibe una mención.",
    choices: [
      { label: "Sentirse orgulloso de haber participado, gane o no.", diary: "Se sintió orgulloso de haber participado." },
      { label: "Pensar que no ganar significa que no sirvió de nada.", diary: "Pensó que no ganar significaba que no había servido de nada.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_banda[43] = [
  { tag: "Lunes · Otra semana igual", text: "Faltan pocas semanas para terminar el año, pero los ensayos empiezan a sentirse todos iguales, sin mucho ánimo de por medio.",
    choices: [
      { label: "Buscar algo pequeño y distinto para hacer hoy.", diary: "Buscó algo pequeño y distinto para hacer hoy." },
      { label: "Dejar que el día pase igual que los anteriores.", diary: "Dejó que el día pasara igual que los anteriores.", w: 1, ax: "depresion" }
    ] },
  { tag: "Martes · Ensayo de sección", text: "Tiene ensayo de sección, algo que normalmente disfruta, pero hoy le cuesta encontrar ganas de ir.",
    choices: [
      { label: "Ir al ensayo, aunque sea sin muchas ganas.", diary: "Fue al ensayo aunque no tuviera muchas ganas." },
      { label: "Inventar una excusa para no ir esta vez.", diary: "Inventó una excusa para no ir al ensayo.", w: 1, ax: "depresion" }
    ] },
  { tag: "Miércoles · Mensaje sin responder", text: "Coco le escribe preguntando si quiere hacer algo el fin de semana. El mensaje queda sin responder varias horas.",
    choices: [
      { label: "Responder, aunque sea para decir que lo piensa.", diary: "Respondió el mensaje, aunque fuera para pensarlo." },
      { label: "Dejarlo sin responder hasta el día siguiente.", diary: "Dejó el mensaje sin responder hasta el día siguiente.", w: 1, ax: "depresion" }
    ] },
  { tag: "Jueves · Pasaje que más disfruta", text: "En la parte que más suele disfrutar tocar, hoy no logra concentrarse ni encontrarle sentido.",
    choices: [
      { label: "Intentar avanzar un poco, aunque sea lento.", diary: "Intentó avanzar un poco, aunque fuera lento." },
      { label: "Dejar la práctica sin terminar, sin muchas ganas de seguir.", diary: "Dejó la práctica sin terminar.", w: 1, ax: "depresion" }
    ] },
  { tag: "Viernes · Fin de semana por delante", text: "Llega el fin de semana. Podría hacer planes con alguien o dejar que se le vaya sin mucho de por medio.",
    choices: [
      { label: "Proponerle a alguien hacer algo el sábado.", diary: "Propuso hacer algo el sábado con alguien." },
      { label: "Dejar el fin de semana sin planes, otra vez.", diary: "Dejó el fin de semana sin planes, otra vez.", w: 1, ax: "depresion" }
    ] }
];

dialogues_banda[45] = [
  { tag: "Lunes · Un rumor", text: "Corre un rumor en la banda sobre por qué un compañero faltó varios días — nadie sabe si es cierto, pero todos lo repiten.",
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
  { tag: "Viernes · Cierre de semana", text: "El compañero vuelve a ensayar con la banda, aunque todavía un poco más callado que antes.",
    choices: [
      { label: "Acercarse a hablar con él como antes del rumor.", diary: "Se acercó a hablar con él como antes." },
      { label: "Seguir tratándolo distinto, por si el rumor tenía algo de cierto.", diary: "Siguió tratándolo distinto, por si acaso.", w: 1, ax: "bullying" }
    ] }
];

dialogues_banda[47] = [
  { tag: "Lunes · En el baño de la sala de ensayo", text: "En el descanso, un grupo pequeño vapea a escondidas en el baño y le ofrecen probar a Rumi.",
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

dialogues_banda[49] = [
  { tag: "Lunes · Anuncian el calendario de evaluación final", text: "Publican el calendario de evaluación final: repertorio, teoría e instrumento, tres pruebas en tres días.",
    choices: [
      { label: "Organizar un plan de práctica por día.", diary: "Organizó un plan de práctica para la semana." },
      { label: "Evitar mirar el calendario completo de una vez.", diary: "Evitó mirar el calendario completo de una vez.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Martes · Primera prueba", text: "Presenta la primera prueba. Al terminar, se queda pensando si tocó bien la mitad del repertorio.",
    choices: [
      { label: "Dejarlo ir y concentrarse en la siguiente prueba.", diary: "Dejó ir la prueba y se concentró en la siguiente." },
      { label: "Quedarse repasando mentalmente cada pasaje el resto del día.", diary: "Se quedó repasando cada pasaje todo el día.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Miércoles · Duda con un pasaje", text: "Repasando para la prueba de mañana, encuentra un pasaje que no recuerda haber practicado bien.",
    choices: [
      { label: "Escribirle a un compañero para entender ese pasaje.", diary: "Pidió ayuda para entender el pasaje que le faltaba." },
      { label: "Saltarse ese pasaje, esperando que no salga en la prueba.", diary: "Se saltó el pasaje, esperando que no saliera.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Jueves · Noche antes de la prueba más difícil", text: "Mañana es la prueba que más le preocupa de toda la semana.",
    choices: [
      { label: "Dormir temprano, aunque sienta que le falta repasar.", diary: "Priorizó dormir, aunque sintiera que le faltaba repasar." },
      { label: "Quedarse practicando hasta muy tarde, sin parar.", diary: "Se quedó practicando hasta muy tarde, sin parar.", w: 1, ax: "ansiedad" }
    ] },
  { tag: "Viernes · Última prueba", text: "Presenta la última prueba de la semana. Al salir, la semana de evaluación final queda atrás.",
    choices: [
      { label: "Celebrar que la semana de evaluación terminó, salga como salga.", diary: "Celebró que la semana de evaluación había terminado." },
      { label: "Empezar a preocuparse ya por los resultados antes de saberlos.", diary: "Empezó a preocuparse por los resultados antes de saberlos.", w: 1, ax: "ansiedad" }
    ] }
];

dialogues_banda[51] = [
  { tag: "Lunes · Último tema del año", text: "Para el último tema grupal del año, el director Mauro pide incluir en cada sección a alguien con quien no hayan tocado antes.",
    choices: [
      { label: "Proponer sumar a alguien que suele quedar por fuera de las secciones.", diary: "Propuso sumar a alguien que solía quedar por fuera." },
      { label: "Formar sección con los de siempre y ya.", diary: "Formó sección con los de siempre, sin sumar a nadie más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Martes · Primeros ensayos", text: "El nuevo integrante de la sección, poco acostumbrado a que lo incluyan, no dice casi nada en el primer ensayo.",
    choices: [
      { label: "Preguntarle directamente su opinión sobre el arreglo.", diary: "Le preguntó directamente su opinión sobre el arreglo." },
      { label: "Dejar que el resto de la sección decida todo sin él.", diary: "Dejó que el resto de la sección decidiera todo sin él.", w: 1, ax: "bullying" }
    ] },
  { tag: "Miércoles · Un comentario aparte", text: "Alguien de la banda le dice a Rumi, en broma, que \"le tocó cargar\" con ese compañero en la sección.",
    choices: [
      { label: "Decir que no lo ve como una carga, sino como parte del equipo.", diary: "Defendió al compañero frente al comentario." },
      { label: "Reírse del comentario, sin decir nada más.", diary: "Se rió del comentario, sin decir nada más.", w: 1, ax: "bullying" }
    ] },
  { tag: "Jueves · El aporte del nuevo integrante", text: "El compañero nuevo termina proponiendo la idea que mejor le queda al tema.",
    choices: [
      { label: "Reconocer frente al grupo que fue la mejor idea.", diary: "Reconoció frente al grupo que fue la mejor idea." },
      { label: "Usar la idea sin mencionar de quién fue.", diary: "Usó la idea sin mencionar de quién había sido.", w: 1, ax: "bullying" }
    ] },
  { tag: "Viernes · Concierto final del año", text: "La banda toca el último tema del año. El ambiente entre todos se siente distinto al del primer día.",
    choices: [
      { label: "Agradecerle al grupo completo, incluyendo al que se sumó al final.", diary: "Agradeció a todo el grupo, incluyendo al que se sumó al final." },
      { label: "Cerrar el concierto sin mencionar a nadie en particular.", diary: "Cerró el concierto sin mencionar a nadie en particular.", w: 1, ax: "bullying" }
    ] }
];

const mechanics_banda = {};

mechanics_banda[4] = { type: "habit", axis: "depresion", diaryWeek: "Semana 4", totalDays: 5,
  intro: "Semana 4. Rumi encuentra una plantita que le regaló un compañero de la banda \"para la suerte\" y se la lleva a su cuarto. Nadie le pide que la cuide. Durante 5 días, puede regarla o no.",
  doLabel: "Regarla", skipLabel: "Dejarla para después", itemLabel: "la regó" };

mechanics_banda[5] = { type: "timing", diaryWeek: "Semana 5",
  intro: "Semana 5. Antes del ensayo, Rumi debe entrar tocando justo en el momento exacto de su entrada — ni antes, ni después.",
  actionLabel: "¡Ahora!", verbPast: "entró a tiempo" };

mechanics_banda[6] = { type: "social", axis: "bullying", diaryWeek: "Semana 6", verbPast: "saludó a", continueLabel: "Seguir",
  intro: "Semana 6. Es descanso entre canciones del ensayo. Rumi puede saludar a quien quiera, a nadie, o simplemente seguir cuando esté listo.",
  classmates: [
    { initials: "AL", saludo: "Alejo te saluda de vuelta." },
    { initials: "CO", saludo: "Coco te pregunta cómo va tu día." },
    { initials: "KV", saludo: "Kevin te choca la mano al pasar." }
  ] };

mechanics_banda[7] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 7",
  intro: "Semana 7. Un pensamiento aparece: \"no soy tan bueno como los demás en la banda\". Reconocerlo no resta ni suma nada. Lo que sí se registra es cuando Rumi decide probar una forma distinta de verlo.",
  thoughts: [
    { t: "Con lo que toco, seguro nadie se fija en mí.", r: "¿Y si lo que tocas sí se nota, aunque nadie lo diga en voz alta?" },
    { t: "Los demás la tienen más fácil que yo.", r: "¿Y si cada quien está peleando algo que no se ve?" },
    { t: "Si me equivoco aquí, van a pensar que no sirvo.", r: "¿Y si equivocarse es justo la parte donde se aprende algo?" },
    { t: "No valgo tanto como para que esto me salga bien.", r: "¿Y si el resultado de hoy no dice nada sobre lo que vales?" }
  ] };

mechanics_banda[8] = { type: "social", axis: null, diaryWeek: "Semana 8", verbPast: "se acercó a", continueLabel: "Terminar semana 8",
  intro: "Semana 8. Encuentro/feria de bandas del colegio. Rumi cruza el patio y llega al puesto de la banda, donde están los mismos compañeros de siempre. Semana de revisión: no suma puntos nuevos a ningún eje.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo invita a hacer fila juntos." },
    { initials: "CO", saludo: "Coco le guarda un puesto." },
    { initials: "KV", saludo: "Kevin le pasa algo de comer." }
  ] };

mechanics_banda[10] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 10", totalDays: 5,
  intro: "Semana 10. Rumi y sus papás acordaron una hora para apagar pantallas cada noche. Durante 5 noches, puede cumplirla o no — nadie se lo recuerda en el juego.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_banda[12] = { type: "social", axis: "bullying", diaryWeek: "Semana 12", verbPast: "se acercó a", continueLabel: "Terminar semana 12",
  intro: "Semana 12. En la sala de partituras, arreglan una canción en pareja. Rumi puede acercarse a proponer algo, a nadie, o simplemente esperar a que alguien más hable.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra en qué va su parte." },
    { initials: "CO", saludo: "Coco le pregunta qué canción le gustaría cubrir." },
    { initials: "KV", saludo: "Kevin le pasa sus apuntes para revisar juntos." }
  ] };

mechanics_banda[14] = { type: "timing", diaryWeek: "Semana 14",
  intro: "Semana 14. Antes de un ensayo abierto, hay que afinar en el momento exacto que marca el director — ni antes, ni después.",
  actionLabel: "¡Afinar ahora!", verbPast: "afinó en el momento justo" };

mechanics_banda[16] = { type: "social", axis: "bullying", diaryWeek: "Semana 16", verbPast: "se acercó a", continueLabel: "Terminar semana 16",
  intro: "Semana 16. Primer ensayo de vuelta después de vacaciones. La sala está llena de gente que Rumi no ve hace tiempo.",
  classmates: [
    { initials: "AL", saludo: "Alejo lo saluda con un choque de manos." },
    { initials: "CO", saludo: "Coco le cuenta cómo estuvieron sus vacaciones." },
    { initials: "KV", saludo: "Kevin le pregunta si vio el concierto del fin de semana." }
  ] };

mechanics_banda[17] = { type: "habit", axis: "depresion", diaryWeek: "Semana 17", totalDays: 5,
  intro: "Semana 17. La sala de ensayo adoptó un acuario pequeño con dos peces. Nadie asignó turnos fijos para darles de comer.",
  doLabel: "Darles de comer", skipLabel: "Dejarlo para después", itemLabel: "le dio de comer a los peces" };

mechanics_banda[19] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 19",
  intro: "Semana 19. Otro pensamiento aparece sobre si de verdad encaja en la banda.",
  thoughts: [
    { t: "Si no respondo rápido, van a dejar de invitarme.", r: "¿Y si una amistad de verdad no depende de responder en segundos?" },
    { t: "Me veo raro en las fotos que suben de la banda.", r: "¿Y si una sola foto no dice cómo te ves siempre?" },
    { t: "Seguro los demás notan todo lo que me sale mal.", r: "¿Y si casi nadie se fija tanto como yo creo?" },
    { t: "Si digo lo que pienso, capaz ya no les caigo bien.", r: "¿Y si decir lo que piensas es parte de por qué te quieren cerca?" }
  ] };

mechanics_banda[20] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 20", totalDays: 5,
  intro: "Semana 20. Hay un puente festivo de varios días antes de volver al ensayo. Rumi puede seguir apagando las pantallas a la hora acordada, o dejar que el puente se le vaya en eso.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_banda[22] = { type: "habit", axis: "depresion", diaryWeek: "Semana 22", totalDays: 5,
  intro: "Semana 22. El perro de la casa espera su paseo después del ensayo. Nadie más en la casa insiste en que Rumi lo saque.",
  doLabel: "Sacarlo a pasear", skipLabel: "Dejarlo para después", itemLabel: "sacó a pasear al perro" };

mechanics_banda[24] = { type: "timing", diaryWeek: "Semana 24",
  intro: "Semana 24. En la esquina camino al ensayo, el semáforo peatonal da apenas un segundo justo para cruzar antes de que cambie.",
  actionLabel: "¡Cruzar!", verbPast: "cruzó en el momento justo" };

mechanics_banda[26] = { type: "social", axis: "bullying", diaryWeek: "Semana 26", verbPast: "se acercó a", continueLabel: "Terminar semana 26",
  intro: "Semana 26. Un grupo de la banda organiza ir a comer algo cerca después del ensayo. Rumi puede sumarse a la conversación, a nadie, o simplemente ir en silencio.",
  classmates: [
    { initials: "AL", saludo: "Alejo le guarda un puesto en la mesa." },
    { initials: "CO", saludo: "Coco le pregunta qué va a pedir." },
    { initials: "KV", saludo: "Kevin le cuenta un chiste malo, como siempre." }
  ] };

mechanics_banda[28] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 28",
  intro: "Semana 28. Otro pensamiento aparece, esta vez relacionado con la evaluación de recuperación de la semana pasada.",
  thoughts: [
    { t: "Si vuelvo a fallar, ya no vale la pena intentarlo.", r: "¿Y si fallar una vez no significa que no valga la pena seguir intentando?" },
    { t: "Los demás aprenden más rápido que yo.", r: "¿Y si cada quien aprende a un ritmo distinto, no mejor ni peor?" },
    { t: "Ya perdí el trimestre, para qué esforzarme ahora.", r: "¿Y si lo que haga de aquí en adelante también cuenta?" },
    { t: "Si pido ayuda, van a pensar que no puedo solo.", r: "¿Y si pedir ayuda es parte de aprender a resolver las cosas?" }
  ] };

mechanics_banda[30] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 30", totalDays: 5,
  intro: "Semana 30. Hay una semana corta de receso. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que el receso se le vaya igual que antes.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_banda[32] = { type: "habit", axis: "depresion", diaryWeek: "Semana 32", totalDays: 5,
  intro: "Semana 32. La sala de ensayo tiene un hámster de mascota. Esta semana le toca a Rumi encargarse de darle de comer, sin que nadie se lo recuerde.",
  doLabel: "Darle de comer", skipLabel: "Dejarlo para después", itemLabel: "le dio de comer al hámster" };

mechanics_banda[34] = { type: "timing", diaryWeek: "Semana 34",
  intro: "Semana 34. En clase de cocina (aparte de la banda), hay que sacar la bandeja del horno justo cuando el temporizador llega a cero — ni antes, ni después.",
  actionLabel: "¡Sacarla ahora!", verbPast: "sacó la bandeja en el momento justo" };

mechanics_banda[36] = { type: "social", axis: "bullying", diaryWeek: "Semana 36", verbPast: "participó con", continueLabel: "Terminar semana 36",
  intro: "Semana 36. Un grupo de la banda se reúne un sábado en casa de un compañero para repasar juntos. Rumi puede participar de la conversación, a nadie, o quedarse callado con su instrumento.",
  classmates: [
    { initials: "AL", saludo: "Alejo le explica la parte que no entendía." },
    { initials: "CO", saludo: "Coco le pregunta si quiere algo de tomar." },
    { initials: "KV", saludo: "Kevin le muestra sus apuntes del pasaje." }
  ] };

mechanics_banda[38] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 38",
  intro: "Semana 38. Antes de una reunión familiar grande, otro pensamiento aparece, tal cual lo pensaría cualquiera.",
  thoughts: [
    { t: "Si no soy igual de gracioso que mis primos, se van a aburrir conmigo.", r: "¿Y si no hace falta ser el más gracioso para que disfruten estar contigo?" },
    { t: "Seguro todos notan que estoy más callado que antes.", r: "¿Y si estar más callado un rato no es algo que todos estén midiendo?" },
    { t: "Si digo algo raro, se van a acordar de eso para siempre.", r: "¿Y si la gente olvida esas cosas más rápido de lo que uno cree?" },
    { t: "Debería tener más de qué hablar con la familia.", r: "¿Y si escuchar también cuenta como estar presente?" }
  ] };

mechanics_banda[40] = { type: "social", axis: "bullying", diaryWeek: "Semana 40", verbPast: "conversó con", continueLabel: "Terminar semana 40",
  intro: "Semana 40. Cierra la primera mitad del año. En un descanso, varios compañeros de la banda conversan sobre lo que se viene en el segundo semestre.",
  classmates: [
    { initials: "AL", saludo: "Alejo le cuenta sus planes para el segundo semestre." },
    { initials: "CO", saludo: "Coco le pregunta cómo le fue en todo este tiempo." },
    { initials: "KV", saludo: "Kevin le propone seguir ensayando juntos." }
  ] };

mechanics_banda[42] = { type: "habit", axis: "depresion", diaryWeek: "Semana 42", totalDays: 5,
  intro: "Semana 42. Hay un huerto pequeño en el patio de la sala de ensayo, con turnos por sección. Esta semana le toca a Rumi revisarlo y regarlo, sin que nadie se lo recuerde.",
  doLabel: "Revisarlo y regarlo", skipLabel: "Dejarlo para después", itemLabel: "revisó y regó el huerto" };

mechanics_banda[44] = { type: "timing", diaryWeek: "Semana 44",
  intro: "Semana 44. Hay que afinar en el momento exacto que marca el metrónomo del ensayo — ni antes, ni después.",
  actionLabel: "¡Tocar ahora!", verbPast: "tocó en el tiempo justo" };

mechanics_banda[46] = { type: "social", axis: "bullying", diaryWeek: "Semana 46", verbPast: "ensayó con", continueLabel: "Terminar semana 46",
  intro: "Semana 46. La banda prepara el concierto de cierre de año. En el ensayo, Rumi puede sumarse a la conversación del grupo, a nadie, o quedarse en silencio practicando solo.",
  classmates: [
    { initials: "AL", saludo: "Alejo le muestra el pasaje que le está costando." },
    { initials: "CO", saludo: "Coco le pregunta si quiere ensayar juntos la pieza." },
    { initials: "KV", saludo: "Kevin le presta su turno del atril para practicar." }
  ] };

mechanics_banda[48] = { type: "thoughts", axis: "depresion", diaryWeek: "Semana 48",
  intro: "Semana 48. Con el año casi terminado, otro pensamiento aparece sobre cómo le fue en la banda este año.",
  thoughts: [
    { t: "Este año no logré tanto como debería.", r: "¿Y si lograr menos de lo esperado no borra lo que sí logró?" },
    { t: "Los demás van a recordar solo mis errores del año.", r: "¿Y si la gente recuerda mucho menos de lo que uno cree?" },
    { t: "Si el próximo año es igual de difícil, no sé si voy a poder.", r: "¿Y si no hace falta saberlo todavía, solo ir viendo semana a semana?" },
    { t: "No cambié tanto como pensé que iba a cambiar.", r: "¿Y si los cambios más importantes no siempre se notan de inmediato?" }
  ] };

mechanics_banda[50] = { type: "habit", axis: "adicciones", diaryWeek: "Semana 50", totalDays: 5,
  intro: "Semana 50. Faltan pocas semanas para las vacaciones largas de fin de año. Rumi puede seguir aplicando lo que ha practicado con las pantallas, o dejar que la ansiedad de fin de año se lo lleve todo frente a una pantalla.",
  doLabel: "Apagar a la hora acordada", skipLabel: "Seguir un rato más", itemLabel: "apagó las pantallas a tiempo" };

mechanics_banda[52] = { type: "social", axis: "bullying", diaryWeek: "Semana 52", verbPast: "se despidió de", continueLabel: "Cerrar el año",
  intro: "Semana 52, último ensayo del año. Rumi se despide de un año completo en la Banda Juvenil del Cerro. En la sala, toda la banda se reúne una última vez antes de las vacaciones.",
  classmates: [
    { initials: "AL", saludo: "Alejo le da un abrazo de despedida." },
    { initials: "CO", saludo: "Coco le promete escribirle en vacaciones." },
    { initials: "KV", saludo: "Kevin le desea felices vacaciones." }
  ] };

if (typeof module !== "undefined") { module.exports = { dialogues_banda, mechanics_banda }; }
