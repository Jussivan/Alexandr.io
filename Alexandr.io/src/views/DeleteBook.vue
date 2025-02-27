<template>
  <div class="lg:w-1/3 sm:w-1/2 font-semibold">
    <h1 class="uppercase">Qual livro deseja excluir ?</h1>
    <form @submit.prevent="handleSubmit" action="" class="grid bg-[var(--primary-color)] p-3 gap-2 rounded-xl">
      <h3 class="text-[var(--primary-text-color)]">ID do Livro</h3>
      <input v-model="formData.id" type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <span class="w-full flex justify-evenly text-[10px] lg:text-[15px]">
        <a href="/"  class="bg-[var(--button-cancel)] text-[var(--primary-bg-color)] p-2 rounded-3xl w-1/3 lg:w-1/4 cursor-pointer border-1 text-center">Cancelar</a>
        <button class="bg-[var(--button-confirm)] text-[var(--primary-bg-color)] p-2 rounded-3xl  w-1/3 lg:w-1/4 cursor-pointer border-1" type="submit">Deletar</button>
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
      id: null
    });

    async function handleSubmit() {
      try {
        await api.delete('/delete', {
          data: { id: parseInt(formData.value.id, 10) }
        })
      } catch (error) {
        console.log('Erro:', error.response ? error.response.data : error.message)
      }
    }

    return {
      formData,
      handleSubmit
    };
  }
};
</script>
