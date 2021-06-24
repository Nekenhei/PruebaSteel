# Prueba Steel Software

Repositorio publico para **SteelSoftware**

Prueba Tecnica Desarrollador Web Junior

## Contenido

Se llevaron a cabo los siguientes puentos: 

* Queries SQL para la construcción de la estructura de datos
  * DBMS: SQL Server
* Construcción de API REST para consulta de BD
  * Tecnologia: NodeJS
  * Modulos:
    * Cors: gestor de conexiones
    * Express: framework de NodeJs
    * mssql: driver para SQL Server
    * nodemon: utlidad para ejecutar NodeJS en liveserver (solo disponible en dev)
    * morgan: middleware para el registro log de las conexiones
    * tedious: paquete para protocolo TDS  
   * Se recomienda el uso de POSTMAN para consumo de API
* Diseño de WebPage para consumo de la API 
  * Tecnología: Angular
  * Modulos:
    * Bootstrap: Framework UI
    * Font-Awesome: Libreria de iconos

## Ejecución

Clonar el repositorio 

GitHub CLI:
```
gh repo clone Nekenhei/PruebaSteel
```

Instalar dependencias para cada unidad (REST_API y SteelWebApp):
```
npm install
```

### Iniciación servidor
Ejecutar nodemon sobre archivo index.js
```
npm run dev
```

### Iniciación webapp
```
ng serve
```

Acceder a http://localhost:4200/

## Documentación API 

URL Endpoint: 
```
http://localhost:5000/API/libros
```

Rutas API:
```
Ruta principal: /libros
Ruta para consulta de un libro espeficico: /libros/:id
```

/libros trabaja con los 4 metodos HTTP: 
* GET: 
  * ruta raíz lista todos los elementos
  * /libros/:id lista uno en especial
* POST: URL raíz /Libros realiza inserción de una nueva fila, parametros recibidos en body
* PUT: URL raíz /Libros realiza actualización de una fila, parametros recibidos en body
* DELETE: URL raíz /libros realiza eliminación de una fila, parametros recibidos en body

## Consideraciones  

* Aplicativo Node.js corre en puerto 5000
* Configuraciones requeridas en SQL server:
  * SQL Server Browser: Habilitado
  * Editar nombre servidor en archivo de conexion [Aquí](https://github.com/Nekenhei/PruebaSteel/blob/main/REST_API/connection.js)
  * Habilitar protocolo TCP/IP de SQL Server
  * Habilitar en SQL Server la autenticacion por SQL Server y Windows

## Proyectos Futuros:

* Back-End:
  * Generación, entrega y solicitud de token
  * Interfaz para login al servidor node.js
  * estructura de datos de Usuarios para diferentes niveles de permisos sobre estructura de datos (solo lectura, lecto-escritura, control total) 
* Front-End:
  * Integración de dropdownlists en formulario de creación/edición que contenga solo valores validos desde la DB
  * Paginación de tabla principal



Junio/2021
