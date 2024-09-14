Aquí tienes el texto convertido a formato Markdown:

## HW-01 - UX/UI Fundamentals

### INSTRUCCIONES

**Habilidades y competencias que desarrollarás**:
- Aplicación de Principios UX/UI en maquetado.
- Maquetado de componentes.

Iniciaremos el plan de desarrollo de nuestra aplicación Frontend aplicando los conceptos aprendidos sobre fundamentos UX/UI y maquetando los componentes que utilizaremos en nuestra aplicación. Para ello te proponemos las siguientes actividades:

### ACTIVIDAD 01

Realizar una búsqueda de referencia de 5 a 10 sitios web o aplicaciones de e-commerce destacados por su diseño y experiencia de usuario. Para ello crea un tablero de inspiración (puedes utilizar sitios como Pinterest, Miro, o el soporte que te sea más conveniente). Guarda en este trabajo todos los elementos que deseas utilizar: imágenes, tipografías, diseños, entre otros.

### ACTIVIDAD 02

Identifica las páginas que estarán presentes en tu aplicación. Intenta recrear lo más detalladamente posible la historia del usuario dentro de la aplicación para tener presentes las vistas que desarrollarás.

### ACTIVIDAD 03

Diseña un diagrama de flujo que represente el "happy path" del usuario para cada uno de estos escenarios, desde el inicio hasta la acción final deseada(realizar la compra). Para esto puedes apoyarte en herramientas como Draw.io, Lucidchart, etc.

### EXTRA CREDIT

Trasladar los wireframes desarrollados a Figma, detallando las interfaces con elementos de diseño seleccionados en la etapa de búsqueda de referencias visuales. Esta última tarea extra puede demandar mucho tiempo, especialmente si es la primera vez que trabajas con Figma. No te preocupes si no logras completar el wireframe completo, lo importante es que puedas interactuar con Figma y las herramientas que ofrece para este tipo de tareas.

¡Bien hecho!

### TIPS

Es muy importante que dediques el tiempo a realizar esta primer actividad. Te servirá para tener una primer idea de diseño y de flujo dentro de la aplicación al momento de desarrollar. Sin dudas será preferible tener estas ideas previamente en lugar de pensarlas sobre el desarrollo.

## HW02 - React & TypeScript

### INSTRUCCIONES

**Habilidades y competencias que desarrollarás**:
- Creación de interfaces con Typescript.
- Configuración de aplicación de Backend.

En esta actividad daremos un paso muy importante en cualquier desarrollo de Frontend: reconocer y analizar los datos que la aplicación de Backend nos proveerá para trabajar. Para eso realizaremos los siguientes pasos:

### ACTIVIDAD 01

Iniciar nuestra aplicación de Backend. La misma está desarrollada con TypeORM, Express, Postgres: El mismo stack de backend que trabajaste en el módulo anterior. Así que lo único que debemos hacer en este punto es crear localmente una Base de Datos de postgres y preparar el archivo con las variables de entorno correspondientes.

### ACTIVIDAD 02

Utilizar Insomnia o Postman para hacer solicitudes GET al endpoint de productos del backend.

### ACTIVIDAD 03

Observar y documentar la estructura de la respuesta, prestando especial atención a los tipos de datos y la estructura de los objetos (por ejemplo, campos como id, nombre, precio, descripción, stock, etcétera).

### ACTIVIDAD 04

Definir una o varias interfaces TypeScript en un archivo.ts que representen la estructura de la respuesta del producto y cualquier subestructura relevante (por ejemplo, categorías o imágenes).

## HW03 - NEXTJS FUNDAMENTALS

### INSTRUCCIONES

**Habilidades y competencias que desarrollarás**:
- Inicialización de un proyecto con NextJS

### ACTIVIDAD 01

Inicializar el proyecto dentro de nuestro template utilizando el comando correspondiente.

### ACTIVIDAD 02

Crear la primeras página de Home. Por el momento no debemos preocuparnos por los estilos en profundidad o el enrutado de la página, lo veremos en las próximas clases.

### ACTIVIDAD 03

A modo de práctica antes de tener nuestros datos del backend, declara un arreglo con datos de productos falsos (puedes tomar como idea los que envía la aplicación de backend). Mapea este arreglo y renderiza para cada elemento un componente Card que también deberás implementar.

### ACTIVIDAD 04

Intenta modularizar tu código y llevar el módulo de componente Card a un lugar adecuado.

### ACTIVIDAD 05

Presta especial atención a las props que debe recibir el componente Card para mostrar la información e implementa una interfaz a la que dichas props deban ajustarse

¡BIEN HECHO! 🎉

### TIP

Puedes mostrar en el componente Card los datos que prefieras. Solamente recuerda implementar la interfaz correspondiente para los datos necesarios.

## HW04 - NextJS Routing

### HOMEWORK

**Habilidades y competencias a desarrollar**:
- Enrutado de aplicación de Next.
- Configuración del layout.

### ACTIVIDAD 01

En esta actividad trabajeremos sobre el enrutado de nuestra aplicación. Nuestro objetivo será desarrollar y enrutar las siguientes páginas:
- Landing
- Home
- Detalle de Producto (únicamente maquetación, sin funcionalidad). Para esta ruta ten en cuenta la obtención del id del producto.
- Dashboard de Usuario (únicamente maquetación, sin funcionalidad)
- Vista de Carrito de compras (únicamente maquetación, sin funcionalidad)

### ACTIVIDAD 02

Además, deberás configurar correctamente el layout de la aplicación, de manera tal que a lo largo de toda la navegación siempre estén presentes:
- Navbar
- Footer

### ACTIVIDAD 03

Finalmente, te presentamos el desafío de investigar por tu cuenta cómo implementar una página de "404 - Not found" en caso de que la navegación sea hacia una página inexistente.

¡Bien hecho! 🎉

### TIP

Por el momento ocúpate únicamente de la maquetación. Luego llegará el momento de profundizar en los estilos de cada vista y componente.

## HW05 - NextJS & Tailwind CSS

### HOMEWORK

**Habilidades y competencias a desarrollar**:
- Aplicación de estilos con Tailwind UI.

### ACTIVIDAD 01

En esta actividad haremos, finalmente, lo que estábamos esperando: aplicación de estilos con Tailwind. Simplemente explora el Framework y aprovecha para tu proyecto todas las herramientas que desees aplicar a tu desarrollo. No tendrás límites en este sentido. Recuerda mantener la coherencia en el diseño, seleccionar una paleta de colores, pensar en la disposición de los elementos, y demás puntos vistos en la clase de UX/UI.

¡Bien hecho!

### TIPs

No hay límites en cuanto a las opciones que quieras explorar de Tailwind. Trabaja codo a codo con la documentación, ya que será tu mejor aliada en esta actividad. Del mismo modo, si deseas implementar alguna otra tecnología de estilos por tu cuenta lo puedes hacer. Solamente ten en cuenta que serás el/la único/a responsable por cualquier problema de configuración o compatibilidad que esta nueva tecnología pueda provocarle a tu proyecto... ¡Mucha atención!

## HW06 - NextJS Components

### INSTRUCCIONES

**Habilidades y competencias que desarrollarás**:
- Implementación de componentes del lado del cliente.

Ten presente que, un típico caso de "Client Component" es el usado en los formularios, ya que los eventos (change, submit, etc) ocurren del lado del cliente (Recuerda a nuestra vieja amiga DOM API). Dicho todo esto, iniciemos:

### ACTIVIDAD 01

Desarrollar una página de Login. Esta deberá contener un formulario correspondiente para dicha funcionalidad de inicio de sesión. Asegúrate de validar los campos ingresados por el usuario y preparar los eventos correspondientes AÚN SIN INTERACCIÓN CON EL BACKEND. Puedes completar el handler de submit con un simple console.log("Submit exitoso") por el momento.

### ACTIVIDAD 02

Desarrollar una página de Registro. Esta deberá contener un formulario correspondiente para dicha funcionalidad de registro de usuario. Asegúrate de validar los campos ingresados por el usuario y preparar los eventos correspondientes AÚN SIN INTERACCIÓN CON EL BACKEND. Puedes completar el handler de submit con un simple console.log("Submit exitoso") por el momento.

¡Bien hecho!

### TIPS

Que el formulario debe ser un componente de tipo cliente, no significa que toda la página deba serlo también. Siempre intenta que los componentes de tipo cliente sean pequeños, utilizándolos únicamente cuando es necesario y bien encapsulados. Nuestro objetivo es reducir al mínimo indispensable su uso.

## HW07 - Data Fetching

### INSTRUCCIONES

**Habilidades y competencias a desarrollar**:
- Llevar a cabo peticiones HTTP desde componentes en NextJS.

En esta actividad empezaremos a realizar nuestras primeras peticiones a la aplicación de Backend. Por el momento nos centraremos en las siguientes:
- Petición del listado de todos los productos
- Petición del detalle de un producto en particular
Dejaremos las peticiones de autenticación para próximas clases

### ACTIVIDAD 01

En la página que hayas desarrollado para presentar la grilla de productos, realiza la petición correspondiente para la obtención del listado de productos a mostrar. Luego deberás realizar un mapeo de dicho listado para renderizar la Card de cada producto.

### ACTIVIDAD 02

En la página que hayas desarrollado para la vista del detalle del producto, realiza la petición correspondiente para la obtención de la información del producto en cuestión. Luego asegúrate de que dicha información se muestre en cada componente que hayas creado para tal fin.

¡Bien hecho! 🎉

### TIPs

Recuerda que puedes aprovechar para corregir o retomar alguna parte de tu aplicación que no haya quedado completa hasta este punto. Las próximas actividades finales serán considerablemente más desafiantes así que intenta tener tu trabajo al día.

## HW08 - Auth

### HOMEWORK

**Habilidades y competencias ha desarrollar**:
- Manejo de Autenticación con JWT en NextJS.

Para esta actividad terminaremos de implementar el flujo completo de autenticación en nuestro proyecto integrador, como así también trabajaremos sobre todas las páginas y componentes donde impacta este flujo. Esta actividad es bastante extensa y tendrás muchos puntos a cubrir, así que te dejamos una guía del orden en el cual encarar cada una de las tareas:

### ACTIVIDAD 01

Completar el formulario de registro de tal manera que, ahora sí, realice la petición correspondiente para el registro de usuario. Recuerda informar adecuadamente al usuario sobre el resultado de la operación.

### ACTIVIDAD 02

Completar el formulario de login de tal manera que, ahora sí, realice la petición correspondiente para inicio de sesión del usuario. Recuerda informar adecuadamente al usuario sobre el resultado de la operación. Además, aquí debes asegurarte de persistir la sesión del usuario almacenando, en el lugar correspondiente, el token obtenido.

### ACTIVIDAD 03

Implementa componentes de renderizado condicional donde sea necesario. Por ejemplo: Si mi NavBar tiene un botón de "Sign In / Sign Up", al estar la sesión iniciada debería verse un botón de "Mi Account" o un Avatar de usuario. Puedes implementar este condicional en todos los componentes que creas necesario.

### ACTIVIDAD 04

Condicionar en su totalidad la funcionalidad de agregar productos al carrito de compras para que se encuentre limitada únicamente al usuario autenticado. Es decir, si no tengo una sesión activa, no debería poder agregar productos al carrito de ninguna manera o visualizar el mismo.

### ACTIVIDAD 05

Trabajar sobre la vista de Dashboard de usuario. En la misma deben poder visualizarse los datos de usuario obtenidos y persistidos al iniciar sesión.

### ACTIVIDAD 06

Mostrar ya sea en Dashboard de usuario, o en otra página para tal fin si así lo prefieres, el listado de compras realizadas por el usuario en cuestión. Ten en cuenta que debe mostrarse algún componente con un mensaje adecuado en caso de que el usuario no haya realizado ninguna compra aún.

## HW09 - Vercel

### INSTRUCCIONES

**Habilidades y competencias que desarrollarás**:
- Finalización del Proyecto Integrador.
- Despliegue de Aplicación de NextJS en Vercel.

Esta será la última actividad planteada para el proyecto integrador. ¡Comencemos!

### ACTIVIDAD 01

Completar el flujo completo de compra en la aplicación. Para ello primero debes asegurarte de que:
- Los productos seleccionados se agregan correctamente al carrito de compras.
- No existirá la posibilidad de agregar productos y hacer compras por parte de usuarios que no tengan una sesión activa.

### ACTIVIDAD 02

Implementa en la vista de carrito de compras un botón que al ser presionado despachará la compra del usuario para ser registrada.

### ACTIVIDAD 03

Recuerda enviar en la petición el token correspondiente al usuario y los ids de los productos seleccionados de la forma que corresponda para cada uno de estos datos.

### ACTIVIDAD 04

Informa al usuario correctamente sobre el resultado de la operación.

### ACTIVIDAD 05

Luego de que la compra ha sido finalizada con éxito, el carrito de compras debe limpiarse y quedar listo para iniciar una nueva compra.

### ACTIVIDAD 06

Asegúrate de que la compra realizada se pueda visualizar en el historial de compras del usuario.

### ACTIVIDAD 07

Finalmente, una vez que hayas alcanzado a completar todas las consignas, realiza el despliegue de la aplicación en Vercel siguiendo los pasos descritos en el material de la clase.

¡Bien hecho! 🎉 ¡Has completado tu Proyecto Integrador!

## HW10 - Next.js - SEO & Optimization

## HW11 - Frontend Testing

## HW12 - React Styles Advanced

## HW13 - Intro to Microfrontend

## HW14 - JavaScript Avanzado III

### Ejercicio: Closure de Contador en JavaScript

**Requerimiento:**  
Implementar una función en JavaScript llamada `contador` que devuelva otra función. La función devuelta debe comportarse como un contador, incrementando su valor cada vez que es invocada.

**Caso de uso y expectativas:**  
Supongamos que estás desarrollando una aplicación de seguimiento de asistencias para una conferencia. Quieres implementar un contador que registre cuántas personas han asistido a diferentes sesiones de la conferencia.

**Valores de prueba y resultados esperados:**

- **Caso de prueba 1:**  
  Llamar a la función `contador` una vez y luego invocar la función devuelta dos veces.  
  **Resultado esperado:** 1 en la primera invocación, 2 en la segunda invocación.

- **Caso de prueba 2:**  
  Llamar a la función `contador` dos veces para crear dos contadores independientes y luego invocar las funciones devueltas varias veces.  
  **Resultado esperado:** 1 y 1 en la primera invocación de cada contador, 2 y 2 en la segunda invocación de cada contador, y así sucesivamente.

- **Caso de prueba 3:**  
  Crear múltiples contadores utilizando la función `contador` y verificar si sus estados se mantienen independientes entre sí.  
  **Resultado esperado:** Cada contador debería mantener su propio estado interno y no debería afectar a los otros contadores.

- **Caso de prueba 4:**  
  Verificar que el contador devuelto por la función `contador` no sea accesible desde fuera del contexto del closure.  
  **Resultado esperado:** El contador debería estar encapsulado dentro del closure y su valor no debería modificarse desde fuera del contexto del closure.

### Ejercicio: Gestor de Carreras

**Requerimiento:**  
Implementar una función en JavaScript llamada `carrera` que administre el progreso de una carrera. La función `carrera` debe recibir el nombre de la carrera y devolver un objeto con dos métodos: `corredorNuevo` y `verCorredores`.

- **corredorNuevo:** Debe tomar el nombre de un corredor y su tiempo de llegada, y agregarlos a la lista de corredores de la carrera.

- **verCorredores:** Debe devolver la lista de corredores con sus respectivos tiempos de llegada ordenados por el tiempo de llegada ascendente.

**Caso de uso y expectativas:**  
Supongamos que estás desarrollando una aplicación para gestionar una carrera de maratón. Quieres implementar una función que permita registrar a los corredores y ver su progreso en la carrera.

**Valores de prueba y resultados esperados:**

- **Caso de prueba 1:**  
  Registrar tres corredores con sus tiempos de llegada.  
  **Resultado esperado:** Una lista de corredores ordenada por tiempo de llegada ascendente.

- **Caso de prueba 2:**  
  Registrar varios corredores con tiempos de llegada aleatorios.  
  **Resultado esperado:** Una lista de corredores ordenada por tiempo de llegada ascendente.

- **Caso de prueba 3:**  
  Registrar un corredor sin especificar su tiempo de llegada.  
  **Resultado esperado:** Un mensaje de error indicando que se requiere el tiempo de llegada del corredor.

### Ejercicio: Gestor de Almacén con Inventario

**Requerimiento:**  
Desarrollar una función en JavaScript llamada `almacen` que administre el inventario de un almacén. La función `almacen` debe aceptar un objeto inicial de inventario y devolver un conjunto de métodos para manipular dicho inventario.

**Métodos requeridos:**

- **agregarProducto:** Agrega un nuevo producto al inventario o incrementa la cantidad si el producto ya existe.

- **eliminarProducto:** Elimina un producto del inventario.

- **verInventario:** Devuelve una lista de productos en el inventario junto con sus cantidades.

**Caso de uso y expectativas:**  
Supongamos que estás desarrollando un sistema de gestión de inventario para un almacén. Quieres implementar una función que permita agregar, eliminar y ver productos en el inventario.

**Valores de prueba y resultados esperados:**

- **Caso de prueba 1:**  
  Agregar dos productos al inventario: manzanas (10 unidades) y naranjas (5 unidades).  
  Eliminar el producto de naranjas.  
  **Resultado esperado:** Una lista de productos en el inventario con solo las manzanas y su cantidad.

- **Caso de prueba 2:**  
  Agregar tres productos al inventario: leche (3 unidades), huevos (12 unidades) y pan (2 unidades).  
  Incrementar la cantidad de huevos en 6 unidades.  
  **Resultado esperado:** Una lista de productos en el inventario con las cantidades actualizadas.

- **Caso de prueba 3:**  
  Intentar eliminar un producto que no está en el inventario.  
  **Resultado esperado:** Un mensaje indicando que el producto no existe en el inventario.

### Ejercicio: Sistema de Gestión de Reservas de Vuelos

**Requerimiento:**  
Desarrollar un sistema en JavaScript para gestionar las reservas de vuelos. El sistema debe permitir a los usuarios reservar asientos en diferentes vuelos y también cancelar sus reservas. Además, debe permitir la asignación automática de asientos si el usuario no elige un asiento específico al hacer la reserva.

**Caso de uso y expectativas:**  
Supongamos que estás creando un sistema de reservas avanzado para una aerolínea. Quieres implementar un sistema que permita a los usuarios reservar asientos en vuelos disponibles, cancelar sus reservas y, en caso de no elegir un asiento específico, asignar automáticamente un asiento disponible al hacer la reserva.

**Valores de prueba y resultados esperados:**

- **Caso de prueba 1:**  
  Reservar un asiento en un vuelo con un número específico de asientos disponibles.  
  **Resultado esperado:** Confirmación de reserva exitosa y disminución del número de asientos disponibles.

- **Caso de prueba 2:**  
  Intentar reservar un asiento en un vuelo que ya está completo.  
  **Resultado esperado:** Un mensaje indicando que el vuelo está completo y no se puede reservar más asientos.

- **Caso de prueba 3:**  
  Cancelar una reserva existente en un vuelo.  
  **Resultado esperado:** Confirmación de cancelación de reserva exitosa y aumento del número de asientos disponibles.

- **Caso de prueba 4:**  
  Reservar un asiento sin especificar un número de asiento y permitir que el sistema asigne automáticamente un asiento disponible.  
  **Resultado esperado:** Confirmación de reserva exitosa con el número de asiento asignado automáticamente.

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/119523/2db1bd3c-4899-46ac-8c41-0733ad3becd9/paste.txt
