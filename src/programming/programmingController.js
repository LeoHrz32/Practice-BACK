const Programming = require('../programming/programmingModel');

// Crear una nueva programación y asignar aprendices seleccionados
exports.createProgrammingWithApprentices = async (req, res) => {
    try {
        const { apprenticeIds, ...programmingData } = req.body;

        // Crear la nueva programación con los datos recibidos
        const newProgramming = new Programming(programmingData);

        // Verificar que se hayan proporcionado IDs de aprendices para agregar
        if (apprenticeIds && apprenticeIds.length > 0) {
            // Asignar los aprendices seleccionados a la nueva programación
            newProgramming.apprentices = apprenticeIds;
        }
        

        // Guardar la nueva programación en 
        await newProgramming.save();
        res.status(201).json(newProgramming);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las programaciones con atributos de curso e instructor
exports.getAllProgrammings = async (req, res) => {
    try {
        const programmings = await Programming.find();
        res.status(200).json(programmings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una programación por ID
exports.updateProgrammingById = async (req, res) => {
    try {
        const updatedProgramming = await Programming.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!updatedProgramming) {
            return res.status(404).json({ error: 'Programación no encontrada' });
        }

        res.status(200).json(updatedProgramming);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una programación por ID
exports.deleteProgrammingById = async (req, res) => {
    try {
        const deletedProgramming = await Programming.findByIdAndDelete(req.params.id);
        if (!deletedProgramming) {
            return res.status(404).json({ error: 'Programación no encontrada' });
        }
        res.status(200).json({ message: 'Programación eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
