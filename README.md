# Max Precision Driving School

Sitio web de la escuela — Astoria, Queens NY.

Cinco páginas estáticas (HTML + CSS + JS, sin framework), bilingües inglés/español.

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Lessons & Rates | `rates.html` |
| 5 Hour Class | `five-hour-class.html` |
| Contact | `contact.html` |
| Refund Policy | `refund-policy.html` |

## Cómo se edita

Las páginas **se generan**, no se editan a mano:

- `_build/pages.py` — el contenido de cada página (textos en inglés y español)
- `_build/gen.py` — la plantilla común: cabecera, pie, metadatos, datos para Google

```bash
cd _build && python gen.py
```

Eso reescribe los cinco `.html` de la raíz. Editar un `.html` directamente funciona
hasta que alguien vuelva a generar: el cambio se pierde.

## Contacto y teléfono

El bloque `CONFIG` al inicio de `assets/site.js` concentra el teléfono, el WhatsApp
y el texto del mensaje. Es lo único que hay que tocar para cambiar los datos de contacto.

## 🚨 Regla legal — 15 NYCRR §76.21(l)

Donde se publica el precio de una clase, **la duración y la cantidad deben aparecer
en caracteres tan grandes como el precio**. Por eso `.pack-amt` y `.pack-dur` comparten
tamaño exacto, igual que `.pr-amt` y `.pr-dur` en la calculadora de tarifas.

Al cambiar tipografías o tamaños en esas clases, verificar que la paridad se mantiene.

## Despliegue

Estático puro: no hay paso de build. Vercel sirve los archivos tal como están.
