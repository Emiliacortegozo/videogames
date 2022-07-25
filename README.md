
App utlizando:
-  React
-  Redux
-  Express
- Sequelize - Postgres
- 
![Screenshot_20220725-190604](https://user-images.githubusercontent.com/96702771/180882230-003d6236-d6a6-41c0-a890-60db1be85744.png)
![Screenshot_20220725-190551](https://user-images.githubusercontent.com/96702771/180882247-9bc553fa-7470-4cf2-9e89-cfb36dcf98c0.png)
![Screenshot_20220725-190658](https://user-images.githubusercontent.com/96702771/180882255-37a49cbc-c0c2-4b80-a4b6-8ac6106ec848.png)
![Screenshot_20220725-190628](https://user-images.githubusercontent.com/96702771/180882262-d8a92c46-1551-4140-9f85-b6c574c60d44.png)


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
  
