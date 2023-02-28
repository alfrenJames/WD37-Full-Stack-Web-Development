-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 02:18 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `record`
--

-- --------------------------------------------------------

--
-- Table structure for table `department_table`
--

CREATE TABLE `department_table` (
  `DeptId` int(11) NOT NULL,
  `DeptName` varchar(255) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `department_table`
--

INSERT INTO `department_table` (`DeptId`, `DeptName`, `Location`) VALUES
(1001, 'Executive', 'BGC'),
(1002, 'Hr', 'Mandaluyong'),
(1003, 'IT', 'Bulacan'),
(1004, 'Sales', 'Y Ami'),
(1005, 'Marketing', 'Jolo');

-- --------------------------------------------------------

--
-- Table structure for table `employee_table`
--

CREATE TABLE `employee_table` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(40) DEFAULT NULL,
  `Job` varchar(40) DEFAULT NULL,
  `Mgr` int(11) DEFAULT NULL,
  `HireDate` int(11) DEFAULT NULL,
  `Salary` int(11) DEFAULT NULL,
  `Commission` int(11) DEFAULT NULL,
  `DeptId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `employee_table`
--

INSERT INTO `employee_table` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptId`) VALUES
(1001, 'Scott', 'President', NULL, 1978, 5000, NULL, 1001),
(1058, 'Clark', 'Manager', 1001, 1978, 4000, NULL, 1001),
(1059, 'Jeff', 'Manager', 1001, 1978, 3500, 500, 1002),
(1060, 'Marko', 'Manager', 1001, 1978, 4000, NULL, 1003),
(1065, 'Bryan', 'Salesman', 1060, 1979, 3000, 300, 1002),
(1066, 'Frauline', 'Salesman', 1060, 1978, 4000, 600, 1002),
(1067, 'Phylip', 'Salesman', 1060, 1978, 3300, 0, 1002),
(1068, 'Ejerson', 'Clerk', 1060, 1978, 2400, NULL, 1002),
(1069, 'Julie', 'Clerk', 1065, 1983, 2000, NULL, 1003),
(1070, 'Russel', 'Analyst', 1065, 1979, 3400, NULL, 1003),
(1071, 'Buboy', 'Analyst', 1065, 1979, 3600, NULL, 1003),
(1072, 'Joseph', 'Analyst', 1065, 1981, 3100, NULL, 1003);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department_table`
--
ALTER TABLE `department_table`
  ADD PRIMARY KEY (`DeptId`);

--
-- Indexes for table `employee_table`
--
ALTER TABLE `employee_table`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `Mgr` (`Mgr`),
  ADD KEY `DeptId` (`DeptId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee_table`
--
ALTER TABLE `employee_table`
  ADD CONSTRAINT `employee_table_ibfk_1` FOREIGN KEY (`DeptId`) REFERENCES `department_table` (`DeptId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
