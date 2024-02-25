
--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `listings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `street_number` VARCHAR(255),
  `street_name` VARCHAR(255),
  `unit_number` VARCHAR(255),
  `price_current` VARCHAR(50),
  `price_current_rent` VARCHAR(50),
  `subdivision` VARCHAR(255),
  `region` VARCHAR(255),
  `district` VARCHAR(255),
  `map_area` VARCHAR(255),
  `property_type` VARCHAR(255),
  `year_built` VARCHAR(25),
  `bedrooms` VARCHAR(25),
  `bathrooms` VARCHAR(25),
  `half_bathrooms` VARCHAR(25),
  `number_of_rooms` VARCHAR(25),
  `lot_sqft` VARCHAR(25),
  `sqft_total` VARCHAR(25),
  `closed_area` VARCHAR(25),
  `open_area` VARCHAR(25),
  `lot_width_front` VARCHAR(25),
  `lot_width_back` VARCHAR(25),
  `style` VARCHAR(255),
  `remodelled` VARCHAR(255),
  `possession` VARCHAR(255),
  `zoning` VARCHAR(255),
  `remarks` TEXT,
  `remarks_es` TEXT,
  `listing_office_id` VARCHAR(25),
  `colisting_office_id` VARCHAR(25),
  `listing_agent_id` VARCHAR(25),
  `colisting_agent_id` VARCHAR(25),
  `listing_agent_phone` VARCHAR(20),
  `unique_id` VARCHAR(255),
  `rooms` VARCHAR(255),
  `date_listed` DATE,
  `postal_code` VARCHAR(20),
  `status` VARCHAR(255),
  `tax_year` VARCHAR(25),
  `title` VARCHAR(255),
  `monthly_assessment` VARCHAR(50),
  `assessment_includes` TEXT,
  `date_expired` DATE,
  `lot_features` TEXT,
  `interior_features` TEXT,
  `exterior_features` TEXT,
  `other_services` TEXT,
  `lot_shape` VARCHAR(255),
  `modification_date` DATE,
  `directions` TEXT,
  `directions_es` TEXT,
  `web_title` VARCHAR(255),
  `web_title_es` VARCHAR(255),
  `access` VARCHAR(255),
  `roof` VARCHAR(255),
  `cooling` VARCHAR(255),
  `flooring` VARCHAR(255),
  `water` VARCHAR(255),
  `construction` VARCHAR(255),
  `parking_spaces` VARCHAR(25),
  `parking_level` VARCHAR(255),
  `parking_types` TEXT,
  `internal_features` TEXT,
  `shared_amenities` TEXT,
  `listing_photo_count` VARCHAR(25),
  `building_name` VARCHAR(255),
  `longitude` VARCHAR(50),
  `latitude` VARCHAR(50),
  `units_per_floor` VARCHAR(25),
  `crea_display_address` TEXT,
  `property_name` VARCHAR(255),
  `floors_in_building` VARCHAR(25),
  `number_of_buildings` VARCHAR(25),
  `model_suite_number` VARCHAR(255),
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  `featureObj` VARCHAR(45) DEFAULT '()',
  `isAuto` TINYINT DEFAULT 0,
  `isDeleted` TINYINT DEFAULT 0
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


