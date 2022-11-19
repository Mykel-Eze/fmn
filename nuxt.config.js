export default {
    ssr: false,

    target: 'static',

    head: {
        title: 'FMN | Flour Mills of Nigeria Plc',
        titleTemplate: '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { name: 'title', content: 'FMN | Flour Mills of Nigeria Plc' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Feeding the Nation, Everyday,"As one of the largest food and agro allied companies in Nigeria, we make products of superior quality and value for the Nigerian market thereby enriching lives and creating value for suppliers, customers, communities, distributors, employees, shareholders and all our stakeholders.',
            },
            {
                name: 'Keywords',
                content:
                    'FMN,The FMN Group,Flour Mills of Nigeria,Flour Mills of Nigeria Plc, Flour Mills,Flour Business,Flour Company, Flour Distributor,Flour Companies in Nigeria,Flour Business in Nigeria, Flour Recipe,Flour Bag,Largest Flour Mill in Nigeria,List of Flour Mills In Nigeria,Flour food processing company,',
            },
            {
                property: 'og:image',
                content:
                    'https://www.fmnplc.com/_nuxt/img/fmn-logo-white.ce6c4b3.png',
            },
            {
                property: 'og:title',
                content: 'FMN | Flour Mills of Nigeria Plc',
            },
            {
                property: 'og:site_name',
                content: 'FMN',
            },
            {
                property: 'og:description',
                content:
                    'Feeding the Nation, Everyday,"As one of the largest food and agro allied companies in Nigeria, we make products of superior quality and value for the Nigerian market thereby enriching lives and creating value for suppliers, customers, communities, distributors, employees, shareholders and all our stakeholders.',
            },
            {
                property: 'og:url',
                content: 'https://www.fmnplc.com/',
            },
            {
              name: 'google-site-verification',
              content: '7-ZaY1rVbTBevPOEiCUMnU9vTj7cZyNs5IrzMuQ80ns',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
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
        'material-design-icons/iconfont/material-icons.css',
    ],

    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/chartkick.js' },
        { src: '~/plugins/fullpage.js', mode: 'client' },
    ],

    components: true,

    loading: {
        color: '#007B47',
        height: '5px',
    },

    buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],

    googleAnalytics: {
        id: 'UA-59534218-1',
    },

    modules: ['@nuxtjs/axios', 'vue-social-sharing/nuxt', 'bootstrap-vue/nuxt'],
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false, // Or `bvCSS: false`
    },

    axios: {},

    build: {},
};
