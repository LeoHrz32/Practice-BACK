const express = require('express');
const router = express.Router();
const programmingController = require('../programming/programmingController');

// Ruta para crear una nueva programación y asignar aprendices seleccionados
router.post('/programacion/create', programmingController.createProgrammingWithApprentices);

// Ruta para obtener todas las programaciones
router.get('/programacion', programmingController.getAllProgrammings);

// Ruta para actualizar una programación por ID
router.put('/programacion/:id', programmingController.updateProgrammingById);

// Ruta para eliminar una programación por ID
router.delete('/programacion/:id', programmingController.deleteProgrammingById);

module.exports = router;
