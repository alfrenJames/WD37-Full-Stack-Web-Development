-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 04:02 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `handson_01`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `DeptID` int(11) NOT NULL,
  `DeptName` varchar(100) NOT NULL,
  `Location` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`DeptID`, `DeptName`, `Location`) VALUES
(1001, 'Executive', 'BGC'),
(1002, 'HR', 'Mandaluyong'),
(1003, 'IT', 'Bulacan'),
(1004, 'Sale', 'Y Ami'),
(1005, 'Marketing', 'Jolo');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(100) NOT NULL,
  `Job` varchar(100) NOT NULL,
  `Mgr` int(11) DEFAULT NULL,
  `HireDate` datetime NOT NULL,
  `Salary` decimal(10,0) NOT NULL,
  `Commission` int(11) DEFAULT NULL,
  `DeptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) VALUES
(1001, 'Scott', 'President', NULL, '1978-01-01 00:00:00', '5000', NULL, 1001),
(1058, 'Clark', 'Manager', 1001, '1978-01-01 00:00:00', '4000', NULL, 1001),
(1059, 'Jeff', 'Manager', 1001, '1978-01-01 00:00:00', '3500', 500, 1002),
(1060, 'Marko', 'Manager', 1001, '1978-01-01 00:00:00', '4000', NULL, 1003),
(1065, 'Bryan', 'SalesMan', 1060, '1979-02-04 00:00:00', '3000', 300, 1002),
(1066, 'Frauline', 'SalesMan', 1060, '1978-02-08 00:00:00', '4000', 600, 1002),
(1067, 'Philip', 'SalesMan', 1060, '1978-04-15 00:00:00', '3300', 0, 1002),
(1068, 'Ejerson', 'Clerk', 1060, '1978-01-15 00:00:00', '2400', NULL, 1002),
(1069, 'Julie', 'Clerk', 1065, '1983-05-12 00:00:00', '2000', NULL, 1003),
(1070, 'Russle', 'Analyst', 1065, '1979-03-01 00:00:00', '3400', NULL, 1003),
(1071, 'Buboy', 'Analyst', 1065, '1979-03-01 00:00:00', '3600', NULL, 1003),
(1072, 'Joseph', 'Analyst', 1065, '1981-01-09 00:00:00', '3100', NULL, 1003);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DeptID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `Mgr` (`Mgr`),
  ADD KEY `DeptID` (`DeptID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `DeptID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1006;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `department` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`),
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`Mgr`) REFERENCES `employee` (`EmpNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
