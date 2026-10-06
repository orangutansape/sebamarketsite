# Sitio de productos en venta

Sitio estático listo para publicar con GitHub Pages. No requiere npm, build ni servidor backend.

## Archivos

- `index.html`: estructura del sitio.
- `styles.css`: estilos responsive.
- `app.js`: catálogo, filtros, precios, descripciones y links.
- `assets/images/`: imágenes locales de los productos.
- `.nojekyll`: evita el procesamiento de Jekyll en GitHub Pages.
- `.github/workflows/pages.yml`: despliegue automático a GitHub Pages.

## Publicar en GitHub Pages

El sitio se publica automáticamente con GitHub Actions (`.github/workflows/pages.yml`) en cada push a `main`.

Si es la primera vez: ir a **Settings → Pages** y en **Build and deployment → Source** elegir **GitHub Actions**. Después, volver a correr el workflow desde la pestaña **Actions** (o hacer un push).

## Modificar productos

Editar el array `products` al comienzo de `app.js`.

Cada producto tiene:

```js
{
  id: "identificador-unico",
  name: "Marca Modelo — Tipo de producto", // el texto después de " — " se muestra como subtítulo
  category: "Categoría",
  price: 100000,
  image: "./assets/images/archivo.webp",
  ml: "https://articulo.mercadolibre.com.ar/...", // opcional: sin link, el botón principal pasa a ser "Consultar para comprar"
  imageNote: "Imagen ilustrativa...", // opcional: para fotos que no son de la unidad real
  description: "Descripción",
  specs: ["Dato 1", "Dato 2"]
}
```

Para cambiar el email de contacto, modificar `CONTACT_EMAIL` en `app.js` y los enlaces `mailto:` de `index.html`.

## Nota sobre las imágenes

Las imágenes incluidas se obtuvieron de las miniaturas visibles en las capturas de las publicaciones suministradas para este proyecto. Si se agregan fotos originales en mayor resolución, basta con reemplazar los archivos en `assets/images/` conservando sus nombres.

## Fotos

Las galerías usan las fotos reales entregadas por el vendedor para los 9 productos del catálogo: Nintendo New 3DS XL, Zoom G1u, Korg Volca Sample, Huion Inspiroy H640P, Novation Launchpad Mini, OVNI Drum, Arturia DrumBrute Impact, Korg microKORG y el lote de cassettes. En el caso del Launchpad, las fotos estaban dentro de una carpeta llamada `Push`, pero muestran claramente un Novation Launchpad Mini, por lo que fueron asociadas a ese producto.


## Interfaz

- Modo claro/oscuro con preferencia guardada en el navegador.
- Carrusel de fotos directamente en cada tarjeta del catálogo, además de la galería ampliada en Detalles.
- En celular, las fotos también se pueden recorrer deslizando horizontalmente.
- Cada tarjeta muestra título, precio y un botón principal “Comprar en Mercado Libre”.
- Tocar la foto o el título abre las fotos y los detalles; en celular los botones de compra quedan fijos abajo.
- Enlaces directos a un producto: agregar `#id-del-producto` a la URL (por ejemplo `#korg-volca-sample`).
- Las fotos de cada producto se listan en `galleryPhotos` (en `app.js`), dentro de `assets/photos/` con sus miniaturas en `assets/photos/thumbs/` (≈260 px) y versiones medianas para las tarjetas en `assets/photos/medium/` (800 px de ancho). Al agregar una foto nueva, generar también esas dos versiones con el mismo nombre.
