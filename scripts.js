/* Eventos */

/* 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página. */

// Primero obtenemos un array con todas las <a> del documento
let arrayDeAs = document.getElementsByTagName("a");

// Ahora lo recorremos y les cambiamos el atributo href para que no enlacen a ninguna parte
for (let i = 0; i < arrayDeAs.length; i++) {
    arrayDeAs[i].href = "#";
}


/* 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento: */
/* 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic. */

// Primero obtenemos un array con todas las <img> del documento
let imagenes = document.getElementsByTagName("img");

// Les damos la propiedad de estar "escuchando" para que cuando se haga click se llame a la funcion que hemos definido
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function () {
        imagenes[i].src = "./assets/magic-1.gif";
    });
}


/* 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera. */
let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.background = "black";
    parrafos[i].style.color = "yellow";
}


/* 2.3 Bloques de article o section: Cambia el color de fondo. */

let articulos = document.getElementsByTagName("article");

for (let i = 0; i < articulos.length; i++) {
    articulos[i].style.background = "blue";
}

/**HASTA AQUÍ OK */


/* 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor. */
/* 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif. */

// Vamos a guardar el atributo src de cada imagen en una variable.
// La variable imagenes ya la creamos en un punto anterior
const imgOriginal = [];
for (let i = 0; i < imagenes.length; i++) {
    imgOriginal[i] = imagenes[i].src;
}

for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].addEventListener("mouseover", function () {
        imagenes[i].src = "./assets/abracadabra.gif";
    });

    imagenes[i].addEventListener("mouseout", function () {
        imagenes[i].src = imgOriginal[i]; // No funciona porque envía fuera de local
        //imagenes[i].src = "index_files/IMG_0545.jpg"; // A capón sí funciona
    });
}



/* 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera. */

// Ya tenemos un array parrafos
const colorOriginal = [];
for (let i = 0; i < parrafos.length; i++) {
    colorOriginal[i] = parrafos[i].style.color;
}

for (let i = 0; i < parrafos.length; i++) {

    parrafos[i].addEventListener("mouseover", function () {
        parrafos[i].style.color = "green";
    });

    parrafos[i].addEventListener("mouseout", function () {
        parrafos[i].style.color = colorOriginal[i];
    });
}


/* 3.3 Bloques de article o section: Color de fondo distinto al de párrafo. */

const fondoOriginal = [];
for (let i = 0; i < articulos.length; i++) {
    fondoOriginal[i] = articulos[i].style.background;
}

for (let i = 0; i < articulos.length; i++) {

    articulos[i].addEventListener("mouseover", function () {
        articulos[i].style.background = "green";
    });

    articulos[i].addEventListener("mouseout", function () {
        articulos[i].style.background = fondoOriginal[i];
    });
}


/* 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    /* código misterioso 
}*/

/*console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green' */






/* 5. Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores. */






/* 6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores. */




