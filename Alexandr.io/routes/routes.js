import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const Router = express.Router()

Router.post('/create', async (req, res) => {
    try {
        const book = req.body
        await prisma.book.create({
            data: {
                title: book.title,
                author: book.author,
                description: book.description,
                genre: book.genre,
                coverImage: book.coverImage,
                pdfUrl: book.pdfUrl,
            }
        });
        res.status(201).json({message: "Livro criado com sucesso!"})
    } catch(err) {
        res.status(500).json({message: err})
    }
})

Router.get('/findAll', async (req,res) => {
    try {
        const book = await prisma.book.findMany();
        res.status(200).json({message: "Livros listados com sucesso!", book});
    } catch (err) {
        res.status(500).json({message: err})
    }
})

Router.post('/findBook', async (req, res) => {
    try {
        const { title } = req.body;
        console.log(title);
        const book = await prisma.book.findMany({where: { title: { startsWith: title }}});
        res.status(200).json({ message: "Livros listados com sucesso!", book });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Ocorreu um erro ao buscar os livros." });
    }
});

Router.put('/update', async (req, res) => {
    try {
        const book = req.body;
        await prisma.book.update({
            where: { id : book.id},
            data: {
                title: book.title,
                author: book.author,
                description: book.description,
                genre: book.genre,
                coverImage: book.coverImage,
                pdfUrl: book.pdfUrl,
            }
        });
        res.status(201).json({message: "Livro Atualizado com Sucesso!", book});
    } catch (err) {
        res.status(500).json({message: err})
    }
})

Router.delete('/delete', async (req,res) => {
    try {
        const { id } = req.body;
        const book = await prisma.book.delete({where: { id : id }})
        res.status(200).json({message: "Livro deletado com sucesso!", book});
    } catch (err) {
        res.status(500).json({message: err})
    }
})

export default Router