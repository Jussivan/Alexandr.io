<script setup>
import Search from '@/components/search/search.vue';
import BookCard from '@/components/bookcard/BookCard.vue';
</script>

<template>
    <section class="lg:w-3/5 w-2/3 flex flex-col gap-5">
        <Search />
        <main>
            <div class="grid grid-cols-2 gap-4">
                <BookCard
                    title="PeterPan"
                    author="ChicoAnizio"
                    description="aaaaaaaaaaaaaaaaaaaa"
                    genre="Humor"
                    pdf-url="www.com.br"
                    cover-image="abcabcabc"
                />
            </div>
        </main>
    </section>
</template>

<script>
</script>