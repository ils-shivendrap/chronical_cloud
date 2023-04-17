-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: library_management_system
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `book_issue_table`
--

DROP TABLE IF EXISTS `book_issue_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_issue_table` (
  `Book_issue_table_id` int NOT NULL AUTO_INCREMENT,
  `User_id` int DEFAULT NULL,
  `Book_id` int DEFAULT NULL,
  `Issue_date` date DEFAULT NULL,
  `Return_date` date DEFAULT NULL,
  PRIMARY KEY (`Book_issue_table_id`),
  KEY `user_id_idx` (`User_id`),
  KEY `book_id_idx` (`Book_id`),
  CONSTRAINT `book_id` FOREIGN KEY (`Book_id`) REFERENCES `books` (`Books_Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_id` FOREIGN KEY (`User_id`) REFERENCES `users` (`Users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_issue_table`
--

LOCK TABLES `book_issue_table` WRITE;
/*!40000 ALTER TABLE `book_issue_table` DISABLE KEYS */;
INSERT INTO `book_issue_table` VALUES (1,1,5,'2023-12-11','2023-12-20'),(2,5,10,'2023-11-15','2023-11-30'),(3,3,6,'2023-01-10','2023-01-20'),(4,4,1,'2023-02-05','2023-02-20'),(5,2,9,'2023-11-10','2023-11-25'),(6,2,8,'2023-08-09','2023-08-29'),(7,4,6,'2023-02-10','2023-03-25'),(8,5,2,'2023-04-05','2023-04-25'),(9,1,3,'2023-06-04','2023-06-25'),(10,3,10,'2023-09-25','2023-08-25');
/*!40000 ALTER TABLE `book_issue_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17 11:36:02
