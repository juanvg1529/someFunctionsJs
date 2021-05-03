//  let nombre = null;
//  if (nombre === null) {
//      alert('el nombre no puede estar vacio');
//  } else {
//      console.log(`el ingreso de datos se ha hecho con exito`);
//  }

//  function iterar(n, accion) {
//      for (let i = 0; i <= n; i++) {
//          accion(i);
//      }
//  }
//  let etiquetas = [];
//  iterar(5, function(i) {
//      etiquetas.push("Etiqueta " + i);
//  });


//  /*class */
//  function rango(from, to) {

//      for (let i = from; i <= to; i++) {
//          console.log(`valor ${i} agregado al array`);
//          let arreglo;
//          arreglo.push(i);
//      }
//      return arreglo;
//  }

//  //sumo secuencialmente

//  function sumar(lista) {
//      let total = 0;
//      for (let i = total; i < lista.length; i++) {
//          console.log(`El valor actual es ${total} + ${lista}`);
//          total = total + lista[i];
//      }
//  }



 //**Repaso with fufu jeje */


//  let fufu= [];
// //  console.log(fufu.length);
// // fufu.push(Math.random(0,10));
// console.log('1----------------------------------');
// for(let i=0; i<11;i++)
// {
//     fufu.push(Math.floor(Math.random() * (10)) );

// }
//  console.log(fufu);
//  //crear un array nuevo con los 3 primeros numeros de fufu
//  console.log('2--------------------------');

// let otrofufu=[];
//  for(let i=0;i<3;i++){
//      otrofufu.push(fufu[i]);

//  }
//  console.log(otrofufu);
// //al nuevo array, multiplicar todo por 2
//  let anotherFufu 

 
 /*Challenge*/
 let people = [
    {
      nombre: "Jhony",
      asistente: null,
      seccion: "gold",
      rol: "speaker"
    },
    {
      nombre: "Manuel",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Fran",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Cintia",
      seccion: "platino",
      rol: "viewer"
    },
    {
      nombre: "Marcos",
      asistente: null,
      seccion: "gold",
      rol: "viewer"
    },
    {
      nombre: "Victoria",
      asistente: true,
      seccion: "platino",
      rol: "speaker"
    }
  ];
  

  function atendes(listOfPeople) {
     
    return listOfPeople.filter(element => element.asistente);   
    };
    let totalAtendes = atendes(people);
   console.log(totalAtendes.length); // debe ser 3


   
   console.log(atendesNames(totalAtendes));

   function atendesv2(listOfPeople)
   {
    let counter;
       for(let i = 0; i>listOfPeople.length;i++)
       {
           if(listOfPeople[i].asistente)
           {
               
               counter=+1;
           
            
        }}
   return counter
    }
    console.log('2---------------------------');

   function atendesNames(listOfPeople){
       return listOfPeople.filter(element=>
           element.asistente
       );
   }
   console.log('3------------');

   function platine(listOfPeople){
       return listOfPeople.filter(element =>
        element.seccion==='platino')
   }
   console.log(platine(people));

   function platinev2(listOfPeople){
       let PlatinePeople =[];
       for(let i = 0; i<listOfPeople.length;i++){
           if(listOfPeople[i].seccion==='platino'){
               PlatinePeople.push(listOfPeople[i])
           }
       }
       return PlatinePeople
   }
   console.log( platinev2(people));
console.log('4-------------------------------');
function peopleFilter(list,filt,rolp){
    return list.filter(element=>
        element[filt]===rolp);
}
let speakers = peopleFilter(people,'rol','speaker');
console.log(speakers);

  