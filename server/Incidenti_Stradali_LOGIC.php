<?php
require_once("dbaccess.php");

class incidenti {

   private $db;

   public function select_all() {
      $db = new DbAccess();
      $result = $db->select_all(); 
      return $result;   
   } 
   public function insert_sinistro($valori) 
   {
      $db = new DbAccess();
      $result = $db->insert_sinistro(
                        $valori['codice'], 
                        $valori['data'], 
                        $valori['orario'], 
                        $valori['luogo'], 
                        $valori['feriti'], 
                        $valori['morti']
      );

      if ($result) 
      {
         return true;
      } else 
      {
         return false;
      }
   }

   public function select_codice($codice) {
      $db = new DbAccess();
      $result = $db->select_codice($codice);
      return $result;   
   }

   public function select_automobili() {
      $db = new DbAccess();
      $result = $db->select_automobili();
      return $result;   
   }

   public function insert_importo($valori) 
   {
      $db = new DbAccess();
      $result = $db->insert_importo($valori['codice'], 
                                    $valori['targa'], 
                                    $valori['importo']
      );
      if ($result) 
      {
         return true;
      } else 
      {
         return false;
      }
   }

   public function select_targa($targa) {
      $db = new DbAccess();
      $result = $db->select_targa($targa);
      return $result;
   }
}