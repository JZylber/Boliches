# All the Night

Para estar *All the Night*, no alcanza con ir a un boliche. Hay que pasar por todos. Para eso, *el Gigoló* va a aprovechar los datos público del gobierno de la ciudad. En particular, los datos sobre todos los *"locales bailables"* (boliches).

## Archivos Base

El tp cuenta con 3 archivos:

- `getData.js`: Tiene la función necesaria (`getData`) para cargar el archivo de datos de la web. Esta toma un único parámetero, *callback*, que es la función a ser llamada cuando se logren conseguir los datos. Esta debe tener un único parámtero que es la data recibida.
- `main.js`: Archivo principal linkeado desde el html. Ya cuenta con el import a `getData.js` y un ejemplo de uso de la función `getData`. Pueden hacer el tp modificando el ejemplo.
- `index.html`: Archivo HTML principal.

**IMPORTANTE:** como hay un llamado a buscar información desde internet, no se puede correr simplemente abriendo el archivo desde un browser, sino usando Live Server. Si no saben que es/como usarlo, pueden acceder a este [link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Consigna

Antes de arrancar, vean los datos que tienen. Es un array de objetos, donde cada objeto representa los datos de un boliche particular. Revisen que atributos tienen.

### Punto 1

Imprimir por consola los **nombres** de los boliches con capacidad de más de 1000 personas. **IMPORTANTE:** Los datos del gobierno de la ciudad son feos, y en vez de darnos un número, nos da un string que tiene la palabra "personas" al final. Por ejemplo, la capacidad de un boliche puede decir "428 personas". Deberían obtener el número de ahí para poder hacer la comparación. Pueden aprovechar que son strings "<número> personas" para sacar el dato.

### Punto 2

Agregarles a todos los objetos un atributo "Habilitado", que se `true` si está habilitado, `false` si no. Están habilitados aquellos que su atributo Estado incluye la palabra "RENOVADO".

### Punto 3

Utilizando la función `prompt`, pedirle al usuario:
- un mínimo de capacidad
- un máximo de capacidad
- si desea filtrar los habilitados

Con esta información, devolver por consola el nombre, dirección (domicilio y número) y capacidad de los boliches que cumplan las características pedidas por el usuario.