const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]+$/, 'Solo se permiten letras y espacios en el campo nombre']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es requerida'],
        trim: true
    },
    
    time: { 
        type: Number,
        required: [true, 'El campo de tiempo del curso es requerido'],
        validate: {
            validator: function (value) {
                return /^[0-9]+$/.test(value); // La cédula debe contener solo números positivos
            },
            message: 'La cédula debe contener solo números'
        }
    },
    state: {
        type: String,
        required: true,
        enum: ['Disponible', 'No disponible'],
        default: 'No disponible'
    }
}, { timestamps: true });

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;