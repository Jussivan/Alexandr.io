<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { PlusCircleIcon, HomeIcon, XCircleIcon } from '@heroicons/vue/24/solid'
</script>



<template class="h-screen">
  <header>
    <nav class="py-2 bg-[var(--primary-color)] flex items-center justify-evenly text-[var(--primary-text-color)]">
        <RouterLink to="/adicionar" class="flex flex-col justify-center items-center text-center hover:text-[var(--secondary-text-color)]">
          <PlusCircleIcon class="size-7"/>
          <span>Adicionar Livro</span>
        </RouterLink>
        <RouterLink to="/" class="flex flex-col justify-center items-center text-center hover:text-[var(--secondary-text-color)]">
          <HomeIcon class="size-7"/>
          <span>Home</span>
        </RouterLink>
        <RouterLink to="/deletar" class="flex flex-col justify-center items-center text-center hover:text-[var(--secondary-text-color)]">
          <XCircleIcon class="size-7"/>
          <span>Deletar Livro</span>
        </RouterLink>
    </nav>
  </header>
  <main class="w-full flex items-center justify-center my-10 ">
    <RouterView/>
  </main>
  <footer className="bg-[var(--primary-color)] flex items-center justify-center fixed bottom-0 w-full">
    <span className="p-5 text-white text-[15px] font-bold">Alexander.io</span>
  </footer>
</template>