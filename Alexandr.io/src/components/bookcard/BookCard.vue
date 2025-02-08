<template>
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{author}</h4>
            <h4 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{genre}</h4>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{pdfUrl}</p>
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
    pdfUrl: String
  },
};
</script>