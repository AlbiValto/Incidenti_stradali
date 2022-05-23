<?php 
require_once("Incidenti_Stradali_LOGIC.php");
class RestService {

   private $httpVersion = "HTTP/1.1";

   private function setHttpHeaders($contentType, $statusCode){
		http_response_code($statusCode);		
		header("Content-Type:". $contentType);
      header("Access-Control-Allow-Origin: *");
	}

   public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData);
		return $jsonResponse;		
	}

   public function returnOk() {
      $this->setHttpHeaders("application/json", 200);
      echo "{\"result\": \"ok\"}";
   }

   public function returnKO($statusCode) {
      $this->setHttpHeaders("application/json", $statusCode);
      echo "{\"result\": \"ko\"}";
   }

   public function parseRequest() {
      try 
      {
         $incidenti = new incidenti();
         switch($_SERVER['REQUEST_METHOD']) 
         {
            case 'GET': {     
               if(isset($_GET["codice"]))
               {
                  $result = $incidenti->select_codice($_GET["codice"]);
               }
               else
               {
                  if(isset($_GET["targa"]))
                  {
                     $result = $incidenti->select_targa($_GET["targa"]);
                  }
                  else
                     if(isset($_GET["ciao"]))
                     {
                        $result = $incidenti->select_automobili();

                     }
                     else
                     {
                        $result = $incidenti->select_all();
                     }
               }
               $this->setHttpHeaders("application/json", 200);
               $jsonResponse = $this->encodeJson($result);
               echo $jsonResponse;
            }
            break;
            case 'POST': {
               $data = json_decode(file_get_contents('php://input'), true);
               if (isset($_GET["codice"])) 
               {
                     $result = $incidenti->insert_sinistro($data);
                  if ($result) {
                     $this->returnOk();
                  } 
                  else 
                  {
                     $this->returnKO(403);
                  }
               } 
               else 
               {
                     if(isset($_GET["targa"]))
                     {
                        $result = $incidenti->insert_importo($data);
                        if ($result) 
                        {
                           $this->returnOk();
                        } 
                        else 
                        {
                           $this->returnKO(403);
                        }
                     }
               }
            }
            break;
         } 
      }
      catch (Exception $e) {
         echo $e->getMessage();
      }
      
   }

}

$restService = new RestService();
$restService->parseRequest();
