-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2024 at 06:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `charactermanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `alignment` varchar(20) DEFAULT NULL,
  `timeline` varchar(100) DEFAULT NULL,
  `race` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `name`, `title`, `alignment`, `timeline`, `race`) VALUES
(1, 'Shadowplayer11.8', 'The Directorsss', 'Horror', NULL, NULL),
(2, 'John Stone', 'The Man', 'Violence', NULL, NULL),
(17, 'Max Rogers', 'The Cannibal', 'Suffering', NULL, NULL),
(18, 'Zack Verrati', 'The Goodfella', 'Violence', NULL, NULL),
(19, 'Cody', 'The Underground Scientist', 'Truth', NULL, NULL),
(20, 'Angelo Kaine', 'The Daredevil', 'Serenity', NULL, NULL),
(21, 'Canoe Scarcliffe', 'The Journalist', 'Horror', NULL, NULL),
(22, 'Leo Vince', 'The hacker', 'Truth', NULL, NULL),
(23, '.', 'The Nameless Swordsman', 'Truth', NULL, NULL),
(24, 'Malachi Ambrose', 'The Executioner', 'Violence', NULL, NULL),
(25, 'Catherine Calendula', 'The Travelling Doctor', 'Serenity', NULL, NULL),
(26, 'Olivia Wendelswith', 'The Night Watcher', 'Horror', NULL, NULL),
(27, 'Bernard Arcenal', 'The Hunter', 'Violence', NULL, NULL),
(28, 'Desmond Arcenal', 'The Alchemist', 'Obsession', NULL, NULL),
(29, 'Lionel Arcenal', 'The Dreadnaught Swordsman ', 'Obsession', NULL, NULL),
(30, 'Charissa Fosborn', 'The Exile', 'Suffering', NULL, NULL),
(31, 'Harris Flint', 'The Gunslinger', 'Obsession', NULL, NULL),
(32, 'Misaki Miyoji', 'The Kunoichi', 'Violence', NULL, NULL),
(33, 'Luis De Barleto', 'The Great Venician Traveller', 'Serenity', NULL, NULL),
(34, 'Elizabeth Mayfrost', 'The Overseer', 'Truth', NULL, NULL),
(35, 'Vylet Cavendash', 'The Butterfly', 'Serenity', NULL, NULL),
(36, 'Samantha Bridges', 'The Agent', 'Obsession', NULL, NULL),
(37, 'Nichole Tailswith', 'The Blossom', 'Serenity', NULL, NULL),
(40, 'Ann Ravenharth', 'The Detective', 'Suffering', NULL, NULL),
(41, 'Xaber Scarr', 'The Janitor', 'Violence', NULL, NULL),
(50, 'Legenex', 'The Warrior', 'Obsession', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
