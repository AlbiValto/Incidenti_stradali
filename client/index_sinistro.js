class Presenter {
    constructor() {
       this.init();
       this.middleware = new Middleware();
       this.middleware.select_all(this.refresh);
    }
    init() {
        let cTime = new Date(); 
        document.querySelector("#data").value = cTime.toISOString().split('T')[0];
        document.querySelector("#orario").value = `${cTime.getHours()}:${cTime.getMinutes()}:${cTime.getSeconds()}`;
           document.querySelector("#insert_sinistro1").addEventListener('click', () => {
              const valori = {
                 codice: document.querySelector("#codice").value,
                 luogo: document.querySelector("#luogo").value,
                 data: document.querySelector("#data").value,
                 orario: document.querySelector("#orario").value,
                 feriti: document.querySelector("#feriti").value,
                 morti: document.querySelector("#morti").value, 
              }
              document.querySelector("#codice").value = "";
              document.querySelector("#feriti").value = "";
              document.querySelector("#luogo").value = "";
              let cTime = new Date(); 
              document.querySelector("#data").value = cTime.toISOString().split('T')[0];
              document.querySelector("#orario").value = `${cTime.getHours()}:${cTime.getMinutes()}:${cTime.getSeconds()}`;
              document.querySelector("#morti").value = "";     
              this.middleware.insert_sinistro(valori, valori.codice);   
              this.middleware.select_all(this.refresh);
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