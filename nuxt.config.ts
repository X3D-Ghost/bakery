// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // "@fortawesome/fontawesome-free/css/all.css",
        "~/assets/scss/main.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            },
            devSourcemap: true,
        },
    },
    app: {
        baseURL: '/',
        body: {
            lang: 'ru'
        },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Булочная',
            meta: [
                {
                    name: 'description',
                    content: 'это просто находка для тех, кто ищет, где бы выпить чашечку кофе. Очень уютное место. — Если что, то в Ульяновске есть и другие булочные.'
                }
            ],
            // link: []
        },
    },
    experimental: {
        payloadExtraction: false,
    },
    modules: [
        '@nuxt/content'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    }
})
