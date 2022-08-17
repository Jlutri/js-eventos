let usuario = document.getElementById("usuario");
usuario.textContent = "usuarios ingresados";
let enviar = document.getElementById("enviar");
let reset = document.getElementById("reset");

let almacenamiento = document.getElementById("almacenamiento");

let agregar_usuario = new Array();
agregar_usuario.push("Juan@gmail.com");
agregar_usuario.push("nico@gmail.com");
agregar_usuario.push("rodrigo@gmail.com");
agregar_usuario.push("agus@gmail.com");
agregar_usuario.push("mica@gmail.com");
agregar_usuario.push("joaquin@gmail.com");
agregar_usuario.push("belen@gmail.com");
agregar_usuario.push("maria@gmail.com");



let usuarios = document.createElement("ul")

document.body.appendChild(usuarios)
function agregar_usuarios(){
for (let i = 0 ; i < agregar_usuarios.length; i++){

    let item = agregar_usuario[1];
    agregar_usuario(item);
}
}
let input = document.getElementById("usuario");
let boton = document.getElementById("enviar");
boton.addEventListener("click",()=>{
   /* console.log("estoy escuchando los clicks")*/
   mostrar_usuario();
})

function mostrar_usuario(){
    if (input.value.trim() !=""){
        usuario(input.value);
        input.value="";
    

}else {
    alert ("usuario no valido")
}
}

agregar_usuarios();









