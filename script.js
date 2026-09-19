(() => {
  "use strict";

  document.documentElement.classList.add("js");

  /**
   * Mensajes personalizados.
   * El nombre de la clave es el que va en la URL: ?nombre=Valeria
   * La comparación ignora mayúsculas, minúsculas y acentos.
   * Las claves extra (Laura, Gabii, Mamá…) son atajos para el mismo mensaje.
   */
  const mensajeLauraStefania = {
    mensaje: [
      "Muchas gracias por tu amistad.",
      "Valoro mucho tu confianza y disposición de apoyo. Eres una persona muy importante y confío en que tus sueños se harán realidad.",
      "Así como me lo dijiste alguna vez: tú eres alguien grande con muchas metas por cumplir.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeGabriela = {
    mensaje: [
      "Gabii, muchas gracias por ser una fuente de inspiración para mí.",
      "De verdad, te admiro muchísimo y espero que sigas rompiéndola así como lo vienes haciendo.",
      "Gracias por tu confianza compartida con nosotros y espero que podamos seguirnos hablando para que me sigas contando de tus grandes éxitos.",
    ],
    despedida: "Te queremos muchísimo.",
  };

  const mensajeManuela = {
    mensaje: [
      "Manuu, muchas gracias por ser una luchadora en tu día a día.",
      "Te admiramos mucho y quiero que tengas en cuenta que puedes contar con nosotros siempre.",
      "Si bien la situación sigue sin ser fácil, quiero que no olvides que seguimos aquí para ti.",
    ],
    despedida: "Te queremos mucho.",
  };

  const mensajeAlba = {
    mensaje: [
      "Albilla, gracias por todo, por toooodoo lo que haces por nosotros, por estar pendientes.",
      "Nos sentimos muy orgullosos de tener una doc en la familia.",
      "Confiamos en que todos tus logros te seguirán llevando muy lejos y que eso sea la puerta para que muchos de tus estudiantes sean los mejores profesionales que ha tenido el país.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeLuzStella = {
    mensaje: [
      "Mamá, muchas gracias por todo. Absolutamente todo.",
      "Gracias por estar pendiente de mí y de las cosas que logro poco a poco para que mejoremos en casa.",
      "Espero que pronto encontremos un nivel equilibrado para que puedas empezar a cumplir los sueños que quieres.",
      "Esto solo es un recordatorio de lo mucho que te amo, y que sepas que pronto todo mejorará mucho más de lo que ya lo hemos hecho.",
    ],
    despedida: "Te amo mucho.",
  };

  const mensajeBlancaNieves = {
    mensaje: [
      "Mamita, muchas gracias por todo lo que haces.",
      "Desde el almuercito hasta las despedidas extensas con bendiciones.",
      "Quiero que tengas presente que tu nieto se esfuerza mucho para que tu vida sea mejor y, gracias a lo que haces día a día, lo estoy consiguiendo.",
    ],
    despedida: "Te amo mucho.",
  };

  const mensajeParcero = {
    mensaje: [
      "Parcero, muchas gracias por estar en mi vida.",
      "De verdad, valoro mucho tu amistad y los momentos especiales que hemos compartido.",
      "Aprendo mucho de ti y siempre me inspiras a ser una mejor persona.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeTio = {
    mensaje: [
      "Muchas gracias por ser una inspiración para mí.",
    ],
    despedida: "No olvides que te queremos mucho.",
  };

  const mensajeFamilia = {
    mensaje: [
      "Muchas gracias por ser parte de mi vida.",
    ],
    despedida: "Espero podamos compartir más momentos juntos en los días que vengan.",
  };

  const mensajeZoila = {
    mensaje: [
      "Tía, muchas gracias por estar en mi vida.",
      "Quiero que sepas que puedes contar conmigo en lo que necesites en estos momentos difíciles.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeCatalina = {
    mensaje: [
      "Cata, muchas gracias por estar en nuestras vidas.",
      "Te queremos mucho y quiero que tengas en cuenta que puedes contar con nosotros siempre.",
      "Si bien la situación sigue sin ser fácil, quiero que no olvides que seguimos aquí para ti.",
    ],
    despedida: "Te queremos mucho.",
  };

  const mensajePapa = {
    mensaje: [
      "Muchas gracias, papá, por ser una inspiración para mí.",
      "Tu sabiduría me ha permitido mejorar en el aspecto financiero y, gracias a eso, he podido manejar óptimamente mis cuentas y proyectos.",
      "Gracias por estar para mí cuando lo necesito y espero que con esto tengas presente que puedes contar conmigo cuando lo necesites.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeNatalia = {
    mensaje: [
      "Hoy quería mandarte estas flores amarillas aunque haya pasado un tiempo sin hablarnos.",
      "Gracias por haber sido, y por seguir siendo, una amiga especial para mí. El tiempo no le quita el lugar que tienes.",
      "Espero que este detalle te encuentre bien.",
    ],
    despedida: "Te quiero mucho.",
  };

  const mensajeAndreaPaulaValeria = {
    mensaje: [
      "Muchas gracias por ser parte de mi vida.",
    ],
    despedida: "No olvides que te queremos mucho.",
  };

  const destinatarios = {
    Valeria: {
      mensaje: [
        "Muchas gracias por tu amistad.",
        "Valoro mucho el tiempo que hemos compartido. Eres una persona única que nos saca a todos una sonrisa.",
        "Espero que podamos compartir mucho más tiempo juntos y que hagamos más cosas locas.",
      ],
      despedida: "Te quiero mucho.",
    },
    "Laura Stefanía": mensajeLauraStefania,
    Laura: mensajeLauraStefania,
    Stephania: {
      mensaje: [
        "Muchas gracias por el tiempo que hemos compartido.",
        "Valoro mucho las veces en las que nos hemos reído, las conversaciones y esa cercanía tuya que se siente honesta, que viene del corazón y se nota.",
        "Me importa que sepas que te mereces cosas buenas para tu vida, y esto porque eres una maravillosa persona.",
      ],
      despedida: "Te quiero muchísimo.",
    },
    "Luz Stella": mensajeLuzStella,
    Mamá: mensajeLuzStella,
    Mama: mensajeLuzStella,
    Luz: mensajeLuzStella,
    "Blanca Nieves": mensajeBlancaNieves,
    Mamita: mensajeBlancaNieves,
    Gabriela: mensajeGabriela,
    Gabii: mensajeGabriela,
    Manuela: mensajeManuela,
    Manuu: mensajeManuela,
    Alba: mensajeAlba,
    Albilla: mensajeAlba,
    Natalia: mensajeNatalia,
    Andrea: mensajeAndreaPaulaValeria,
    "Paula González": mensajeAndreaPaulaValeria,
    Paula: mensajeAndreaPaulaValeria,
    "Valeria González": mensajeAndreaPaulaValeria,
    "Andrés Camilo": mensajeParcero,
    "Luis Felipe": mensajeParcero,
    Samuel: mensajeParcero,
    Felipe: mensajeTio,
    "Tío Felipe": mensajeTio,
    Óscar: mensajeTio,
    Oscar: mensajeTio,
    "Tío Óscar": mensajeTio,
    Zoila: mensajeZoila,
    "Tía Zoila": mensajeZoila,
    Catalina: mensajeCatalina,
    Cata: mensajeCatalina,
    "Tía Catalina": mensajeCatalina,
    Gabriel: mensajeFamilia,
    Diego: mensajeFamilia,
    Sebastián: mensajeFamilia,
    "Jorge Daniel": mensajeFamilia,
    Mariana: mensajeFamilia,
    "Juan Sebastián": mensajeFamilia,
    "Luis Efraín": mensajePapa,
    Papá: mensajePapa,
    Papa: mensajePapa,
    Efraín: mensajePapa,
  };

  const mensajeGenerico = {
    mensaje: [
      "Muchas gracias por ser parte de mi vida.",
    ],
    despedida: "Espero podamos compartir más momentos juntos en los días que vengan.",
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const inicio = document.getElementById("inicio");
  const abrir = document.getElementById("abrir-regalo");
  const contenido = document.getElementById("contenido");
  const nombreNodo = document.getElementById("nombre-destinataria");
  const mensajeNodo = document.getElementById("mensaje");
  const despedidaNodo = document.getElementById("despedida");
  const petalosNodo = document.getElementById("petalos");
  const masFlores = document.getElementById("mas-flores");
  const dedicatoria = document.getElementById("dedicatoria");

  const destinataria = resolverDestinataria();
  pintarCarta(destinataria);
  actualizarTitulo(destinataria.nombreVisible);

  if (reduceMotion && masFlores) {
    masFlores.hidden = true;
  } else {
    crearPetalos(14);
  }

  abrir?.addEventListener("click", abrirRegalo);
  masFlores?.addEventListener("click", soltarRamo);

  function abrirRegalo() {
    contenido.hidden = false;
    contenido.inert = false;
    document.body.classList.add("abierto");
    inicio.classList.add("es-salida");
    inicio.setAttribute("aria-hidden", "true");
    inicio.inert = true;

    window.setTimeout(() => {
      dedicatoria?.focus();
    }, reduceMotion ? 0 : 700);
  }

  function resolverDestinataria() {
    const params = new URLSearchParams(window.location.search);
    const nombreUrl = sanitizarNombre(params.get("nombre"));

    if (!nombreUrl) {
      return {
        nombreVisible: "ti",
        ...mensajeGenerico,
      };
    }

    const clave = Object.keys(destinatarios).find(
      (nombre) => normalizar(nombre) === normalizar(nombreUrl)
    );

    if (!clave) {
      return {
        nombreVisible: nombreUrl,
        ...mensajeGenerico,
      };
    }

    return {
      nombreVisible: clave,
      ...destinatarios[clave],
    };
  }

  function sanitizarNombre(valor) {
    if (!valor) return "";

    return valor
      .normalize("NFC")
      .replace(/[\u0000-\u001F\u007F<>]/g, "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 48);
  }

  function normalizar(valor) {
    return valor
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es");
  }

  function pintarCarta({ nombreVisible, mensaje, despedida }) {
    nombreNodo.textContent = nombreVisible;
    mensajeNodo.replaceChildren();

    mensaje.forEach((parrafo) => {
      const p = document.createElement("p");
      p.textContent = parrafo;
      mensajeNodo.appendChild(p);
    });

    if (despedida) {
      despedidaNodo.hidden = false;
      despedidaNodo.textContent = despedida;
    } else {
      despedidaNodo.hidden = true;
      despedidaNodo.textContent = "";
    }
  }

  function actualizarTitulo(nombreVisible) {
    document.title = nombreVisible === "ti"
      ? "Flores amarillas"
      : `Para ${nombreVisible} · Flores amarillas`;
  }

  function crearPetalos(cantidad, { estallido = false } = {}) {
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < cantidad; i += 1) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");

      svg.setAttribute("class", "petalo");
      svg.setAttribute("viewBox", "0 0 24 36");
      svg.style.left = `${Math.random() * 100}%`;
      svg.style.width = `${10 + Math.random() * 10}px`;
      svg.style.setProperty("--deriva", `${-40 + Math.random() * 80}px`);
      svg.style.animationDuration = `${9 + Math.random() * 10}s`;
      svg.style.animationDelay = estallido ? `${Math.random() * 0.4}s` : `${Math.random() * 8}s`;

      if (estallido) {
        svg.style.top = "42%";
        svg.style.animationDuration = `${4 + Math.random() * 4}s`;
      }

      use.setAttribute("href", "#petalo-suelto");
      svg.appendChild(use);
      fragmento.appendChild(svg);

      if (estallido) {
        window.setTimeout(() => svg.remove(), 9000);
      }
    }

    petalosNodo.appendChild(fragmento);
  }

  function soltarRamo() {
    crearPetalos(18, { estallido: true });
  }
})();
