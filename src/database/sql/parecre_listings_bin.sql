
--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings_bin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listings_bin` (
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


