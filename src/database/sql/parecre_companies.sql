
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

