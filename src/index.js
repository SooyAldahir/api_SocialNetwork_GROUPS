require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const Event = require('./models/eventModel');
const Group = require('./models/groupModel');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log|("Error al conectarse a MongoDB ",err);
});


//CRUD to Users
//Create a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al crear un nuevo usuario"
         });
    }
});

//Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al obtener los usuarios"
         });
    }
});

//Get user by id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({ 
                error: "Usuario no encontrado"
             });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al obtener el usuario"
         });
    }
});

//Update user by id
app.put('/users/:id', async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateUser){
            return res.status(404).json({ 
                error: "Usuario no encontrado"
             });
        }
        res.status(200).json({message: "Usuario actualizado"});
    } catch (error) {
        res.status(500).json({ 
            error: "Error al actualizar el usuario"
         });
    }   
});

//Delete user by id
app.delete('/users/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            return res.status(404).json({ 
                error: "Usuario no encontrado"
             });
        }
        res.status(200).json(
            {message: "Usuario eliminado"}
        );
    } catch (error) {
        res.status(500).json({ 
            error: "Error al eliminar el usuario"
         });
    }
});

//CRUD to groups
//Create a new group
app.post('/groups', async (req, res) => {
    try {
        const newGroup = new Group(req.body);
        const saveGroup = await newGroup.save();
        res.status(201).json(saveGroup);
    } catch (error) {
        res.status(500).json({ 
            error: "Error al crear un nuevo grupo"
         });
    }
});

//Get all groups
app.get('/groups', async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ 
            error: "Error al obtener los grupos"
         });
    }
});

//Get group by id
app.get('/groups/:id', async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if(!group){
            return res.status(404).json({ 
                error: "Grupo no encontrado"
             });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ 
            error: "Error al obtener el grupo"
         });
    }
});

//Update group by id
app.put('/groups/:id', async (req, res) => {
    try {
        const updateGroup = await Group.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateGroup){
            return res.status(404).json({ 
                error: "Grupo no encontrado"
             });
        }
        res.status(200).json(
            {message: "Grupo actualizado"}
        );
    } catch (error) {   
        res.status(500).json({ 
            error: "Error al actualizar el grupo"
         });
    }
});

//Delete group by id
app.delete('/groups/:id', async (req, res) => {
    try {
        const deleteGroup = await Group.findByIdAndDelete(req.params.id);
        if(!deleteGroup){
            return res.status(404).json({ 
                error: "Grupo no encontrado"
             });
        }
        res.status(200).json(
            {message: "Grupo eliminado"});
    } catch (error) {
        res.status(500).json({ 
            error: "Error al eliminar el grupo"
         });
    }
});


//CRUD to events
//Create a new event
app.post('/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const saveEvent = await newEvent.save();
        res.status(201).json(saveEvent);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al crear un nuevo evento"
         });
    }
});

//Get all events
app.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al obtener los eventos"
         });
    }
});

//Get event by id
app.get('/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({ 
                error: "Evento no encontrado"
             });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al obtener el evento"
         });
    }
});

//Update event by id
app.put('/events/:id', async (req, res) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateEvent){
            return res.status(404).json({ 
                error: "Evento no encontrado"
             });
        }   
        res.status(200).json(
            {message: "Evento actualizado"}
        );
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al actualizar el evento"
         });
    }
});

//Delete event by id
app.delete('/events/:id', async (req, res) => {
    try {
        const deleteEvent = await Event.findByIdAndDelete(req.params.id);
        if(!deleteEvent){
            return res.status(404).json({ 
                error: "Evento no encontrado"
             });
        }
        res.status(200).json(
            {message: "Evento eliminado"}
        );
    } catch (error) {
        res.status(500).json({ 
            erro: "Error al eliminar el evento"
         });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));