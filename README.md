# Web SPADA

Sitio estatico en HTML, CSS y JS nativo, pensado mobile first y con una base reusable para:

- Landing principal
- Listado de tratamientos
- Detalle individual de tratamientos
- Seccion "Acerca de"
- Detalle individual de articulos
- Contacto con envio por WhatsApp

## Como levantarlo

1. `npm run build:data`
2. `npm start`

El server queda disponible en `http://127.0.0.1:4173`.

## Donde editar cada cosa

- Tratamientos generados desde el CSV: `scripts/generated-treatments.js`
- Script que regenera tratamientos desde el CSV: `scripts/build-data.mjs`
- Contenido general, articulos y datos de contacto: `scripts/site-data.js`
- Logica compartida de UI: `scripts/ui.js`
- Renderizado de paginas: `scripts/app.js`
- Estilos globales: `styles/main.css`

## Notas

- Si cambias el CSV, vuelve a correr `npm run build:data`.
- Los numeros de WhatsApp actuales quedaron centralizados en `scripts/site-data.js` para poder reemplazarlos rapido cuando compartas los definitivos.
- Las imagenes del diseno no quedaron embebidas porque los assets del MCP de Figma son temporales y no se pudieron descargar de forma estable. La estructura visual ya esta preparada para sumar imagenes reales despues.
- El color principal sea #000000 el secundario #FFFFFF y el acento que ocupe el 10% de la pagina #CC9110
