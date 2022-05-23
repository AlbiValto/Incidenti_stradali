class Middleware {
   constructor() {
      this.url = 'http://localhost/Incidenti_stradali/server/restmiddleware.php';
   }

   select_codice(codice, callback) {
      let action = (response) => {
         const data = JSON.parse(response);
         callback(data);
      };
      console.log(codice);
      const url = this.url + '?codice=' + codice;
      this.connect(url, 'GET', null, action);
   }

   select_targa(targa, callback) {
      let action = (response) => {
         const data = JSON.parse(response);
         callback(data);
      };
      console.log(targa);
      const url = this.url + '?targa=' + targa;
      console.log(url);
      this.connect(url, 'GET', null, action);
   }

   select_all(callback) {
      let action = (response) => {
         const data = JSON.parse(response);
         callback(data);
      };
      this.connect(this.url, 'GET', null, action);
   }

   /*select_automobile(callback)
   {
      let action = (response) => {
         const data = JSON.parse(response);
         callback(data);
      };
      const url = this.url + '?ciao=' + '123';
      this.connect(url, 'GET', null, action);
   }*/

   insert_sinistro(valori, codice) {
      const body = JSON.stringify(valori);
      console.log(valori);
      const url = this.url + '?codice=' + codice;
      this.connect1(url, 'POST', body)
   }  

   insert_importo(valori, targa) {
      const body = JSON.stringify(valori); 
      console.log(valori);
      const url = this.url + '?targa=' + targa;
      this.connect1(url, 'POST', body)
   }

   /*connect(url, method, body, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      let manageResponse = () => {
         if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`); 
          } else { 
            callback(xhr.response);
          }
      }
      xhr.onload = manageResponse;
      xhr.send(body);  
   }*/

   connect1(url, method, body)
   {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      let manageResponse = () => {
         if (xhr.status != 200) { 
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); 
            alert("ERRORE NELL'INSERIMENTO DEI DATI!")
          } else { 
            alert("I DATI SONO STATI INSERITI!")
          }
      } 
      xhr.onload = manageResponse;
      xhr.send(body); 
   }
   connect(url, method, body, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      let manageResponse = () => {
         if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`); 
          } else { 
            callback(xhr.response);
          }
      }
      xhr.onload = manageResponse;
      xhr.send(body);  
   }
}