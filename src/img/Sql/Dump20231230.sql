CREATE DATABASE  IF NOT EXISTS `appointment_scheduling` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `appointment_scheduling`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: appointment_scheduling
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `time` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2a990a304a43ccc7415bf7e3a99` (`userId`),
  CONSTRAINT `FK_2a990a304a43ccc7415bf7e3a99` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (8,'active','2023-12-27 00:00:00','18:00','2023-12-26 18:38:23.987442','2023-12-26 18:38:24.000000',1),(9,'active','2023-12-29 00:00:00','19:00','2023-12-27 19:09:52.358456','2023-12-27 19:09:52.000000',1),(10,'active','2024-01-09 00:00:00','10:00','2023-12-27 19:13:31.379685','2023-12-30 11:25:21.000000',1),(11,'active','2024-01-08 00:00:00','09:00','2023-12-30 11:16:07.674764','2023-12-30 11:16:07.000000',1);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment_treatments`
--

DROP TABLE IF EXISTS `appointment_treatments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment_treatments` (
  `treatment_id` int NOT NULL,
  `appointment_id` int NOT NULL,
  PRIMARY KEY (`treatment_id`,`appointment_id`),
  KEY `IDX_1bce4700410be542078d360fea` (`treatment_id`),
  KEY `IDX_566099c58cb695defa5952d81d` (`appointment_id`),
  CONSTRAINT `FK_1bce4700410be542078d360fea4` FOREIGN KEY (`treatment_id`) REFERENCES `treatment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_566099c58cb695defa5952d81db` FOREIGN KEY (`appointment_id`) REFERENCES `appointment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_treatments`
--

LOCK TABLES `appointment_treatments` WRITE;
/*!40000 ALTER TABLE `appointment_treatments` DISABLE KEYS */;
INSERT INTO `appointment_treatments` VALUES (2,9),(24,8),(24,11),(25,10);
/*!40000 ALTER TABLE `appointment_treatments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` varchar(255) NOT NULL,
  `feedback` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `treatmentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1337f93918c70837d3cea105d39` (`userId`),
  KEY `FK_391bf4fca4e3607170876f2f1c6` (`treatmentId`),
  CONSTRAINT `FK_1337f93918c70837d3cea105d39` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_391bf4fca4e3607170876f2f1c6` FOREIGN KEY (`treatmentId`) REFERENCES `treatment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (2,'10','With all the sessions completed, you can see the change brought by the saggin facial treatment, which is highly recommended','active','2023-12-27 17:42:13.456912','2023-12-27 17:42:13.456912',1,2),(3,'10','With all the sessions completed, you can see the change brought by the saggin facial treatment, which is highly recommended','active','2023-12-30 11:57:23.025492','2023-12-30 11:57:23.025492',1,2),(4,'10','With all the sessions completed, you can see the change brought by the saggin facial treatment, which is highly recommended','active','2023-12-30 13:12:09.716461','2023-12-30 13:12:09.716461',33,32),(5,'10','With all the sessions completed, you can see the change brought by the saggin facial treatment, which is highly recommended','active','2023-12-30 13:14:52.616521','2023-12-30 13:14:52.616521',37,24);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treatment`
--

DROP TABLE IF EXISTS `treatment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treatment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_treatment` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duration_treatment` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treatment`
--

LOCK TABLES `treatment` WRITE;
/*!40000 ALTER TABLE `treatment` DISABLE KEYS */;
INSERT INTO `treatment` VALUES (2,'Facial saggin','Content: hyaluronic acid and organic silicon ','5 sessión 1 hour','https://www.montserratquiros.es/wp-content/uploads/2021/03/Tratamiento-dermapen.jpg','active','2023-12-20 09:28:26.879314','2023-12-27 22:02:43.000000'),(24,'Spa therapy based on hot chocolate','Content: chocolate','1 hour','https://media.istockphoto.com/id/155385757/es/foto/mujer-teniendo-una-sesi%C3%B3n-de-masajes-con-chocolate-caliente.jpg?s=612x612&w=0&k=20&c=9B6Vdi67QcMTOtCGC2QDtZoGgEMXpv2B45EzXZx8lmY=','active','2023-12-23 09:06:28.436746','2023-12-28 00:23:29.000000'),(25,'Scalp','Therapy microneedling','6 sessión 2 hour','https://as2.ftcdn.net/v2/jpg/05/31/77/91/1000_F_531779133_62E4eXeGu9m1CwEx4kr9svE732r0UcAo.jpg','active','2023-12-23 09:35:28.527954','2023-12-28 12:22:40.000000'),(26,'Relaxing massage therapy','Content: oil essences','1 hour','https://media.istockphoto.com/id/845515876/es/foto/mujer-est%C3%A1-recibiendo-masajes-en-el-sal%C3%B3n-de-spa.jpg?s=612x612&w=0&k=20&c=bdn4pjfcSvNWaR-Q-E-0BjV-LUuW4L-yzfi-Z6Jn4Qc=','active','2023-12-23 09:50:29.110555','2023-12-28 00:28:59.000000'),(28,'Stretch Marks','Microneedle therapy','6 sessions 2 hour','https://www.cornwall-beauty-salon.co.uk/_images/productimages/24065/1000.jpg','active','2023-12-27 17:54:02.908476','2023-12-28 21:00:58.000000'),(30,'Relaxation and rejuvenation','Turkish baths','2 hour','https://cdn.getyourguide.com/img/tour/5731df7de2c1a.jpeg/145.jpg','active','2023-12-28 23:46:08.002327','2023-12-28 23:46:08.002327'),(31,'Lymphatic drainage massage','Improves the body\'s defenses','2 hours','https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/333627/b0446bcc4b2e529e08edd7ac634724b917fa9226.XL2.jpg','active','2023-12-29 00:13:32.272337','2023-12-29 00:13:32.272337'),(32,'Microneedling  for men','Formulated to treat and care for male skin','1 hour','https://nagariwellness.es/wp-content/uploads/2021/02/MICRONEEDLING-FOR-MEN.jpg','active','2023-12-29 00:22:02.383398','2023-12-29 00:22:02.383398');
/*!40000 ALTER TABLE `treatment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'meri','rodriguez','meri.meri@gmail.com','$2b$10$RtDxGqS9uAXfx0kq5.dAiuXVLCQv90qL50llIuxazhxw04BFc1g.6','123456789','valencia','admin','active','2023-12-19 20:17:08.574501','2023-12-19 20:17:08.574501'),(32,'Fernando','Perez','fernan.fernan@gmail.com','$2b$10$RqY0EuxYbN1Ua0WNZ.rRSO2TT2EQs3K7AjDFUj/.ph/rb.pWtpxK6','123456789','Barcelona','user','active','2023-12-23 12:36:00.688329','2023-12-23 12:36:00.688329'),(33,'Manuel','Guzman','manu.manu@gmail.com','$2b$10$In7WQJ3qn9DTMUBzQVLQj.oA1igcWB1.zvWs.tookQ.LvocC8X8Sm','123456789','Madrid','user','active','2023-12-23 12:37:20.040561','2023-12-23 12:37:20.040561'),(34,'Alejandra','Martinez','meri.meri@gmail.com','$2b$10$w0Y6kk1nJTXg9I/uhDDaPulWpKBpji2f9xjKMUN80MTbYgwX8HQES','123456789','Zaragoza','admin','active','2023-12-23 12:38:26.448354','2023-12-26 14:22:04.000000'),(35,'Juan','Lopez','juan.juan@gmail.com','$2b$10$ry6djUXcHE8mECPjBbm8de3fsz0o63Z6424BHe7OuAwbPeUF5rW7y','123456789','Alicante','user','active','2023-12-23 12:39:11.445555','2023-12-23 12:39:11.445555'),(36,'Mariano','Contreras','mariano.mariano@gmail.com','$2b$10$1Au1uKBvdg6NCyc/av6jLOHVs1wdj0fmC4KLzyBT19rz/OIzUdBhu','123456789','Peñíscola','user','active','2023-12-23 12:43:38.450300','2023-12-23 12:43:38.450300'),(37,'Patricia','Martinez','patri.patri@gmail.com','$2b$10$WX8HJFtRz0dCkr2UnY54NeYqwXlplrlWJZwfhVWgGKXRYl5lpt2BO','123456789','Jávea','user','active','2023-12-23 12:46:57.813323','2023-12-23 12:46:57.813323'),(38,'Maria','Ascanio','maria.maria@gmail.com','$2b$10$ue1MjgnIg4JwKwMMXV4nm.kQTX47TzDFSXYcuTJTg2hwAivRUucky','123456789','Denia','user','active','2023-12-23 16:45:27.035714','2023-12-23 16:45:27.035714'),(40,'pablo','Andrade','andrade.andrade@gmail.com','$2b$10$ET272ybjrUO17Sq1vVFsTudwH03INof.0.ZJAr/N798wn2Xrfnede','123456789','Madrid','admin','active','2023-12-30 13:09:20.535217','2023-12-30 13:09:20.535217');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-30 13:44:59
