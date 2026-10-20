# Legend Horizon Living — espejo del sitio

- **Repo:** https://github.com/cubasmx/legendtower (privado)
- **Origen:** https://legendtower.com.mx
- **Fecha del rescate:** 2026-10-19
- **Motivo:** repositorio original perdido con una cuenta de GitHub inaccesible.
- **Stack:** WordPress 6.4.13 · tema `hello-elementor` + child · Elementor 3.27.6 y
  Elementor Pro · JetEngine · JetElements · Slider Revolution 6.7.18 · Site Kit ·
  Facebook Pixel · Click to Chat WhatsApp.
- **Método:** `wget --mirror` + segunda pasada de assets lazy/`srcset`/`url()` +
  normalización de `?ver=` + reparación de enlaces.
- **Alcance:** copia estática navegable. **Sin PHP ni base de datos.**
- **Limitaciones:** formularios, buscador, comentarios y AJAX no funcionan. Los sliders
  y galerías dependen de JS; el HTML y los medios están completos.
- **Vídeos de avance de obra:** incluidos en el repo en **720p** (18–26 MB cada uno,
  ~88 MB total). Los originales 4K/1080p se conservan en `~/repos/legendtower-media/`.
- **Pendiente:** pedir al cliente un export del hosting (`wp db export` +
  `tar czf wp-content.tar.gz wp-content`) si aún tiene acceso.

## Uso local

```bash
python3 -m http.server 8091
# http://localhost:8091
```

Generado con el skill `wp-site-recovery` (VEIA).
