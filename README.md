# TutoPar · Prototipo

Prototipo navegable de **TutoPar**, una plataforma de tutorías particulares entre estudiantes universitarios. Fue desarrollado para el parcial final del curso Emprendimiento y Responsabilidad Social de la Universidad Pontificia Bolivariana, seccional Bucaramanga.

Es un prototipo de interfaz: simula la experiencia de la app móvil, pero no tiene backend, base de datos ni pagos reales. Los tutores, precios y reseñas son datos de ejemplo.

## Pantallas

1. **Registro:** elegir si se quiere aprender, enseñar o ambas cosas.
2. **Búsqueda:** filtrar tutores por materia y modalidad.
3. **Perfil del tutor:** materias, calificación, reseñas, verificación y tarifa.
4. **Reserva:** día, hora, modalidad (presencial o virtual) y tema.
5. **Pago:** resumen con la tarifa de servicio y el medio de pago (Nequi, PSE o tarjeta).
6. **Confirmación:** sesión agendada, con el pago retenido hasta que se realiza.
7. **Calificación:** estrellas, etiquetas y reseña.
8. **Panel del tutor:** ingresos, materias, tarifas, agenda y disponibilidad.

Cada pantalla tiene su propia dirección, por ejemplo `index.html#pago`.

## Cómo ejecutarlo

No necesita instalación ni compilación. Hay dos formas:

- Abrir `index.html` directamente en el navegador.
- Levantar un servidor local con `python -m http.server` y entrar a `http://localhost:8000`.

## Publicarlo con GitHub Pages

1. Sube estos archivos a la raíz del repositorio.
2. Ve a **Settings → Pages**.
3. En *Source* elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. El sitio queda publicado en `https://<usuario>.github.io/<repositorio>/`.

## Tecnologías

HTML, CSS y JavaScript sin frameworks. Tipografías Bricolage Grotesque y Figtree, de Google Fonts.

## Estructura

```
index.html   Estructura de la página
styles.css   Estilos, tema claro y oscuro
app.js       Datos de ejemplo, pantallas y navegación
```
