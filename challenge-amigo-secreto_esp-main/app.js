//Fucionalidades:
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let ListaAmigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo'); // obtener valor del input

    if (inputNombre.value.trim() === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    } else {
        ListaAmigos.push(inputNombre.value.trim()); // guardar nombre con push, su funcionalidad es agregar al final de la lista (array)
        inputNombre.value = ''; 
        actualizarLista();
        LimpiarCaja();
        console.log(ListaAmigos);
    }
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < ListaAmigos.length; i++) // recorrer el array 
    {
        let li = document.createElement('li'); // crear elemento li
        li.textContent = ListaAmigos[i]; // asignar el nombre del amigo al contenido de li
        listaAmigos.appendChild(li); // agregar li a la lista ul
    // añadir los nombres en la app en un listado (elemento ul)
    }

function LimpiarCaja() {
    document.getElementById('amigo').value = '';
}
}
