class Presenter {
    constructor() {
       this.init();
       this.middleware = new Middleware();
       this.middleware.select_all(this.refresh);
    }
    init() {
           document.querySelector("#insert_importo").addEventListener('click', () => {
              const valori = {
                 codice: document.querySelector("#codice").value,
                 targa: document.querySelector("#targa").value,
                 importo: document.querySelector("#importo").value
              }
              document.querySelector("#codice").value = "";
              document.querySelector("#targa").value = "";
              document.querySelector("#importo").value = "";
              this.middleware.insert_importo(valori, valori.targa);
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
     }
     
  let presenter;
  window.addEventListener('load', () => {
     presenter = new Presenter();
  })