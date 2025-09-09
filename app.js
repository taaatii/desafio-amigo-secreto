let ListaAmigos = []; // Array para almacenar los nombres de los amigos
let AmigoSeleccionado = '';

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
        console.log(ListaAmigos); //verficar que haya amigos en la lista
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
}
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    // bucle for para recorrer el array amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < ListaAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = ListaAmigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (ListaAmigos.length < 3) {
        alert('Necesitas al menos tres amigos para hacer el sorteo.');
        return;
    }
    let indice = Math.floor(Math.random() * ListaAmigos.length); // Math.random() genera un número aleatorio entre 0 y 1, se multiplica por la longitud del array y se redondea hacia abajo con Math.floor()
    let amigo = ListaAmigos[indice]; // obtener el nombre del amigo seleccionado
    AmigoSeleccionado = amigo;

    console.log('Amigo seleccionado:', amigo); // verificar el amigo seleccionado en la consola
    
    MostrarResultado(amigo);
}
function MostrarResultado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p> Tu amigo secreto es: ${AmigoSeleccionado} </p>`;
}
function LimpiarCaja() {
    document.getElementById('amigo').value = '';
}

