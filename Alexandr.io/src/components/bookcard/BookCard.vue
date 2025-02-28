<script>
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';

export default {
  name: "BookCard",
  components: {
    PencilSquareIcon,
    TrashIcon
  },
  props: {
    title: String,
    author: String,
    description: String,
    genre: String,
    coverImage: String,
    pdfUrl: String,
  },
};
</script>

<template>
  <div class="w-full bg-[var(--bookcard-color)] flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-[var(--bookcard-hover-color)]">
    <img
      class="object-cover w-full md:w-48 h-46 lg:h-full md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg flex-shrink-0"
      :src="coverImage"
      :alt="title"
    />
    <div class="flex flex-col justify-between p-4 leading-normal text-[var(--bookcard-text-color)]">
      <h3 class="mb-2 text-lg font-semibold tracking-tight">
        {{ title }}
      </h3>
      <h4 class="mb-2 text-lg font-base tracking-tight">
        {{ author }}
      </h4>
      <h4 class="mb-3 font-light text-sm">
        {{ genre }}
      </h4>
      <p class="mb-3 font-light text-sm clamp-text">
        {{ description }}
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <a :href="pdfUrl" target="_blank" class="text-[var(--bookcard-link-color)] hover:underline">Ver PDF</a>
      </p>
      <label class="flex gap-5 self-end">
          <button class="flex gap-1 rounded-lg p-2 bg-[var(--button-confirm)] cursor-pointer">
            <span>Editar</span>
            <PencilSquareIcon class="size-5"/>
          </button>
          <button class="flex gap-1 rounded-lg p-2 bg-[var(--button-cancel)] cursor-pointer">
            <span>Deletar</span>
            <TrashIcon class="size-5"/>
          </button>
        </label>
    </div>
  </div>
</template>