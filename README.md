# AQ Tech — Landing

Código de la landing de [aqtech.com.ar](https://aqtech.com.ar), el sitio del estudio de desarrollo de software a medida para emprendedores y Pymes. Es un sitio estático hecho con Astro.

## Inicio rápido

Requiere Node `>=22.12` y pnpm.

```sh
pnpm install
pnpm dev        # servidor local en http://localhost:4321
pnpm build      # genera el sitio en dist/
pnpm preview    # sirve dist/ para revisarlo antes de subir
```

## Deploy

El sitio se sube a mano: se corre `pnpm build`, el **contenido** de `dist/` va a `public_html` en Hostinger y después se purga la caché de Cloudflare.

Los pasos completos, con el backup previo, están en [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Stack

| Pieza | Uso |
|-------|-----|
| Astro 6 | Genera el sitio estático. Casi todo son componentes `.astro`, sin JS en el cliente. |
| React 19 | Solo para las partes interactivas: `Navbar.tsx` y `ContactForm.tsx`. |
| Tailwind CSS 4 | Estilos, cargados con `@tailwindcss/vite`. |
| Web3Forms | Recibe los mensajes del formulario de contacto. |

## Estructura

```
src/
├── pages/index.astro     # Única página: arma las secciones en orden
├── layouts/Layout.astro  # <head>, fuentes, metadatos
├── components/           # Una sección por archivo (Hero, Services, Portfolio, FAQ...)
│   └── ui/               # Piezas reutilizables (botones, iconos)
├── lib/utils.ts          # cn(): combina clases con clsx + tailwind-merge
└── styles/global.css     # Tema y configuración de Tailwind
public/                   # Archivos que se copian tal cual al sitio (logo)
docs/                     # Documentación: no se publica
```

## Cuidado con esto

- **Todo lo que esté en `public/` se publica.** Las notas y los documentos van en `docs/`.
- **Tailwind lee todos los archivos del proyecto** para encontrar clases. `docs/` y este README están excluidos en `global.css` con `@source not`. Si agregás otra carpeta de texto, excluila también, si no el CSS crece con clases que nadie usa.
- **`tailwind-merge`, `clsx` y `class-variance-authority` tienen versión fija** en `package.json`. No las actualices sin revisar que el Navbar siga viéndose igual.
- **Finales de línea en LF**, definidos en `.gitattributes`. No lo cambies: en Windows Git convertiría los archivos a CRLF.

## Documentación

| Archivo | Contenido |
|---------|-----------|
| [`docs/DEPLOY.md`](docs/DEPLOY.md) | Cómo subir el sitio sin romper nada |
| [`docs/PRODUCT.md`](docs/PRODUCT.md) | Público, posicionamiento y decisiones pendientes |
| [`docs/aqtech-contenido.txt`](docs/aqtech-contenido.txt) | Textos fuente del sitio |
| [`docs/portfolio-screenshots.md`](docs/portfolio-screenshots.md) | Requisitos de las capturas del portafolio |
| [`docs/team-photos.md`](docs/team-photos.md) | Cómo activar la sección del equipo |
