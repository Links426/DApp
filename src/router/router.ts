const routes = [
    {
        path: '/',
        component: () => import('@/views/index/index.vue'),
        meta: { label: '主页' },
    },
]
export default routes
