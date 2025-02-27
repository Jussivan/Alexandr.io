<script setup>
import { ref, watch, onMounted } from 'vue';
import Search from '@/components/search/search.vue';
import BookCard from '@/components/bookcard/BookCard.vue';
import api from '../api/api.js';

const books = ref([]);
const searchTerm = ref('');

const fetchAllBooks = async () => {
    try {
        const response = await api.get('/findAll');
        books.value = response.data.book;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
};

const fetchBooksByTitle = async (title) => {
    try {
        const response = await api.post('/findBook', {
            title: title.toUpperCase()
        });
        books.value = response.data.book;
        console.log(response.data.book); 
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
};

watch(
    searchTerm,
    (newTerm) => {
        if (newTerm.trim() === '') {
            fetchAllBooks();
        } else {
            fetchBooksByTitle(newTerm);
        }
    },
    { immediate: true }
);

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