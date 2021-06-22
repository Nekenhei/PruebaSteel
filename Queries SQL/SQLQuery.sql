/*::::::::::::::::::::::::
Creacion de la DB
::::::::::::::::::::::::*/



DROP DATABASE IF EXISTS prueba1
create database prueba1
go

/*::::::::::::::::::::::::
Acceso a DB
::::::::::::::::::::::::*/

USE prueba1
go

/*::::::::::::::::::::::::
Creacion tablas auxiliares
::::::::::::::::::::::::*/

drop table if exists generosTb
create table generosTb(
	idGenero INT NOT NULL IDENTITY(1,1),
	genero varchar(20) not null,
	CONSTRAINT pk_Generos PRIMARY KEY(idGenero)
)

drop table if exists editorialesTb
create table editorialesTb(
	idEditorial INT NOT NULL IDENTITY(1,1),
	nombreEditorial varchar(100) not null,
	direccionEditorial varchar(200) not null,
	telefonoEditorial bigint null,
	correoEditorial varchar(80) null,
	maxLibros int not null,
	CONSTRAINT pk_Editoriales PRIMARY KEY(idEditorial)
)

drop table if exists autoresTb
create table autoresTb(
	idAutor int not null IDENTITY(1,1),
	nombreAutor varchar(100) not null,
	fechaNacimiento date null,
	ciudadAutor varchar(30) null,
	correoAutor varchar(80) null
	CONSTRAINT pk_Autores primary key(idAutor)
)

drop table if exists actividadesTb
create table actividadesTb(
	idActividad int not null IDENTITY(1,1),
	actividad varchar(15),
	CONSTRAINT pk_Actividades primary key(idActividad)
)

go

/*::::::::::::::::::::::::
Creacion tablas principales
::::::::::::::::::::::::*/

drop table if exists logbookTb 
create table logbookTb(
	idLog int not null identity(1,1),
	timestampValue datetime default(getdate()) not null,
	descripcion varchar(500) not null,
	CONSTRAINT pk_Logbook primary key(idLog),
	idActividad int not null CONSTRAINT fk_idActividad FOREIGN KEY (idActividad) references actividadesTb(idActividad)
	ON DELETE NO ACTION ON UPDATE CASCADE
)

drop table if exists librosTb
create table librosTb(
	idLibro int not null identity(1,1),
	tituloLibro varchar(200) not null,
	a_oLibro int default(0),
	numPaginas bigint not null,
	CONSTRAINT pk_Libros primary key(idLibro),
	idEditorial int not null CONSTRAINT fk_idEditorial FOREIGN KEY (idEditorial) references editorialesTb(idEditorial)
	ON DELETE NO ACTION ON UPDATE CASCADE,
	idAutor int not null CONSTRAINT fk_idAutor FOREIGN KEY (idAutor) references autoresTb(idAutor)
	ON DELETE NO ACTION ON UPDATE CASCADE,
	idGenero int not null CONSTRAINT fk_idGenero FOREIGN KEY (idGenero) references generosTb(idGenero)
	ON DELETE NO ACTION ON UPDATE CASCADE
)

/*::::::::::::::::::::::::
Indices
::::::::::::::::::::::::*/

create index ix_Libros on librosTB(tituloLibro,a_oLibro)
create index ix_Editoriales on editorialesTb(nombreEditorial)
create index ix_Autores on autoresTb(nombreAutor)
create index ix_generos on generosTb(genero)
go
/*::::::::::::::::::::::::
Triggers logbook
::::::::::::::::::::::::*/

/*librosTb*/

create trigger logbook_Insert_Libros_Tr on librosTb
For insert
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo insercion de datos en la tabla Libros',1)
End
go

create trigger logbook_Delete_Libros_Tr on librosTb
For delete
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo eliminación de datos en la tabla Libros',2)
End
go

create trigger logbook_Update_Libros_Tr on librosTb
For update
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo actualización de datos en la tabla Libros',3)
End
go

/*editorialesTb*/

create trigger logbook_Insert_Editoriales_Tr on editorialesTb
For insert
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo insercion de datos en la tabla Editoriales',1)
End
go

create trigger logbook_Delete_Editoriales_Tr on editorialesTb
For delete
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo eliminación de datos en la tabla Editoriales',2)
End
go

create trigger logbook_Update_Editoriales_Tr on editorialesTb
For update
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo actualización de datos en la tabla Editoriales',3)
End
go

/*autoresTb*/

create trigger logbook_Insert_Autores_Tr on autoresTb
For insert
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo insercion de datos en la tabla Autores',1)
End
go

create trigger logbook_Delete_Autores_Tr on autoresTb
For delete
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo eliminación de datos en la tabla Autores',2)
End
go

create trigger logbook_Update_Autores_Tr on autoresTb
For update
AS
Begin
	insert into logbookTb(descripcion, idActividad) values ('Se realizo actualización de datos en la tabla Autores',3)
End
go

/*::::::::::::::::::::::::
Procedimientos Almacenados
::::::::::::::::::::::::*/

/*Insertar Libros*/
create procedure insertarLibro_SP
	@titulo varchar(200),
	@a_o int,
	@numPaginas int,
	@idEditorial int,
	@idAutor int,
	@idGenero int

	AS
	
	declare @maxLibrosEditorial int
	declare @conteoLibrosEditorial int
	set @maxLibrosEditorial = (select maxLibros from editorialesTb where idEditorial = @idEditorial)
	set @conteoLibrosEditorial = (select COUNT(idLibro) from librosTb where idEditorial = @idEditorial)
	if(@maxLibrosEditorial > @conteoLibrosEditorial)
		BEGIN
			SET NOCOUNT ON
			insert into librosTb (tituloLibro, a_oLibro, numPaginas, idEditorial, idAutor, idGenero) values (@titulo, @a_o, @numPaginas, @idEditorial, @idAutor, @idGenero)
			SELECT idLibro FROM librosTb where idLibro = (select max(idLibro) from librosTb)
		END
	ELSE
		BEGIN
			SET NOCOUNT ON
			SELECT 0
		END
GO

/*actualizar Libros*/
create procedure actualizarLibro_SP
	@idLibro int,
	@titulo varchar(200),
	@a_o int,
	@numPaginas int,
	@idEditorial int,
	@idAutor int,
	@idGenero int

	AS
	
	declare @flag int
	set @flag = (select idLibro from librosTb where idLibro = @idLibro)
	if(@flag is null)
		BEGIN
			SET NOCOUNT ON
			SELECT 0
		END
	ELSE
		BEGIN
			SET NOCOUNT ON
			update librosTb set tituloLibro = @titulo, a_oLibro = @a_o, numPaginas = @numPaginas, idEditorial = @idEditorial, idAutor = @idAutor, idGenero = @idGenero where idLibro = @idLibro
			SELECT 1
		END
GO

/*eliminar Libros*/
create procedure eliminarLibro_SP
	@idLibro int

	AS
	
	declare @flag int
	set @flag = (select idLibro from librosTb where idLibro = @idLibro)
	if(@flag is null)
		BEGIN
			SET NOCOUNT ON
			SELECT 0
		END
	ELSE
		BEGIN
			SET NOCOUNT ON
			delete from librosTb where idLibro = @idLibro
			SELECT 1
		END
GO


/*::::::::::::::::::::::::
Vistas
::::::::::::::::::::::::*/
DROP VIEW IF EXISTS listarLibrosVw
go
create view listarLibrosVw as
	select librosTb.idLibro, librosTb.tituloLibro, librosTb.a_oLibro, librosTb.numPaginas, editorialesTb.nombreEditorial, autoresTb.nombreAutor, generosTb.genero from librosTb
	inner join editorialesTb on librosTb.idEditorial = editorialesTb.idEditorial
	inner join autoresTb on librosTb.idAutor = autoresTb.idAutor
	inner join generosTb on librosTb.idGenero = generosTb.idGenero;
go

DROP VIEW IF EXISTS listarLogsVw
go
create view listarLogsVw as
	select logbookTb.idLog, logbookTb.timestampValue, logbookTb.descripcion, actividadesTb.actividad from logbookTb
	inner join actividadesTb on logbookTb.idActividad = actividadesTb.idActividad;
go


/*::::::::::::::::::::::::
Populacion Auxiliares
autores: 17
editoriales 5
generos 11
libros 350
usar SQL files apra Autores, Editorailes y libros
::::::::::::::::::::::::*/

insert into actividadesTb(actividad) values('insert'),('delete'),('update')
insert into generosTb(genero) values ('Aventura'),('Suspenso'),('Policiaca'),('Ciencia Ficción'),('Gotico'),('Terror'),('Romantico'),('Fantasia'),('Drama'),('Paranormal'),('Grafico')

/*::::::::::::::::::::::::
Cracion login y user para acceso desde NodeJS
::::::::::::::::::::::::*/

create LOGIN nodejs with password='nodejs'
go


if not exists (select * from sys.database_principals where name = N'nodejsUser')
Begin
	create user nodejsUser for LOGIN nodejs with default_schema = dbo
	exec sp_addrolemember N'db_owner',N'nodejsUser'
End

