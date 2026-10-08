// Escenas propias de los días 2 a 5 en las semanas de mecánicas (hábito, reflejos, saludar, pensamientos).
// Forma: BEATS[idHistoria][semana] = [día2, día3, día4, día5]. Son continuación de la escena del día 1
// de esa semana: no deciden nada por el estudiante, no sugieren qué opción es "la correcta" y no puntúan.
// Si una historia/semana no tiene escenas aquí, session.js usa el texto automático de respaldo.
// Historias hechas hasta ahora: banda. (Pendientes: nave, ciudad, guardianes, caso, cordillera, rumi-colegio.)

const BEATS = {
  banda: {
    4: [
      "La plantita sigue en la ventana del cuarto, donde la dejó. Afuera se escucha a alguien practicando trompeta.",
      "Llega un mensaje de la banda mientras Rumi pasa junto a la planta.",
      "En el ensayo, el compañero que se la regaló le pregunta cómo va la plantita.",
      "Es el último día de los cinco. La plantita sigue ahí, en su lugar de siempre."
    ],
    5: [
      "El director vuelve a marcar la entrada con la mano antes de que arranque la pieza.",
      "Hoy el ensayo empieza más rápido. Rumi mira al director y espera su señal.",
      "Un compañero de percusión cuenta en voz baja para no perderse. Rumi también se prepara.",
      "Último ensayo de la semana. La pieza empieza igual que los otros días."
    ],
    6: [
      "Otra pausa entre canciones. Algunos toman agua, otros afinan, otros conversan en grupitos.",
      "El director sale un momento y la sala se llena de voces y de instrumentos sonando sueltos.",
      "Alguien deja caer unas partituras y varios se agachan a recogerlas.",
      "Última pausa de la semana. La sala se ve como cualquier día de ensayo."
    ],
    7: [
      "Rumi llega temprano al ensayo y se sienta con su instrumento mientras los demás van entrando.",
      "El director pide repasar un pasaje difícil, primero por secciones y luego todos juntos.",
      "Se escucha a otra sección tocando muy fluido el mismo pasaje. Rumi sigue con su parte.",
      "Antes de empezar el último ensayo de la semana, hay un momento de silencio en la sala."
    ],
    8: [
      "El patio sigue lleno de puestos de otros grupos del colegio. La banda tiene el suyo cerca de la entrada.",
      "Pasan estudiantes de otros cursos mirando los instrumentos que hay sobre la mesa.",
      "Los compañeros de la banda se turnan para atender el puesto. Rumi está de pie a un lado.",
      "Último día de la feria. Empiezan a recoger los carteles y a guardar los instrumentos."
    ],
    10: [
      "Esta noche el ensayo se alargó. Rumi llega a casa más tarde de lo normal.",
      "Hay tarea de armonía pendiente y el celular vibra con mensajes de la banda.",
      "En la casa, todos están en sus cosas. Se acerca la hora que Rumi y sus papás acordaron.",
      "Última noche de las cinco. El celular está en la mesa, al lado del cuaderno de partituras."
    ],
    12: [
      "Hoy toca ensayar en parejas otra pieza. En la sala de partituras, cada pareja se acomoda en una mesa.",
      "Sobre el piano hay una hoja con una idea para el arreglo, escrita a lápiz.",
      "Una pareja discute con calma cómo dividir las voces de la canción.",
      "Último día para arreglar la pieza. Faltan pocos minutos para que termine la sala."
    ],
    14: [
      "El director sube al estrado y alza la mano para dar la afinación.",
      "Se acerca el ensayo abierto y la sala tiene unas cuantas sillas más para los invitados.",
      "Hoy el director cuenta en voz alta antes de la señal. Todos esperan.",
      "Último ensayo antes de la presentación. La afinación se repite una vez más."
    ],
    16: [
      "Siguen llegando compañeros que Rumi no veía hace semanas. Algunos traen bronceado, otros traen nuevos instrumentos.",
      "El director pide que todos se sienten en semicírculo para repasar el calendario del trimestre.",
      "Durante el descanso, varios cuentan cómo estuvieron las vacaciones.",
      "Último día de la semana de regreso. La sala ya se siente más parecida a como estaba antes."
    ],
    17: [
      "Los peces siguen nadando en el acuario junto a la ventana de la sala de ensayo.",
      "Alguien pegó un dibujo de peces en el vidrio del acuario.",
      "Pasan estudiantes de otros cursos a mirar los peces antes de que empiece el ensayo.",
      "Último día de la semana. El frasco de comida está en el mismo estante de siempre."
    ],
    19: [
      "Se acerca la presentación y el grupo de la banda en el chat se llena de fotos del ensayo.",
      "Rumi mira la pantalla del celular entre pieza y pieza del ensayo.",
      "Suben otra tanda de fotos de la banda. Alguien etiqueta a varios compañeros.",
      "Último día de la semana. Después del ensayo todos siguen hablando por el chat."
    ],
    20: [
      "El puente festivo continúa. En la casa nadie tiene que madrugar.",
      "Afuera hace sol, pero hay una serie nueva y la pantalla del televisor está encendida.",
      "Un compañero de la banda manda un video gracioso al grupo. La hora acordada se acerca.",
      "Último día del puente. Mañana se retoman los ensayos."
    ],
    22: [
      "Después del ensayo, Rumi llega a casa con la mochila al hombro y el perro lo recibe en la puerta.",
      "El día estuvo cargado de ensayo y tareas. Afuera todavía hay luz.",
      "El perro camina por la casa mientras Rumi se cambia de ropa.",
      "Último día de la semana. El perro espera, como los otros días."
    ],
    24: [
      "Rumi camina hacia el ensayo con el estuche del instrumento en la mano. En la esquina, hay otro grupo esperando.",
      "El semáforo peatonal marca los segundos finales antes de cambiar.",
      "Hoy hay más tráfico que de costumbre. La luz del semáforo cambia varias veces.",
      "Último día de la semana. En la esquina de siempre, el semáforo vuelve a cambiar."
    ],
    26: [
      "Terminó el ensayo y algunos compañeros todavía están guardando los instrumentos.",
      "Un compañero propone una pizzería cerca. Varios dicen que sí.",
      "El grupo empieza a caminar hacia la puerta. Algunos van adelante conversando.",
      "Último día de la semana. En la calle, el grupo todavía no decide a dónde ir."
    ],
    28: [
      "Rumi mira sus notas de la evaluación de recuperación, con los comentarios del director en el margen.",
      "El director habla con la banda sobre cómo se organiza lo que falta del trimestre.",
      "Llega el turno de la sección de Rumi para repasar el pasaje de la evaluación.",
      "Último día de la semana. En la sala hay un ambiente tranquilo después de varios ensayos."
    ],
    30: [
      "El receso sigue. La sala de ensayo está cerrada, pero en la casa se escucha un poco de música.",
      "En el celular hay mensajes nuevos del grupo de la banda y videos de otros ensayos.",
      "Llega la noche y la casa se queda en silencio. La hora acordada se acerca.",
      "Último día del receso. Mañana vuelve la rutina."
    ],
    32: [
      "El hámster se asoma desde su casita cuando Rumi entra a la sala.",
      "Hoy el ensayo se alarga y la sala se llena de ruido. El hámster se esconde un rato.",
      "Un compañero de otra sección se asoma a ver al hámster antes de irse.",
      "Último día de la semana. El hámster sigue en su casita y el plato de comida está en la repisa."
    ],
    34: [
      "En la clase de cocina, la profesora revisa que cada quien tenga su receta y su temporizador.",
      "El olor de las otras bandejas llena el salón. Rumi mira el horno.",
      "Se escucha el timbre de otro temporizador en la mesa de al lado.",
      "Último día de cocina de la semana. Rumi vuelve a poner la bandeja en el horno."
    ],
    36: [
      "El sábado ha seguido en casa del compañero. Varios están sentados en la sala con sus apuntes.",
      "En la mesa hay galletas y vasos. Dos compañeros discuten un ejercicio de teoría.",
      "Alguien pone música de fondo y el repaso se vuelve más relajado.",
      "Ya casi termina la reunión. Algunos empiezan a recoger sus cosas."
    ],
    38: [
      "Se acerca la reunión de la familia y en la casa se empieza a preparar la comida.",
      "Alguien de la familia llama para confirmar a qué hora llegan.",
      "Rumi ayuda a acomodar sillas en la sala mientras escucha las voces de la cocina.",
      "Último día antes de la reunión. Mañana llegan los primos."
    ],
    40: [
      "En el descanso, el director anuncia que habrá nuevas piezas para el segundo semestre.",
      "Varios compañeros comparan sus horarios para el próximo semestre.",
      "Un compañero propone que la banda haga una salida de integración.",
      "Último día de la primera mitad del año. La sala se ve más vacía que de costumbre."
    ],
    42: [
      "El huerto del patio tiene brotes nuevos. Hay una regadera apoyada en la pared.",
      "Llueve un poco por la mañana. El patio huele a tierra mojada.",
      "Otra sección dejó una nota en el huerto con los turnos de la semana.",
      "Último día de turno. Rumi pasa por el patio camino a la sala."
    ],
    44: [
      "El metrónomo arranca con un clic parejo y la sala entera se acomoda.",
      "Hoy el metrónomo va un poco más rápido que ayer.",
      "El director pide que la banda cierre los ojos un momento y escuche el compás.",
      "Último ensayo de la semana. El metrónomo vuelve a marcar el mismo pulso."
    ],
    46: [
      "Se acerca el concierto de cierre y en la sala se amontonan atriles y programas por imprimir.",
      "Un compañero reparte cintas con los nombres de cada sección para las camisetas.",
      "El director hace pasar a cada sección para escuchar cómo suena la pieza completa.",
      "Último día de la semana. El ensayo termina con aplausos de la propia banda."
    ],
    48: [
      "Es una de las últimas semanas del año. En la pared de la sala hay fotos de los ensayos.",
      "Rumi repasa un pasaje de memoria mientras espera a que empiece el ensayo.",
      "Un compañero pregunta qué piensan hacer en las vacaciones.",
      "Último día de la semana. El director pide que cada sección piense qué le gustó del año."
    ],
    50: [
      "Quedan pocas semanas de clases y el ambiente en casa está más relajado.",
      "Hay una serie nueva que todos en la casa quieren ver juntos.",
      "Los mensajes de la banda llegan a cada rato con planes para el fin de año.",
      "Último día de la semana. La casa queda en silencio y la pantalla sigue encendida en la sala."
    ],
    52: [
      "En la sala, la banda empieza a tomar fotos con los instrumentos. Hay globos pegados a la pared.",
      "El director repasa, una por una, las piezas que tocaron durante el año.",
      "Cada compañero dice una palabra sobre lo que se lleva del año.",
      "Último día del último ensayo. Se apagan las luces de la sala una por una."
    ]
  }
};
