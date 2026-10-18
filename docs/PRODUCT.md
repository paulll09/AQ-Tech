# Producto

<!-- impeccable:product-schema 1 -->
<!-- Los títulos de sección quedan en inglés a propósito: el launcher de Impeccable
     los parsea (## Platform determina si el proyecto es web o nativo). El contenido
     está en castellano porque es el documento que el equipo lee y valida. -->

## Platform

web

## Users

Dueños y encargados de pequeños negocios y emprendimientos en Argentina, concentrados en Formosa y alrededores. Manejan el negocio día a día — una parrilla, una hamburguesería, un club de pádel, un comercio de barrio — y no son técnicos. Evalúan desde el celular, muchas veces entre turno y turno, y su canal por defecto es WhatsApp.

Dos cosas definen su decisión: cuánto va a costar, y si les va a contestar una persona de verdad. La mayoría o ya se quemó con un desarrollador web antes, o nunca contrató a ninguno.

## Product Purpose

AQ Tech construye software a medida para esos negocios: sitios web y landing pages, tiendas online, sistemas de gestión propios, e integraciones que conectan las herramientas que el negocio ya usa. El éxito es un sistema funcionando en producción que el dueño opera solo, y un cliente que habló directo con un desarrollador real en cada paso.

## Positioning

El cliente habla con la persona que escribe el código. Sin account managers, sin cadena de mensajes, sin capa de agencia. De ahí salen dos compromisos declarados que una agencia vecina no podría copiar sin mentir:

- El precio acordado al principio es el que se paga al final — sin extras que aparecen después.
- Las fechas se estiman con honestidad y se cumplen, en vez de inflarse o prometerse de más.

La formulación más filosa del brief es "Sin rodeos, sin agencias". El hero que está publicado hoy deja afuera "sin agencias", que es justo la mitad que nombra al competidor.

## Operating Context

- **WhatsApp es el canal principal.** Es como esta audiencia abre una conversación y como espera que le respondan. Email e Instagram son secundarios.
- La evaluación pasa en el celular, seguido con datos móviles.
- El tiempo de respuesta prometido es menos de 24 horas; la primera consulta es sin costo.
- Los clientes no son técnicos: las decisiones técnicas se toman por ellos y se explican en lenguaje llano.

## Capabilities and Constraints

- **Stack (existente):** Astro 6, Tailwind CSS 4, islas de React 19, pnpm. Generación estática, sin backend propio.
- El formulario de contacto envía a web3forms; su access key viaja en el bundle del cliente, cosa inherente a ese servicio.
- El dominio del sitio es `aqtech.com.ar` (`astro.config.mjs`).
- Servicios ofrecidos: sitios web y landing pages, tiendas online, sistemas de gestión a medida, integraciones y automatizaciones.
- El copy es castellano rioplatense y debe seguir siéndolo.

## Brand Commitments

- Nombre: **AQ Tech**. Logo en `public/logo.svg` (hoy pesa 133KB y se carga cuatro veces — es un problema de producción, no un cambio de identidad).
- Voz: llana, directa, voseo en segunda persona. Las afirmaciones están escritas como oraciones completas con punto de vista ("El precio que acordamos es el que pagás."), no como puré de frases nominales. **Esta voz es lo más fuerte que tiene el producto y tiene que sobrevivir a cualquier rediseño.**
- Lenguaje de posicionamiento a preservar: trato directo con quien construye, sin intermediarios, sin costos ocultos, fechas honestas.

## Evidence on Hand

Tres sistemas en producción, cada uno con URL pública:

| Cliente | Sistema | URL |
|---|---|---|
| Bar Bulgaria | Menú digital, pedidos por WhatsApp, panel admin en tiempo real | bulgariabar.com |
| Burgers Boss | Menú digital, análisis de ventas, cierre de caja diario | burgersboss.com.ar |
| Club del Bosque Pádel | Reserva de canchas, pagos con Mercado Pago, gestión de socios | clubdelbosquepadel.com |

Puntos de contacto confirmados: WhatsApp `+54 9 3716 40-0743`, Instagram `@aqtechoficial`.

**Lo que hoy NO está en el sitio:** ningún screenshot de los tres sistemas, ninguna foto ni nombre de nadie del equipo, y el teléfono del brief no aparece en ningún lado.

## Open Decisions

Van anotadas como pendientes en vez de inventadas. Cada una bloquea trabajo concreto.

1. **Identidad del equipo.** Los nombres, roles y fotos de quienes están detrás de AQ Tech son desconocidos — no están en el brief ni en el código. Bloquea la sección Nosotros, y es la evidencia directa del claim central de posicionamiento.
2. ~~**Dirección de email.**~~ Resuelto: `contacto@aqtech.com.ar` (el dominio `aqtech.com` no tiene servidor de correo).
3. **Métricas defendibles.** La banda de stats afirma "100% Clientes satisfechos" sobre una muestra de tres clientes, y usa "1 a 1" como si fuera una estadística. Qué números se pueden defender de verdad (meses en producción, pedidos procesados, proyectos entregados) está sin confirmar.
4. **Screenshots de producto.** Si se pueden conseguir capturas de los tres sistemas en producción, y si los datos de clientes que aparezcan se pueden mostrar o hay que anonimizarlos.
5. **Teléfono.** Si conviene publicar el número del brief al lado del WhatsApp.

## Accessibility

No hay un objetivo formal definido. La audiencia es mobile-first y no técnica; se toma el contraste WCAG AA como piso de trabajo, y el formulario de contacto es el único flujo que tiene que quedar completamente operable por teclado y lector de pantalla.
