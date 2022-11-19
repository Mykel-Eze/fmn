module.exports = {
    apps: [
        {
            name: 'GroupWebsite',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/.bin/nuxt-ts',
            args: 'start',
        },
    ],
}
