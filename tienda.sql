-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 03:52:27
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(75) NOT NULL,
  `img1` longblob DEFAULT NULL,
  `img2` longblob DEFAULT NULL,
  `img3` longblob DEFAULT NULL,
  `stockMax` int(11) NOT NULL,
  `stockMin` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `img1`, `img2`, `img3`, `stockMax`, `stockMin`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 'bebida 1', 150000, 'Bebida de prueba', '', '', '', 150, 15, 70, '2023-11-23 00:07:19', '2023-11-22 19:07:19'),
(2, 'bebida 2', 10000, 'Bebida de prueba 2', '', '', '', 150, 15, 70, '2023-11-23 00:07:36', '2023-11-22 19:08:10'),
(3, 'Bebida 3', 15000, 'Bebida de prueba 3', NULL, NULL, NULL, 130, 10, 50, '2023-11-23 00:42:26', '2023-11-22 19:42:26'),
(4, 'Bebida 3', 15000, 'Bebida de prueba 3', NULL, NULL, NULL, 130, 10, 50, '2023-11-23 00:42:36', '2023-11-22 19:42:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `adress` varchar(30) NOT NULL,
  `telephone` int(11) NOT NULL,
  `email` varchar(90) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`, `adress`, `telephone`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 'user*', 'Calle 12', 2147483647, 'mm.castro.29@gmail.com', '2023-11-22 23:09:00', '2023-11-22 23:09:00'),
(2, 'admin', 'admin', 'Calle 45', 0, 'admin@gmail.com', '2023-11-22 23:57:48', '2023-11-22 23:57:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
