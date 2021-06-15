-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 15, 2021 at 11:37 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherforecaster`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(10) NOT NULL,
  `city_name` varchar(512) NOT NULL,
  `city_longitude` varchar(512) NOT NULL,
  `city_latitude` varchar(512) NOT NULL,
  `country_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `city_name`, `city_longitude`, `city_latitude`, `country_id`) VALUES
(1, 'Porto', '-8° 36\' 39.56\" W', '41° 08\' 58.60\" N', 1),
(2, 'Madrid', '3° 42\' 13.6440\'\' W', '40° 25\' 0.3900\'\' N', 2),
(3, 'Paris', '2° 20\' 56.4504\'\' E', '48° 51\' 52.9776\'\' N', 3);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(10) NOT NULL,
  `country_name` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country_name`) VALUES
(1, 'Portugal'),
(2, 'Espanha'),
(3, 'França');

-- --------------------------------------------------------

--
-- Table structure for table `weatherdailyforecastlog`
--

CREATE TABLE `weatherdailyforecastlog` (
  `id` int(10) NOT NULL,
  `calendar_date` datetime NOT NULL,
  `min_temperature` int(11) NOT NULL,
  `max_temperature` int(11) NOT NULL,
  `avg_humidity` int(11) NOT NULL,
  `sunrise_time` datetime DEFAULT NULL,
  `sunset_time` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `weatherInstitute_id` int(11) DEFAULT NULL,
  `weatherStatus_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weatherdailyforecastlog`
--

INSERT INTO `weatherdailyforecastlog` (`id`, `calendar_date`, `min_temperature`, `max_temperature`, `avg_humidity`, `sunrise_time`, `sunset_time`, `city_id`, `weatherInstitute_id`, `weatherStatus_id`) VALUES
(1, '2021-05-21 00:00:00', 11, 18, 1, '2021-05-21 07:12:19', 2147483647, 1, 1, 1),
(2, '2021-05-21 00:00:00', 11, 18, 1, '2021-05-21 07:12:19', 2147483647, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `weatherhourlyforecastlog`
--

CREATE TABLE `weatherhourlyforecastlog` (
  `id` int(10) NOT NULL,
  `start_timestamp` datetime NOT NULL,
  `end_timestamp` datetime NOT NULL,
  `temperature` int(11) NOT NULL,
  `humidity` int(11) NOT NULL,
  `wind_speed` int(11) NOT NULL,
  `wind_direction` varchar(512) NOT NULL,
  `pressure` int(11) DEFAULT NULL,
  `visibility` int(11) DEFAULT NULL,
  `weatherInstitute_id` int(11) DEFAULT NULL,
  `weatherStatus_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weatherhourlyforecastlog`
--

INSERT INTO `weatherhourlyforecastlog` (`id`, `start_timestamp`, `end_timestamp`, `temperature`, `humidity`, `wind_speed`, `wind_direction`, `pressure`, `visibility`, `weatherInstitute_id`, `weatherStatus_id`, `city_id`) VALUES
(1, '2021-05-21 00:00:00', '2021-05-21 01:00:00', 13, 79, 8, 'NO', NULL, NULL, 1, 1, 1),
(2, '2021-05-21 01:00:00', '2021-05-21 02:00:00', 13, 78, 7, 'NO', NULL, NULL, 1, 1, 1),
(3, '2021-05-21 02:00:00', '2021-05-21 03:00:00', 13, 77, 9, 'NO', NULL, NULL, 1, 1, 1),
(4, '2021-05-21 03:00:00', '2021-05-21 04:00:00', 12, 81, 9, 'NO', NULL, NULL, 1, 1, 1),
(5, '2021-05-21 04:00:00', '2021-05-21 05:00:00', 12, 81, 9, 'NO', NULL, NULL, 1, 1, 1),
(6, '2021-05-21 05:00:00', '2021-05-21 06:00:00', 12, 80, 10, 'NNO', NULL, NULL, 1, 1, 1),
(7, '2021-05-21 06:00:00', '2021-05-21 07:00:00', 11, 81, 8, 'NNO', NULL, NULL, 1, 1, 1),
(8, '2021-05-21 07:00:00', '2021-05-21 08:00:00', 12, 80, 7, 'NNO', NULL, NULL, 1, 1, 1),
(9, '2021-05-21 08:00:00', '2021-05-21 09:00:00', 12, 77, 8, 'NNO', NULL, NULL, 1, 1, 1),
(10, '2021-05-21 09:00:00', '2021-05-21 10:00:00', 14, 68, 10, 'NNO', NULL, NULL, 1, 1, 1),
(11, '2021-05-21 10:00:00', '2021-05-21 11:00:00', 14, 68, 10, 'NNO', NULL, NULL, 1, 1, 1),
(12, '2021-05-21 11:00:00', '2021-05-21 12:00:00', 14, 61, 15, 'NO', NULL, NULL, 1, 1, 1),
(13, '2021-05-21 12:00:00', '2021-05-21 13:00:00', 15, 62, 17, 'NO', NULL, NULL, 1, 1, 1),
(14, '2021-05-21 13:00:00', '2021-05-21 14:00:00', 15, 0, 16, 'NO', NULL, NULL, 1, 1, 1),
(15, '2021-05-21 14:00:00', '2021-05-21 15:00:00', 15, 59, 17, 'NO', NULL, NULL, 1, 1, 1),
(16, '2021-05-21 15:00:00', '2021-05-21 16:00:00', 15, 57, 17, 'NO', NULL, NULL, 1, 1, 1),
(17, '2021-05-21 16:00:00', '2021-05-21 17:00:00', 15, 54, 17, 'NO', NULL, NULL, 1, 1, 1),
(18, '2021-05-21 17:00:00', '2021-05-21 18:00:00', 16, 55, 18, 'NO', NULL, NULL, 1, 1, 1),
(19, '2021-05-21 18:00:00', '2021-05-21 19:00:00', 15, 57, 18, 'NO', NULL, NULL, 1, 1, 1),
(20, '2021-05-21 19:00:00', '2021-05-21 20:00:00', 15, 57, 18, 'NO', NULL, NULL, 1, 1, 1),
(21, '2021-05-21 20:00:00', '2021-05-21 21:00:00', 14, 62, 17, 'NO', NULL, NULL, 1, 1, 1),
(22, '2021-05-21 21:00:00', '2021-05-21 22:00:00', 13, 67, 13, 'NNO', NULL, NULL, 1, 1, 1),
(23, '2021-05-21 22:00:00', '2021-05-21 23:00:00', 12, 72, 10, 'NNO', NULL, NULL, 1, 1, 1),
(24, '2021-05-21 23:00:00', '2021-05-22 00:00:00', 11, 77, 9, 'NNO', NULL, NULL, 1, 1, 1),
(25, '2021-05-21 00:00:00', '2021-05-21 01:00:00', 13, 79, 8, 'NO', NULL, NULL, 2, 2, 2),
(26, '2021-05-21 01:00:00', '2021-05-21 02:00:00', 13, 78, 7, 'NO', NULL, NULL, 2, 2, 2),
(27, '2021-05-21 02:00:00', '2021-05-21 03:00:00', 13, 77, 9, 'NO', NULL, NULL, 2, 2, 2),
(28, '2021-05-21 03:00:00', '2021-05-21 04:00:00', 12, 81, 9, 'NO', NULL, NULL, 2, 2, 2),
(29, '2021-05-21 04:00:00', '2021-05-21 05:00:00', 12, 81, 9, 'NO', NULL, NULL, 2, 2, 2),
(30, '2021-05-21 05:00:00', '2021-05-21 06:00:00', 12, 80, 10, 'NNO', NULL, NULL, 2, 2, 2),
(31, '2021-05-21 06:00:00', '2021-05-21 07:00:00', 11, 81, 8, 'NNO', NULL, NULL, 2, 2, 2),
(32, '2021-05-21 07:00:00', '2021-05-21 08:00:00', 12, 80, 7, 'NNO', NULL, NULL, 2, 2, 2),
(33, '2021-05-21 08:00:00', '2021-05-21 09:00:00', 12, 77, 8, 'NNO', NULL, NULL, 2, 2, 2),
(34, '2021-05-21 09:00:00', '2021-05-21 10:00:00', 14, 68, 10, 'NNO', NULL, NULL, 2, 2, 2),
(35, '2021-05-21 10:00:00', '2021-05-21 11:00:00', 14, 68, 10, 'NNO', NULL, NULL, 2, 2, 2),
(36, '2021-05-21 11:00:00', '2021-05-21 12:00:00', 14, 61, 15, 'NO', NULL, NULL, 2, 2, 2),
(37, '2021-05-21 12:00:00', '2021-05-21 13:00:00', 15, 62, 17, 'NO', NULL, NULL, 2, 2, 2),
(38, '2021-05-21 13:00:00', '2021-05-21 14:00:00', 15, 0, 16, 'NO', NULL, NULL, 2, 2, 2),
(39, '2021-05-21 14:00:00', '2021-05-21 15:00:00', 15, 59, 17, 'NO', NULL, NULL, 2, 2, 2),
(40, '2021-05-21 15:00:00', '2021-05-21 16:00:00', 15, 57, 17, 'NO', NULL, NULL, 2, 2, 2),
(41, '2021-05-21 16:00:00', '2021-05-21 17:00:00', 15, 54, 17, 'NO', NULL, NULL, 2, 2, 2),
(42, '2021-05-21 17:00:00', '2021-05-21 18:00:00', 16, 55, 18, 'NO', NULL, NULL, 2, 2, 2),
(43, '2021-05-21 18:00:00', '2021-05-21 19:00:00', 15, 57, 18, 'NO', NULL, NULL, 2, 2, 2),
(44, '2021-05-21 19:00:00', '2021-05-21 20:00:00', 15, 57, 18, 'NO', NULL, NULL, 2, 2, 2),
(45, '2021-05-21 20:00:00', '2021-05-21 21:00:00', 14, 62, 17, 'NO', NULL, NULL, 2, 2, 2),
(46, '2021-05-21 21:00:00', '2021-05-21 22:00:00', 13, 67, 13, 'NNO', NULL, NULL, 2, 2, 2),
(47, '2021-05-21 22:00:00', '2021-05-21 23:00:00', 12, 72, 10, 'NNO', NULL, NULL, 2, 2, 2),
(48, '2021-05-21 23:00:00', '2021-05-22 00:00:00', 11, 77, 9, 'NNO', NULL, NULL, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `weatherinstitute`
--

CREATE TABLE `weatherinstitute` (
  `id` int(10) NOT NULL,
  `name` varchar(512) NOT NULL,
  `address` varchar(512) NOT NULL,
  `city_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weatherinstitute`
--

INSERT INTO `weatherinstitute` (`id`, `name`, `address`, `city_id`) VALUES
(1, 'IPMA - Aeroporto do Porto', 'Pedras Rubras, 4470-558 Vila Nova da Telha', 1),
(2, 'AEMET, State Meteorological Agency', 'Leonardo Prieto, 8 Ciudad Universitaria, 28071, Madrid, Spain', 2);

-- --------------------------------------------------------

--
-- Table structure for table `weatherstatus`
--

CREATE TABLE `weatherstatus` (
  `id` int(10) NOT NULL,
  `weather_status` varchar(512) NOT NULL,
  `weather_type` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weatherstatus`
--

INSERT INTO `weatherstatus` (`id`, `weather_status`, `weather_type`) VALUES
(1, 'Pouco nublado possível periodos de chuva.\r\n\r\n', 'Nublado'),
(2, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weatherdailyforecastlog`
--
ALTER TABLE `weatherdailyforecastlog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weatherhourlyforecastlog`
--
ALTER TABLE `weatherhourlyforecastlog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weatherinstitute`
--
ALTER TABLE `weatherinstitute`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weatherstatus`
--
ALTER TABLE `weatherstatus`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
