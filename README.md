
App utlizando:
-  React -  Express
-  Redux - Sequelize - Postgres

[Go to Website](https://20221215t145343-dot-sunlit-inquiry-365401.rj.r.appspot.com/)


![videogamesHOME](https://user-images.githubusercontent.com/96702771/180893781-b26e1b3d-b9e9-427b-acdd-7de9935c9b22.png)

![Screenshot_20220725-190658](https://user-images.githubusercontent.com/96702771/180893785-eaddd642-523c-4f7b-b341-ceb7d0388173.png)
![Screenshot_20220725-190628](https://user-images.githubusercontent.com/96702771/180894058-b1f8c1f0-26ea-489f-bbba-7d3cd8bab9e7.png)


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
  
