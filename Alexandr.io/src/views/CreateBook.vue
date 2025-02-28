<template>
  <div class="lg:w-1/3 sm:w-1/2 font-semibold">
    <h1 class="uppercase">Adicione um novo livro:</h1>
    <form @submit.prevent="handleSubmit" class="grid bg-[var(--primary-color)] p-3 gap-2 rounded-xl">
      <h3 class="text-[var(--primary-text-color)]">Titulo:</h3>
      <input v-model="formData.title" type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">Autor:</h3>
      <input v-model="formData.author" type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">Gênero:</h3>
      <select v-model="formData.genre" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
        <option value="FICÇÃO">FICÇÃO</option>
        <option value="NÃO_FICÇÃO">NÃO FICÇÃO</option>
      </select>
      <h3 class="text-[var(--primary-text-color)]">Descrição:</h3>
      <textarea v-model="formData.description" class="bg-[var(--secondary-color)] rounded-lg border-none outline-none focus:ring-0 focus:border-transparent pl-3 py-1"></textarea>
      <h3 class="text-[var(--primary-text-color)]">URL da Capa:</h3>
      <input v-model="formData.coverImage" type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">URL do PDF:</h3>
      <input v-model="formData.pdfUrl" type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">

      <span class="w-full flex justify-evenly text-[10px] lg:text-[15px]">
        <a href="/" class="bg-[var(--button-cancel)] text-[var(--primary-bg-color)] p-2 rounded-3xl w-1/3 lg:w-1/4 cursor-pointer border-1 text-center">Cancelar</a>
        <button class="bg-[var(--button-confirm)] text-[var(--primary-bg-color)] p-2 rounded-3xl w-1/3 lg:w-1/4 cursor-pointer border-1" type="submit">Salvar</button>
      </span>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '../api/api.js'

export default {
  setup() {
    const formData = ref({
      title: '',
      author: '',
      genre: '',
      description: '',
      coverImage: '',
      pdfUrl: ''
    });

    async function handleSubmit() {
      try {
        await api.post('/create', {
          title: formData.value.title,
          author: formData.value.author,
          genre: formData.value.genre,
          description: formData.value.description,
          coverImage: formData.value.coverImage,
          pdfUrl: formData.value.pdfUrl
        })
      } catch (error) {
        console.log(error)
      }
    }

    return {
      formData,
      handleSubmit
    };
  }
};
</script>