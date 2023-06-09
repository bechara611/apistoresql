-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: apistore
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `CED_CLIENTE` int NOT NULL,
  `NAME` varchar(30) DEFAULT NULL,
  `DIRECCION` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`CED_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (25887960,'Dany','San Juan'),(25887961,'Dany','San Juan'),(25887962,'Dany','San Juan');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_detalle`
--

DROP TABLE IF EXISTS `compras_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras_detalle` (
  `COD_PRODUCTO` int DEFAULT NULL,
  `CANTIDAD` int DEFAULT NULL,
  `PAGADO` float DEFAULT NULL,
  `ID_COMPRA` int DEFAULT NULL,
  KEY `COD_PRODUCTO` (`COD_PRODUCTO`),
  KEY `COMPRAS_DETALLE` (`ID_COMPRA`),
  CONSTRAINT `compras_detalle_ibfk_1` FOREIGN KEY (`COD_PRODUCTO`) REFERENCES `producto` (`COD_PRODUCTO`),
  CONSTRAINT `compras_detalle_ibfk_2` FOREIGN KEY (`ID_COMPRA`) REFERENCES `compras_general` (`ID_COMPRA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_detalle`
--

LOCK TABLES `compras_detalle` WRITE;
/*!40000 ALTER TABLE `compras_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_general`
--

DROP TABLE IF EXISTS `compras_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras_general` (
  `ID_COMPRA` int NOT NULL AUTO_INCREMENT,
  `CED_PROVEEDOR` int DEFAULT NULL,
  `PAGADO_TOTAL` float DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  PRIMARY KEY (`ID_COMPRA`),
  KEY `CED_PROVEEDOR` (`CED_PROVEEDOR`),
  CONSTRAINT `compras_general_ibfk_1` FOREIGN KEY (`CED_PROVEEDOR`) REFERENCES `proveedor` (`CED_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_general`
--

LOCK TABLES `compras_general` WRITE;
/*!40000 ALTER TABLE `compras_general` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras_general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `COD_PRODUCTO` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) DEFAULT NULL,
  `STOCK` int DEFAULT NULL,
  `PRECIO` float DEFAULT NULL,
  PRIMARY KEY (`COD_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1000,'producto 1',15,50.3),(1001,'producto 1',15,50.3),(1002,'producto 1',15,50.3),(1003,'producto 1',1,100.3);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodxprov`
--

DROP TABLE IF EXISTS `prodxprov`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodxprov` (
  `COD_PRODUCTO` int DEFAULT NULL,
  `CED_PROVEEDOR` int DEFAULT NULL,
  KEY `COD_PRODUCTO` (`COD_PRODUCTO`),
  KEY `CED_PROVEEDOR` (`CED_PROVEEDOR`),
  CONSTRAINT `prodxprov_ibfk_1` FOREIGN KEY (`COD_PRODUCTO`) REFERENCES `producto` (`COD_PRODUCTO`),
  CONSTRAINT `prodxprov_ibfk_2` FOREIGN KEY (`CED_PROVEEDOR`) REFERENCES `proveedor` (`CED_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodxprov`
--

LOCK TABLES `prodxprov` WRITE;
/*!40000 ALTER TABLE `prodxprov` DISABLE KEYS */;
/*!40000 ALTER TABLE `prodxprov` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedor` (
  `CED_PROVEEDOR` int NOT NULL,
  `NAME` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`CED_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (25887960,'Dany proveedor');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `COD_USUARIO` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) DEFAULT NULL,
  `CORREO` varchar(40) DEFAULT NULL,
  `ROL` varchar(30) DEFAULT NULL,
  `PASSWORD` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`COD_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (106,'dany','bechara611@gmail.com','ADMIN','123456'),(107,'dany','bechara612@gmail.com','ADMIN','123456');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_detalle`
--

DROP TABLE IF EXISTS `ventas_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_detalle` (
  `COD_PRODUCTO` int DEFAULT NULL,
  `CANTIDAD` int NOT NULL,
  `PAGADO` float NOT NULL,
  `ID_VENTA` int DEFAULT NULL,
  KEY `COD_PRODUCTO` (`COD_PRODUCTO`),
  KEY `ID_VENTA` (`ID_VENTA`),
  CONSTRAINT `ventas_detalle_ibfk_1` FOREIGN KEY (`COD_PRODUCTO`) REFERENCES `producto` (`COD_PRODUCTO`),
  CONSTRAINT `ventas_detalle_ibfk_3` FOREIGN KEY (`ID_VENTA`) REFERENCES `ventas_general` (`ID_VENTA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_detalle`
--

LOCK TABLES `ventas_detalle` WRITE;
/*!40000 ALTER TABLE `ventas_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_general`
--

DROP TABLE IF EXISTS `ventas_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_general` (
  `ID_VENTA` int NOT NULL AUTO_INCREMENT,
  `CED_CLIENTE` int DEFAULT NULL,
  `PAGADO_TOTAL` float DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  PRIMARY KEY (`ID_VENTA`),
  KEY `CED_CLIENTE` (`CED_CLIENTE`),
  CONSTRAINT `ventas_general_ibfk_1` FOREIGN KEY (`CED_CLIENTE`) REFERENCES `cliente` (`CED_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_general`
--

LOCK TABLES `ventas_general` WRITE;
/*!40000 ALTER TABLE `ventas_general` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_general` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 15:22:05
