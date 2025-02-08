import { createRouter, createWebHistory } from 'vue-router'
import CreateBook from '@/views/CreateBook.vue'
import DeleteBook from '@/views/DeleteBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/adicionar',
      name: 'adicionar',
      component: CreateBook,
    },
    {
      path: '/deletar',
      name: 'deletar',
      component: DeleteBook,
    },
  ],
})

export default router
