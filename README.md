# COFFEE QUEEN ☕

## Índice

- [1. Coffee Queen](##1-coffee-queen)
- [2. Historias de Usuario](#2-historias-de-usuario)
- [3. Proceso y decisiones de Diseño](#3-proceso-de-decisiones-y-diseño)
- [4. ¿Cómo Utilizar la plataforma?](#4-¿cómo-utilizar-la-plataforma?)
- [6. Testeos](#6-testeos)
- [7. Auditoría Lighthouse](#7-auditoría-lighthouse)
- [5. Desarrolladoras](#5-desarrolladoras)
- [8. Enlace](#8-enlace)
- [9. Checklist](#9-checklist)

## 1. Coffee Queen ☕

![logo1.png](https://github.com/victoria-ancalaf/Coffee-Queen/blob/master/src/img/logo1.png)

**Coffee Queen** es una empresa familiar, donde todo el equipo se esfuerza por ofrecer una amplia variedad de café gourmet, espresso y pasteles. Formados en repostería francesa e inspirados en los sabores asiáticos, Coffee Queen espera traerle lo mejor de ambos mundos.

Con el objetivo de que cada secuencia de atención al cliente se desarrolle de forma óptima, se propone una Progressive Web App **(PWA)** diseñada para el uso interno del personal. Esta interfaz simple y amigable, permitirá tomar los pedidos desde una tablet, y enviarlos a la cocina para que los alimentos se preparen ordenada y eficientemente.

## 2. Historias de Usuario 👥

**Historia de usuario 1 - Mesero/a debe poder tomar pedido de cliente**
Yo como mesero quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

**Criterios de aceptación**
_Lo que debe ocurrir para que se satisfagan las necesidades del usuario)_

Anotar nombre de cliente.
Agregar productos al pedido.
Eliminar productos.
Ver resumen y el total de la compra.
Enviar pedido a cocina (guardar en alguna base de datos).
Se ve y funciona bien en una tablet.

**Definición de terminado**
_Lo acordado que debe ocurrir para decir que la historia está terminada_

Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).

**Historia de usuario 2 - Jefe de cocina debe ver los pedidos**
Yo como jefe de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a los meseros que un pedido está listo para servirlo a un cliente.

**Criterios de aceptación**
Ver los pedidos ordenados según se van haciendo.
Marcar los pedidos que se han preparado y están listos para servirse.
Ver el tiempo que tomó preparar el pedido desde que llegó hasta que se marcó como completado.

**Definición de terminado**
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).

**Historia de usuario 3 - Mesero debe ver pedidos listos para servir**
Yo como mesero quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

**Criterios de aceptación**
Ver listado de pedido listos para servir.
Marcar pedidos que han sido entregados.

**Definición de terminado**
Debes haber recibido code review de al menos una compañera.
Haces test unitarios y, además, has testeado tu producto manualmente.
Hiciste tests de usabilidad e incorporaste el feedback del usuario.
Desplegaste tu aplicación y has etiquetado tu versión (git tag).
Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.

## 3. Procesos de decisiones de Diseño 🔧

La app fue diseñada pensando en satisfacer las necesidades del personal interno de Coffe Queen. Ellos necesitan una interfaz intuitiva y amigable para tomar los pedidos de los clientes y mandarlos a la cocina. Como la aplicación es de uso exclusivo del personal, consideramos que no era necesario incluir imágenes de los productos, ya que el personal los conoce. Se optó por un diseño simple, pero conservando la paleta de colores del restaurante.

![paleta de colores](https://github.com/victoria-ancalaf/Coffee-Queen/blob/master/src/img/imgReadme/paleta-colores.jpeg)

### 3.1 Prototipo de Baja Fidelidad ✒️

![prototipo de baja fidelidad](https://github.com/victoria-ancalaf/Coffee-Queen/blob/master/src/img/imgReadme/Prot-baja.PNG)

### 3.2 Prototipo de Alta Fidelidad 🛠️

![prototipo de alta fidelidad](https://github.com/victoria-ancalaf/Coffee-Queen/blob/master/src/img/imgReadme/Figma-CQ.PNG)

## 4. ¿Cómo Utilizar la plataforma? 🤓💻

El uso de la plataforma es simple, en la primera pantalla se muestra el logo de Coffee Queen, junto con el botón de ingreso para hacer uso de la aplicación. En la segunda pantalla podemos encontrar 2 íconos que funcionan como botones y que corresponden a las principales áreas de la cafetería.

El primer botón nos lleva a la pantalla donde se muestra las bebidas y los pasteles que ofrece Coffe Queen. En esta sección la mesera tomará el nombre, número de mesa asignado y la orden del cliente; para luego ser enviados a la cocina, donde serán preparados por orden de llegada. En esta área la mesera tambien puede editar y/o cancelar el pedido.

El segundo botón nos lleva a la pantalla de la cocina, en esta sección se muestran las órdenes ingresadas por las meseras donde se indica la hora de ingreso del pedido, un cronómetro que mide el tiempo que se demora en prepararse. Las órdenes más antiguas se muestran al principio y las que recién van llegando quedan al final.
Cuando el personal de cocina quiere tomar una orden, debe presionar el botón PREPARAR, para empezar a preparar el pedido; luego automaticamente el cronómetro se ejecutará tomando el tiempo de preparación. 

Una vez que la orden esté lista para ser entregada al cliente; se debe presionar el botón TERMINADO, donde el cronómetro se detendrá, el pedido desaparecerá de la pantalla cocina y se mostrará en la pantalla lista de pedidos para que el mesero sepa que está terminado y pueda ser servido al cliente.

## 5. Testeos ⚙️

## 7. Auditoría Lighthouse 🔩

![lighthouse.png](https://github.com/victoria-ancalaf/Coffee-Queen/blob/master/src/img/imgReadme/lighthouse.PNG)

## 5. Autoras ❤️

- **Victoria Ancalaf** - [victoria-ancalaf](https://github.com/victoria-ancalaf)
- **Pamela Barboza** - [PamelaBarboza](https://github.com/PamelaBarboza)
- **Jeniffer Genoves** - [JenifferGenoves](https://github.com/JenifferGenoves)

## 6. Enlace 💻

Te invitamos a conocer Coffee Queen [LinkCoffeeQueen](https://coffe-queen.web.app/)

### Nota para programadores

- Para clonar archivo ingresar a : <https://github.com/victoria-ancalaf/Coffee-Queen>
- Da clic en Fork, luego en copiar con botón Clonar o descargar.
- Ingresar a Terminal del computador, luego acceder a la carpeta donde guardarás tu repositorio y digitar: git clone

### Construido con 🖇️

- [Reactjs](https://es.reactjs.org/) - El framework web usado
- [Firebase](https://firebase.google.com/) - Plataforma para el desarrollo de App web y móvil

## 9. Checklist 🍺😊

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
* [ ] `props`
* [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
* [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
* [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
* [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [ ] [React Router.](https://reacttraining.com/react-router/web)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.
