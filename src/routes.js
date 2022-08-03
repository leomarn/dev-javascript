const express = require('express');

const allRoutes = express.Router();

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

// Creat
allRoutes.post("/veiculos", async (req, res) => {
    const {model, color, price, description} = req.body;

    const allCar = await prisma.allCar.create({
        data: {
            model,
            color,
            price,
            description,
        },
    });

    return res.status(201).json(allCar);
});

// Read
allRoutes.get("/veiculos", async (req, res) => {
    const fullAllCars = await prisma.allCar.findMany({orderBy: { id: "asc"}});
    return res.status(200).json(fullAllCars);
});


// Update
allRoutes.put("/veiculos", async (req, res) => {
    const {id, model, color, price, description, status} = req.body;

    if(!id){
        return res.status(400).json('deve conter um id');
    }

    const idFind = await prisma.allCar.findUnique({ where: {id}});

    if(!idFind){
        return res.status(404).json('deve conter id válido');
    }

    const allCar = await prisma.allCar.update({
        where: {
            id,
        },
        data: {
            model,
            color,
            price,
            description,
            status,
        },
    });

    return res.status(200).json(allCar);
});

// Delete
allRoutes.delete("/veiculos/:id", async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if(!idInt){
        return res.status(400).json('dever conter um id')
    }

    const idFind = await prisma.allCar.findUnique({ where: { id: idInt }});

    if(!idFind){
        return res.status(404).json('deve conter id válido ')
    }

    await prisma.allCar.delete({ where: { id: idInt }});

    return res.status(200).send()
})

module.exports = allRoutes