#  B-Sales

## ¿Cómo empezar?
```
npm install
```
## ¿Cómo ejecutar la aplicación en desarrollo?
```
npm run dev
```
## ¿Cómo ejecutar la aplicación en producción?
```
npm run start
```

## Proceso

 Durante el desarrollo de la aplicacion se implemento la libreria mySql paraconectarse a la base de datos, seguiendo buenas practicas las credenciales no quedan expuesta, estas se ingresan mediante variables de entorno en el servidor por lo cual se expone, posterior se creo un directorio models donde se creo todo los modelos de la base de datos y metodos para obtener los datos necesarios, estos son consumidos de los controladores respectivos que estan asociados a los endPoint, el apiRes que se utilizo fue creado por EXPRESS.JS Y NODE.JS.
 
 Se utilizó 2 REPOS para el backend, uno en gitHub para poder visualizar los cambios por su lado y el otro en Heroku con lo cual pude injertar las variables de entorno con el CLI HEROKU.
 
 En primera instancia tuve la idea era subir todo a Heroku pero decidí finalmente subir el front a gitPage.
 
 Los controles de versiones fue utilizado con sourceThree aunque en el backend utilice gitFlow no hice un release para esta versión solamente los features respectivos.

 Se utilice sweetAlert para notificar de las acciones del usuario adicional se creó un carrito de compra que guarda en el localStorage el producto, no se implementó el borrar el producto ni agregar más cantidad del mismo, de ser necesario en los requisitos se puede implementar.
 
 De igual forma el carrito queda hasta la seleccion solamente debido a que no se indico si deberia hacer el proceso completo y modificando los datos en el backend.


