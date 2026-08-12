# Cómo aplicar estos cambios a tu repo

## Archivos incluidos
- `index.html` → reemplaza el que está en la raíz de tu proyecto
- `public/` → carpeta completa (favicon.ico, favicon-16x16.png, favicon-32x32.png,
  apple-touch-icon.png, icon-192.png, icon-512.png, og-image.png, site.webmanifest)
  → cópiala completa a la raíz de tu proyecto (si ya tienes carpeta `public/`, solo
  agrega estos archivos dentro)

## Pasos en tu computador (VS Code / terminal)

1. Copia `index.html` a la raíz de tu proyecto (reemplaza el existente)
2. Copia todo el contenido de la carpeta `public/` de este paquete a la carpeta
   `public/` de tu proyecto (créala si no existe)
3. Elimina la carpeta `.bolt/` de la raíz de tu proyecto si existe (rastro de la
   plantilla inicial, ya no se usa)
4. Elimina `public/vite.svg` si existe (ya no se referencia en ningún lado)
5. En la terminal, dentro de la carpeta del proyecto:

```bash
git add .
git commit -m "fix: favicon oficial, og:image real y limpieza de rastros de plantilla"
git push
```

6. Netlify va a redesplegar automáticamente. En ~1-2 min ya debería verse el
   favicon nuevo y, al compartir el link, la imagen oficial.

## Importante para cuando tengan el dominio .cl
En `index.html` hay 3 líneas con `https://briefnimbos.netlify.app/` que deben
cambiarse por el dominio final (`https://briefnimbos.cl/` o el que definan):
- `<link rel="canonical" ...>`
- `<meta property="og:url" ...>`
- `<meta property="og:image" ...>` y `<meta name="twitter:image" ...>`

## Nota sobre WhatsApp/Instagram y caché
Estas plataformas cachean el preview del link. Si después de publicar sigue
saliendo la imagen vieja, hay que "forzar" el refresh con estas herramientas:
- Facebook/WhatsApp: https://developers.facebook.com/tools/debug/ (pega tu URL y
  hacer clic en "Scrape Again")
- X/Twitter: no tiene debugger público, pero compartir con un parámetro nuevo al
  final del link (ej. `?v=2`) fuerza una nueva lectura
