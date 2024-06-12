const mongoose = require('mongoose');

// Definición del esquema para el modelo de programación
const programmingSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
        enum: ['Disponible', 'No disponible','En proceso','Cancelado','Finalizado']
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course', // Nombre del modelo al que se hace referencia
        required: [true, 'El campo "CourseID" es requerido']
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'instructor', // Nombre del modelo al que se hace referencia
        required: [true, 'El campo "InstructorID" es requerido']
    },
    apprentices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'apprentice' // Nombre del modelo al que se hace referencia
    }]
    // Otros campos que puedas necesitar para tu modelo de programación
}, { timestamps: true }); // Añadir timestamps para createdAt y updatedAt

// Crear el modelo de programación a partir del esquema
const Programming = mongoose.model('programmings', programmingSchema);

module.exports = Programming;