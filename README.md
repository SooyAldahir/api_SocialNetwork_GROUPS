# api_SocialNetwork_GROUPS


Este es un proyecto de API desarrollado con Node.js que proporciona funcionalidades para gestionar categorías, productos, proveedores, transacciones y usuarios.

## **Tabla de Contenidos**
- [Tecnologías utilizadas](tecnologías-utilizadas)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
  - [Usuarios](#usuarios)
  - [Grupos](#grupos)
  - [Eventos](#eventos)
- [Ejemplos con Postman](#ejemplos-con-postman)
- [Contribuir](#contribuir)

---

## **Tecnologías utilizadas**

*   Node.js
*   Express
*   MongoDB
*   Mongoose
*   dotenv
*   cors

## Instalación

1.  Clona este repositorio:
    
{
    git clone https://github.com/SooyAldahir/api_SocialNetwork_GROUPS.git
}

2.  Instala las dependencias:
{
    npm install    
}

3.  Crea un archivo .env en la raíz del proyecto y añade la URI de conexión a tu base de datos MongoDB:
{
MONGO_URI = mongodb://127.0.0.1:27017/{tuBaseDeDatos}
}    

## **Estructura del Proyecto**
```
📂 src
├── 📂 models               # Modelos de datos con Mongoose
│ ├── 📄 user.model.js      # Modelo de Usuario
│ ├── 📄 group.model.js     # Modelo de Grupo
│ ├── 📄 event.model.js     # Modelo de Evento
├── 📄 server.js            # Archivo principal que inicia el servidor
├── 📄 .env                 # Variables de entorno (no incluir en el repositorio)
├── 📄 package.json         # Dependencias y configuración del proyecto
```

## Uso

1.  Inicia el servidor:
    
bash
    node server.js

2.  La API estará disponible en http://localhost:3000 (o el puerto que hayas configurado).

## **Rutas de la API**

### **Usuarios**
- **Crear un usuario** (`POST /users`)
    ```json
    {
        "name": "Aldahir Ballina",
        "email": "aldahir.ballina@ulv.edu.mx",
        "groups": [
          "67ca4eb8f791f5b6d2039605", 
          "67cdf9cf6b542d6949c0e320"],
        "events": [
          "67ca559ab8dc1904ab7b7aa5", 
          "67ca5523b8dc1904ab7b7aa3"]
    }
    ```
- **Obtener todos los usuarios** (`GET /users`)
- **Obtener un usuario por ID** (`GET /users/id`)
- **Editar** (`POST /users/id`)
    ```json
    {
        "name": "Aldahir Emmauel Ballina Núñez",
        "email": "aldahir.ballina@ulv.edu.mx",
        "groups": ["
        67ca4eb8f791f5b6d2039605", 
        "67cdf9cf6b542d6949c0e320"],
        "events": [
          "67ca559ab8dc1904ab7b7aa5", 
          "67ca5523b8dc1904ab7b7aa3"]
    }
    ```
- **Eliminar** (`DELETE /users/:id`)

### **Grupos**
- **Crear un grupo** (`POST /groups`)
    ```json
    {
        "name": "Grupo de Estudio",
        "description": "Grupo de estudio para matemáticas",
        "members": [
          {
            "user": "67ca4118f791f5b6d20395fb",
            "registerDate": "2025-10-06"
          }
        ],
        "events": [
          {
            "name": "Sesión de Cálculo",
            "date": "2025-10-10",
            "description": "Revisión de ejercicios del examen parcial"
              }]
    }

    ```
- **Obtener todos los grupos** (`GET /groups`)
- **Obtener un grupo por ID** (`GET /groups/id`)
- **Editar** (`POST /groups/id`)
    ```json
    {
        "name": "Grupo de Estudio",
        "description": "Grupo de estudio para matemáticas y calculo",
        "members": [
          {
            "user": "67ca4118f791f5b6d20395fb",
            "registerDate": "2025-10-06"
          }
        ],
        "events": [
          {
            "name": "Sesión de Cálculo",
            "date": "2025-10-10",
            "description": "Revisión de ejercicios del examen parcial y laboratorio de ejercicios"
              }]
    }
    ```
- **Eliminar** (`DELETE /groups/:id`)

### **Eventos**
- **Crear un evento** (`POST /events`)
    ```json
   {
        "name": "Hackathon Universitario",
        "date": "2025-03-15",
        "place": "Auditorio Debora Trujillo",
        "description": "Competencia de programación intensiva de 12 horas",
        "group": "67ca4eb8f791f5b6d2039605",
        "participants": [
          "67ca4118f791f5b6d20395fb",
          "67ca414bf791f5b6d20395fd"
        ]
  | }


    ```
- **Obtener todos los eventos** (`GET /events`)
- **Obtener un evento por ID** (`GET /events/id`)
- **Editar** (`POST /groups/id`)
    ```json
    {
        "name": "Hackathon Universitario",
        "date": "2025-03-15",
        "place": "Salon de computo del eficio C",
        "description": "Competencia de programación intensiva de 12 horas",
        "group": "67ca4eb8f791f5b6d2039605",
        "participants": [
          "67ca4118f791f5b6d20395fb",
          "67ca414bf791f5b6d20395fd"
        ]
  | }
    ```
- **Eliminar** (`DELETE /events/:id`)
---

## Modelo de datos

## Usuarios:

```javascript
const userSchema = new Schema({
    name: {
        type: String, 
        required: true},
    email: {
        type: String, 
        required: true},
    groups: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group'}],
    events: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event'}]
});
```
## Grupos:

```javascript
const groupSchema = new mongoose.Schema({  
    name: { 
      type: String, 
      required: true },  
    description: String,  
    members: [{  
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' },  
      registerDate: { 
        type: Date, default: Date.now }  
    }],  
    events: [{  
      event: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Events' },  
      date: Date,  
      description: String  
    }]  
  });  
```
## Eventos:

```javascript
const eventSchema = new mongoose.Schema({  
    name: { 
      type: String, 
      required: true },  
    date: Date, 
    place: { 
      type: String, 
      required: true }, 
    description: String,  
    group: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Group' },
    participants: [{  
      type: mongoose.Schema.Types.ObjectId, 
       ref: 'User'
    }]
  }); 
```

## **Ejemplos con Postman**
### **Crear una Categoría**

```sh
POST http://localhost:3000/api/createCategory

{
     "name": "Electronica actualizado",
     "description": "Aqui solo van los equipos de Electronica"
}
```    
### **Obtener todas las Categorías**
```sh
GET http://localhost:3000/getAllCategories

[
    {
        "_id": "67a1928eee160c0ad8fc983f",
        "name": "Electronica actualizado",
        "description": "Aqui solo van los equipos de Electronica"
    },
    {
        "_id": "67a192aaee160c0ad8fc9841",
        "name": "Textiles",
        "description": "Aqui solo van los equipos de Textiles"
    }
]
```
## **Ejemplo de Uso**
Aquí tienes un ejemplo del sistema funcionando actualizando una categoria:

![Obtener una categoria](./getAllCategories.png)

Aquí tienes un ejemplo del sistema funcionando mostrando todas las categorias:

![Obtener todas las categorias](./getCategory.png)



## **Contribuir**
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Agrego nueva funcionalidad"`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request para revisar los cambios.

¡Gracias por contribuir! 🚀