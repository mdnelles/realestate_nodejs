-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 12, 2024 at 04:01 PM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parecre`
--

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` int NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `license_number` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `phone2` varchar(20) DEFAULT NULL,
  `cell` varchar(20) DEFAULT NULL,
  `cell2` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `office_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int NOT NULL,
  `street_number` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `unit_number` varchar(255) DEFAULT NULL,
  `price_current` decimal(10,2) DEFAULT NULL,
  `price_current_rent` decimal(10,2) DEFAULT NULL,
  `subdivision` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `map_area` varchar(255) DEFAULT NULL,
  `property_name` varchar(255) DEFAULT NULL,
  `commercial_type` varchar(255) DEFAULT NULL,
  `business_type` varchar(255) DEFAULT NULL,
  `sqft_total` int DEFAULT NULL,
  `lot_sqft` int DEFAULT NULL,
  `lot_width_front` int DEFAULT NULL,
  `lot_width_back` int DEFAULT NULL,
  `lot_shape` varchar(255) DEFAULT NULL,
  `closed_area` int DEFAULT NULL,
  `open_area` int DEFAULT NULL,
  `units_in_building` int DEFAULT NULL,
  `number_of_storeys` int DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `water` varchar(255) DEFAULT NULL,
  `year_built` int DEFAULT NULL,
  `construction` varchar(255) DEFAULT NULL,
  `possession` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `zoning` varchar(255) DEFAULT NULL,
  `remarks` text,
  `remarks_es` text,
  `interior_features` text,
  `exterior_features` text,
  `other_services` text,
  `listing_office_id` int DEFAULT NULL,
  `colisting_office_id` int DEFAULT NULL,
  `listing_agent_id` int DEFAULT NULL,
  `colisting_agent_id` int DEFAULT NULL,
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
  `parking_spaces` int DEFAULT NULL,
  `parking_level` varchar(255) DEFAULT NULL,
  `parking_types` text,
  `monthly_assessment` decimal(10,2) DEFAULT NULL,
  `assessment_includes` text,
  `offices_x_floors` varchar(255) DEFAULT NULL,
  `number_of_buildings` int DEFAULT NULL,
  `listing_photo_count` int DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,6) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  `units_per_floor` int DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `crea_display_address` text,
  `agent_information` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `link_id` int NOT NULL,
  `listing_id` int DEFAULT NULL,
  `link_type` varchar(255) DEFAULT NULL,
  `link_title` varchar(255) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE `listings` (
  `id` int NOT NULL,
  `street_number` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) DEFAULT NULL,
  `unit_number` varchar(255) DEFAULT NULL,
  `price_current` decimal(10,2) DEFAULT NULL,
  `price_current_rent` decimal(10,2) DEFAULT NULL,
  `subdivision` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `map_area` varchar(255) DEFAULT NULL,
  `property_type` varchar(255) DEFAULT NULL,
  `year_built` int DEFAULT NULL,
  `bedrooms` int DEFAULT NULL,
  `bathrooms` int DEFAULT NULL,
  `half_bathrooms` int DEFAULT NULL,
  `number_of_rooms` int DEFAULT NULL,
  `lot_sqft` int DEFAULT NULL,
  `sqft_total` int DEFAULT NULL,
  `closed_area` int DEFAULT NULL,
  `open_area` int DEFAULT NULL,
  `lot_width_front` int DEFAULT NULL,
  `lot_width_back` int DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `remodelled` varchar(255) DEFAULT NULL,
  `possession` varchar(255) DEFAULT NULL,
  `zoning` varchar(255) DEFAULT NULL,
  `remarks` text,
  `remarks_es` text,
  `listing_office_id` int DEFAULT NULL,
  `colisting_office_id` int DEFAULT NULL,
  `listing_agent_id` int DEFAULT NULL,
  `colisting_agent_id` int DEFAULT NULL,
  `listing_agent_phone` varchar(20) DEFAULT NULL,
  `unique_id` varchar(255) DEFAULT NULL,
  `rooms` varchar(255) DEFAULT NULL,
  `date_listed` date DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `tax_year` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `monthly_assessment` decimal(10,2) DEFAULT NULL,
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
  `parking_spaces` int DEFAULT NULL,
  `parking_level` varchar(255) DEFAULT NULL,
  `parking_types` text,
  `internal_features` text,
  `shared_amenities` text,
  `listing_photo_count` int DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  `latitude` decimal(10,6) DEFAULT NULL,
  `units_per_floor` int DEFAULT NULL,
  `crea_display_address` text,
  `property_name` varchar(255) DEFAULT NULL,
  `floors_in_building` int DEFAULT NULL,
  `number_of_buildings` int DEFAULT NULL,
  `model_suite_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `license_number` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `phone_2` varchar(20) DEFAULT NULL,
  `toll_free` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`link_id`);

--
-- Indexes for table `listings`
--
ALTER TABLE `listings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `link_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listings`
--
ALTER TABLE `listings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `office`
--
ALTER TABLE `office`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    admin INTEGER,
    last_login DATETIME DEFAULT CURRENT_TIMESTAMP,
    isDeleted INTEGER DEFAULT 0
);