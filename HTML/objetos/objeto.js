const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1]);
//OBJETOS
const persona = {
  name: "Gabriela",
  age: 17,
  isWorking: true,
  cats: ["princesa, miel, manchas"],
  walk: function () {
    //si la funcion retorna void es que no devuelve nada, sino aclara el tipo de dato
    return "estoy cansado";
  },
};
//opcion 1
console.log(persona.name);
//opcion 2
console.log(persona["name"]);
console.log(persona.name.cats[1]);
//cuando estan mostrando/ejecutando una funcion no se pone los parentesis esto no va funcionar
console.log(persona.walk());

persona.age = 20;
console.log(persona.age);
//delete barra las prioridades seleccionadas del objeto
delete persona.age;
