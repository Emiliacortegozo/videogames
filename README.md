
App utlizando React, Redux, Node y Sequelize.
-  React
-  Redux
-  Express
- Sequelize - Postgres


consume datos de API: [rawg](https://rawg.io/apidocs) 

  - Buscar videjuegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos videojuegos


#### Frontend React/Redux 

__Pagina inicial__: 
__Ruta principal__: 
Input de búsqueda para encontrar videojuegos por nombre
 videojuegos
  - Imagen
  - Nombre
  - Géneros
-  Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético 
- Paginado para ir buscando y mostrando los siguientes videojuegos

__Ruta de detalle de videojuego__: 
- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas

__Ruta de creación de videojuegos__:
-  formulario con los siguientes campos:
  - Nombre
  - Rating
  -  Posibilidad de seleccionar/agregar imagen
- Posibilidad de seleccionar/agregar varios géneros
-  Posibilidad de seleccionar/agregar varias plataformas
-  Botón/Opción para crear un nuevo videojuego

#### Base de datos


- Videojuego con las siguientes propiedades:
  - ID
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- Genero con las siguientes propiedades:
  - ID
  - Nombre



#### Backend Node/Express

servidor en Node/Express con  rutas:

-  __GET /videogames__:
 
-  __GET /videogames?name="..."__:
  
-  __GET /videogame/{idVideogame}__:
  -
-  __GET /genres__:
  
- __POST /videogame__:
  
