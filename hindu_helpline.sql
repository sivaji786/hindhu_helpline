-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 11, 2026 at 04:39 PM
-- Server version: 8.0.44-0ubuntu0.24.04.2
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hindu_helpline`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint UNSIGNED NOT NULL,
  `version` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `group` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `namespace` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `time` int NOT NULL,
  `batch` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('male','female','other') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `mobile`, `email`, `password`, `date_of_birth`, `gender`, `country`, `state`, `city`, `created_at`, `updated_at`) VALUES
(1, 'Rajesh', 'Kumar', '9876543210', 'rajesh.kumar@example.com', '$2y$10$2M3x7JtrxLB3TjPZfX0P3u/1GYuti99g8RijCOwmmSp5HdhiElmeG', '1985-05-15', 'male', 'India', 'Maharashtra', 'Mumbai', '2026-01-11 10:49:29', '2026-01-11 10:49:29'),
(2, 'Priya', 'Sharma', '9876543211', 'priya.sharma@example.com', '$2y$10$7ey.56yp5hlIAKQe54MAN.qmDmNCZ4Se0gRRlb4632WJ1c.6v75O2', '1990-08-22', 'female', 'India', 'Karnataka', 'Bangalore', '2026-01-11 10:49:29', '2026-01-11 10:49:29'),
(3, 'Amit', 'Patel', '9876543212', 'amit.patel@example.com', '$2y$10$ZTgd1jgRXLXZ/i2uonXcF.UNuP8Nuf.zUeNQ940tuuPZ6mpsFPSoG', '1988-03-10', 'male', 'India', 'Gujarat', 'Ahmedabad', '2026-01-11 10:49:29', '2026-01-11 10:49:29'),
(4, 'Lakshmi', 'Reddy', '9876543213', 'lakshmi.reddy@example.com', '$2y$10$7.ZQ8qV855mlC1/h/cEFKO0ynx9tdNxfX5bGX3MXomtY4NRb9wmi6', '1992-11-05', 'female', 'India', 'Telangana', 'Hyderabad', '2026-01-11 10:49:29', '2026-01-11 10:49:29'),
(5, 'Vikram', 'Singh', '9876543214', 'vikram.singh@example.com', '$2y$10$/KcRyXb6IXIfTcMFlHddeOB1uGDrOlAXOl7PXJ2gsvNXnHtXN6X6u', '1987-07-18', 'male', 'India', 'Delhi', 'New Delhi', '2026-01-11 10:49:29', '2026-01-11 10:49:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_mobile` (`mobile`),
  ADD KEY `idx_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
