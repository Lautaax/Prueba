
const personal =[ 
{"Nombre" : "Marcelo","Apellido" : "Velez","Edad" : 25,"Area" : "Administración", "Correo" : "marceloVelez@hotmail.com"},
{"Nombre" : "Alberto","Apellido": "Unbertini","Edad" : 36,"Area" : "RRHH","Correo" : "albert.unbert@hotmail.com"},
{"Nombre":"Isidora","Apellido" : "Gutierrez","Edad" : 33,"Area" : "Desarrollador","Correo" : "isi_gutie@gmail.cl"},
{"Nombre" :"Sebastian","Apellido" : "Jimenez","Edad" : 21,"Area" : "No Asignada","Correo" :"s.jimenez@gmail.cl"},
{"Nombre" : "Manuel","Apellido" : "Osorio","Edad" : 19,"Area" :"Desarrollador","Correo" : "manu007@outlook.com"},
{"Nombre" :"Alonso","Apellido" : "Villa","Edad" : 47,"Area" : "Product Manager","Correo" :"alvilla@hotmail.com"}

]
;

personal.forEach(element => console.log(element));

const foo = personal.map(function(bar){
    return '<p>'+bar.Nombre+'  '+bar.Apellido+'   '+bar.Edad+'    '+bar.Area+'    '+bar.Correo+' </p>'
  })
  document.getElementById("foo").innerHTML = foo;
