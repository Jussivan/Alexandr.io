<template>
    <div class="w-full">
        <form @submit.prevent class="bg-[var(--primary-color)] flex p-3 rounded-3xl">
            <input 
                v-model="searchQuery"
                @input="$emit('update:modelValue', searchQuery)"
                type="text" 
                class="w-full bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent px-3 text-black" 
                placeholder="PESQUISE POR UM LIVRO"
            >
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Search",
    props: {
        modelValue: String
    },
    setup(props) {
        const searchQuery = ref(props.modelValue || '');

        return {
            searchQuery
        };
    }
};
</script>