class Presenter {
   constructor() {
      this.init();
      this.middleware = new Middleware();
      // this.middleware.select_all(this.refresh);
   }

   init() {

      document.querySelector("#select_all").addEventListener('click', () => {
         const risposta1 = prompt("Vuoi visualizzare tutti i sinistri oppure no?Y/N: ");
         console.log(risposta1)
         if(risposta1 == "Y")
         {
            this.middleware.select_all(this.refresh);
         }
         else
         {
            if(risposta1 == "N")
            {
               const risposta2 = prompt("Inserire la targa del veicolo il quale si vuole sapere il sinistro: ");
               this.middleware.select_targa(risposta2, this.refresh);
            }
            else
            {
               alert("Errore inserimento, riprovare");
            }
         }

      });

      document.querySelector("#select_codice").addEventListener('click', () => {
         const risposta = prompt("Inserire il codice del sinistro il quale si vogliono sapere i veicoli: ");
         this.middleware.select_codice(risposta, this.refresh1);
      });


   }


   refresh(list) {
      console.log(list);
      
      let val =`
      <tr>
         <th><h1>CODICE</h1></th>
         <th><h1>LUOGO</h1></th>
         <th><h1>DATA</h1></th>
         <th><h1>ORA</h1></th>
         <th><h1>FERITI</h1></th>
         <th><h1>MORTI</h1></th>
      </tr>`;

   document.querySelector('thead').innerHTML = val;


      let template = `
         <tr>
            <td>%CODICE</td>
            <td>%LUOGO</td>
            <td>%DATA</td>
            <td>%ORA</td>
            <td>%FERITI</td>
            <td>%MORTI</td>
         </tr>
      `;
      let html = "";

      list.forEach(element => {
         let date = new Date(element.data);

         let row = template;
         row = row.replace("%CODICE", element.codice);
         row = row.replace("%LUOGO", element.luogo);
         row = row.replace("%DATA", date.toLocaleDateString());
         row = row.replace("%ORA", element.ora);
         row = row.replace("%FERITI", element.feriti);
         row = row.replace("%MORTI", element.morti);
         html += row;
      });

      document.querySelector('tbody').innerHTML = html;
   }
   
refresh1(list) {
   console.log(list);

   let val =`
      <tr>
         <th><h1>TARGA</h1></th>
         <th><h1>IMPORTO</h1></th>
         <th><h1>LUOGO</h1></th>
         <th><h1>DATA</h1></th>
         <th><h1>ORA</h1></th>
         <th><h1>FERITI</h1></th>
         <th><h1>MORTI</h1></th>
      </tr>`;
   document.querySelector('thead').innerHTML = val;
   let template = `
      <tr>
         <td>%TARGA</td>
         <td>%IMPORTO</td>
         <td>%LUOGO</td>
         <td>%DATA</td>
         <td>%ORA</td>
         <td>%FERITI</td>
         <td>%MORTI</td>
      </tr>
   `;
   let html = "";

   list.forEach(element => {
      let date = new Date(element.data);

      let row = template;
      row = row.replace("%TARGA", element.targa);
      row = row.replace("%IMPORTO", element.importo);
      row = row.replace("%LUOGO", element.luogo);
      row = row.replace("%DATA", date.toLocaleDateString());
      row = row.replace("%ORA", element.ora);
      row = row.replace("%FERITI", element.feriti);
      row = row.replace("%MORTI", element.morti);
      html += row;
   });

   document.querySelector('tbody').innerHTML = html;
}
}

let presenter;
window.addEventListener('load', () => {
   presenter = new Presenter();
})