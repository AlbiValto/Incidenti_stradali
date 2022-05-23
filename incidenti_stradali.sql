-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Creato il: Mag 22, 2022 alle 08:33
-- Versione del server: 5.7.32
-- Versione PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `incidenti_stradali`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `danno`
--

CREATE TABLE `danno` (
  `id_danno` int(100) NOT NULL,
  `importo` int(100) NOT NULL,
  `id_veicolo` int(100) NOT NULL,
  `id_sinistro` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `danno`
--

INSERT INTO `danno` (`id_danno`, `importo`, `id_veicolo`, `id_sinistro`) VALUES
(1, 2900, 1, 5),
(2, 9000, 5, 5),
(3, 700, 3, 1),
(4, 12000, 2, 3),
(5, 400, 4, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `proprietario`
--

CREATE TABLE `proprietario` (
  `id_proprietario` int(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cognome` varchar(100) NOT NULL,
  `data_nascita` date NOT NULL,
  `comune_residenza` varchar(100) NOT NULL,
  `indirizzo` varchar(100) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `numero_telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `proprietario`
--

INSERT INTO `proprietario` (`id_proprietario`, `nome`, `cognome`, `data_nascita`, `comune_residenza`, `indirizzo`, `provincia`, `numero_telefono`) VALUES
(1, 'Davide', 'Diflorio', '2002-01-12', 'Monza', 'Via diflorio 2', 'MB', '3276109812'),
(2, 'Simone', 'Abbate', '2003-01-06', 'Monza', 'Via abbate 4', 'MB', '3278906577'),
(3, 'Simone', 'Epiglotti', '2003-08-31', 'lissone', 'via tripoli \r\n', 'MB', '3276509123'),
(4, 'Ueldi', 'Ademi', '2003-01-29', 'lissone', 'via ueldi', 'MB', '6547823908'),
(5, 'Lorenzo', 'Montanaro', '2003-01-08', 'villasanta', 'via montanaro', 'MB', '3165123490');

-- --------------------------------------------------------

--
-- Struttura della tabella `sinistro`
--

CREATE TABLE `sinistro` (
  `id_sinistro` int(100) NOT NULL,
  `codice` varchar(100) NOT NULL,
  `data` date NOT NULL,
  `ora` time NOT NULL,
  `luogo` varchar(100) NOT NULL,
  `feriti` int(100) NOT NULL,
  `morti` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `sinistro`
--

INSERT INTO `sinistro` (`id_sinistro`, `codice`, `data`, `ora`, `luogo`, `feriti`, `morti`) VALUES
(1, 'CHGDKI', '2022-05-01', '09:32:13', 'Via incidente1, monza', 2, 0),
(2, 'KJIQSG', '2022-05-14', '00:26:14', 'Via incidente2, monza', 4, 2),
(3, 'HJQWER', '2022-04-05', '09:34:12', 'Via incidente3, arcore', 0, 2),
(4, 'ZXCVBN', '2022-03-17', '12:12:12', 'Via incidente4, villasanta', 6, 0),
(5, 'ASDFGH', '2022-02-09', '21:45:12', 'Via incidente5, milano', 4, 0);

-- --------------------------------------------------------
--
-- Struttura della tabella `veicolo`
--

CREATE TABLE `veicolo` (
  `id_veicolo` int(100) NOT NULL,
  `targa` varchar(7) NOT NULL,
  `id_proprietario` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `veicolo`
--

INSERT INTO `veicolo` (`id_veicolo`, `targa`, `id_proprietario`) VALUES
(1, 'AG165GH', 1),
(2, 'HJ912FS', 5),
(3, 'EG526HP', 2),
(4, 'AZ456LO', 3),
(5, 'FG987PO', 4);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `danno`
--
ALTER TABLE `danno`
  ADD PRIMARY KEY (`id_danno`),
  ADD KEY `id_mezzo` (`id_veicolo`),
  ADD KEY `id_sinistro` (`id_sinistro`);

--
-- Indici per le tabelle `proprietario`
--
ALTER TABLE `proprietario`
  ADD PRIMARY KEY (`id_proprietario`);

--
-- Indici per le tabelle `sinistro`
--
ALTER TABLE `sinistro`
  ADD PRIMARY KEY (`id_sinistro`);
--
-- Indici per le tabelle `veicolo`
--
ALTER TABLE `veicolo`
  ADD PRIMARY KEY (`id_veicolo`),
  ADD KEY `id_proprietario` (`id_proprietario`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `danno`
--
ALTER TABLE `danno`
  MODIFY `id_danno` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `proprietario`
--
ALTER TABLE `proprietario`
  MODIFY `id_proprietario` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `sinistro`
--
ALTER TABLE `sinistro`
  MODIFY `id_sinistro` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `veicolo`
--
ALTER TABLE `veicolo`
  MODIFY `id_veicolo` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `danno`
--
ALTER TABLE `danno`
  ADD CONSTRAINT `danno_ibfk_1` FOREIGN KEY (`id_sinistro`) REFERENCES `sinistro` (`id_sinistro`),
  ADD CONSTRAINT `danno_ibfk_2` FOREIGN KEY (`id_veicolo`) REFERENCES `veicolo` (`id_veicolo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `veicolo`
--
ALTER TABLE `veicolo`
  ADD CONSTRAINT `veicolo_ibfk_1` FOREIGN KEY (`id_proprietario`) REFERENCES `proprietario` (`id_proprietario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
