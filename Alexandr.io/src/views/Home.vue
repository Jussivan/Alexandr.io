<script setup>
import { ref, watch, onMounted } from 'vue';
import Search from '@/components/search/search.vue';
import BookCard from '@/components/bookcard/BookCard.vue';
import api from '../api/api.js';

const books = ref([]); // Lista de livros
const searchTerm = ref(''); // Termo de busca

// Função para buscar todos os livros
const fetchAllBooks = async () => {
    try {
        const response = await api.get('/findAll');
        books.value = response.data.book; // Atualiza a lista de livros
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
};

// Função para buscar livros por título
const fetchBooksByTitle = async (title) => {
    try {
        const response = await api.get('/findBook', {
            params: { title: title.toUpperCase() } // Passa o termo de busca como parâmetro
        });
        books.value = response.data.book; // Atualiza a lista de livros
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
};

// Observador para o termo de busca
watch(
    searchTerm, // Observa mudanças no searchTerm
    (newTerm) => {
        if (newTerm.trim() === '') {
            fetchAllBooks(); // Se o campo estiver vazio, busca todos os livros
        } else {
            fetchBooksByTitle(newTerm); // Caso contrário, busca por título
        }
    },
    { immediate: true } // Executa o watch imediatamente ao carregar a página
);

// Busca inicial ao carregar a página
onMounted(fetchAllBooks);
</script>

<template>
    <section class="lg:w-3/4 w-5/6 flex flex-col gap-5">
        <main>
            <!-- Componente de busca -->
            <Search v-model="searchTerm" />
            <br />
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                <!-- Lista de livros -->
                <BookCard
                    v-for="book in books"
                    :key="book.id"
                    :title="book.title"
                    :author="book.author"
                    :description="book.description"
                    :genre="book.genre"
                    :pdfUrl="book.pdfUrl"
                    :coverImage="book.coverImage"
                />
            </div>
        </main>
    </section>
</template>