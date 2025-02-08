<template>
  <div class="lg:w-1/3 sm:w-1/2 font-semibold">
    <h1 class="uppercase">Adicione um novo livro:</h1>
    <form action="" class="grid bg-[var(--primary-color)] p-3 gap-2 rounded-xl">
      <h3 class="text-[var(--primary-text-color)]">Titulo:</h3>
      <input type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">Autor:</h3>
      <input type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">Descrição:</h3>
      <textarea class="bg-[var(--secondary-color)] rounded-lg border-none outline-none focus:ring-0 focus:border-transparent pl-3 py-1"></textarea>

      <h3 class="text-[var(--primary-text-color)]">URL da Capa:</h3>
      <input type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">
      <h3 class="text-[var(--primary-text-color)]">URL do PDF:</h3>
      <input type="text" class="bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent pl-3">

      <span class="w-full flex justify-evenly text-[10px] lg:text-[15px]">
        <button class="bg-[var(--button-cancel)] text-[var(--primary-bg-color)] p-2 rounded-3xl w-1/3 lg:w-1/4 cursor-pointer border-1">Cancelar</button>
        <button class="bg-[var(--button-confirm)] text-[var(--primary-bg-color)] p-2 rounded-3xl  w-1/3 lg:w-1/4 cursor-pointer border-1" type="submit">Salvar</button>
      </span>
    </form>
  </div>
</template>
