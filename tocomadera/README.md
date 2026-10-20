# Tocomadera — espejo del sitio

- **Repo:** https://github.com/cubasmx/tocomadera (privado)
- **Origen:** https://tocomadera.mx (responde también en `tocomadera.com.mx`)
- **Fecha del rescate:** 2026-10-19
- **Motivo:** el repositorio original se perdió con una cuenta de GitHub inaccesible.
- **Stack detectado:** WordPress 5.8.18 · tema `hello-elementor` · Elementor 3.4.7 y
  Elementor Pro 3.4.2 · JetEngine · JetElements · JetTabs · Ele Custom Skin · Yoast SEO ·
  Wordfence · Duplicator · Elfsight Instagram Feed · Click to Chat WhatsApp.
- **Método:** `wget --mirror` (HTML, CSS, JS y medios públicos) + segunda pasada de
  assets lazy/`srcset`/`url()` + normalización de nombres con `?ver=`.
- **Alcance:** copia estática navegable. **Sin PHP ni base de datos.**
- **Limitaciones:** formularios, buscador, carrito, comentarios y paginación AJAX no
  funcionan. Los enlaces internos se reescribieron para abrir en local.
- **Licencias:** el tema y los plugins son de terceros; esta copia es para recuperación
  y rediseño, no para redistribuir el tema.
- **Pendiente:** pedir al cliente un export del hosting (`wp db export` +
  `tar czf wp-content.tar.gz wp-content`) si todavía tiene acceso.

## Uso local

```bash
python3 -m http.server 8088
# http://localhost:8088
```

## Estructura

- `index.html`, `nosotros/`, `contacto/`, `portafolio/`, `proyecto/`, … — páginas.
- `wp-content/` — temas, plugins y medios.
- `wp-includes/` — JS/CSS del core.

Generado con el skill `wp-site-recovery` (VEIA).
