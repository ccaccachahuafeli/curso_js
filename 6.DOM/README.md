# DOM-Document Object Modal
Modelo de Documento de Objeto
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentosXML YHTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquico, facilmente manipulado.
El DOM convierte todo el contenido del archivo HMTL en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo<h1>
    <p class="parrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>

```
- **mi archivo script.js**
```javascript
document:{
    Element:body,
    Attr:null,
    Child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            text:"titulo",
            Child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            text:"este es el descripcion de mi pagina",
            Child:null
        },
        {
            Element:ul,
            Attr:null,
            text:null,
            Child:[
                {
                   Element:li,
                   Attr:null,
                   text:"primer elemento",
                   Child:null 
                },
                {
                    Element:li,
                    Attr:null,
                    text:"segundo elemento",
                    Child:null 
                },
                {
                    Element:li,
                    Attr:null,
                    text:"tercero elemento",
                    Child:null 
                }
            ]
        }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de javscript, nos ofrece un `API`(Aplication Programming Interface- interfaz de programacion de aplicacion).
## SELECTORES
Los selectores nos permite obtener o capturar una o varias `html` incluyendo sus atributos, contenido e hijos si los tuviera.
los selectores que podemos utlizar son variados podemos capturar etiqueta a travez de sus atributos como de el nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`, son los siguientes:
- **getElementById** - devuelve un elemento(etiqueta)que tenga un id especifico:
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marca `markup`(etiquetas que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La primera tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologia de markado de texto `markdown` 