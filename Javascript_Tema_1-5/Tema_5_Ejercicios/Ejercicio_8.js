/* Modificando un texto
Recibiendo el siguiente texto por parámetro a tu función... :

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum
exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis autem vel eum iure reprehenderit qui in ea voluptate velit
esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.*/


//Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: Signos de puntuación: - "." => "," - "," => "" Palabras: -
// "dolor" => "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" => "garlic" - "ipsum" => "onion"




const originalTest = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit 
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
eum fugiat quo voluptas nulla pariatur.`

const modifyText = (text) => {
    // Reemplazar 'lorem' por 'tomato'
    text = text.replace(/lorem/gi, 'tomato'); // se usa "gi" para que coincida mayúsculas y minúsculas
    // Reemplazar 'ipsum' por 'onion'
    text = text.replace(/ipsum/gi, 'onion');
    // Reemplazar 'dolor' por 'potato'
    text = text.replace(/dolor/gi, 'potato');
    // Reemplazar 'labor' por 'cucumber'
    text = text.replace(/labor/gi, 'cucumber');
    // Reemplazar 'consequatur' por 'garlic', asumiendo que también necesita ser reemplazado
    text = text.replace(/consequatur/gi, 'garlic');

    // Eliminar comas
    text = text.replace(/,/g, '');
    // Cambiar puntos por comas
    text = text.replace(/\./g, ',');

    return text;
};

console.log(modifyText(originalTest));


// En el contexto de expresiones regulares en JavaScript, gi es una combinación de dos banderas que se añaden al final de la expresión regular para modificar su comportamiento:
// g: Esta es la bandera de global.Significa que la búsqueda debe realizarse globalmente en toda la cadena de texto, en lugar de detenerse después de la primera coincidencia.
// i: Esta es la bandera de case -insensitive(insensible a mayúsculas / minúsculas).Significa que la búsqueda no debe diferenciar entre letras mayúsculas y minúsculas.
// Por ejemplo, /lorem/i coincidirá con "lorem", "Lorem", "LOREM", etc.
// Cuando se utilizan juntas(gi), indican que la expresión regular debe buscar todas las coincidencias(global) de una manera que no distingue entre mayúsculas y minúsculas