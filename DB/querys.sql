CREATE DATABASE apistore;

CREATE TABLE USUARIOS(COD_USUARIO int primary key AUTO_INCREMENT,NAME VARCHAR(30), CORREO VARCHAR(40), ROL VARCHAR(30),PASSWORD VARCHAR(20)) AUTO_INCREMENT=100;

CREATE TABLE CLIENTE(CED_CLIENTE int primary key, NAME varchar(30), DIRECCION VARCHAR(30));

CREATE TABLE PROVEEDOR(CED_PROVEEDOR int primary key, NAME varchar(30));


CREATE TABLE PRODUCTO(
    COD_PRODUCTO INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(30),
    STOCK INT,
    PRECIO FLOAT
    ) AUTO_INCREMENT=1000;

    CREATE TABLE PRODXPROV(
        COD_PRODUCTO int,
        CED_PROVEEDOR int,
        FOREIGN KEY (COD_PRODUCTO) REFERENCES PRODUCTO(COD_PRODUCTO),
    FOREIGN KEY (CED_PROVEEDOR) REFERENCES PROVEEDOR(CED_PROVEEDOR)
    ); 

    CREATE TABLE VENTAS(
        ID_VENTA int primary key auto_increment,
        COD_PRODUCTO int,
        CED_CLIENTE int,
        CANTIDAD int not null,
        PAGADO float not null,
        FOREIGN KEY (COD_PRODUCTO) REFERENCES PRODUCTO(COD_PRODUCTO),
        FOREIGN KEY (CED_CLIENTE) REFERENCES CLIENTE(CED_CLIENTE)
    ) AUTO_INCREMENT=1;

    CREATE TABLE COMPRAS(
        ID_COMPRA int PRIMARY KEY auto_increment,
        COD_PRODUCTO int,
        CED_PROVEEDOR int,
        CANTIDAD int,
        PAGADO float,
        FOREIGN KEY (COD_PRODUCTO) REFERENCES PRODUCTO(COD_PRODUCTO),
        FOREIGN KEY (CED_PROVEEDOR) REFERENCES PROVEEDOR(CED_PROVEEDOR)
    ) AUTO_INCREMENT=1;