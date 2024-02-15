-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: parecre
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
-- Table structure for table `agents`
--

DROP TABLE IF EXISTS `agents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `license_number` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `phone2` varchar(20) DEFAULT NULL,
  `cell` varchar(20) DEFAULT NULL,
  `cell2` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `office_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `featureObj` varchar(22) DEFAULT '{}',
  `isAuto` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=540 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street_number` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `unit_number` varchar(255) DEFAULT NULL,
  `price_current` varchar(30) DEFAULT NULL,
  `price_current_rent` varchar(30) DEFAULT NULL,
  `subdivision` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `map_area` varchar(255) DEFAULT NULL,
  `property_name` varchar(255) DEFAULT NULL,
  `commercial_type` varchar(255) DEFAULT NULL,
  `business_type` varchar(255) DEFAULT NULL,
  `sqft_total` varchar(30) DEFAULT NULL,
  `lot_sqft` varchar(30) DEFAULT NULL,
  `lot_width_front` varchar(30) DEFAULT NULL,
  `lot_width_back` varchar(30) DEFAULT NULL,
  `lot_shape` varchar(255) DEFAULT NULL,
  `closed_area` varchar(30) DEFAULT NULL,
  `open_area` varchar(30) DEFAULT NULL,
  `units_in_building` varchar(30) DEFAULT NULL,
  `number_of_storeys` varchar(30) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `water` varchar(255) DEFAULT NULL,
  `year_built` varchar(30) DEFAULT NULL,
  `construction` varchar(255) DEFAULT NULL,
  `possession` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `zoning` varchar(255) DEFAULT NULL,
  `remarks` text,
  `remarks_es` text,
  `interior_features` text,
  `exterior_features` text,
  `other_services` text,
  `listing_office_id` varchar(30) DEFAULT NULL,
  `colisting_office_id` varchar(30) DEFAULT NULL,
  `listing_agent_id` varchar(30) DEFAULT NULL,
  `colisting_agent_id` varchar(30) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `date_listed` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `unique_id` varchar(255) DEFAULT NULL,
  `date_expired` date DEFAULT NULL,
  `directions` text,
  `directions_es` text,
  `web_title` varchar(255) DEFAULT NULL,
  `web_title_es` varchar(255) DEFAULT NULL,
  `flooring` varchar(255) DEFAULT NULL,
  `roof` varchar(255) DEFAULT NULL,
  `cooling` varchar(255) DEFAULT NULL,
  `remodelled` varchar(255) DEFAULT NULL,
  `access` varchar(255) DEFAULT NULL,
  `parking_spaces` varchar(30) DEFAULT NULL,
  `parking_level` varchar(255) DEFAULT NULL,
  `parking_types` text,
  `monthly_assessment` varchar(30) DEFAULT NULL,
  `assessment_includes` text,
  `offices_x_floors` varchar(255) DEFAULT NULL,
  `number_of_buildings` varchar(30) DEFAULT NULL,
  `listing_photo_count` varchar(30) DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `latitude` varchar(30) DEFAULT NULL,
  `longitude` varchar(30) DEFAULT NULL,
  `units_per_floor` varchar(30) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `crea_display_address` text,
  `agent_information` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `companiescol` varchar(45) DEFAULT NULL,
  `featureObj` varchar(222) DEFAULT '{}',
  `isAuto` varchar(45) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `link_id` varchar(25) NOT NULL,
  `listing_id` varchar(25) DEFAULT NULL,
  `link_type` varchar(255) DEFAULT NULL,
  `link_title` varchar(255) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `feature` varchar(45) DEFAULT '{}',
  `featureObj` varchar(45) DEFAULT '{}',
  `isAuto` tinyint DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street_number` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `unit_number` varchar(255) DEFAULT NULL,
  `price_current` varchar(50) DEFAULT NULL,
  `price_current_rent` varchar(50) DEFAULT NULL,
  `subdivision` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `map_area` varchar(255) DEFAULT NULL,
  `property_type` varchar(255) DEFAULT NULL,
  `year_built` varchar(25) DEFAULT NULL,
  `bedrooms` varchar(25) DEFAULT NULL,
  `bathrooms` varchar(25) DEFAULT NULL,
  `half_bathrooms` varchar(25) DEFAULT NULL,
  `number_of_rooms` varchar(25) DEFAULT NULL,
  `lot_sqft` varchar(25) DEFAULT NULL,
  `sqft_total` varchar(25) DEFAULT NULL,
  `closed_area` varchar(25) DEFAULT NULL,
  `open_area` varchar(25) DEFAULT NULL,
  `lot_width_front` varchar(25) DEFAULT NULL,
  `lot_width_back` varchar(25) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `remodelled` varchar(255) DEFAULT NULL,
  `possession` varchar(255) DEFAULT NULL,
  `zoning` varchar(255) DEFAULT NULL,
  `remarks` text,
  `remarks_es` text,
  `listing_office_id` varchar(25) DEFAULT NULL,
  `colisting_office_id` varchar(25) DEFAULT NULL,
  `listing_agent_id` varchar(25) DEFAULT NULL,
  `colisting_agent_id` varchar(25) DEFAULT NULL,
  `listing_agent_phone` varchar(20) DEFAULT NULL,
  `unique_id` varchar(255) DEFAULT NULL,
  `rooms` varchar(255) DEFAULT NULL,
  `date_listed` date DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `tax_year` varchar(25) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `monthly_assessment` varchar(50) DEFAULT NULL,
  `assessment_includes` text,
  `date_expired` date DEFAULT NULL,
  `lot_features` text,
  `interior_features` text,
  `exterior_features` text,
  `other_services` text,
  `lot_shape` varchar(255) DEFAULT NULL,
  `modification_date` date DEFAULT NULL,
  `directions` text,
  `directions_es` text,
  `web_title` varchar(255) DEFAULT NULL,
  `web_title_es` varchar(255) DEFAULT NULL,
  `access` varchar(255) DEFAULT NULL,
  `roof` varchar(255) DEFAULT NULL,
  `cooling` varchar(255) DEFAULT NULL,
  `flooring` varchar(255) DEFAULT NULL,
  `water` varchar(255) DEFAULT NULL,
  `construction` varchar(255) DEFAULT NULL,
  `parking_spaces` varchar(25) DEFAULT NULL,
  `parking_level` varchar(255) DEFAULT NULL,
  `parking_types` text,
  `internal_features` text,
  `shared_amenities` text,
  `listing_photo_count` varchar(25) DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `units_per_floor` varchar(25) DEFAULT NULL,
  `crea_display_address` text,
  `property_name` varchar(255) DEFAULT NULL,
  `floors_in_building` varchar(25) DEFAULT NULL,
  `number_of_buildings` varchar(25) DEFAULT NULL,
  `model_suite_number` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `featureObj` varchar(45) DEFAULT '()',
  `isAuto` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1053 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `offices`
--

DROP TABLE IF EXISTS `offices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `license_number` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `phone_2` varchar(20) DEFAULT NULL,
  `toll_free` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `featureObj` varchar(45) DEFAULT '{}',
  `isAuto` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=382 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `admin` int DEFAULT NULL,
  `last_login` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `isDeleted` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 14:44:31
