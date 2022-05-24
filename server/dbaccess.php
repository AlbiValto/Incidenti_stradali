<?php

class DbAccess {

   private function connect() {
      $servername = "127.0.0.1";
      $database = "incidenti_stradali";
      $username = "root";
      $password = "";
      $conn = mysqli_connect($servername, $username, $password, $database);
      if (!is_object($conn)) {
         if(!$conn) {
            echo "Errore DB ".mysqli_connect_error();
            exit;
         }
      }
      else{
         if ($conn -> connect_errno) {
              echo "Errore DB: " . $conn -> connect_error;
              exit;
         }
      }
      return $conn;
   } 

   private function close($conn) {
      mysqli_close($conn);
   }

   public function select_all() {
      $sql = "SELECT codice, data, ora, luogo, feriti, morti 
              FROM sinistro";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $list= array();
      while ($row = $result->fetch_assoc()) {
         $sinistro = [
            'codice' => $row['codice'],
            'data' => $row['data'],
            'ora' => $row['ora'],
            'luogo' => $row['luogo'],
            'feriti' => $row['feriti'],
            'morti' => $row['morti'],
         ];
         $list[] = $sinistro;
      }
      $this->close($conn);
      return $list;
   }

   public function insert_sinistro($codice, $data, $orario, $luogo, $feriti, $morti) {
      $sql = "INSERT INTO sinistro (codice, data, ora, luogo, feriti, morti) VALUES ('$codice', '$data', '$orario', '$luogo', '$feriti', '$morti')";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $this->close($conn);
      return $result;
   }

   public function select_codice($codice) {
      $sql = "SELECT DISTINCT targa, importo, numero_telefono, nome, cognome, indirizzo, comune_residenza, provincia FROM sinistro NATURAL JOIN danno NATURAL JOIN veicolo NATURAL JOIN proprietario WHERE codice='$codice';";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $list= array();
      while ($row = $result->fetch_assoc()) {
         $select = [
            'targa' => $row['targa'],
            'numero_telefono' => $row['numero_telefono'],
            'importo' => $row['importo'],
            'nome' => $row['nome'],
            'cognome' => $row['cognome'],
            'indirizzo' => $row['indirizzo'],
            'comune_residenza' => $row['comune_residenza'],
            'provincia' => $row['provincia'],         
         ];
         $list[] = $select;
      }
      $this->close($conn);
      return $list;
   }

   public function select_automobili() {
      $sql = "SELECT DISTINCT targa, nome, cognome, comune_residenza, data_nascita, indirizzo, provincia, numero_telefono FROM veciolo NATURAL JOIN proprietario;";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $list= array();
      while ($row = $result->fetch_assoc()) {
         $select = [
            'targa' => $row['targa'],
            'nome' => $row['nome'],
            'cognome' => $row['cognome'],
            'comune_residenza' => $row['comune_residenza'],
            'data_nascita' => $row['data_nascita'],
            'indirizzo' => $row['indirizzo'],
            'provincia' => $row['provincia'],
            'numero_telefono' => $row['numero_telefono']       
         ];
         $list[] = $select;
      }
      $this->close($conn);
      return $list;
   }


   public function insert_importo($codice, $targa, $importo) {
      $sql = "INSERT INTO danno (id_veicolo, id_sinistro, importo) 
              VALUES ( 
                 (SELECT id_veicolo FROM veicolo WHERE targa='$targa'), 
                 (SELECT id_sinistro FROM sinistro WHERE codice='$codice'), 
                 $importo
               );";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $this->close($conn);
      return $result;
   }
   
   public function select_targa($targa) {
      $sql = "SELECT DISTINCT codice, data, ora, luogo, feriti, morti 
              FROM sinistro NATURAL JOIN danno NATURAL JOIN veicolo
              WHERE targa = '$targa'";
      $conn = $this->connect();
      $result = mysqli_query($conn, $sql);
      $list= array();
      while ($row = $result->fetch_assoc()) {
         $sinistro = [
            'codice' => $row['codice'],
            'data' => $row['data'],
            'ora' => $row['ora'],
            'luogo' => $row['luogo'],
            'feriti' => $row['feriti'],
            'morti' => $row['morti'],
         ];
         $list[] = $sinistro;
      }
      $this->close($conn);
      return $list;
   }
}
?>