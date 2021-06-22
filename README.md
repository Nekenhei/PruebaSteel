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
    * nodemon: utlidad para ejecutar NodeJS en liveserver
    * tedious: paquete para protocolo TDS  
   * Se recomienda el uso de POSTMAN para consumo de API
* Diseño de WebPage para consumo de la API REST

## Ejecución

Clonar el repositorio 

GitHub CLI:
```
gh repo clone Nekenhei/PruebaSteel
```

Instalar dependencias:
```
npm install
```

Ejecutar nodemon sobre archivo index.js
```
nodemon index.js
```



## Consideraciones  

* Aplicativo corre en puerto 5000
* Configuraciones requeridas en SQL server:
  * SQL Server Browser: Habilitado
  * Editar nombre servidor en archivo de conexion [Aquí](https://github.com/Nekenhei/PruebaSteel/blob/main/REST_API/connection.js)
  * Habilitar protocolo TCP/IP de SQL Server
  * Habilitar en SQL Server la autenticacion por SQL Server y Windows


Junio/2021
