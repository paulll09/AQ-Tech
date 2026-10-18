# Notas de desarrollo

## Estructura

```
src/
├── pages/index.astro     # Única página: arma las secciones en orden
├── layouts/Layout.astro  # <head>, fuentes, metadatos
├── components/           # Una sección por archivo (Hero, Services, Portfolio, FAQ...)
│   └── ui/               # Piezas reutilizables (botones, iconos)
├── lib/utils.ts          # cn(): combina clases con clsx + tailwind-merge
└── styles/global.css     # Tema y configuración de Tailwind
public/                   # Se copia tal cual al sitio
docs/                     # Documentación: no se publica
```

El formulario de contacto envía los mensajes a Web3Forms.

## Cuidado con esto

- **Todo lo que esté en `public/` se publica.** Las notas van en `docs/`.
- **Tailwind lee todos los archivos del proyecto** para encontrar clases. `docs/` y `README.md` están excluidos en `global.css` con `@source not`. Si agregás otra carpeta de texto, excluila también, si no el CSS crece con clases que nadie usa.
- **`tailwind-merge`, `clsx` y `class-variance-authority` tienen versión fija** en `package.json`. No las actualices sin revisar que el Navbar siga viéndose igual.
- **Finales de línea en LF**, definidos en `.gitattributes`. No lo cambies: en Windows Git convertiría los archivos a CRLF.

## Otros documentos

| Archivo | Contenido |
|---------|-----------|
| [`DEPLOY.md`](DEPLOY.md) | Cómo subir el sitio |
| [`PRODUCT.md`](PRODUCT.md) | Público, posicionamiento y decisiones pendientes |
| [`aqtech-contenido.txt`](aqtech-contenido.txt) | Textos fuente del sitio |
| [`portfolio-screenshots.md`](portfolio-screenshots.md) | Requisitos de las capturas del portafolio |
| [`team-photos.md`](team-photos.md) | Cómo activar la sección del equipo |
