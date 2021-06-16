# modulo-3-evaluación-final-andrea-menéndez

Este es un proyecto realizado durante la evaluación final del módulo 3 del bootcamp de Adalab. Se trata de una web sobre la serie de animación 'Rick and Morty', que incluye un sencillo buscador de personajes por nombre. Cada personaje tiene una ficha indidual a la que se accede clickando sobre él.

## Enunciado

1. Al arrancar la página hay que coger los datos desde 'https://rickandmortyapi.com/api/character'
1. Pintar los personajes.
1. Filtrar por nombre.
1. Al clickar en un personaje abrir el detalle de la ficha en una ruta nueva.
1. Guardar en el local storage los datos de los campos del formulario.

### Acciones

- Al arrancar la página:
  - Comprobar si hay personajes en el local storage
    - Sí hay >>>> Cojo y los guardo en el estado.
    - No hay >>> Llamar a la API y limpiar los datos.
  - Comprobar si hay datos de los filtros en el local storage
    - Sí hay >>> Guardar los filtros en el estado.
    - No hay >>> Nada.
  - Pintarlos.
  - Escuchar los filtros.
    - Guardar los filtros en el estado.
    - Pintar los personajes filtrados.
  - Al cambiar de ruta:
    - Pinto el detalle de la usuaria.

### Pasos

1. Fetch / API

   - Limpiar datos

2. Pintar

   - Maquetar el HTML
   - Programar el App
   - Dividir en componentes

3. Filtrar:

   - Escuchar los filtros
   - Guardar el filtro en el estado
   - Pintar filtrando los personajes

4. Pintar el detalle de cada personaje

5. Local storage:
   - Guardar
   - Leer

### Cómo iniciar el proyecto:

Descarga el repositorio, no lo clones o no podrás hacer commits.
Arrastra el proyecto descargado a tu editor de código y escribe los siguientes comandos en orden en la terminal de tu proyecto:

### `npm install`

### `npm start`

Una vez hechos estos pasos, ya puedes empezar a programar!
