export default {
    mode: 'universal',
    
    target: 'static',
   
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            { src: '/jquery.min.js', type: 'text/javascript' },
            { src: '/theme.js', type: 'text/javascript' },
            { src: '/scroll.js', type: 'text/javascript' },
        ],
    },
    
    css: [
        '@/assets/css/fonts.css',
        '@/assets/css/style.css',
        'materialize-css/dist/css/materialize.min.css',
        'material-design-icons/iconfont/material-icons.css'
    ],
    
    plugins: [
        { src: '~/plugins/axios' }
    ],
    
    components: true,
    
    buildModules: ['@nuxt/typescript-build'],
    
    modules: ['@nuxtjs/axios'],
    
    axios: {},
    
    build: {},
};
