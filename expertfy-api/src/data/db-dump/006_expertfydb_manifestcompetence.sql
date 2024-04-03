-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: expertfydb
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `manifestcompetence`
--

USE expertfydb;

DROP TABLE IF EXISTS `manifestcompetence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manifestcompetence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `competenceId` int NOT NULL,
  `timestamp` date NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userIdFK_idx` (`userId`),
  KEY `competenceIdFK_idx` (`competenceId`),
  CONSTRAINT `competenceIdFK` FOREIGN KEY (`competenceId`) REFERENCES `competence` (`id`),
  CONSTRAINT `userIdFK` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manifestcompetence`
--

LOCK TABLES `manifestcompetence` WRITE;
/*!40000 ALTER TABLE `manifestcompetence` DISABLE KEYS */;
INSERT INTO `manifestcompetence` VALUES (1,1000,2,'2023-10-12','Manifestação sobre JavaScript'),(2,999,2,'2023-10-13','Manifestação sobre JavaScript'),(4,999,1,'2023-10-13','Manifestação sobre Java'),(5,1000,1,'2023-10-13','Manifestação sobre Java'),(6,999,1,'2023-10-15','Manifestação sobre Java'),(7,999,1,'2023-10-14','Manifestação sobre Java'),(8,1001,1,'2023-10-13','Manifestação sobre Java'),(9,1001,1,'2023-10-14','Manifestação sobre Java'),(10,1018,1,'2023-10-23','Manifestação sobre Java'),(11,1018,1,'2023-10-23','Manifestação sobre Java'),(12,1018,1,'2023-10-23','Manifestação sobre Java'),(13,1017,1,'2023-10-23','Manifestação sobre Java'),(14,1017,1,'2023-10-23','Manifestação sobre Java'),(15,1017,1,'2023-10-23','Manifestação sobre Java'),(16,1017,1,'2023-10-23','Manifestação sobre Java'),(17,1020,1,'2023-01-15','Manifestação sobre Java'),(18,1021,2,'2023-02-05','Manifestação sobre JavaScript'),(19,1022,3,'2023-03-20','Manifestação sobre Kubernetes'),(20,1023,4,'2023-04-10','Manifestação sobre Git'),(21,1024,5,'2023-05-25','Manifestação sobre PostgreSQL'),(22,1025,6,'2023-06-12','Manifestação sobre MongoDB'),(23,1026,7,'2023-07-30','Manifestação sobre Swagger'),(24,1027,1,'2023-08-15','Manifestação sobre Java'),(25,1028,2,'2023-09-03','Manifestação sobre JavaScript'),(26,1029,3,'2023-10-18','Manifestação sobre Kubernetes'),(27,1030,4,'2023-11-07','Manifestação sobre Git'),(28,1031,5,'2023-12-20','Manifestação sobre PostgreSQL'),(29,1032,6,'2023-01-28','Manifestação sobre MongoDB'),(30,1033,7,'2023-02-10','Manifestação sobre Swagger'),(31,1034,1,'2023-03-05','Manifestação sobre Java'),(32,1020,1,'2023-04-02','Manifestação sobre Java'),(33,1021,2,'2023-05-19','Manifestação sobre JavaScript'),(34,1022,3,'2023-06-08','Manifestação sobre Kubernetes'),(35,1023,4,'2023-07-14','Manifestação sobre Git'),(36,1024,5,'2023-08-30','Manifestação sobre PostgreSQL'),(37,1025,6,'2023-09-15','Manifestação sobre MongoDB'),(38,1026,7,'2023-10-05','Manifestação sobre Swagger'),(39,1027,1,'2023-11-20','Manifestação sobre Java'),(40,1028,2,'2023-12-10','Manifestação sobre JavaScript'),(41,1029,3,'2023-01-25','Manifestação sobre Kubernetes'),(42,1030,4,'2023-02-15','Manifestação sobre Git'),(43,1031,5,'2023-03-30','Manifestação sobre PostgreSQL'),(44,1032,6,'2023-04-20','Manifestação sobre MongoDB'),(45,1033,7,'2023-05-10','Manifestação sobre Swagger'),(46,1034,1,'2023-06-25','Manifestação sobre Java'),(47,1020,1,'2023-07-15','Manifestação sobre Java'),(48,1021,2,'2023-08-05','Manifestação sobre JavaScript'),(49,1022,3,'2023-09-20','Manifestação sobre Kubernetes'),(50,1023,4,'2023-10-10','Manifestação sobre Git'),(51,1024,5,'2023-11-25','Manifestação sobre PostgreSQL'),(52,1025,6,'2023-12-15','Manifestação sobre MongoDB'),(53,1026,7,'2023-01-05','Manifestação sobre Swagger'),(54,1027,1,'2023-02-20','Manifestação sobre Java'),(55,1028,2,'2023-03-10','Manifestação sobre JavaScript'),(56,1029,3,'2023-04-25','Manifestação sobre Kubernetes'),(57,1030,4,'2023-05-15','Manifestação sobre Git'),(58,1031,5,'2023-06-30','Manifestação sobre PostgreSQL'),(59,1032,6,'2023-07-20','Manifestação sobre MongoDB'),(60,1033,7,'2023-08-10','Manifestação sobre Swagger'),(61,1034,1,'2023-09-25','Manifestação sobre Java'),(62,1020,1,'2023-10-15','Manifestação sobre Java'),(63,1021,2,'2023-11-05','Manifestação sobre JavaScript'),(64,1022,3,'2023-12-20','Manifestação sobre Kubernetes'),(65,1023,4,'2023-01-10','Manifestação sobre Git'),(66,1024,5,'2023-02-25','Manifestação sobre PostgreSQL'),(67,1025,6,'2023-03-15','Manifestação sobre MongoDB'),(68,1026,7,'2023-04-05','Manifestação sobre Swagger'),(69,1027,1,'2023-05-20','Manifestação sobre Java'),(70,1028,2,'2023-06-10','Manifestação sobre JavaScript'),(71,1029,3,'2023-07-25','Manifestação sobre Kubernetes'),(72,1030,4,'2023-08-15','Manifestação sobre Git');
/*!40000 ALTER TABLE `manifestcompetence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03 10:35:28
