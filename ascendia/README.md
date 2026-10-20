# Ascendia — espejo del sitio

- **Repo:** https://github.com/cubasmx/ascendia (privado)
- **Origen:** https://ascendia.mx
- **Fecha del rescate:** 2026-10-19
- **Motivo:** repositorio original perdido con una cuenta de GitHub inaccesible.
- **Stack:** WordPress 7.1.3 · tema `salient` + child · WPBakery (`js_composer_salient`) ·
  Salient Core · Click to Chat WhatsApp.
- **Método:** `wget --mirror` + segunda pasada de assets + normalización.
- **Alcance:** copia estática navegable. **Sin PHP ni base de datos.**
- **Brochure:** el enlace original apuntaba a `/nuevo/wp-content/uploads/...` (instalación
  vieja, 404). Se recuperó el PDF desde `/wp-content/uploads/2026/03/` y se reescribió
  el enlace a la copia local.
- **Limitaciones:** formularios, buscador y comentarios no funcionan.
- **Pendiente:** pedir al cliente un export del hosting (`wp db export` +
  `tar czf wp-content.tar.gz wp-content`) si aún tiene acceso.

## Uso local

```bash
python3 -m http.server 8093
# http://localhost:8093
```

Generado con el skill `wp-site-recovery` (VEIA).
