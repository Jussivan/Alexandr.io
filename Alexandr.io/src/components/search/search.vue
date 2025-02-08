<template>
    <div>
        <form action="" class="bg-[var(--primary-color)] flex gap-5 p-3 rounded-3xl">
            <input type="text" class="w-4/5 bg-[var(--secondary-color)] rounded-3xl border-none outline-none focus:ring-0 focus:border-transparent px-3">
            <button class="w-1/5 bg-[var(--button-confirm)] text-[var(--primary-bg-color)] rounded-3xl p-1 cursor-pointer border-1">Buscar</button>
        </form>
    </div>
</template>


<script>
export default {
  name: "Search",
};
</script>