# Uditore — espejo del sitio

- **Repo:** https://github.com/cubasmx/uditore (privado)
- **Origen:** https://uditore.mx
- **Fecha del rescate:** 2026-10-19
- **Motivo:** repositorio original perdido con una cuenta de GitHub inaccesible.
- **Stack:** WordPress 5.2.29 · tema `avantage` + child · Bold Page Builder ·
  Contact Form 7 · Events Made Easy · Nextend Smart Slider 3 Pro · BT Cost Calculator.
- **Método:** `wget --mirror` + segunda pasada de assets + normalización + shortlinks
  `?p=` resueltos a su URL canónica.
- **Alcance:** copia estática navegable. **Sin PHP ni base de datos.**
- **Limitaciones:** formularios, buscador, calculadora y comentarios no funcionan.
  El REST lista 71 páginas, pero muchas son demos del tema no enlazadas; el espejo
  cubre la navegación pública real.
- **Pendiente:** pedir al cliente un export del hosting (`wp db export` +
  `tar czf wp-content.tar.gz wp-content`) si aún tiene acceso.

## Uso local

```bash
python3 -m http.server 8092
# http://localhost:8092
```

Generado con el skill `wp-site-recovery` (VEIA).
