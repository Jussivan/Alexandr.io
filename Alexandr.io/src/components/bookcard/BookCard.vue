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
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
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