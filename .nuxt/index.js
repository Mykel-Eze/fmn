import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_4171d962 from 'nuxt_plugin_plugin_4171d962' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_6606b3d8 from 'nuxt_plugin_bootstrapvue_6606b3d8' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_b0a95944 from 'nuxt_plugin_vuesocialsharingplugin_b0a95944' // Source: ./vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_axios_732f0636 from 'nuxt_plugin_axios_732f0636' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_2b3b6bbe from 'nuxt_plugin_googleanalytics_2b3b6bbe' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ../plugins/axios (mode: 'all')
import nuxt_plugin_chartkick_5668dec9 from 'nuxt_plugin_chartkick_5668dec9' // Source: ../plugins/chartkick.js (mode: 'all')
import nuxt_plugin_fullpage_2c77f33a from 'nuxt_plugin_fullpage_2c77f33a' // Source: ../plugins/fullpage.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"FMN | Flour Mills of Nigeria Plc","titleTemplate":"","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"title","content":"FMN | Flour Mills of Nigeria Plc"},{"hid":"description","name":"description","content":"Feeding the Nation, Everyday,\"As one of the largest food and agro allied companies in Nigeria, we make products of superior quality and value for the Nigerian market thereby enriching lives and creating value for suppliers, customers, communities, distributors, employees, shareholders and all our stakeholders."},{"name":"Keywords","content":"FMN,The FMN Group,Flour Mills of Nigeria,Flour Mills of Nigeria Plc, Flour Mills,Flour Business,Flour Company, Flour Distributor,Flour Companies in Nigeria,Flour Business in Nigeria, Flour Recipe,Flour Bag,Largest Flour Mill in Nigeria,List of Flour Mills In Nigeria,Flour food processing company,"},{"property":"og:image","content":"https:\u002F\u002Fwww.fmnplc.com\u002F_nuxt\u002Fimg\u002Ffmn-logo-white.ce6c4b3.png"},{"property":"og:title","content":"FMN | Flour Mills of Nigeria Plc"},{"property":"og:site_name","content":"FMN"},{"property":"og:description","content":"Feeding the Nation, Everyday,\"As one of the largest food and agro allied companies in Nigeria, we make products of superior quality and value for the Nigerian market thereby enriching lives and creating value for suppliers, customers, communities, distributors, employees, shareholders and all our stakeholders."},{"property":"og:url","content":"https:\u002F\u002Fwww.fmnplc.com\u002F"},{"name":"google-site-verification","content":"7-ZaY1rVbTBevPOEiCUMnU9vTj7cZyNs5IrzMuQ80ns"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"}],"script":[{"src":"\u002Fjquery.min.js","type":"text\u002Fjavascript"},{"src":"\u002Ftheme.js","type":"text\u002Fjavascript"},{"src":"\u002Fscroll.js","type":"text\u002Fjavascript"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_4171d962 === 'function') {
    await nuxt_plugin_plugin_4171d962(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_6606b3d8 === 'function') {
    await nuxt_plugin_bootstrapvue_6606b3d8(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_b0a95944 === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_b0a95944(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_732f0636 === 'function') {
    await nuxt_plugin_axios_732f0636(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_2b3b6bbe === 'function') {
    await nuxt_plugin_googleanalytics_2b3b6bbe(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (typeof nuxt_plugin_chartkick_5668dec9 === 'function') {
    await nuxt_plugin_chartkick_5668dec9(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fullpage_2c77f33a === 'function') {
    await nuxt_plugin_fullpage_2c77f33a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
